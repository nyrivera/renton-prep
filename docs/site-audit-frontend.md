# Site audit — frontend (Renton Prep)

> **Follow-up:** Many items below were **remediated in-repo** (community photos, dead components, sitemap, `HeartAndMindSection`, CSP scope). Treat this file as the **pre-fix audit snapshot** unless re-verified.

Evidence gathered from the `renton-prep` Next.js App Router tree, `components/`, `app/styles/`, `public/`, and import tracing. **No browser run** — filesystem and static analysis only.

---

## A. Routing and page coverage

### Routes that exist (App Router)

| Route | Entry | Notes |
|-------|--------|------|
| `/` | `app/page.tsx` | Full marketing home via `MarketingShell` + `MarketingHome`. |
| `/request-information` | `app/request-information/page.tsx` | **Canonical contact / request form** (`ContactPageContent` + `ContactForm`). |
| `/contact` | `app/contact/page.tsx` | **`permanentRedirect` → `/request-information`**. Old URLs still work. |
| `/about` | `app/about/page.tsx` | `AboutSchoolContent`. |
| `/about/genesis` | `app/about/genesis/page.tsx` | `GenesisProjectContent`. |
| `/about/testimonials` | `app/about/testimonials/page.tsx` | `TbdPage` placeholder. |
| `/about/student-stories` | `app/about/student-stories/page.tsx` | `TbdPage` placeholder. |
| `/academics` | `app/academics/page.tsx` | `AcademicsHubContent`. |
| `/admissions` | `app/admissions/page.tsx` | `AdmissionsHubContent`. |
| `/awards` | `app/awards/page.tsx` | `TbdPage` (metadata `robots: noindex`). |
| `/blog` | `app/blog/page.tsx` | `TbdPage` (noindex). |
| `/careers` | `app/careers/page.tsx` | `TbdPage` (noindex). |
| `/donate` | `app/donate/page.tsx` | `TbdPage` (noindex). |
| `/events` | `app/events/page.tsx` | **`permanentRedirect` → `/request-information`** (April 2026). |
| `/legal` | `app/legal/page.tsx` | `TbdPage` (noindex). |
| ~~`/dashboard`~~ | *(removed)* | Segment deleted April 2026. |

### Reachability from UI

- **Header nav** (`SiteHeader.tsx`): links to `/about` and home hashes (`/#mission`, `/#research`, etc.). All resolve.
- **Footer** (`SiteFooter.tsx`): links to hub pages, TBD routes, external apply (RenWeb), Instagram, `/legal`, `/#faq`, `/donate`. TBD pages are **reachable** — users get placeholder copy, not 404.
- **Sitemap** (`app/sitemap.ts`): lists `/contact` (redirect URL), **not** `/request-information` — see crosswalk (SEO mismatch).

### Orphaned / disconnected

- **`/dashboard`**: **removed** (April 2026).
- **Components never mounted on any page** (grep: no imports outside own file):
  - `components/marketing/JotForm.tsx` — **dead file** relative to current app (contact uses `ContactForm` → `/api/contact`).
  - `components/marketing/LogoShield.tsx` — **dead file**.
- **`HeartAndMindSection.tsx`**: fully implemented section but **not imported** in `MarketingHome.tsx`. The entire “Heart and Mind” block is **absent from the live homepage** despite existing in repo and in older internal docs (`content-audit-renton-prep.md`).

### Broken or fragile links / assets

- **`CommunitySection.tsx`**: expects **exact** files `/community-1.jpg` … `/community-5.jpg`. On disk (verified via `ls public/`): `community-1.jpeg`, `community-2.JPG`, HEIC variants, **no** `community-3.jpg`–`5.jpg` with those names. `photosExist()` is **false** → component **`return null`**. **Entire “Life at Renton Prep” community grid is invisible** — this is a primary “section in code but not on screen” failure.
- **`MetricsSection.tsx`**: Microsoft badge path is `/microsoft-showcase-badge..jpeg` (**double dot** in filename). Matches current `public/` naming accident; **fragile** and easy to break on rename.
- **Hero**: `HeroSection` + `marketing-base.css` reference `/hero-1.jpeg` — file **present** — OK.

### Placeholder / weak UX

- Seven routes use **`TbdPage`**: same pattern (call + request info). **Indexed off** for most via metadata — still a **fragmented** experience vs. footer promises (blog, careers, donate, legal, awards).
- **Featured news** (`lib/site.ts`): two items share **`href: "/awards"`** — distinct titles, same destination (weak IA).

---

## B. Rendering and visibility

| Issue | Evidence |
|--------|----------|
| Community section hidden | `CommunitySection` + `fs.existsSync` gate + filename mismatch. |
| Heart & Mind absent | Not in `MarketingHome` import list. |
| Conditional null | Only `CommunitySection` uses server-side file gate affecting visibility. |
| CSS-only dead patterns | `.trust-logos`, `.insta-placeholder` blocks in `marketing-sections.css` — **no TSX references** (orphaned styles). |
| Mobile | Prior fixes (CTA grid, metrics, container padding, aria-current) exist in CSS/TS; full device QA not rerun in this audit. |
| Hydration | `ContactForm`, `SiteHeader`, `FaqSection`, `JotForm` (unused) are client components; home shell is server + client islands — **low risk** if no `JotForm` mounted. |

---

## C. Content and UX (blunt)

- **Narrative gap**: Marketing copy promises a community photo experience; **users never see it** until filenames match code.
- **Duplicate CTA paths**: `/contact` vs `/request-information` — handled by redirect, but sitemap and muscle memory may still say “contact”.
- **TbdPage saturation**: Footer sends users to multiple “being updated” pages — **trust erosion** if not intentional short-term.
- **Heart & Mind**: Written and linked internally to `/#choose-heading` (valid id on `WhyChooseSection`) but **section never rendered** on home — wasted content.

---

## D. Code health — unused / duplicate

| Item | Status |
|------|--------|
| `JotForm.tsx` | Unused — remove or wire intentionally. |
| `LogoShield.tsx` | Unused. |
| `HeartAndMindSection.tsx` | Unused by router/home. |
| `.trust-logos`, `.insta-placeholder` | Unused CSS. |
| `firstRef` in `ContactForm` | Ref assigned, **never used** (minor dead code). |

No duplicate “two contact forms” on one page — **JotForm vs ContactForm** is either/or; currently only `ContactForm`.

---

## E. Technical health — frontend deps & env

**`package.json` dependencies**

- `next`, `react`, `react-dom` — **used**.
- `zod` — **used** by `lib/schema.ts` (API scoring validation only), not by contact form.
- `openai` — **only** `app/api/score/route.ts` (not called from this frontend).

**devDependencies**

- `tailwindcss`, `@tailwindcss/postcss` — **used** for Tailwind in `globals.css` (e.g. `app/loading.tsx`); marketing shell is mostly **custom CSS**.

**Env (frontend-visible)**

- `NEXT_PUBLIC_SITE_URL` — layout metadata / sitemap / robots (**required** for production correctness).
- `NEXT_PUBLIC_GA_ID` — optional GA4.
- `NEXT_PUBLIC_APPLY_URL` — defaults to RenWeb URL in `lib/site.ts` (also in `.env.example`).

**Third-party**

- GA via `next/script` in `app/layout.tsx` when ID valid.
- **No client-side JotForm embed** in current pages — CSP still lists JotForm/Google (see backend audit / cleanup plan).

---

## F. Accessibility (material)

- `ContactForm`: labels, `aria-required`, error regions — **good baseline**.
- `SiteHeader`: focus trap, skip link target `#main-content` — **good**.
- **Community section**: when missing, users relying on heading “Life at Renton Prep” in outline **never get that landmark** — structural gap.

---

*End of frontend audit document.*
