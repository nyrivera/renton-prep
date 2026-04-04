import type { NextRequest } from "next/server";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 20;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/** Best-effort client IP for rate limiting (trust X-Forwarded-For when present). */
export function contactRateLimitClientKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp?.trim()) return realIp.trim();
  return "unknown";
}

/**
 * In-memory sliding window per key. Mitigates casual abuse; not a guarantee on
 * multi-instance serverless (each instance has its own map).
 */
export function allowContactSubmission(key: string): boolean {
  const now = Date.now();
  const existing = buckets.get(key);
  if (!existing || now >= existing.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (existing.count >= MAX_REQUESTS) return false;
  existing.count += 1;
  return true;
}
