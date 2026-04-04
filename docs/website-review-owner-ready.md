# Renton Prep — Website quality assessment (owner-ready)

**Audience:** School leadership and communications  
**Method:** Product and implementation review of the live Next.js site (structure, copy, patterns, headers, dependencies). **Not** a live Lighthouse run or paid WCAG audit unless noted.

**Legend:** **Confirmed** = directly observable in code or config. **Inferred** = professional judgment about typical user experience or lab scores without running tools against production.

---

## 1. Executive summary

The site reads as a **credible, modern independent-school presence**: consistent typography and color, a long homepage that walks families from **promise → recognition → mission → differentiation (Genesis, research) → proof → action → community → FAQ → heart/mind positioning → hiring → news**, and **clear primary paths** (Request Information, Apply via RenWeb). Technically, it is **leaner than most school sites**: minimal third-party JavaScript, **server-side** inquiry handling (no embedded form iframe on the page), **strict security headers** and a **tight content security policy** aligned to that choice, plus solid mobile menu behavior.

The **main business risk** is **trust at the click**: the footer and some in-page links still send people to **placeholder pages** (“being updated”). That reads as **unfinished** at exactly the moment a family is comparing schools. **Inferred:** hero and community photography are likely **large on the wire**; on phones that can **hurt first load and Core Web Vitals** if sources are not aggressively sized and compressed.

**Bottom line:** Strong first impression and story; **close the loop** on stub destinations and **tighten** metadata wording and image weight to match the quality of the homepage narrative.

---

## 2. What is working well

### 2.1 Visual and UX (**confirmed**)

- **Homepage hierarchy** follows a defensible funnel: hero value prop → recognition block → why families choose → mission → features → Genesis → research → testimonials → primary CTA band → community imagery → FAQ → Heart & Mind → hiring → news.
- **Spacing and rhythm** come from shared tokens (`marketing-base.css` / `marketing-sections.css`), not ad-hoc pages; sections feel **designed**, not default-template.
- **CTAs** repeat the same primary jobs—**Request Information** and **Apply**—in header, hero, CTA section, and footer-related flows; microcopy supports low friction (“no commitment…”).
- **Mobile:** hamburger panel, scroll lock, escape to close, and focus handling are **above typical school-site practice**.
- **Community section** (when assets exist) uses a **2×2 photo grid** with a single Instagram follow action—focused, not cluttered.

### 2.2 Content and narrative (**confirmed**)

- **Christian identity**, **accreditation**, **STEM / Cognia**, and **Microsoft Showcase** appear early and again where parents expect proof.
- **Genesis Project** has a dedicated homepage section and a **deep `/about/genesis` page** for families who want detail.
- **Admissions** is supported by a full **Admissions hub**, **Request Information** page with a native form, and **FACTS/RenWeb** apply links—decision paths are **traceable**.
- **FAQ** content is substantial and **decision-oriented** (tuition, faith, technology, fit).

### 2.3 Technical, SEO, and trust hygiene (**confirmed**)

- **Dependencies:** only `next`, `react`, `react-dom` in production—**low attack surface and bundle noise**.
- **Sitemap** lists substantive routes including **`/request-information`** and **`/about/genesis`**.
- **Robots** disallow `/api/`; most marketing routes are indexable (legacy stub `noindex` pages were replaced or redirected).
- **GA4** loads only when the ID matches a **strict pattern**—reduces misconfiguration risk.

---

## 3. Critical issues (owner-facing)

| Issue | Why it matters | Who it affects | Severity | Type |
|-------|----------------|----------------|----------|------|
| **Footer and nav still link to placeholder pages** (awards, blog, careers, testimonials, student stories, donate, legal, etc.) | Families expect answers; repeated “updating” **weakens credibility** vs. schools with complete sites. | Prospective parents, staff, donors | **High** | Trust + content |
| **“Awards and Recognition” CTA → stub** while the homepage emphasizes distinction | Creates **dissonance**: “tell me more” leads to a dead end. | Research-heavy parents | **High** | Trust + content |
| **Default metadata vs homepage metadata differ on STEM claim** (**confirmed**): `app/layout.tsx` description does **not** say “Washington’s first…”; `app/page.tsx` Open Graph **does**. | Search and social snippets may **disagree**; looks careless if both appear. | Organic/social click-through | **Medium** | Technical + trust |
| **Large image bytes** (**inferred** from typical `hero-1.jpeg` / community JPEG usage) | Slow **LCP** on mobile, weaker SEO signals, frustration on poor networks. | Mobile users | **Medium–High** | Technical + UX |
| **Stub pages link “Request Information” to `/contact`** (**confirmed** in `TbdPage.tsx`) | Still works via redirect, but **URL and naming** diverge from the canonical **Request Information** route. | Analytics hygiene, bookmarking | **Low–Medium** | Technical |

---

## 4. High-value improvements

1. **Ship minimal real pages or temporarily remove footer links** to stubs—highest trust return per hour.
2. **Awards page MVP:** short narrative + bullets + outbound links or PDFs; aligns with “Recognition” story.
3. **Unify one approved STEM sentence** across `layout` default description, homepage OG, and hero/Faq where “first in Washington” is used—legal/comms sign-off on superlatives.
4. **Image pipeline:** cap dimensions and compress sources; validate **mobile LCP** on production.
5. **JSON-LD** (`EducationalOrganization` / `School`) with `address`, `telephone`, `sameAs`—**inferred gap** (not present in layout); helps local and branded search.
6. **Optional:** point stub CTAs to **`/request-information`** directly for cleaner funnels.

---

## 5. Performance observations

**Confirmed**

- **Small client JS** for marketing pages; no UI framework beyond what Next/React require.
- **`next/font`** with **`display: swap`** for Libre Baskerville and DM Sans—reduces invisible-text periods.
- **Google Analytics** uses `next/script` **`afterInteractive`**—reasonable default; still a third-party cost.
- **Backend surface** for public users is essentially **`POST /api/contact`**—no heavy API layer affecting cold start for typical browsing.

**Inferred (likely Lighthouse themes without a run)**

- **LCP** often tied to **hero** and **above-the-fold** imagery if files are high-resolution exports.
- **CLS** likely **moderate risk** mitigated by `next/image` and layout CSS; still verify on real devices after image changes.
- **TBT / INP** likely **better than average** vs. WordPress-style school sites due to minimal dependencies.

**Recommendation:** Run **PageSpeed Insights / Lighthouse (mobile)** on the production URL after any image or font change; treat **kilobytes on the LCP image** as the first optimization lever.

---

## 6. Security observations

**Confirmed strengths**

- **Headers** (`next.config.ts`): HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options`, Referrer-Policy, Permissions-Policy, COOP/CORP, CSP with **`default-src 'self'`**, scripts limited to **self + inline (dev eval) + Google Tag Manager**, **`form-action 'self'`** for same-document forms.
- **Inquiry flow:** browser posts to **your origin**; server forwards to JotForm—**fewer** third-party scripts in the page context than an embedded JotForm.
- **Honeypot** field in the server payload to JotForm (`website` empty)—light bot friction.

**Prudent recommendations (not evidence of a breach)**

- **JotForm field IDs** are **hard-coded** to one form; changing the form in JotForm without a code change can **break submissions**—treat as a **paired change** with engineering.
- **No rate limiting** on `/api/contact` in app code—if spam rises, add **edge rate limits** or CAPTCHA.
- Run **`npm audit`** on a schedule; dependency count is **low**, which limits supply-chain exposure.

**Do not overstate:** No **secrets** belong in client bundles; only `NEXT_PUBLIC_*` variables are intended for the browser.

---

## 7. Accessibility observations

**Confirmed strengths**

- **`lang="en"`** on `<html>`.
- **Skip link** targeting **`#main-content`**.
- **Landmarks:** `header`, `main`, `footer`, labeled sections on key pages.
- **FAQ:** accordion `button`s with **`aria-expanded`**, **`aria-controls`**, regions, and **arrow-key** navigation between headers.
- **Request Information form:** labels tied to inputs, required fields called out, errors associated with fields.
- **`:focus-visible`** styling in marketing CSS; **hamburger** is a real **button** with expanded state.

**Gaps / verify on device**

- **Hero image** uses **`alt=""`** with decorative framing—valid if purely decorative; if leadership wants the **scene** described for blind users, add concise **meaningful alt** (balance vs. verbosity).
- **Contrast:** muted body copy and **footer** gray-on-navy should be **checked** against **WCAG AA** on calibrated displays.
- **Very long homepage** increases **keyboard travel**; section anchors in the header help—keep **heading order** logical (one **h1** per page on inner routes).

**Inferred:** Periodic **axe-core** or **Lighthouse accessibility** runs on production builds catch regressions; no VPAT is implied by the codebase.

---

## 8. Quick wins (low regret, ~1–2 weeks)

1. Publish **Awards** MVP or unlink until ready.  
2. **Align** `layout` and **home** meta descriptions to **one** STEM sentence.  
3. **Compress and resize** hero + community images; re-check mobile.  
4. Add **JSON-LD** for the school.  
5. Change **`TbdPage`** primary CTA href from **`/contact`** to **`/request-information`**.

---

## 9. Recommended next-phase improvements

1. **Editorial calendar** for blog/news so the footer **Blog** link resolves to real stories.  
2. **Careers:** postings or a clear external HR link.  
3. **Legal / privacy:** a simple policy page for privacy-conscious parents.  
4. **Donate:** coordinate with advancement—placeholder **costs** credibility.  
5. **Performance budget** for marketing images (e.g. max KB for LCP asset).  
6. **CAPTCHA or rate limits** on inquiry if abuse metrics appear.

---

*Validate performance and accessibility claims on the deployed URL; involve counsel for superlatives and policy pages.*
