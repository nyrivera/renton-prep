# Contact API ↔ JotForm contract

**Route:** `POST /api/contact` (`app/api/contact/route.ts`)  
**Integration:** Server-side `application/x-www-form-urlencoded` POST to JotForm’s submit endpoint (no browser embed).

## Endpoint and form

| Item | Value |
|------|--------|
| Submit URL | `https://submit.jotform.com/submit/260918035603050` |
| Form ID | `260918035603050` |

## Field mapping (JSON body → JotForm keys)

| Client JSON field | JotForm parameter | Notes |
|-------------------|-------------------|--------|
| `firstName` | `q3_name[first]` | Required |
| `lastName` | `q3_name[last]` | Required |
| `email` | `q4_email` | Required |
| `phone` | `q5_phoneNumber[full]` | Required |
| `message` (optional) | `q7_yourQuestions` | Defaults to empty string |

**Server limits:** `firstName` / `lastName` ≤ 120 chars, `email` ≤ 254, `phone` ≤ 40, `message` ≤ 8000, `website` (honeypot) ≤ 200 if present. **JSON** must only use keys: `firstName`, `lastName`, `email`, `phone`, `message`, `website` — unknown keys → `400`. **Content-Type** must include `application/json`. **`Content-Length`** &gt; 65536 → `413`. Control characters in strings → `400`. **Email** and **phone** (≥10 digits) validated server-side.

**Honeypot:** If `website` is a non-empty string, the API returns **`200 { ok: true }`** and does **not** call JotForm (reduces spam; client keeps a hidden `website` field empty).

Additional POST fields sent for JotForm compatibility: `formID`, `simple_spc`, `jsExecutionTracker`, `submitSource`, `submitDate`, `buildDate`, `uploadServerUrl`, `eventObserver`, `website` (honeypot — must stay empty).

`buildDate` is currently hard-coded to `1775255391453` to match the live form build; if submissions start failing after a JotForm publish, compare a browser network capture from the official JotForm form and align `BUILD_DATE` / tracker fields.

## What breaks if JotForm changes

- **Form ID or URL change** — update `SUBMIT_URL` and `FORM_ID` in `route.ts`.
- **Field renames or new required fields** — update `URLSearchParams` keys; the SPA form (`ContactForm.tsx`) must collect any new required data.
- **Build / anti-bot tokens** — JotForm may require updated `buildDate` / `jsExecutionTracker` / `simple_spc`; silent 200 with no row, or non-2xx responses, indicate a mismatch.

## Smoke test (after any JotForm change)

1. Deploy or run `npm run dev` with the same env as production (no extra env required for JotForm from server).
2. Open `/request-information`, submit the form with a test name and a tagged email (e.g. `qa+yourname@…`).
3. Confirm the row appears in the JotForm inbox / notifications for form `260918035603050`.

## Abuse mitigation

- **Rate limit:** ~20 POSTs per client key per 15 minutes (`lib/contact-rate-limit.ts`), keyed by `X-Forwarded-For` (first hop) or `X-Real-IP`. In multi-instance deployments each instance tracks separately; for stricter limits use an edge or shared store.
- **Honeypot:** `website` is always sent empty; a future client could add a hidden field and reject non-empty values.
