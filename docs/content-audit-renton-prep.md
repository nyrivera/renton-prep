# Renton Prep — Content & Component Audit
**Date:** April 2026  
**Status:** Living document. **Revised April 2026** after remediation: real **awards**, **careers**, **donate**, and **legal** pages; **`/blog`** redirects to Instagram; **`/about/testimonials`** → `/#testimonials`; **`/about/student-stories`** → `/about`; admissions/events/academics hubs no longer use “being updated” copy; **`/dashboard`** removed; **`public/`** ships web JPEG/PNG only (HEIC camera files are gitignored—keep masters outside the repo or locally). Spot-check line numbers when you edit files.

**Purpose:** Map every live claim, identify inconsistencies, and define a prioritized implementation plan before content updates.

---

## Table of Contents
1. [Repository File Map](#1-repository-file-map)
2. [Page & Route Inventory](#2-page--route-inventory)
3. [Homepage Section Ownership](#3-homepage-section-ownership)
4. [Data / Content Source Map](#4-data--content-source-map)
5. [Terminology Inconsistencies](#5-terminology-inconsistencies)
6. [Risk Notes — Outdated or Misleading Claims](#6-risk-notes--outdated-or-misleading-claims)
7. [Recommended Implementation Order](#7-recommended-implementation-order)

---

## 1. Repository File Map

### Pages (`app/`)
```
app/
├── page.tsx                        Homepage → <MarketingHome />
├── layout.tsx                      Root layout, metadata, GA, JSON-LD, CSP via next.config
├── robots.ts                       Robots.txt (disallows /api/)
├── sitemap.ts                      XML sitemap
├── loading.tsx                     Root loading skeleton
├── about/
│   ├── page.tsx                    /about → <AboutSchoolContent />
│   ├── genesis/page.tsx            /about/genesis → <GenesisProjectContent />
│   ├── student-stories/page.tsx    redirect → /about
│   └── testimonials/page.tsx       redirect → /#testimonials
├── academics/page.tsx              /academics → <AcademicsHubContent />
├── admissions/page.tsx             /admissions → <AdmissionsHubContent />
├── awards/page.tsx                 /awards → <AwardsPageContent />
├── blog/page.tsx                   permanentRedirect → Instagram (site.urls.blog)
├── careers/page.tsx                /careers → <CareersPageContent />
├── contact/page.tsx                permanentRedirect → /request-information
├── donate/page.tsx                 /donate → <DonatePageContent />
├── events/page.tsx                 /events → <EventsHubContent />
├── legal/page.tsx                  /legal → <LegalPageContent />
├── request-information/page.tsx    <ContactPageContent /> + ContactForm → POST /api/contact
└── api/contact/route.ts            JotForm proxy + rate limit (see docs/api-contact-jotform.md)
```

### Marketing Components (`components/marketing/`)
```
components/marketing/
├── MarketingHome.tsx               Assembles all homepage sections in order
├── MarketingShell.tsx              Wraps header + footer around hub/page content
├── MarketingLink.tsx               Smart link (scroll vs Next router)
├── SiteHeader.tsx                  Global nav (NAV_LINKS), logo, CTA
├── SiteFooter.tsx                  4-column footer grid, brand, copyright
├── HeroSection.tsx                 Homepage hero — main heading, CTA buttons
├── MetricsSection.tsx              4 stat/badge tiles
├── WhyChooseSection.tsx            4-bullet recognition list + "Awards & Hoopla" CTA
├── MissionSection.tsx              Mission / Vision / Action 3-card layout
├── FeaturesSection.tsx             6 feature cards ("What Sets Us Apart")
├── GenesisSection.tsx              Genesis Project overview + terminal visual
├── ResearchSection.tsx             4 research-backed method cards
├── TestimonialsSection.tsx         3 parent quote cards
├── CtaSection.tsx                  Primary homepage CTA block + 3 action tiles
├── HiringSection.tsx               "We're Hiring!" section
├── CommunitySection.tsx            4-photo grid when /public assets exist
├── HeartAndMindSection.tsx         "Relational teaching, anchored in truth"
├── NewsSection.tsx                 3 featured news cards (from lib/site.ts)
├── FaqSection.tsx                  Accordion FAQ (data from faq-content.tsx)
├── faq-content.tsx                 All 21 FAQ questions & answers (data file)
├── AboutSchoolContent.tsx          /about page — 5 history sections
├── AcademicsHubContent.tsx         /academics — technology, elementary, supply lists (office CTAs)
├── AdmissionsHubContent.tsx        /admissions — tuition, apply, uniforms, handbook (office CTA)
├── AwardsPageContent.tsx           /awards — recognitions from lib/site.ts
├── CareersPageContent.tsx          /careers — inquiry CTAs (no job board)
├── DonatePageContent.tsx           /donate — contact path only
├── LegalPageContent.tsx            /legal — contact / privacy routing only
├── ContactPageContent.tsx          /request-information — ContactForm + office details
├── EventsHubContent.tsx            /events — school hours & calendar (office CTAs)
├── GenesisProjectContent.tsx       /about/genesis — deep-dive page
└── SchoolJsonLd.tsx                EducationalOrganization script (layout)
```

### Data & Config (`lib/`)
```
lib/
├── site.ts             School identity, all URLs, recognitions, mission/vision/action,
│                       microcopy, featured news — PRIMARY CONTENT SOURCE
├── tuition.ts          Tuition rates, school year, extended care rate
├── school-history.ts   Timeline milestones array (1953–2020)
└── (API responses inline in route handlers)
```

### Other
```
public/                 Web assets only: logo, hero/community JPEGs, badge images (*.heic gitignored)
next.config.ts          Security headers, CSP policy, image config
.env.example            Env var documentation
docs/                   Audits, api-contact-jotform.md, implementation reports
```

---

## 2. Page & Route Inventory

| Route | Status | Real Content | noindex | Notes |
|-------|--------|-------------|---------|-------|
| `/` | ✅ Live | Yes — homepage sections | No | `MarketingHome` |
| `/about` | ✅ Live | School history | No | `AboutSchoolContent` |
| `/about/genesis` | ✅ Live | Genesis deep-dive | No | `GenesisProjectContent` |
| `/about/student-stories` | ↪ Redirect | → `/about` | No | Bookmark preservation |
| `/about/testimonials` | ↪ Redirect | → `/#testimonials` | No | Family quotes on home |
| `/academics` | ✅ Live | Technology + elementary + supply list guidance | No | Office/admissions CTAs |
| `/admissions` | ✅ Live | Tuition, apply, uniforms, extended care, handbook CTA | No | `AdmissionsHubContent` |
| `/awards` | ✅ Live | Recognitions aligned with site copy | No | `AwardsPageContent` |
| `/blog` | ↪ Redirect | → Instagram | No | `site.urls.blog` |
| `/careers` | ✅ Live | Careers inquiry copy | No | `CareersPageContent` |
| `/request-information` | ✅ Live | `ContactForm` → `POST /api/contact` | No | JotForm proxy |
| `/contact` | ✅ Redirect | → `/request-information` | No | Legacy URL |
| `/donate` | ✅ Live | Support inquiry (contact path) | No | `DonatePageContent` |
| `/events` | ✅ Live | Hours & calendar (office CTAs) | No | `EventsHubContent` |
| `/legal` | ✅ Live | Legal/privacy contact routing | No | `LegalPageContent` |

**Footer and CTAs** now land on real pages, Instagram, or office/admissions contact paths—not generic “under construction” screens.

---

## 3. Homepage Section Ownership

Sections render in this order inside `MarketingHome.tsx`:

| Order | Section | Component | Notes |
|-------|---------|-----------|-------|
| 1 | Hero | `HeroSection` | |
| 2 | Recognition | `MetricsSection` | Badges + copy |
| 3 | Why Choose | `WhyChooseSection` | `lib/site.ts` recognitions |
| 4 | Mission | `MissionSection` | `missionVisionAction` |
| 5 | Features | `FeaturesSection` | |
| 6 | Genesis | `GenesisSection` | |
| 7 | Research | `ResearchSection` | |
| 8 | Testimonials | `TestimonialsSection` | |
| 9 | CTA | `CtaSection` | |
| 10 | Community | `CommunitySection` | Photo grid when assets exist |
| 11 | FAQ | `FaqSection` | `faq-content.tsx` |
| 12 | Heart & Mind | `HeartAndMindSection` | |
| 13 | Hiring | `HiringSection` | |
| 14 | News | `NewsSection` | `featuredNews` |

**Key insight:** Most homepage content is hardcoded directly in components. The only centralized data files are `lib/site.ts` (identity, URLs, mission, recognitions, news) and `faq-content.tsx` (FAQ). To update most homepage copy, you must edit the individual component file.

---

## 4. Data / Content Source Map

### Centralized (edit one file → updates everywhere)

| Data | File | Key Fields |
|------|------|-----------|
| School name, address, phone | `lib/site.ts` | `site.name`, `site.legalName`, `site.address`, `site.phone` |
| All internal URLs | `lib/site.ts` | `site.urls.*` |
| Mission, Vision, Action | `lib/site.ts` | `missionVisionAction.mission/vision/action` |
| Recognition bullets | `lib/site.ts` | `recognitions[]` (4 items) |
| Microcopy strings | `lib/site.ts` | `microcopy.noCommitment`, `microcopy.noCommitmentFull` |
| Featured news (3 items) | `lib/site.ts` | `featuredNews[]` |
| Apply portal URL | `.env.example` + Vercel env | `NEXT_PUBLIC_APPLY_URL` |
| Tuition rates + year | `lib/tuition.ts` | `tuition.programs[]`, `tuition.schoolYear`, `tuition.extendedCareRate` |
| School history milestones | `lib/school-history.ts` | `SCHOOL_HISTORY_MILESTONES[]` |
| All FAQ questions + answers | `components/marketing/faq-content.tsx` | `FAQ_GROUPS[]`, `FAQ_SIDEBAR[]` |

### Hardcoded (must edit the component directly)

| Content | Component | Notes |
|---------|-----------|-------|
| Hero headline + tagline | `HeroSection.tsx` | Core brand statement |
| 4 metric tile labels | `MetricsSection.tsx` | Awards claims |
| 6 feature cards | `FeaturesSection.tsx` | Differentiators |
| Genesis Project overview | `GenesisSection.tsx` | Homepage teaser |
| 4 research method cards | `ResearchSection.tsx` | Curriculum claims |
| 3 testimonial quotes | `TestimonialsSection.tsx` | Attribution text |
| CTA headings + copy | `CtaSection.tsx` | |
| Hiring intro copy | `HiringSection.tsx` | |
| Heart & Mind prose | `HeartAndMindSection.tsx` | |
| School history prose | `AboutSchoolContent.tsx` | Paragraphs between milestones |
| Academics hub copy | `AcademicsHubContent.tsx` | Links to Genesis + admissions; office CTAs for lists |
| 7 nav link labels | `SiteHeader.tsx` → `NAV_LINKS` | |
| 4 footer column labels/links | `SiteFooter.tsx` | |

---

## 5. Terminology Inconsistencies

### 5.1 "microschool" vs "micro-school"

**Current state:**

| Location | Term Used |
|----------|-----------|
| `lib/site.ts` recognitions (lines 67, 78) | `micro-school` |
| `HeroSection.tsx` (line 21) | `micro-school` |
| `WhyChooseSection.tsx` (line 13) | `micro-school` |
| `SiteFooter.tsx` (line 27) | `micro-school` |
| `faq-content.tsx` FAQ title + body | `microschool` (no hyphen) |

**Recommendation:** Standardize on **`microschool`** (no hyphen). This aligns with the FAQ's own definition answer, matches the FAQ the school approved, and reflects the current style in education publishing. Update `lib/site.ts` recognitions and the 3 hardcoded component instances.

---

### 5.2 "Genesis Project" vs "Genesis AI" vs "Genesis AI Project"

**Current state:**

| Location | Term Used |
|----------|-----------|
| `SiteHeader.tsx` `NAV_LINKS` | `"The Genesis Project"` |
| `app/page.tsx` metadata | Uses shared `defaultSiteDescription` from `lib/site.ts` |
| `app/layout.tsx` description | Same `defaultSiteDescription` |
| `MetricsSection.tsx` aria-label | `"Genesis AI literacy program"` |
| All other components + `/about/genesis` page | `"The Genesis Project"` |

**Status:** Nav uses **"The Genesis Project."** Keep metadata and body copy aligned; avoid reintroducing "Genesis AI" as the canonical name unless space is extremely constrained.

---

### 5.3 "Microsoft Flagship" vs "Microsoft Showcase"

**Current state:**

| Location | Term Used |
|----------|-----------|
| `lib/site.ts` tagline | `"A Premier Microsoft Showcase School"` |
| `app/page.tsx` page title | `"A Premier Microsoft Showcase School"` |
| `HeroSection.tsx` | `"Microsoft Showcase School"` |
| `MetricsSection.tsx` tile 1 | `"Microsoft Showcase School"` |
| `lib/site.ts` recognitions | `"First U.S. K–12 school selected as a Microsoft Flagship School"` |
| `MetricsSection.tsx` tile 4 | `"Microsoft Flagship School (U.S.)"` |
| `GenesisProjectContent.tsx` | `"The only K–12 Microsoft Flagship School in the United States"` |

**Assessment:** These are two separate, real designations:
- **Showcase School** — international designation; still current
- **Flagship School** — a more specific/advanced U.S. designation; needs verification that it is still active

**Risk:** If "Flagship School" status has changed or lapsed, claiming it on the page is a credibility issue. **Owner should confirm both designations are current before next deploy.**

---

### 5.4 "K–12" grade span

**Current state:** Mostly consistent with en-dash (`K–12`). Elementary range described as `"Kindergarten Prep – 5th Grade"` in tuition and `"K prep–5th"` in metric tiles.

**Recommendation:** No action needed for `K–12`. For elementary, standardize on **"Kindergarten Prep – 5th Grade"** (spelled out, matches tuition table) as the full form and `"K Prep–5"` as the abbreviated form.

---

### 5.5 "Awards & Hoopla"

**Current state:** Consistent across footer and `WhyChooseSection.tsx`.

**Status:** `/awards` is a real page (`AwardsPageContent`) aligned with `recognitions` in `lib/site.ts`. Footer and "Awards and Recognition" CTA are no longer dead ends.

---

### 5.6 "We're Hiring!" vs "Careers"

**Current state:** Contextually appropriate — "We're Hiring!" is the section heading; "Careers" is the nav/footer label. No conflict.

**Status:** `/careers` is a real inquiry page (`CareersPageContent`). `HiringSection` → "View Careers" is consistent with that experience.

---

### 5.7 Dr. Michelle Zimmerman vs Dr. David Zimmerman

**Current state:**
- **Dr. Michelle Zimmerman, PhD** — identified in `GenesisProjectContent.tsx` as "internationally recognized voice in AI and education," author of *Teaching AI: Exploring New Frontiers in Education*, and leader of the Genesis Project
- **Dr. David Zimmerman** — signed at the bottom of the "How to Apply" section in `AdmissionsHubContent.tsx`, no title or role given

**Risk:** Dr. David Zimmerman's role is never stated in the component. A prospective parent reading the admissions page sees a signature from someone with no identified title. **Add a title or role** (e.g., Head of School, Admissions Director) to the signature block.

---

## 6. Risk Notes — Outdated or Misleading Claims

### 🔴 HIGH RISK

**R1 — Microsoft Flagship School claim**
File: `lib/site.ts` (line 72), `GenesisProjectContent.tsx` (line 301), `MetricsSection.tsx` (line 43)
Claim: "First U.S. K–12 school selected as a Microsoft Flagship School" / "The only K–12 Microsoft Flagship School in the United States"
Risk: If this designation is no longer active, current, or verifiable via Microsoft's official page, it is a misleading claim on a production website. The "only" qualifier in `GenesisProjectContent.tsx` is particularly high-risk.
**Action required:** Owner must verify current status at microsoft.com and provide documentation before this claim stays live.

**R2 — News items all dated "March 2026" with no article content**
File: `lib/site.ts` (lines 88-102)
Current state: 3 news items with the same date and no linked articles (all href to `/about`, not actual blog posts).
Risk: A prospective parent clicking any news item lands on the generic About page, not an article. This is a broken user experience and looks unprofessional.
**Action required:** Either link to real content, remove the news section until blog is live, or replace with a "Blog coming soon" single card.

**R3 — Testimonials are unattributed placeholder quotes**
File: `TestimonialsSection.tsx`
Current state: 3 parent quotes attributed to "Parent of 3rd Grader · Enrolled Family", "Parent of Two Students · Enrolled Family", "Parent of 5th Grader · Enrolled Family" — no names, dates, or verification.
Risk: Generic attribution with no names is a common pattern for placeholder copy. If these are real quotes, they need proper consent and attribution. If they are placeholder text, they must be replaced before the site is fully public.
**Action required:** Confirm with owner whether these are real parent quotes. If yes, add at least first name and year. If placeholder, replace before removing noindex from the site.

---

### 🟡 MEDIUM RISK

**R4 — School history timeline ends in 2020**
File: `lib/school-history.ts`
Current state: The "Key Moments" timeline on `/about` ends with "2020 — Transition to remote learning during the pandemic." Nothing for 2021–2026.
Risk: Gives the impression the school's notable progress ended in 2020. Cognia STEM certification renewal, Genesis Project launch, and other 2021–2026 milestones are missing.
**Action required:** Add milestones for 2021–2026 (at minimum: Cognia STEM renewal, Genesis Project launch year, Microsoft re-designation if applicable).

**R5 — Dr. David Zimmerman signature lacks a title**
File: `AdmissionsHubContent.tsx` (line 148)
Current state: Signed "Dr. David Zimmerman" with no role.
Risk: Ambiguous to prospective families; does not convey authority or role.
**Action required:** Add title (e.g., "Head of School" or "Director of Admissions").

**R6 — "6 Year Cognia STEM Certification Renewal" in news**
File: `lib/site.ts` (line 93)
Current state: Featured news headline reads "Celebrating our 6 Year Cognia STEM Certification Renewal" (March 2026).
Risk: If the certification renewal was in a different year or the "6 year" figure is incorrect, this is a verifiable factual error.
**Action required:** Owner should confirm the certification year count is accurate.

**R7 — Tuition listed as 2026–2027 with asterisked finance charge**
File: `lib/tuition.ts`
Current state: Rates shown as $16,750/year for "Kindergarten Prep – 5th Grade." Only one program listed (no middle/high school rates).
Risk: The site presents as a K–12 school but only shows elementary tuition. Families of middle/high school students have no published rates.
**Action required:** Add tuition rows for middle school and high school, or add a note directing families to call for grades 6–12 rates.

**R8 — `/academics` depth** *(reduced — April 2026)*
File: `AcademicsHubContent.tsx`
Current state: Technology points to the Genesis Project and home anchors; elementary links to admissions; supply lists direct families to the office. No invented curriculum detail.
Residual risk: Power users may still want downloadable PDFs or grade-specific copy on-site. **Action:** Add PDFs or expanded copy when admissions provides them.

---

### 🟢 LOW RISK / INFORMATIONAL

**R9 — Community photography**
File: `CommunitySection.tsx`
Current state: Four real photos from `public/community-*` when files exist (JPEG/JPG).
Residual risk: Refresh imagery over time for freshness. **Action:** Replace assets in `public/` when marketing supplies new exports (keep HEIC masters outside the repo).

**R10 — "Genesis Project" badge says "New Program"**
File: `GenesisSection.tsx`
Current state: A badge reads "New Program" on the homepage.
Risk: If Genesis Project has been running for more than a year, calling it "new" may be inaccurate.
**Action required:** Owner should confirm if "New Program" badge is still appropriate; if not, remove or replace with "Signature Program."

**R11 — Extended care end-time is 4:15 PM**
File: `AdmissionsHubContent.tsx` (line 204)
Current state: After school care listed as 3:45–4:15 p.m.
Risk: 30 minutes is unusually short for after-school care. Verify this is correct; if it's actually 3:45–5:30 p.m. or similar, it's a factual error that could frustrate families.
**Action required:** Owner to confirm hours.

**R12 — Tuition page shows no middle/high school grades**
See R7 above; also noted for the financial aid section which refers generally to "new students" without specifying which grades this applies to.

---

## 7. Recommended Implementation Order

Grouped by impact and effort. Address in order.

---

### Phase 1 — Fix Immediately (Before Any Marketing Push)

These are live claims or dead links that could hurt credibility right now.

| # | Task | File(s) | Risk |
|---|------|---------|------|
| 1 | Verify and update Microsoft Flagship status claim | `lib/site.ts`, `GenesisProjectContent.tsx`, `MetricsSection.tsx` | 🔴 R1 |
| 2 | Replace 3 news items with real links or remove section until blog is live | `lib/site.ts` featuredNews | 🔴 R2 |
| 3 | Confirm testimonials are real quotes; add names or replace with real ones | `TestimonialsSection.tsx` | 🔴 R3 |
| 4 | Add Dr. David Zimmerman's title to admissions signature | `AdmissionsHubContent.tsx` | 🟡 R5 |
| 5 | Add middle/high school tuition rows or note directing to phone | `lib/tuition.ts`, `AdmissionsHubContent.tsx` | 🟡 R7 |

---

### Phase 2 — Content Completeness (Next Sprint)

| # | Task | File(s) | Notes |
|---|------|---------|-------|
| 6 | Add 2021–2026 milestones to school history timeline | `lib/school-history.ts` | Genesis Project launch, Cognia renewal |
| 7 | ~~Academics stubs~~ | `AcademicsHubContent.tsx` | **Done:** Genesis + admissions + office CTAs |
| 8 | ~~Awards page~~ | `app/awards/page.tsx` | **Done:** `AwardsPageContent` |
| 9 | ~~Careers page~~ | `app/careers/page.tsx` | **Done:** `CareersPageContent` |
| 10 | ~~Blog / news~~ | `NewsSection.tsx`, `app/blog/page.tsx` | **Done:** News CTA → Instagram; `/blog` redirects |

---

### Phase 3 — Terminology Cleanup

Low-risk, high-polish. Can be done in one pass.

| # | Task | File(s) | Change |
|---|------|---------|--------|
| 11 | Standardize `micro-school` → `microschool` | `lib/site.ts`, `HeroSection.tsx`, `WhyChooseSection.tsx`, `SiteFooter.tsx` | 4 files, ~5 occurrences |
| 12 | Standardize "Genesis AI" → "The Genesis Project" in nav | `SiteHeader.tsx` NAV_LINKS | 1 change |
| 13 | Update page title to use "The Genesis Project" | `app/page.tsx` metadata | 1 change |
| 14 | Remove or replace "New Program" badge if Genesis Project is established | `GenesisSection.tsx` | 1 change |
| 15 | Confirm "6 Year Cognia STEM" phrasing is accurate | `lib/site.ts` featuredNews | Owner verification needed |

---

### Phase 4 — Deeper pages (when content is ready)

| # | Page | Priority | Notes |
|---|------|----------|-------|
| 16 | `/about/testimonials` | Medium | **Redirect** to `/#testimonials`; optional standalone page later |
| 17 | `/about/student-stories` | Medium | **Redirect** to `/about`; build when stories exist |
| 18–22 | Awards, blog, careers, legal, donate | — | **Shipped** as real pages or Instagram redirect (see §2) |

---

### Phase 5 — Nice-to-Have Polish

| # | Task | Notes |
|---|------|-------|
| 23 | Replace community tile placeholders with real school photos | `CommunitySection.tsx` |
| 24 | Confirm extended care hours (3:45–4:15 p.m. seems short) | `AdmissionsHubContent.tsx` |
| 25 | Add Instagram real photo feed (replace placeholder tiles) | `CommunitySection.tsx` |
| 26 | Consider moving microcopy strings to `lib/site.ts` | Currently in `CtaSection.tsx` |
| 27 | Move hardcoded feature cards / research cards to `lib/` data file | Easier future edits |

---

## Appendix: Full Terminology Reference

| Canonical Term | Variations Found | Recommended |
|---------------|-----------------|-------------|
| Microschool | micro-school, microschool | `microschool` |
| The Genesis Project | Genesis AI, Genesis AI Project, Genesis Project for AI literacy | `The Genesis Project` (full); `Genesis Project` (shortened) |
| Microsoft Showcase School | Showcase School | Keep as-is; needs owner verification |
| Microsoft Flagship School | Flagship School | Keep; verify current status |
| K–12 | K-12 | Use en-dash `K–12` always |
| Kindergarten Prep – 5th Grade | K prep–5th, K–5 | Use spelled-out form in content |
| Dr. Michelle Zimmerman, PhD | (none) | Always include credentials when first referenced |
| Dr. David Zimmerman | (none) | Always include role/title |
| Mission, Vision, and Action | Mission, Vision, & Action | Match context (prose vs nav label) |
| Awards & Hoopla | (none) | Intentional brand voice — keep |

---

*Audit maintained as the site evolves. Risk tables (R1–R12) still need owner verification where marked. Implementation status in §2 and Phase tables updated April 2026.*
