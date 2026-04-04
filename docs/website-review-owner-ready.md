# Renton Prep — Website quality assessment (owner-ready)

**Prepared for:** School leadership and communications stakeholders  
**Scope:** Product, design, content, accessibility, performance, security, SEO, and business impact — informed by the current Next.js implementation and typical production patterns.  
**Limitation:** This review is **not** a live Lighthouse run or WCAG audit with tooling. **Confirmed** items come from code and configuration; **inferred** items are professional judgments about likely user experience and lab metrics.

---

## 1. Executive summary

Renton Prep’s site presents as a **serious, modern marketing site** with a coherent visual system (typography, color, spacing), a **long homepage** that covers faith, accreditation, STEM, the Genesis Project, admissions hooks, FAQ, and contact paths. Technical foundations are **stronger than average** for a school site: strict security headers, a tightened content security policy, minimal JavaScript dependencies, server-side handling of the inquiry form (reducing third-party embed risk), skip links, and thoughtful mobile navigation behavior.

The **largest business risk** is not visual polish but **expectation management**: the footer and some CTAs point families to **multiple routes that are still placeholders** (“page is being updated”). That pattern **erodes trust** precisely when a parent is comparing schools. A **secondary risk** is **performance on slower connections**: hero and community photography are likely **large byte-weight** assets; without aggressive compression and sizing, **first paint and LCP can lag** on phones.

Overall: **credible and usable**, with **clear upside** from finishing stub pages, tightening copy consistency, optimizing images, and adding structured local/organization data for search.

---

## 2. What is working well

| Area | Observation |
|------|-------------|
| **Visual system** | Defined tokens (color, radius, type scales), consistent button styles, and section rhythm read as **intentional**, not template-default. |
| **Homepage narrative** | Order roughly follows a sensible funnel: **promise (hero) → credibility (recognition / mission / proof points) → differentiation (Genesis, research) → social proof → action (CTA) → community → FAQ → hiring → news.** |
| **Trust signals** | Cognia and Microsoft recognition, mission/vision, and FAQ address **parent questions** directly. |
| **Primary CTAs** | “Request Information” and “Apply” appear in hero, header, CTAs, and footer-adjacent flows — **clear intent**. |
| **Mobile navigation** | Full-screen menu, focus return, escape to close, and body scroll lock are **professional patterns**. |
| **Form UX** | Native inquiry form with validation, error messaging, and success state is **clearer and often faster** than a heavy embedded form. |
| **Security headers** | HSTS, frame denial, nosniff, referrer policy, COOP/CORP, and CSP are **appropriate** for a public school site. |
| **Privacy posture (analytics)** | GA4 ID is **validated by format** before any script loads — reduces misconfiguration and injection risk. |
| **SEO hygiene** | Sitemap lists substantive pages; robots disallows `/api/` and `/dashboard`; stub pages are generally **noindex** in metadata. |

---

## 3. Critical issues

*Issues that materially affect trust, conversions, or clarity. Severity is impact on **prospective families**.*

| Issue | Why it matters | Who it affects | Severity | Type |
|-------|----------------|----------------|----------|------|
| **Footer links to stub pages** (awards, blog, careers, testimonials, student stories, donate, legal, etc.) | Parents expect **substance**; repeated “we’re updating this” reads as **unfinished** and can undermine confidence vs. competitors. | Comparing families, staff applicants, donors | **High** | Trust + content |
| **“Awards and Recognition” → stub** while homepage sells distinction | **Cognitive dissonance**: you claim excellence, then the proof page is empty. | Research-heavy parents | **High** | Trust + content |
| **Metadata wording mismatch** | Root layout default description uses “Cognia STEM-certified” while the homepage OG copy says **“Washington’s first…”** — small but **sloppy** if both surface in search/social. | Search/social click-through | **Medium** | Technical + trust |
| **Large photography assets (inferred)** | Original hero/community files are often **multi‑MB** in similar projects; that **hurts mobile** and **Lighthouse performance** scores. | Mobile users, SEO (Core Web Vitals) | **Medium–High** | Technical + UX |
| **Stub page “Request Information” still routes via `/contact`** | Works (redirect), but **labels and URLs diverge** from the canonical **Request Information** path — minor confusion for analytics and bookmarks. | Internal reporting, some users | **Low–Medium** | Technical |

---

## 4. High-value improvements

1. **Ship or hide stub destinations** — Either publish minimal real pages (even one-screen summaries with PDF links) or **remove footer links** until ready. This single content decision does more for **trust** than most design tweaks.

2. **Image production pipeline** — Export hero and grid images as **WebP/AVIF** (or rely on Next optimization with **reasonable source dimensions**), target **under ~200–400 KB** for above-the-fold hero on mobile where possible.

3. **Unify “Washington’s first…” claims** — Pick **one** canonical phrasing for metadata, hero, and FAQ; have counsel/comms approve **superlative** language.

4. **Local / organization SEO** — Add **JSON-LD** (`School` or `EducationalOrganization`) with address, phone, and sameAs (Instagram, etc.). *Inferred gap* — not seen in layout; common for schools.

5. **Awards page MVP** — Even a **short narrative + bullet list + PDF** beats a placeholder; it closes the loop from “Recognition” CTAs.

---

## 5. Performance observations

**Confirmed (implementation):**

- **Small JS footprint** on the marketing surface: React + Next only; no heavy UI framework on public pages.
- **Fonts:** `next/font` with **display: swap** — good for avoiding invisible text.
- **GA** loads **afterInteractive** — reasonable tradeoff; still third-party cost.

**Inferred (typical Lighthouse concerns without a live run):**

- **LCP** may be **dominated by hero photography** if files are high resolution and large on disk.
- **CLS** risk is **moderate**: responsive grids and `next/image` help; long pages with late-loading images still need spot-checking.
- **TBT/INP** likely **favorable** relative to typical school WordPress sites due to lean dependencies.

**Recommendation:** Run **Lighthouse (mobile)** on production URLs after deploy and treat **image bytes** as the first lever.

---

## 6. Security observations

**Confirmed strengths:**

- **Broad hardening** via `next.config.ts`: CSP (scoped to self + Google tags/analytics in current form), HSTS, XFO DENY, COOP/CORP, restrictive `Permissions-Policy`, `form-action` limited to same-origin for **your** document forms.
- **Inquiry submission** goes **server-side** to JotForm — **reduces** client-side third-party script exposure compared to embedding JotForm directly.
- **Honeypot field** (`website`) in the JotForm proxy payload — **basic bot friction** (not a substitute for CAPTCHA if abuse appears).

**Prudent recommendations (not confirmed incidents):**

- **JotForm field mapping** is **hard-coded** to a specific form ID. If someone edits the JotForm without updating the app, **submissions can fail silently**. Treat form changes as **paired releases** with engineering.
- **Rate limiting** on `/api/contact` is **not** implemented in code reviewed here; if spam spikes, add **edge rate limits** or CAPTCHA.
- **Dependency surface** is **small** — good for supply-chain risk; keep **regular `npm audit`** on the release process.

**Do not overstate:** There is **no evidence** in the codebase of secrets exposed to the browser; `NEXT_PUBLIC_*` vars are the intentional exception pattern.

---

## 7. Accessibility observations

**Confirmed strengths:**

- **`lang="en"`** on `<html>`.
- **Skip link** to `#main-content`.
- **Marketing pages** use landmark-style structure (`main`, `header`, `footer`, section labels).
- **FAQ** uses accordion buttons with **`aria-expanded`**, regions, and keyboard navigation between headers.
- **Contact form** uses associated labels, required field hints, and error text tied to inputs.
- **Focus-visible** styling exists in marketing CSS.
- **Mobile menu** manages focus and escape — **above average**.

**Gaps / risks:**

- **Hero image** uses **`alt=""`** inside an `aria-hidden` decorative wrapper — **acceptable** if the photo is purely decorative; if leadership wants the **classroom scene** described for blind users, add meaningful alt (tradeoff: verbosity on hero).
- **Color contrast** on **muted text** and **footer links** should be **spot-checked** against WCAG AA on real displays (especially gray-on-navy).
- **Very long homepage** increases **navigation fatigue** for keyboard users; consider **in-page “jump”** patterns only if tested (you already anchor nav to sections on home).

**Inferred:** Formal **VPAT** or audit is not evidenced; for families with disabilities, **periodic axe or Lighthouse a11y** runs are advisable.

---

## 8. SEO and discoverability

**Confirmed:**

- **Titles and descriptions** exist at layout and page level; template pattern `%s | Renton Prep` supports inner pages.
- **Sitemap** includes core hubs: home, about, genesis, academics, admissions, request-information, events.
- **Robots** exposes sitemap URL; blocks API and dashboard.
- **Internal linking** is strong via header, footer, and in-content CTAs.

**Gaps:**

- **Structured data** for local school discovery — *likely missing* (not confirmed in files reviewed).
- **Stub pages noindex** helps avoid index bloat but also means **some branded queries** (e.g. careers) may find **nothing** — align with HR strategy.

---

## 9. Owner-facing business impact (summary)

| Stakeholder | What they need | Site support today |
|-------------|----------------|---------------------|
| **Prospective parent** | Clarity, trust, easy next step | Strong story; **risk at stub links** |
| **Admissions** | Leads, phone, apply path | **Request Information** + RenWeb apply — **clear** |
| **Current families** | Events, academics, contact | Hubs exist; **events/academics depth** varies |
| **Staff / donors** | Careers, donate | **Mostly placeholders** — **weak** |
| **Leadership** | Reputation, differentiation | Homepage **strong**; **proof pages incomplete** |

---

## 10. Quick wins (1–2 weeks, low regret)

1. **Awards page MVP** — bullets + downloadable PDF or link to Cognia/Microsoft pages.  
2. **Compress and resize** hero + community images; verify **mobile LCP**.  
3. **Align meta descriptions** (layout vs home) to **one approved superlative sentence**.  
4. **JSON-LD** for school + address + phone.  
5. **Update stub CTA** to link directly to **`/request-information`** for consistency (optional polish).

---

## 11. Recommended next-phase improvements

1. **Content program** for blog / news — even **monthly** posts beat an empty blog link.  
2. **Careers** — minimum viable postings or link to **district HR** if applicable.  
3. **Legal / privacy** — even a **simple policy page** reduces anxiety for privacy-conscious parents.  
4. **Donate** — partner with development office; **placeholder hurts fundraising**.  
5. **Performance budget** — set max KB for LCP image and enforce in design handoff.  
6. **Optional CAPTCHA** on inquiry if spam becomes measurable.

---

## 12. Closing note

This site **already communicates identity and rigor** better than many peer schools. The gap is not “does it look professional?” but “**does every link earn the family’s trust?**” Finishing or temporarily **hiding** incomplete destinations will sharpen the **entire** perception of the institution.

---

*Document generated from codebase review; validate critical claims with live production checks and your communications counsel.*
