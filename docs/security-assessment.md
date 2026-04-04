# Security assessment — Renton Prep marketing site

**Date:** April 2026  
**Type:** Codebase review, dependency audit, configuration review, and **safe local verification** — not a substitute for a signed, scope-defined external penetration test against production.

---

## 1. Legal and scope (important)

- **Penetration testing** against **production** URLs without **written authorization** from the system owner/host can violate law and hosting terms of service.
- This document records assessment performed on the **repository and documented behavior** of the Next.js app, plus **`npm audit`** on dependencies.
- For a **full penetration test**, engage a qualified firm (or internal red team) with a **Rules of Engagement (RoE)** document, **staging target** (preferred), **IP allowlists**, and **emergency contacts**.

---

## 2. System under review

| Area | Notes |
|------|--------|
| Surface | Mostly **static / SSG** marketing pages; **one dynamic route** `POST /api/contact` (JotForm proxy). |
| Auth | **No** user login, sessions, or admin UI in this repo. |
| Data store | **None** in-app; submissions go to **JotForm**. |
| Hosting | Assumed **Vercel** (Fluid Compute / serverless); confirm with deployment config. |

**Attack surface is small** — primary risks are **abuse of the contact API**, **misconfiguration**, **dependency flaws**, and **third-party trust** (JotForm, GA).

---

## 3. Automated dependency scan

| Step | Result |
|------|--------|
| `npm audit` (before fixes) | **1 moderate** (`brace-expansion`), **1 high** (`picomatch`) in transitive dev/build tooling. |
| `npm audit fix` | Applied; **`npm audit` → 0 vulnerabilities** (re-run after lockfile changes). |

**Recommendation:** Run `npm audit` in CI on every PR; enable **Dependabot** or Renovate.

---

## 4. HTTP security headers & CSP (`next.config.ts`)

| Control | Status | Notes |
|---------|--------|-------|
| `X-Frame-Options: DENY` | Present | Clickjacking mitigation. |
| `X-Content-Type-Options: nosniff` | Present | MIME sniffing reduction. |
| `Strict-Transport-Security` | Present | Enforce HTTPS (effective once served over TLS). |
| `Referrer-Policy` | Present | `strict-origin-when-cross-origin`. |
| `Permissions-Policy` | Present | Disables camera/mic/geo/FLoC-style interest cohort. |
| `COOP` / `CORP` | `same-origin` | Hardens cross-origin window interactions / resource loading. |
| `X-Permitted-Cross-Domain-Policies: none` | Present | Limits Flash/PDF cross-domain behavior (legacy clients). |
| **CSP** | Present | `default-src 'self'`; scripts allow **GA/GTM** hosts; `frame-ancestors 'none'`; `form-action 'self'`. |

**CSP caveats**

- **`script-src` includes `'unsafe-inline'`** — common with Next.js inline bootstrap; reduces XSS hardening. Mitigation: nonces/hashes where feasible (Next.js evolution-dependent).
- **Development:** `'unsafe-eval'` allowed when `NODE_ENV === 'development'` for tooling — **must not** leak to production builds (current logic ties to `isDev` at config load; verify production build headers in browser DevTools).
- **`img-src`** allows Google analytics/gtm image endpoints for beacons/pixels.

---

## 5. Application logic review

### 5.1 `POST /api/contact` (`app/api/contact/route.ts`)

| Topic | Assessment |
|-------|------------|
| **SSRF** | Server only `fetch`es a **fixed** JotForm URL — **no user-controlled URL**. **Low** SSRF risk. |
| **Injection** | Fields become `URLSearchParams` values to JotForm — **not** SQL/command execution in-app. JotForm handles storage; treat as **untrusted content** on their side. |
| **Validation** | Required fields checked; **max lengths** enforced (`firstName`/`lastName` 120, `email` 254, `phone` 40, `message` 8000) — reduces oversized-body abuse. |
| **Honeypot** | Client sends hidden `website` (empty). If non-empty after trim, API returns **`{ ok: true }`** without JotForm. Strict allowlist of JSON keys. |
| **Rate limiting** | In-memory per client key (`X-Forwarded-For` / `X-Real-IP` / `unknown`). **Mitigates** casual abuse; **not** strong under multi-instance serverless or shared NAT (many users → one `unknown`). **Recommendation:** edge/shared rate limit (e.g. Vercel Firewall, Upstash) for production. |
| **CSRF (browser)** | Cross-origin `fetch` with `Content-Type: application/json` triggers **CORS preflight**; route does not set broad `Access-Control-Allow-Origin`. **Typical** browser CSRF from random evil origins is **difficult**; **not** a classic cookie-session CSRF (no session cookie on this API). |
| **Error handling** | Generic messages to client; no stack traces in JSON — good. |

### 5.2 Client (`ContactForm.tsx`)

| Topic | Assessment |
|-------|------------|
| **XSS** | Form fields are **controlled** and rendered as text in inputs / error strings from fixed templates — **low** stored/reflected XSS in-app. |
| **Secrets** | No secrets in client bundle beyond **`NEXT_PUBLIC_*`** (expected). |

### 5.3 `dangerouslySetInnerHTML`

| Location | Assessment |
|----------|------------|
| `SchoolJsonLd.tsx` | `JSON.stringify` of **static** `site` data — **no user input**. Safe pattern for JSON-LD. |

### 5.4 Environment variables

| Variable | Exposure |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_APPLY_URL` | **Public** by design — do not put secrets in `NEXT_PUBLIC_*`. |

---

## 6. “Penetration test” checklist (staging / authorized target)

Use only on **staging** or **production with written permission**. Tools are examples, not endorsements.

| # | Test | Intent |
|---|------|--------|
| 1 | **TLS** — SSL Labs scan | Certificate chain, TLS versions, HSTS. |
| 2 | **Headers** — securityheaders.com or `curl -I` | Verify all routes receive security headers (including static assets). |
| 3 | **CSP** — browser console on key pages | Violation reports; ensure GA still works if enabled. |
| 4 | **ZAP / Burp** baseline spider + passive scan | Links, forms, mixed content. |
| 5 | **Contact API** — rate limit (21+ POSTs), 10MB JSON body, malformed JSON, XSS strings in fields | Abuse handling; should **400** on oversize fields, **429** when rate limited. |
| 6 | **Open redirects** | Test `redirect` routes (`/blog`, `/contact`, etc.) for open-redirect chaining if query params added later. |
| 7 | **Subdomain / DNS** | Orphan subdomains pointing to old hosts. |
| 8 | **JotForm** | Account MFA, form access control, PII retention — **vendor** review. |

---

## 7. Findings summary

| ID | Severity | Finding | Status / action |
|----|----------|---------|-----------------|
| F1 | Low (dev supply chain) | Transitive `picomatch` / `brace-expansion` advisories | **Mitigated:** `npm audit fix` → 0 vulns at assessment time. |
| F2 | Medium (ops) | Rate limit is **per-instance** | **Mitigated (partial):** extra proxy IP headers (`cf-connecting-ip`, `true-client-ip`, `x-vercel-forwarded-for`); stricter cap (**6**/15m) for key `unknown`. Prefer host-level / edge limiter for production. |
| F3 | Low | CSP `unsafe-inline` scripts | **Partial:** added `frame-src 'none'`, `object-src 'none'`. `unsafe-inline` remains for GA + Next. |
| F4 | Informational | Large JSON bodies | **Mitigated:** `Content-Length` &gt; 64KB → `413`; strict JSON key allowlist; server-side email/phone/control-char checks. |
| F5 | Informational | Pentest not run against live URL in this exercise | Schedule **external** test with RoE if required for insurance/compliance. |

---

## 8. Changes applied during this assessment

1. **`npm audit fix`** — cleared reported dependency issues.  
2. **`lib/contact-payload.ts`** — strict JSON keys, honeypot, control-char strip rejection, email/phone validation, length limits.  
3. **`app/api/contact/route.ts`** — `415` wrong `Content-Type`, `413` large body, `GET` → `405`, honeypot short-circuit.  
4. **`lib/contact-rate-limit.ts`** — additional IP headers; lower limit for `unknown`.  
5. **`ContactForm`** + **`.cf-honeypot`** — hidden `website` field.  
6. **`next.config.ts`** — `frame-src 'none'`, `object-src 'none'`.  
7. **`docs/api-contact-jotform.md`** — documented behavior.  
8. **This document** — methodology and residual risk.

---

## 9. Sign-off

This assessment is **point-in-time**. Re-run after major dependency upgrades, new API routes, auth, or CMS integration.

---

*End of security assessment.*
