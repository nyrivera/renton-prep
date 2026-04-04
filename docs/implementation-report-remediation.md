# Implementation report — remediation pass (April 2026)

Execution of `docs/remediation-plan-prioritized.md`: trust fixes, inquiry normalization, metadata/JSON-LD, contact hardening, docs, and image bytes (evidence-based).

---

## 1. Executive summary

- **Trust:** Removed generic “being updated” experiences from footer-critical routes by shipping **minimal truthful pages** (awards, careers, donate, legal), **redirecting** `/blog` to the school Instagram, and **redirecting** `/about/testimonials` to the home page testimonials section (`/#testimonials`). `/about/student-stories` redirects to `/about` until a dedicated page exists.
- **Inquiry:** All primary “Request information” paths target **`/request-information`** via `site.urls.contact` (`TbdPage` removed; admissions/academics hubs use office CTAs, not placeholder copy; **`/events`** also redirects there).
- **Metadata:** **One** default description lives in **`lib/site.ts`** as `defaultSiteDescription`; `app/layout.tsx` and `app/page.tsx` both use it for `description`, Open Graph, and Twitter.
- **Performance:** **`public/hero-1.jpeg`** and **`public/community-1.jpeg`** were resized in place with **`sips -Z`** (max dimension 2048 / 1800). **`community-3.jpg`** and **`community-4.jpg`** were regenerated from **`community-3heic.heic`** and **`Community-4.heic`** at max dimension 1800 (replacing ~6 KB thumbnails that were not suitable for the grid).
- **Technical:** **`EducationalOrganization`** JSON-LD added (`SchoolJsonLd.tsx`). **`POST /api/contact`** documents the JotForm contract in **`docs/api-contact-jotform.md`** and applies **in-memory rate limiting** (`lib/contact-rate-limit.ts`). **`docs/site-audit-crosswalk.md`** and **`docs/site-cleanup-plan.md`** were rewritten to match the repo.

---

## 2. Audit findings (summary)

| Area | Finding |
|------|---------|
| **Stubs** | Seven routes used `TbdPage` with “being updated” copy; footer promised blog/careers/donate/legal/awards/testimonials. |
| **Metadata** | `app/layout.tsx` described the school without “Washington’s first…” / Genesis wording; `app/page.tsx` OG used the fuller home narrative — **inconsistent** default vs home. |
| **Images** | `hero-1.jpeg` ~2.0 MB at 3024×4032; `community-1.jpeg` ~2.0 MB; `community-3.jpg` / `community-4.jpg` ~6 KB each (unsuitable for cover layout). HEIC masters present for 3/4. |
| **Contact** | JotForm mapping only in code; no rate limit; honeypot field hard-coded empty server-side. |
| **Structured data** | No JSON-LD in layout before this pass. |
| **Docs** | Crosswalk still referenced removed APIs and old sitemap/community issues. |
| **CSS** | `app/styles/marketing-sections.css` — no `.trust-logos` / `.insta-placeholder` in file; **no orphan rule removal** performed (nothing matched audit grep targets). |
| **Dashboard** | Still unlinked; **not removed** (per instructions: no assumption). |

---

## 3. Changes made (by area)

**Awards** — `components/marketing/AwardsPageContent.tsx`, `app/awards/page.tsx`: real page listing `recognitions` + `site.tagline`, links to Genesis, about, request information; **indexable** metadata (removed `noindex`).

**Blog** — `lib/site.ts` `urls.blog` → Instagram URL; `app/blog/page.tsx` → `permanentRedirect(site.urls.blog)`; `SiteFooter` label “News & updates”; `NewsSection` button “Follow on Instagram” + `MarketingLink`.

**Careers / Donate / Legal** — `CareersPageContent.tsx`, `DonatePageContent.tsx`, `LegalPageContent.tsx` + corresponding `app/*/page.tsx` with factual CTAs only.

**Testimonials / student stories** — `app/about/testimonials/page.tsx` → `permanentRedirect("/#testimonials")`; `app/about/student-stories/page.tsx` → `permanentRedirect("/about")`; `site.urls.testimonials` → `/#testimonials`.

**TbdPage** — **Deleted**; no remaining imports after route updates.

**Inquiry links** — `TbdPage` (deleted) previously fixed in spirit via removal; `AdmissionsHubContent.tsx`, `AcademicsHubContent.tsx`: `/contact` → `site.urls.contact` (`/request-information`). **`EventsHubContent.tsx`** removed; **`app/events/page.tsx`** → **`permanentRedirect("/request-information")`**.

**Metadata** — `lib/site.ts` `defaultSiteDescription`; `app/layout.tsx` + `app/page.tsx` aligned; home adds explicit `twitter` title/description.

**JSON-LD** — `components/marketing/SchoolJsonLd.tsx` injected in `app/layout.tsx` with `siteUrl` from existing `resolveSiteUrl()`; `lib/site.ts` `addressStructured` for schema.

**Contact API** — `app/api/contact/route.ts`: file header points to `docs/api-contact-jotform.md`; rate limit **before** body parse; `lib/contact-rate-limit.ts`.

**Sitemap** — `app/sitemap.ts`: added `/awards`, `/careers`, `/donate`, `/legal`.

**Images** — byte sizes after optimization (local `ls -la`): `hero-1.jpeg` **582878** bytes; `community-1.jpeg` **525207** bytes; `community-3.jpg` **573637** bytes; `community-4.jpg` **669111** bytes (previously **5819** / **6141** for 3/4).

**Docs** — `docs/api-contact-jotform.md`, `docs/site-audit-crosswalk.md`, `docs/site-cleanup-plan.md`, this report.

---

## 4. Decisions and rationale

| Decision | Rationale |
|----------|-----------|
| Awards = curated list from existing `recognitions` + tagline | No new awards or statistics; matches hero/elsewhere. |
| Blog → Instagram | Truthful “where updates live”; avoids fake blog posts. |
| Legal = contact routing only | No invented privacy policy text. |
| Donate = “contact the school” | No fake payment processor. |
| Careers = same narrative as `HiringSection` | Consistent; no job postings invented. |
| Testimonials → `/#testimonials` | Real quotes already on home (`TestimonialsSection.tsx`). |
| Student stories → `/about` | Insufficient dedicated content; redirect better than stub. |
| Rate limit in-memory | No new dependencies; documented limitation for multi-instance. |
| ~~Keep dashboard~~ | **`app/dashboard` removed** in a follow-up pass (April 2026); `robots.txt` no longer lists `/dashboard`. |
| ~~Keep HEIC in `public/`~~ | **Removed** `Community-4.heic` and `community-3heic.heic` from `public/`; JPEGs remain canonical; `*.heic` gitignored. |

---

## 5. Validation performed

| Check | Method |
|-------|--------|
| **Build / types** | `npm run build` — **success** (Next.js 16.2.1). |
| **Links** | Code review: `site.urls.blog` external uses `MarketingLink`; internal routes use `Link` / `MarketingLink` as before; `site.urls.contact` consistent. |
| **Metadata** | Grep: single string `defaultSiteDescription` in `lib/site.ts`; layout + home import it. |
| **Images** | `sips` resize completed; `CommunitySection` paths unchanged (`community-3.jpg`, `community-4.jpg`). |
| **Contact** | Doc field table matches `URLSearchParams` keys in `route.ts`. Rate limit returns **429** with `Retry-After: 900` when over threshold (logic review). **Live JotForm submit not executed** in this environment (no substitute for post-deploy smoke test). |
| **Cleanup** | `TbdPage` removed only after grep showed no TSX imports; CSS orphans not found under names in audit. |

---

## 6. Remaining risks / owner decisions

- **RenWeb apply URL** default in `lib/site.ts` — still needs periodic **admissions verification** (query params / district IDs).
- **JotForm** — any form editor change requires **smoke test** per `docs/api-contact-jotform.md`.
- **Rate limit** — per-instance memory; heavy abuse or many regions → consider **shared** limiter (owner/infrastructure).
- **`docs/content-audit-renton-prep.md`** — refreshed (routes, hubs, R8/R9, phases) alongside hub copy and asset cleanup.
- **Hash redirect** — `/about/testimonials` → `/#testimonials` relies on Next **`permanentRedirect`** with fragment; **build succeeded**; verify in a real browser that the hash is applied (some proxies strip fragments).

---

## 7. Files changed (grouped)

**New:** `components/marketing/AwardsPageContent.tsx`, `CareersPageContent.tsx`, `DonatePageContent.tsx`, `LegalPageContent.tsx`, `SchoolJsonLd.tsx`, `lib/contact-rate-limit.ts`, `docs/api-contact-jotform.md`, `docs/implementation-report-remediation.md`

**Removed:** `components/marketing/TbdPage.tsx`

**Updated:** `lib/site.ts`, `app/layout.tsx`, `app/page.tsx`, `app/awards/page.tsx`, `app/blog/page.tsx`, `app/careers/page.tsx`, `app/donate/page.tsx`, `app/legal/page.tsx`, `app/about/testimonials/page.tsx`, `app/about/student-stories/page.tsx`, `app/api/contact/route.ts`, `app/sitemap.ts`, `components/marketing/SiteFooter.tsx`, `AdmissionsHubContent.tsx`, `AcademicsHubContent.tsx`, `docs/site-audit-crosswalk.md`, `docs/site-cleanup-plan.md` (later: **`NewsSection` removed**; **`EventsHubContent.tsx`** removed; handbook/supply/events hub sections stripped; **`/events`** redirect).

**Binary (images):** `public/hero-1.jpeg`, `public/community-1.jpeg`, `public/community-3.jpg`, `public/community-4.jpg`

**Follow-up pass (same doc cycle):** **Removed** `app/dashboard/*`, **`public/*.heic`**, replaced hub “being updated” copy in `AdmissionsHubContent.tsx`, `AcademicsHubContent.tsx`; **`EventsHubContent.tsx`** and events hub UI removed (**`/events`** redirect only); **`app/robots.ts`** (no `/dashboard`); **`docs/content-audit-renton-prep.md`**, **`docs/site-audit-frontend.md`**, **`app/globals.css`**.

---

*End of report.*
