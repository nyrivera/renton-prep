/** Server-side validation for POST /api/contact JSON (strict shape, honeypot, injection hygiene). */

const ALLOWED_KEYS = new Set([
  "firstName",
  "lastName",
  "email",
  "phone",
  "message",
  "website",
]);

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_MESSAGE = 8000;
const MAX_HONEYPOT = 200;

const CTRL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hasControlChars(s: string): boolean {
  return CTRL_CHARS.test(s);
}

export type ParsedContact =
  | { ok: true; honeypot: true }
  | {
      ok: true;
      honeypot: false;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
    }
  | { ok: false; status: number; error: string };

export function parseContactJson(body: unknown): ParsedContact {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, status: 400, error: "Invalid request body." };
  }

  const o = body as Record<string, unknown>;

  for (const key of Object.keys(o)) {
    if (!ALLOWED_KEYS.has(key)) {
      return { ok: false, status: 400, error: "Invalid request body." };
    }
  }

  for (const key of ALLOWED_KEYS) {
    const v = o[key];
    if (v === undefined) continue;
    if (typeof v !== "string") {
      return { ok: false, status: 400, error: "Invalid request body." };
    }
  }

  const websiteRaw = typeof o.website === "string" ? o.website : "";
  if (websiteRaw.length > MAX_HONEYPOT) {
    return { ok: false, status: 400, error: "Invalid request body." };
  }
  const website = websiteRaw.trim();
  if (website.length > 0) {
    return { ok: true, honeypot: true };
  }

  const firstName =
    typeof o.firstName === "string" ? o.firstName.trim() : "";
  const lastName = typeof o.lastName === "string" ? o.lastName.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const phone = typeof o.phone === "string" ? o.phone.trim() : "";
  const message =
    typeof o.message === "string" ? o.message.trim() : "";

  if (!firstName || !lastName || !email || !phone) {
    return { ok: false, status: 400, error: "Missing required fields." };
  }

  if (
    firstName.length > MAX_NAME ||
    lastName.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    phone.length > MAX_PHONE ||
    message.length > MAX_MESSAGE
  ) {
    return { ok: false, status: 400, error: "One or more fields are too long." };
  }

  if (
    hasControlChars(firstName) ||
    hasControlChars(lastName) ||
    hasControlChars(email) ||
    hasControlChars(phone) ||
    hasControlChars(message)
  ) {
    return {
      ok: false,
      status: 400,
      error: "Invalid characters in input.",
    };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, status: 400, error: "Invalid email address." };
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    return {
      ok: false,
      status: 400,
      error: "Invalid phone number.",
    };
  }

  return {
    ok: true,
    honeypot: false,
    firstName,
    lastName,
    email,
    phone,
    message,
  };
}
