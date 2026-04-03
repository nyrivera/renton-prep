import { type NextRequest, NextResponse } from "next/server";

const SUBMIT_URL =
  "https://submit.jotform.com/submit/260918035603050";
const FORM_ID = "260918035603050";
const BUILD_DATE = "1775255391453";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}

export async function POST(req: NextRequest) {
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
    website: "", // honeypot — must be empty
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
