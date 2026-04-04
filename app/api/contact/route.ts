import { type NextRequest, NextResponse } from "next/server";

import {
  allowContactSubmission,
  contactRateLimitClientKey,
} from "@/lib/contact-rate-limit";
import { parseContactJson } from "@/lib/contact-payload";

/**
 * JotForm “Request information” form — field contract documented in
 * `docs/api-contact-jotform.md`. If JotForm renames fields or changes form ID,
 * update this mapping and redeploy; then submit a test row from the live site.
 */
const SUBMIT_URL = "https://submit.jotform.com/submit/260918035603050";
const FORM_ID = "260918035603050";
const BUILD_DATE = "1775255391453";

/** Reject very large JSON bodies before parsing (defense in depth). */
const MAX_CONTENT_LENGTH = 65536;

function jsonError(status: number, error: string) {
  return NextResponse.json({ error }, { status });
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonError(415, "Unsupported media type.");
  }

  const len = req.headers.get("content-length");
  if (len !== null) {
    const n = Number.parseInt(len, 10);
    if (Number.isFinite(n) && n > MAX_CONTENT_LENGTH) {
      return jsonError(413, "Request body too large.");
    }
  }

  const clientKey = contactRateLimitClientKey(req);
  if (!allowContactSubmission(clientKey)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later or call us." },
      {
        status: 429,
        headers: { "Retry-After": "900" },
      },
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return jsonError(400, "Invalid request body.");
  }

  const parsed = parseContactJson(raw);
  if (!parsed.ok) {
    return jsonError(parsed.status, parsed.error);
  }

  if (parsed.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const { firstName, lastName, email, phone, message } = parsed;

  const params = new URLSearchParams({
    formID: FORM_ID,
    "q3_name[first]": firstName,
    "q3_name[last]": lastName,
    q4_email: email,
    "q5_phoneNumber[full]": phone,
    q7_yourQuestions: message,
    simple_spc: `${FORM_ID}-${FORM_ID}`,
    jsExecutionTracker: `build-date-${BUILD_DATE}`,
    submitSource: "native-form",
    submitDate: new Date().toISOString(),
    buildDate: BUILD_DATE,
    uploadServerUrl: "https://upload.jotform.com/upload",
    eventObserver: "1",
    website: "",
  });

  try {
    const res = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Submission could not be delivered. Please try calling us." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Network error. Please try calling us." },
      { status: 502 },
    );
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
