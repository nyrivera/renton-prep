# Renton Prep — Prioritized remediation plan

**Sources:** `docs/site-audit-frontend.md`, `docs/site-audit-backend.md`, `docs/site-audit-crosswalk.md`, `docs/site-cleanup-plan.md`, `docs/website-review-owner-ready.md`, plus current repo state (April 2026).

**Context:** A large **technical cleanup** already landed (removed `/api/score`, `/api/crm`, `JotForm`/`LogoShield`, `openai`/`zod`, tightened CSP, community grid + assets, sitemap, `HeartAndMindSection` on home, etc.). This plan focuses on **what remains** and **what to keep**.

---

## SECTION 1: Executive summary

### Biggest frontend problems (remaining)

1. **Placeholder (“TBD”) destinations** still linked from the footer and some in-page CTAs—**trust and credibility** issue, not a bug.
2. **Metadata inconsistency** between `app/layout.tsx` default description and `app/page.tsx` / Open Graph on the **STEM superlative** wording.
3. **Likely heavy images** (hero + community)—**inferred** performance/LCP risk on mobile until measured and compressed.
4. **Minor CTA hygiene:** `TbdPage` still links **Request Information** to `/contact` (redirects) instead of **`/request-information`**.

### Biggest backend problems (remaining)

- **None structural.** The public backend is effectively **`POST /api/contact`** proxying to JotForm. **Risk is operational, not bloat:** hard-coded JotForm field mapping, **no rate limiting** in app code, no automated test that submissions still arrive after form edits.

### Biggest business-facing website problems

- Families click **Awards, Blog, Careers, Donate, Legal, Testimonials**, etc. and hit **“being updated”**—undermines the same **excellence narrative** the homepage sells.

### Backend: reduce, retain, or remove?

| Decision | Rationale |
|----------|-----------|
| **RETAIN** | **`/api/contact`** — required for the native inquiry form; keep server-side JotForm submit. |
| **REMOVED (done)** | `/api/score`, `/api/crm`, OpenAI/Zod stack — already deleted; **do not reintroduce** unless a signed-off product needs them. |
| **OPTIONAL later** | Edge **rate limiting**, **CAPTCHA**, monitoring/alerts on contact failures — add if spam or reliability issues appear. |

---

## SECTION 2: Safe removals

*Items that appear safe **now** given current `main`. Verify once before deleting.*

| Item | Exact location | Why it appears unused / low value | Confidence | Verification |
|------|----------------|-------------------------------------|------------|--------------|
| **Obsolete audit matrix rows** (documentation only) | `docs/site-audit-crosswalk.md` | Still describes removed APIs (`/api/score`, JotForm component, old sitemap/community issues) | **High** (for doc accuracy) | Read file; update or archive so it matches production |
| **Stale cleanup checklist rows** | `docs/site-cleanup-plan.md` Phase 1–3 tables | Many actions **already completed** | **High** | Mark completed or replace with “remaining” list |
| **`app/dashboard` route** (optional product call) | `app/dashboard/page.tsx`, `error.tsx`, `loading.tsx` | **Not linked** from marketing; robots disallows crawlers; placeholder only | **Medium** — remove only if leadership confirms **no** internal tools roadmap | Grep `dashboard`; confirm no bookmarks/links |

**No other dead React marketing components** were found in recent traces (`JotForm`, `LogoShield` already removed). **`Trust-logos` / `insta-placeholder` CSS** — confirm absent from `marketing-sections.css`; if present with no TSX reference, delete the rules.

| **Production dependencies** | `package.json` | Only `next`, `react`, `react-dom` — **nothing obvious to remove** | **High** | `npm ls` |

---

## SECTION 3: Verify-before-remove items

| Item | What suggests unused / risky | What to verify before deletion |
|------|------------------------------|--------------------------------|
| **`/dashboard` app segment** | Placeholder; not in nav | Internal staff still typing URL? Planned SSO/tools? |
| **RenWeb default URL** in `lib/site.ts` | Long query string in repo | Admissions: still correct portal URL? Rotate if district changes member/district params |
| **Stub route files** (`app/awards/page.tsx`, etc.) | Low-value UX if kept public | **Do not delete** until you either **ship content** or **remove footer links**—deleting routes without removing links causes **404** |
| **`.claude/`** (local) | Gitignored | N/A for repo; never commit secrets |
| **HEIC originals in `public/`** | Gitignored `*.heic` | If disk space matters, delete locally after confirming JPEGs are final |

---

## SECTION 4: Frontend fix priorities

| Priority | Issue | Severity | Files / scope | User impact | Recommended fix |
|----------|--------|----------|---------------|-------------|-----------------|
| **P1** | Footer → stub pages | **High** | `components/marketing/SiteFooter.tsx`, optional `TbdPage` routes | Trust drop for comparing families | **Ship MVP pages** OR **remove/hide links** until ready |
| **P1** | “Awards and Recognition” → stub | **High** | `WhyChooseSection.tsx` → `site.urls.awards`, `app/awards/page.tsx` | Broken proof loop | **Awards MVP** (copy + links/PDF) or change CTA to `/about` until awards ships |
| **P2** | STEM wording mismatch (meta) | **Medium** | `app/layout.tsx`, `app/page.tsx` | Snippets look inconsistent | **One approved string** in both; legal/comms on superlatives |
| **P2** | Stub CTAs use `/contact` | **Low–Medium** | `components/marketing/TbdPage.tsx` | Analytics, clarity | Change `Link href` to **`/request-information`** |
| **P2** | Hero / community image weight | **Medium–High** (inferred) | `public/hero-1.jpeg`, `public/community-*.jpg|jpeg|JPG`, `HeroSection.tsx`, `CommunitySection.tsx` | Slow mobile load | Resize, compress, re-test LCP |
| **P3** | JSON-LD missing | **Medium** (SEO) | `app/layout.tsx` or page metadata | Local/branded discoverability | Add `EducationalOrganization` JSON-LD with address, phone, `sameAs` |
| **P3** | Hero `alt=""` policy | **Low** (a11y choice) | `components/marketing/HeroSection.tsx` | Screen reader users | Decide decorative vs. descriptive alt with comms |

---

## SECTION 5: Backend reduction priorities

| Priority | Item | Severity | Files | Operational risk | Action |
|----------|------|----------|-------|-------------------|--------|
| **—** | Extra API routes | — | *None beyond contact* | — | **No further reduction required** unless you add features |
| **P1** | JotForm coupling | **Medium** | `app/api/contact/route.ts` | Silent failure if JotForm fields change | **Document** field IDs + form ID in code comment or internal runbook; **smoke-test** after any JotForm edit |
| **P2** | No rate limit | **Medium** (if abused) | `app/api/contact/route.ts`, hosting config | Spam / cost | Add **Vercel Edge** or platform rate limit; optional **CAPTCHA** |
| **P3** | `BUILD_DATE` / `simple_spc` constants | **Low** | `app/api/contact/route.ts` | JotForm may validate; unclear | **Do not remove** without testing submit; treat as **black box** until JotForm docs say otherwise |

**Keep:** `POST /api/contact` — **core business function.**

---

## SECTION 6: Performance, security, accessibility

### Performance (highest value first)

1. **Measure** production mobile LCP (PageSpeed / Lighthouse).  
2. **Reduce bytes** on LCP candidate: `hero-1.jpeg` (and any above-the-fold image).  
3. **Confirm** `next/image` `sizes` and dimensions for hero/community remain appropriate after resizing sources.  
4. **Defer** non-critical work: third-party scripts already limited to GA when enabled.

### Security (highest value first)

1. **Keep** current CSP + headers; re-open CSP only if adding new third-party embeds.  
2. **Pair** JotForm dashboard changes with **deploy + submit test**.  
3. **Add** rate limiting if `/api/contact` sees abuse.  
4. **Rotate** `npm audit` on release cadence; dependency tree is small.

### Accessibility (highest value first)

1. **Contrast check** footer and muted gray text on navy (WCAG AA).  
2. **Keyboard test** full homepage + FAQ + mobile menu (already strong—regression-test after edits).  
3. **Decide** hero image alt policy (decorative vs. descriptive).  
4. **Re-test** inquiry form after any label/copy change.

---

## SECTION 7: Recommended execution order

### Phase 1: No-risk cleanup

| Goals | Impact | Verification |
|-------|--------|--------------|
| Refresh **audit docs** so they match post-cleanup reality (crosswalk, cleanup plan) | Less internal confusion | Read `docs/*.md` against repo |
| Grep `marketing-sections.css` for **orphan selectors**; remove if unused | Smaller CSS | Grep class names from TSX |
| **`TbdPage`:** `href="/contact"` → `/request-information` | Cleaner funnels | Click from any stub page |
| Optional: remove **`/dashboard`** if product confirms unused | Smaller surface | Manual URL test → 404 acceptable? |

### Phase 2: Frontend fixes

| Goals | Impact | Verification |
|-------|--------|--------------|
| **Unify metadata** (layout + home OG) | Consistent SERP/social | View source / sharing debugger |
| **Image optimization** pass | Better LCP, mobile UX | Lighthouse mobile before/after |
| **JSON-LD** | SEO | Rich results test / GSC |

### Phase 3: Backend reduction

| Goals | Impact | Verification |
|-------|--------|--------------|
| **Document** JotForm contract in repo or wiki | Fewer silent breaks | Edit checklist |
| **Rate limit** (if needed) | Abuse resistance | Load test / monitor 429s |

*No route removal in this phase unless Phase 1 removed dashboard.*

### Phase 4: Content and UX refinement

| Goals | Impact | Verification |
|-------|--------|--------------|
| **Awards MVP** + **trim or complete** other stub destinations | **Largest owner-visible trust gain** | Stakeholder sign-off + user test |
| Blog/careers/donate/legal strategy | Aligns footer with reality | Comms + advancement + legal |

### Phase 5: Validation and re-test

| Goals | Impact | Verification |
|-------|--------|--------------|
| Full **mobile** pass (iOS Safari, small Android) | Catch layout regressions | Device checklist |
| **Lighthouse** (perf, a11y, SEO) on production | Baseline metrics | Save reports |
| **End-to-end** inquiry: submit → JotForm inbox | Lead flow | Admissions confirms receipt |
| **GSC** sitemap + coverage | Discoverability | No errors on key URLs |

---

## Appendix: What to **keep** (do not remove without replacement)

- **`POST /api/contact`** and `ContactForm` / `ContactPageContent` / `request-information` page  
- **`/contact` redirect** (preserves old links)  
- **`MarketingShell`, `SiteHeader`, `SiteFooter`, section components** (core UX)  
- **`next.config.ts` security headers** (CSP aligned to current third parties)  
- **`robots.ts`, `sitemap.ts`** (maintain as routes change)  
- **`lib/site.ts`** as canonical URLs and copy source  

---

*End of remediation plan.*
