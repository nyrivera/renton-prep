# Site audit — frontend ↔ backend crosswalk

Matrix: what the UI shows or expects vs what the server provides. **Source of truth:** codebase after remediation (April 2026).

| Frontend feature / section | Frontend file(s) | Backend / data | Env vars | Actively used? | Notes |
|-----------------------------|------------------|----------------|----------|----------------|-------|
| Home page | `app/page.tsx`, `MarketingHome.tsx`, section components | None (static) | `NEXT_PUBLIC_*` for apply URL | Yes | |
| Request information form | `ContactForm.tsx`, `ContactPageContent.tsx`, `app/request-information/page.tsx` | **`POST /api/contact`** → JotForm submit | None on client | Yes | Contract: `docs/api-contact-jotform.md`. Rate limit per IP (in-memory). |
| Legacy `/contact` URL | `app/contact/page.tsx` | `permanentRedirect` → `/request-information` | — | Yes | |
| Awards page | `app/awards/page.tsx`, `AwardsPageContent.tsx` | None | — | Yes | Lists `recognitions` from `lib/site.ts` only. |
| Blog URL | Footer / `NewsSection` → `site.urls.blog` | — | — | Yes | Instagram; **`/blog`** `permanentRedirect` to Instagram. |
| Careers, Donate, Legal | `*PageContent.tsx` routes | None | — | Yes | Factual contact CTAs; no invented policies or jobs. |
| Testimonials footer link | `site.urls.testimonials` = `/#testimonials` | — | — | Yes | **`/about/testimonials`** redirects to `/#testimonials`. |
| Student stories | `app/about/student-stories/page.tsx` | — | — | Yes | Redirects to `/about`. |
| Community photo grid | `CommunitySection.tsx` | Local `public/` files | — | Yes | HEIC-sourced JPEGs for `community-3`/`community-4` (web-sized). |
| Hero image | `HeroSection.tsx` | `/hero-1.jpeg` (resized for web) | — | Yes | |
| JSON-LD | `SchoolJsonLd.tsx` in `app/layout.tsx` | — | `NEXT_PUBLIC_SITE_URL` for absolute `url` in schema | Yes | `EducationalOrganization`; fields from `lib/site.ts`. |
| Header / footer chrome | `SiteHeader.tsx`, `SiteFooter.tsx` | — | `NEXT_PUBLIC_APPLY_URL` | Yes | Apply defaults to RenWeb in `lib/site.ts`. |
| Google Analytics | `app/layout.tsx` | — | `NEXT_PUBLIC_GA_ID` | If set | Gated by regex. |
| Sitemap | `app/sitemap.ts` | — | `NEXT_PUBLIC_SITE_URL` | Yes | Includes `/request-information`, `/awards`, `/careers`, `/donate`, `/legal`, `/about/genesis`; not `/blog` (external). |
| Robots | `app/robots.ts` | — | `NEXT_PUBLIC_SITE_URL` | Yes | Disallows `/dashboard`, `/api/`. |
| Dashboard placeholder | `app/dashboard/page.tsx` | None | — | Direct URL only | Unlinked from marketing. |
| Removed APIs | — | `/api/score`, `/api/crm` **deleted** | — | — | No longer in repo. |
| JotForm iframe embed | — | — | — | **Removed** | Contact is server POST only. |

## Historical issues (resolved)

1. ~~Sitemap `/contact` vs `/request-information`~~ — sitemap uses `/request-information`.
2. ~~Community filenames~~ — `CommunitySection` paths match `public/` assets.
3. ~~CSP vs JotForm~~ — CSP tuned for GA; JotForm is server-side only.
4. ~~Stub saturation~~ — Awards/careers/donate/legal are real minimal pages; blog → Instagram; testimonials → home anchor.

---

*End of crosswalk document.*
