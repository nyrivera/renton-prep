import { OpenAI } from "openai";

import { jsonError, jsonOk } from "@/lib/api-response";
import { jsonValueSchema } from "@/lib/schema";

const MAX_BODY_BYTES = 256 * 1024;

export async function POST(req: Request) {
  try {
    const buf = await req.arrayBuffer();
    if (buf.byteLength > MAX_BODY_BYTES) {
      return jsonError("Request body too large", 413, { code: "PAYLOAD_TOO_LARGE" });
    }

    const text = new TextDecoder().decode(buf);
    let parsed: unknown;
    try {
      parsed = text.length ? JSON.parse(text) : {};
    } catch {
      return jsonError("Invalid JSON", 400, { code: "INVALID_JSON" });
    }

    const validated = jsonValueSchema.safeParse(parsed);
    if (!validated.success) {
      return jsonError("Invalid JSON structure", 422, {
        code: "VALIDATION_ERROR",
        details: validated.error.flatten(),
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
    const message = err instanceof Error ? err.message : "Unknown error";
    return jsonError(`Scoring failed: ${message}`, 502, { code: "OPENAI_ERROR" });
  }
}
