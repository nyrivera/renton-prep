# Site cleanup plan — phased (Renton Prep)

> **Status (April 2026):** Phases **1–3 (partial)** were executed: dead components/APIs removed, CSP tightened, community grid + assets fixed, sitemap updated, `HeartAndMindSection` restored, Microsoft badge renamed, featured-news href split, `.env.example` cleaned, `openai`/`zod` removed. Re-run verification in your environment after deploy.

**Rule:** Execute in order; verify after each phase. Do not skip verification on items marked “verify.”

---

## Phase 1 — No-risk / low-regret cleanup

| Action | Files | Rationale | Risk | Verify |
|--------|-------|-----------|------|--------|
| Remove unused `firstRef` from `ContactForm` (or use it) | `components/marketing/ContactForm.tsx` | Dead ref | None | Lint |
| Delete or quarantine **unused components** | `JotForm.tsx`, `LogoShield.tsx` | Zero imports | Low — **search monorepo** for imports first | `rg JotForm`, `rg LogoShield` |
| Remove **orphaned CSS** | `marketing-sections.css`: `.trust-logos`, `.insta-placeholder` if confirmed unused | Dead styles | None | Grep TSX |
| Drop **`DATABASE_URL`** from `.env.example` | `.env.example` | No code reference | Low | Grep + hosting env dashboard |
| Update **internal doc** `content-audit-renton-prep.md` | `docs/content-audit-renton-prep.md` | States JotForm embed on contact — **wrong** vs `ContactForm` | None | Read diff |

**Risk level:** Low (after grep confirms no external package imports).

---

## Phase 2 — Low-risk fixes (UX / SEO / assets)

| Action | Files | Rationale | Risk | Verify |
|--------|-------|-----------|------|--------|
| **Fix community photos** — rename files to match `CommunitySection` **or** change `photos[]` to actual filenames | `public/*`, `CommunitySection.tsx` | Section currently **never renders** | Low–medium | Visual check home below FAQ area; `photosExist()` true |
| **Normalize Microsoft badge filename** | `public/`, `MetricsSection.tsx` | Remove `..jpeg` accident | Low | Image loads, build passes |
| **Sitemap:** use `/request-information` instead of `/contact`; add `/about/genesis` | `app/sitemap.ts` | Align with canonical routes | Low | Fetch `/sitemap.xml` |
| **Featured news:** give second/third items distinct `href` or merge cards | `lib/site.ts` | Avoid duplicate “Read more” target | Low | Click all three cards |
| **Either** add `HeartAndMindSection` to `MarketingHome` **or** delete component and doc references | `MarketingHome.tsx`, `HeartAndMindSection.tsx`, docs | Remove ghost content | Medium (stakeholder) | Product approval |

**Risk level:** Low to medium (Heart & Mind = content decision).

---

## Phase 3 — Backend reduction (after verification)

| Action | Files | Rationale | Risk | Verify |
|--------|-------|-----------|------|--------|
| Remove `/api/crm` if no monitors/webhooks | `app/api/crm/route.ts` | Always 501 | **Verify** logs / Vercel analytics | 30-day log check |
| Remove `/api/score` + `openai` + trim `zod` if only score used | `app/api/score`, `package.json`, `lib/schema.ts` | No in-repo consumer | **High without product sign-off** | Confirm no external API clients |
| **Tighten CSP** after confirming no JotForm browser embed | `next.config.ts` | Smaller attack surface | Medium | Manual smoke: home, form submit, GA |
| Add **comment or test** documenting JotForm field contract | `app/api/contact/route.ts` | Prevent silent breakage | None | Form submit + JotForm inbox |

**Risk level:** Medium–high for score route removal; low for CRM if unused.

---

## Phase 4 — UX / content (stakeholder-led)

| Action | Scope | Rationale | Risk | Verify |
|--------|-------|-----------|------|--------|
| Replace TbdPages with real content or remove footer links | Multiple routes + `SiteFooter` | Reduce “under construction” fatigue | Medium | Content calendar |
| Audit RenWeb **apply URL** in repo | `lib/site.ts`, `.env.example` | Query params may be sensitive/rotatable | Medium | Admissions owner |
| Mobile regression pass | Full marketing CSS | User-reported layout issues | Low | Device lab |

---

## Recommended sequence (summary)

1. Phase 1 (grep + dead files + CSS + env example).  
2. Phase 2 community + sitemap + badge filename (immediate UX win).  
3. Heart & Mind: **decision** then implement.  
4. Phase 3: logs → CRM → CSP → score (only with sign-off).  
5. Phase 4: content strategy.

---

*End of cleanup plan.*
