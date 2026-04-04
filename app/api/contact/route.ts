import { type NextRequest, NextResponse } from "next/server";

import {
  allowContactSubmission,
  contactRateLimitClientKey,
} from "@/lib/contact-rate-limit";

/**
 * JotForm “Request information” form — field contract documented in
 * `docs/api-contact-jotform.md`. If JotForm renames fields or changes form ID,
 * update this mapping and redeploy; then submit a test row from the live site.
 */
const SUBMIT_URL = "https://submit.jotform.com/submit/260918035603050";
const FORM_ID = "260918035603050";
const BUILD_DATE = "1775255391453";

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_MESSAGE = 8000;

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}

export async function POST(req: NextRequest) {
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

  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message = "" } = payload;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (
    firstName.length > MAX_NAME ||
    lastName.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    phone.length > MAX_PHONE ||
    message.length > MAX_MESSAGE
  ) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const params = new URLSearchParams({
    formID: FORM_ID,
    "q3_name[first]": firstName.trim(),
    "q3_name[last]": lastName.trim(),
    q4_email: email.trim(),
    "q5_phoneNumber[full]": phone.trim(),
    q7_yourQuestions: message.trim(),
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
