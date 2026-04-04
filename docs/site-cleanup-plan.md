# Site cleanup plan — phased (Renton Prep)

> **Status (April 2026):** Phases **1–3** and the **remediation pass** described in `docs/implementation-report-remediation.md` are **largely complete**. Use this doc as a checklist for **ongoing** work only.

**Rule:** Execute in order; verify after each phase. Do not skip verification on items marked “verify.”

---

## Phase 1 — No-risk / low-regret cleanup

| Action | Status | Notes |
|--------|--------|-------|
| Remove unused `firstRef` from `ContactForm` | Done | |
| Delete unused `JotForm.tsx`, `LogoShield.tsx` | Done | |
| Orphan CSS (`.trust-logos`, etc.) in `app/styles/marketing-sections.css` | N/A / done | Rules absent or already removed; grep before deleting any class. |
| Drop **`DATABASE_URL`** from `.env.example` | Done | |
| Update `content-audit-renton-prep.md` for contact + routes | **Stale doc** | File still lists old `TbdPage` routes — refresh when editing that audit. |

---

## Phase 2 — Low-risk fixes (UX / SEO / assets)

| Action | Status | Notes |
|--------|--------|-------|
| Community photos + filenames | Done | |
| Microsoft badge filename | Done | |
| Sitemap: `/request-information`, `/about/genesis` | Done | Also lists `/awards`, `/careers`, `/donate`, `/legal`. |
| Featured news distinct `href` | Done | |
| Heart & Mind on home | Done | |

---

## Phase 3 — Backend reduction

| Action | Status | Notes |
|--------|--------|-------|
| Remove `/api/crm`, `/api/score`, OpenAI/Zod | Done | |
| CSP tighten (no browser JotForm) | Done | |
| JotForm contract documentation | Done | `docs/api-contact-jotform.md` + `route.ts` header |
| Contact rate limiting | Done | `lib/contact-rate-limit.ts` — see doc for multi-instance limits |

---

## Phase 4 — UX / content (stakeholder-led)

| Action | Status | Notes |
|--------|--------|-------|
| Replace TbdPages / stub trust issues | **Done (remediation)** | Awards MVP; careers/donate/legal minimal; blog → IG; testimonials redirect. |
| Audit RenWeb **apply URL** | Open | Admissions owner — `lib/site.ts` default query string. |
| Mobile regression pass | Ongoing | After each visual change. |
| Add dedicated student-stories page | Open | Currently redirects to `/about` until real content exists. |
| Hub stubs (`AdmissionsHubContent` partial “being added” copy) | Open | Intentionally thin; replace when copy is ready. |

---

## Recommended sequence (summary)

1. ~~Phase 1–3~~ — complete.  
2. **Ongoing:** RenWeb URL verification, mobile pass, hub copy when available.  
3. **Optional:** Shared rate-limit store (Redis/edge) if `/api/contact` abuse appears.

---

*End of cleanup plan.*
