"use client";

import { type ChangeEvent, type FormEvent, useId, useState } from "react";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  /** Honeypot — must stay empty; bots often fill hidden fields. */
  website: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

/** Format a raw digit string as (000) 000-0000 */
function maskPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length === 0) return "";
  if (d.length <= 3) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function validate(f: Fields): Errors {
  const errs: Errors = {};
  if (!f.firstName.trim()) errs.firstName = "First name is required.";
  if (!f.lastName.trim()) errs.lastName = "Last name is required.";
  if (!f.email.trim()) {
    errs.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errs.email = "Enter a valid email address.";
  }
  if (!f.phone.trim()) {
    errs.phone = "Phone number is required.";
  } else if (f.phone.replace(/\D/g, "").length < 10) {
    errs.phone = "Enter a complete 10-digit phone number.";
  }
  return errs;
}

export function ContactForm() {
  const uid = useId();

  const [fields, setFields] = useState<Fields>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const next =
      name === "phone" ? maskPhone(value) : value;
    setFields((prev) => ({ ...prev, [name]: next }));
    if (errors[name as keyof Fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // focus first errored field
      const first = Object.keys(errs)[0] as keyof Fields;
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setSubmitError(
          data.error ?? "Something went wrong. Please try calling us.",
        );
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="cf-success" role="status">
        <strong>Thanks — we received your message.</strong>
        <p style={{ marginTop: 8, marginBottom: 0 }}>
          We&apos;ll be in touch as soon as possible during school business
          hours. You can also call us directly if you need a faster response.
        </p>
      </div>
    );
  }

  return (
    <form
      className="cf-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Request information form"
    >
      {/* Honeypot: leave blank. Filled submissions are accepted but not forwarded. */}
      <input
        type="text"
        name="website"
        value={fields.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="cf-honeypot"
      />
      {submitError && (
        <div className="cf-status-error" role="alert">
          {submitError}
        </div>
      )}

      {/* Name row */}
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor={`${uid}-firstName`} className="cf-label">
            First Name <span className="cf-required" aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-firstName`}
            name="firstName"
            type="text"
            className="cf-input"
            autoComplete="given-name"
            value={fields.firstName}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={
              errors.firstName ? `${uid}-firstName-err` : undefined
            }
          />
          {errors.firstName && (
            <span id={`${uid}-firstName-err`} className="cf-error" role="alert">
              {errors.firstName}
            </span>
          )}
        </div>
        <div className="cf-field">
          <label htmlFor={`${uid}-lastName`} className="cf-label">
            Last Name <span className="cf-required" aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-lastName`}
            name="lastName"
            type="text"
            className="cf-input"
            autoComplete="family-name"
            value={fields.lastName}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={
              errors.lastName ? `${uid}-lastName-err` : undefined
            }
          />
          {errors.lastName && (
            <span id={`${uid}-lastName-err`} className="cf-error" role="alert">
              {errors.lastName}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="cf-field">
        <label htmlFor={`${uid}-email`} className="cf-label">
          Email Address <span className="cf-required" aria-hidden="true">*</span>
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          className="cf-input"
          autoComplete="email"
          placeholder="example@example.com"
          value={fields.email}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.email ? `${uid}-email-err` : undefined}
        />
        {errors.email && (
          <span id={`${uid}-email-err`} className="cf-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className="cf-field">
        <label htmlFor={`${uid}-phone`} className="cf-label">
          Phone Number <span className="cf-required" aria-hidden="true">*</span>
        </label>
        <input
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          className="cf-input"
          autoComplete="tel-national"
          placeholder="(000) 000-0000"
          value={fields.phone}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
        />
        {errors.phone && (
          <span id={`${uid}-phone-err`} className="cf-error" role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="cf-field">
        <label htmlFor={`${uid}-message`} className="cf-label">
          Your Questions or Comments
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          className="cf-textarea"
          rows={5}
          value={fields.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
        style={{ marginTop: "var(--space-2)" }}
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>

      <p
        style={{
          marginTop: "var(--space-2)",
          fontSize: 13,
          color: "var(--color-text-muted)",
        }}
      >
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>
    </form>
  );
}
