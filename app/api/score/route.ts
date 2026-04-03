import { timingSafeEqual } from "crypto";

import { OpenAI } from "openai";

import { jsonError, jsonOk } from "@/lib/api-response";
import { jsonValueSchema } from "@/lib/schema";

const MAX_BODY_BYTES = 256 * 1024;

// ---------------------------------------------------------------------------
// In-memory rate limiter: 20 requests per IP per 60 seconds.
// Limitations: resets on cold start; x-forwarded-for can be spoofed by clients
// not behind a trusted proxy. Acceptable for a low-traffic internal endpoint;
// replace with Upstash or Cloudflare for higher-security deployments.
// ---------------------------------------------------------------------------
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;
const MAP_MAX_SIZE = 5_000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function pruneExpired(now: number): void {
  for (const [key, val] of rateLimitMap) {
    if (now >= val.resetAt) rateLimitMap.delete(key);
  }
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now >= entry.resetAt) {
    // Prune stale entries before inserting a new one.
    if (rateLimitMap.size >= MAP_MAX_SIZE) {
      pruneExpired(now);
      // If still at cap after pruning, evict the oldest entry (first inserted).
      if (rateLimitMap.size >= MAP_MAX_SIZE) {
        const oldestKey = rateLimitMap.keys().next().value;
        if (oldestKey !== undefined) rateLimitMap.delete(oldestKey);
      }
    }
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT) {
    console.warn(`[api/score] rate-limited ip=${ip}`);
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { allowed: true };
}

export async function POST(req: Request) {
  // Auth: require a pre-shared Bearer token.
  const scoringKey = process.env.SCORING_API_KEY;
  if (!scoringKey) {
    return jsonError("Scoring is not configured", 503, { code: "SCORING_NOT_CONFIGURED" });
  }
  const authHeader = req.headers.get("authorization") ?? "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  // Use constant-time comparison to prevent timing attacks.
  const tokenBuf = Buffer.from(token);
  const keyBuf = Buffer.from(scoringKey);
  const validToken =
    tokenBuf.length === keyBuf.length && timingSafeEqual(tokenBuf, keyBuf);
  if (!validToken) {
    return jsonError("Unauthorized", 401, { code: "UNAUTHORIZED" });
  }

  // Rate limit by IP.
  // Use the rightmost value in x-forwarded-for (added by the last proxy in the
  // chain) which is harder for a client to spoof than the leftmost value.
  const xffHeader = req.headers.get("x-forwarded-for") ?? "";
  const xff = xffHeader.split(",").map((s) => s.trim()).filter(Boolean);
  const ip = xff[xff.length - 1] ?? "unknown";

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return jsonError("Rate limit exceeded", 429, { code: "RATE_LIMITED", details: { retryAfter } });
  }

  // Reject wrong content type before buffering the body.
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return jsonError("Content-Type must be application/json", 415, {
      code: "UNSUPPORTED_MEDIA_TYPE",
    });
  }

  // Check Content-Length before buffering to avoid loading a huge body into memory.
  const contentLength = parseInt(req.headers.get("content-length") ?? "0", 10);
  if (!isNaN(contentLength) && contentLength > MAX_BODY_BYTES) {
    return jsonError("Request body too large", 413, { code: "PAYLOAD_TOO_LARGE" });
  }

  try {
    const buf = await req.arrayBuffer();
    if (buf.byteLength > MAX_BODY_BYTES) {
      return jsonError("Request body too large", 413, { code: "PAYLOAD_TOO_LARGE" });
    }

    const text = new TextDecoder().decode(buf);
    if (!text.length) {
      return jsonError("Request body is empty", 400, { code: "EMPTY_BODY" });
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      return jsonError("Invalid JSON", 400, { code: "INVALID_JSON" });
    }

    const validated = jsonValueSchema.safeParse(parsed);
    if (!validated.success) {
      return jsonError("Invalid JSON structure", 422, {
        code: "VALIDATION_ERROR",
        // Only expose field-level details outside of production to avoid
        // leaking internal schema structure to external callers.
        ...(process.env.NODE_ENV !== "production" && {
          details: validated.error.flatten(),
        }),
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return jsonError("Scoring is not configured", 503, { code: "MISSING_OPENAI_KEY" });
    }

    const client = new OpenAI({ apiKey });
    const model = process.env.OPENAI_SCORE_MODEL ?? "gpt-4o";

    const result = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: "Score 0-100. Return JSON." },
        { role: "user", content: JSON.stringify(validated.data) },
      ],
    });

    return jsonOk({
      id: result.id,
      model: result.model,
      choices: result.choices,
      usage: result.usage,
    });
  } catch (err) {
    console.error("[api/score]", err);
    return jsonError("Scoring unavailable", 502, { code: "OPENAI_ERROR" });
  }
}
