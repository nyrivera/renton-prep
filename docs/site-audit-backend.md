# Site audit — backend (Renton Prep)

> **Follow-up:** `/api/score`, `/api/crm`, `lib/schema.ts`, `lib/api-response.ts`, and related deps were **removed**. Only **`POST /api/contact`** remains. `.env.example` trimmed. CSP narrowed (no browser JotForm).

This app’s “backend” is **Next.js Route Handlers** (`app/api/*`) plus **server-side logic** in RSC (e.g. `CommunitySection` `fs.existsSync`). There is **no separate Node server** and **no database** in code.

---

## A. Current role of the backend

| Function | Essential for public site? |
|----------|----------------------------|
| **`POST /api/contact`** | **Yes** — sole path for the marketing contact form (`ContactForm` → server → JotForm `submit.jotform.com`). |
| **`POST /api/score`** | **No** for the school website UX — **no `fetch` from this repo’s frontend** to this route. Built for an authenticated JSON → OpenAI scoring workflow (Bearer `SCORING_API_KEY`). |
| **`POST /api/crm`** | **No** — returns **501** always; nothing in frontend calls it. |

**Plain statement:** The public site is **effectively static + one form proxy**. OpenAI scoring and CRM are **optional / future / dead from the UI’s perspective**.

---

## B. API and data flow

### `POST /api/contact` (`app/api/contact/route.ts`)

- **Caller:** `components/marketing/ContactForm.tsx` only (`fetch("/api/contact")`).
- **Behavior:** Builds `application/x-www-form-urlencoded` body with **hard-coded JotForm field keys** (`q3_name[first]`, `q4_email`, `q5_phoneNumber[full]`, `q7_yourQuestions`, etc.) and `BUILD_DATE` / `simple_spc` / honeypot `website`.
- **Risk:** **Tight coupling** to JotForm form `260918035603050`. Any field rename or new required field on the JotForm side can cause **silent submission failure** or partial data without code deploy.
- **CSP:** Irrelevant here — `fetch` runs **server-side**; browser CSP does not apply.

### `POST /api/score` (`app/api/score/route.ts`)

- **Caller:** **None** in this repository (grep `"/api/score"` → no matches).
- **Deps:** `openai`, `zod` (`jsonValueSchema`), env `SCORING_API_KEY`, `OPENAI_API_KEY`, optional `OPENAI_SCORE_MODEL`.
- **Role:** Internal/automation endpoint — **keep if external clients use it**; otherwise **dead weight** for the school site.

### `POST /api/crm` (`app/api/crm/route.ts`)

- **Caller:** **None**.
- **Role:** Explicit **not implemented** stub — honest but **noise** until a product decision is made.

---

## C. Infrastructure and config

### Environment variables (from `.env.example` + code grep)

| Variable | Used in code? | Notes |
|----------|----------------|-------|
| `DATABASE_URL` | **No references** in `renton-prep` source | **Dead line** in `.env.example` — remove or document future use. |
| `SCORING_API_KEY` | `api/score` | Scoring only. |
| `OPENAI_API_KEY` | `api/score` | Scoring only. |
| `OPENAI_SCORE_MODEL` | `api/score` | Optional. |
| `NEXT_PUBLIC_SITE_URL` | `layout`, `sitemap`, `robots` | Critical for canonical URLs. |
| `NEXT_PUBLIC_GA_ID` | `layout` | Optional analytics. |
| `NEXT_PUBLIC_APPLY_URL` | `lib/site.ts` | Apply links; **default URL includes district/member query params in repo** — review for sensitivity/rotation. |

### `next.config.ts` security headers

- Global CSP includes **JotForm + Google + cdn.jotfor.ms** — justified when a **browser** embed loads JotForm. **Current contact flow does not load JotForm in the browser** (server-side proxy only). → **Likely oversized CSP surface** for present behavior (see cleanup plan — verify before stripping).

### Deployment

- Standard Next on Vercel/similar: **no** `vercel.json` in tree; headers defined in `next.config.ts`.

---

## D. Cleanup risk classification (backend)

| Item | Classification |
|------|----------------|
| `DATABASE_URL` in `.env.example` | **Safe to remove** from example *after* confirming no hosted env depends on it. |
| `/api/crm` | **Remove after verification** no external webhook hits it; or keep as explicit 501 until CRM exists. |
| `/api/score` + `openai` dep | **Product decision** — remove if no consumer; **keep** if internal tools call it in production. |
| JotForm field mapping in `/api/contact` | **Keep** — actively used; **fragile** — document and add monitoring or integration tests. |
| CSP JotForm allowances | **Verify then simplify** — not “remove blindly”. |

---

*End of backend audit document.*
