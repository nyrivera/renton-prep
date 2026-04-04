# Site audit — frontend ↔ backend crosswalk

> **Follow-up:** Matrix rows for `/api/score`, `/api/crm`, client JotForm, and `DATABASE_URL` are **obsolete** after cleanup.

Matrix: what the UI shows or expects vs what the server provides. **Source of truth:** static trace, February 2026 codebase state.

| Frontend feature / section | Frontend file(s) | Backend / data | Env vars | Actively used? | Safe to remove? | Notes |
|-----------------------------|------------------|----------------|----------|----------------|-----------------|-------|
| Home page | `app/page.tsx`, `MarketingHome.tsx`, section components | None (static) | `NEXT_PUBLIC_*` for apply URL only indirectly | Yes | No | |
| Request information form | `ContactForm.tsx`, `ContactPageContent.tsx`, `app/request-information/page.tsx` | **`POST /api/contact`** → JotForm submit | None on client | Yes | No | Field names hard-coded to form `260918035603050`. |
| Legacy /contact URL | `app/contact/page.tsx` | Redirect only | — | Yes | No | `permanentRedirect` to `/request-information`. |
| JotForm iframe embed | `JotForm.tsx` | None (would be `form.jotform.com`) | — | **No** (file unused) | **Yes** (component) after confirm | Superseded by `ContactForm` + API proxy. |
| OpenAI scoring | — | **`POST /api/score`** | `SCORING_API_KEY`, `OPENAI_API_KEY`, `OPENAI_SCORE_MODEL` | **No UI caller in repo** | **Verify** external callers | `openai` npm package only used here. |
| CRM / lead API | — | **`POST /api/crm`** (501) | — | No | **Verify** then remove or implement | Honest stub. |
| Community photo grid | `CommunitySection.tsx` | **Local `public/` files** via `fs.existsSync` | — | **Gate fails** → section null | N/A | **Broken UX:** code expects `.jpg` names; repo has `.jpeg`/`.JPG`/`.heic`. |
| Recognition badges | `MetricsSection.tsx` | Static images in `public/` | — | Yes | No | Microsoft asset uses `..jpeg` filename — fragile. |
| Hero image | `HeroSection.tsx`, `marketing-base.css` | `/hero-1.jpeg` | — | Yes | No | File present. |
| Header / footer chrome | `SiteHeader.tsx`, `SiteFooter.tsx` | — | `NEXT_PUBLIC_APPLY_URL` | Yes | No | Apply defaults to RenWeb in `lib/site.ts`. |
| Google Analytics | `app/layout.tsx` | — | `NEXT_PUBLIC_GA_ID` | If set | No | Gated by regex. |
| Sitemap | `app/sitemap.ts` | — | `NEXT_PUBLIC_SITE_URL` | Yes | No | **Mismatch:** emits `/contact` not `/request-information`; omits `/about/genesis`. |
| Robots | `app/robots.ts` | — | `NEXT_PUBLIC_SITE_URL` | Yes | No | Disallows `/dashboard`, `/api/`. |
| Dashboard placeholder | `app/dashboard/page.tsx` | None | — | Direct URL only | Optional | Not linked from marketing. |
| TBD placeholder pages | `TbdPage.tsx` + route pages | None | — | Yes (as placeholders) | No until content exists | Many `noindex`. |
| Zod JSON schema | — | `lib/schema.ts` | — | **Only `/api/score`** | With score route | Not used by contact. |
| Database | — | **None in code** | `DATABASE_URL` in `.env.example` | **No** | **Yes** from example | No `DATABASE_URL` usage in src. |

## Disconnected / mismatch summary

1. **Contact UX vs sitemap:** Users and `site.urls.contact` use **`/request-information`**; sitemap lists **`/contact`** (redirect). Crawlers and GSC see unnecessary indirection.
2. **Community UX vs files:** Component **expects** five `.jpg` files; **repository** does not provide them under those paths → **feature off**.
3. **JotForm in CSP vs runtime:** CSP still tuned for **browser** JotForm; runtime contact path is **server POST** to `submit.jotform.com` — disconnect (security surface vs reality).
4. **Featured news:** Two cards → same `/awards` URL — frontend presents three stories, two collapse to one destination.
5. **Heart & Mind:** Component complete, **not on home** — disconnect between content asset and layout assembly (`MarketingHome.tsx`).

---

*End of crosswalk document.*
