# Grokbot
First grock bot

---

## Aria Appliance Repair — Variant B

Variant B of the Aria Appliance Repair (iSmart Leads CL-0008) marketing site A/B test. Variant A (control) is live on
`staging.ariaappliancerepair.com`; this repo is an independent, from-scratch build of B — it does not reuse A's source.

- **Stack:** Astro 7 static site (SSG), TypeScript, plain scoped CSS. No framework runtime, no Tailwind, no WordPress.
- **Trade / market:** residential appliance repair + install · **Vaughan, Ontario only** (Woodbridge is a neighbourhood of Vaughan).
- **Status:** production-ready static build. **Not deployed** — the Web bot deploys `dist/` as Variant B later.
- **How B differs from A and the Designer comps:** see [`AB-NOTES.md`](./AB-NOTES.md).

### Run locally

Requires Node **22.12+** (`.nvmrc` pins 22).

```bash
npm install
npm run dev       # http://localhost:4321 with hot reload
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
npm run check     # astro check (TypeScript + template diagnostics)
npm run images    # build WebP/AVIF variants after dropping real photos in public/images/
```

### Environment

Copy `.env.example` to `.env` (all optional):

| Variable | Default | Effect |
| --- | --- | --- |
| `SITE_URL` | `https://ariaappliancerepair.com` | Canonical URLs, Open Graph URLs, sitemap, JSON-LD. |
| `PUBLIC_NOINDEX` | `false` | `true` for staging/preview builds: `noindex, nofollow` on every page and a Disallow-all `robots.txt`. |
| `PUBLIC_FORM_ENDPOINT` | empty | CRM endpoint. Empty = honest pending mode (see below). Set = the form POSTs there. |

### Deploying (for the Web bot)

`npm run build` produces a fully static `dist/` (directory-style URLs with trailing slashes, e.g. `/services/washer/`).
Upload `dist/` as-is to any static host.

- `dist/.htaccess` (Apache 2.4) sets `ErrorDocument 404 /404.html`, immutable caching for hashed `/_astro/*` assets,
  and `nosniff` / `Referrer-Policy` headers. On nginx, mirror it with `error_page 404 /404.html;` and a long
  `Cache-Control` on `/_astro/`.
- For a staging host, build with `PUBLIC_NOINDEX=true SITE_URL=https://<staging-host> npm run build`.
- `<html data-variant="B">` and `<meta name="ab-variant" content="B">` identify the variant. Every Call/Request link has
  a `data-track` attribute (`call-hero`, `request-hero`, `call-sticky`, `request-sticky`, `call-mid`, `call-header`,
  `request-email-compose`, …) so analytics can be attached without touching markup.

### Page map

| URL | Page | Sections |
| --- | --- | --- |
| `/` | Home | Full-bleed hero (Call + Request, hours/area chips, trust row, 01–08 service rail) → services 01–08 cards → 6 symptoms → 3-step process + "have these handy" → 3 promise cards → About teaser + NAP card → brand pills → mid CTA → FAQ ×5 → footer NAP |
| `/services/` | Services index | Hero → 8 detailed cards (top 3 symptoms each) → scope comparison table → process → out of scope (no gas / no HVAC / Vaughan only) → CTA |
| `/services/refrigerator/` | Service template (depth reference) | Hero → symptoms ×6 + "before we arrive" tip → what's included ×6 + parts we test + scope boundary + warranty card → process ×3 → brands → FAQ ×3–4 → related ×3 → CTA |
| `/services/oven-stove/` `/washer/` `/dryer/` `/dishwasher/` `/range-hood/` `/steam-unit/` `/sauna-unit/` | Service templates | Same template, appliance-specific copy. Brand pills are omitted on steam/sauna (those brands don't make them). |
| `/about/` | About | Hero → story + facts panel (08 lanes · 7 days · 1 city · 0 gas/HVAC) → four working habits → do / don't scope → promise cards → CTA |
| `/service-area/` | Service area | Hero → Vaughan neighbourhoods + outside-Vaughan note → hours table (not 24/7) + after-hours safety steps → coverage FAQ → CTA |
| `/contact/` | Contact | Hero + direct-line NAP panel → request form (left) + phone-first card, why-call, what happens next, area clarity (right) |
| `/thank-you/` | Thank-you | `noindex`, excluded from sitemap. Target for the CRM redirect. |
| `/404` | Not found | Service cards + call path. |

Also generated: `/sitemap-index.xml`, `/robots.txt`.

### Business locks — single source of truth

All NAP and scope facts come from [`src/config/site.ts`](./src/config/site.ts); pages never hard-code them.

- Phone **+1-888-642-0352** · `tel:+18886420352`
- Hours **Monday–Sunday, 8:00am–10:00pm** — never 24/7 (copy only ever says "not 24/7")
- Area **Vaughan only**; Woodbridge, Maple, Concord, Kleinburg, Vellore Village, Thornhill (Vaughan side), VMC listed as Vaughan neighbourhoods (edit `area.neighbourhoods`)
- Email **contact@ariaappliancerepair.com**
- Services **01–08 only** (`src/data/services.ts`): Refrigerator · Oven & Stove (electric only) · Washer · Dryer (electric) · Dishwasher · Range Hood · Steam Unit · Sauna Unit
- Bans honoured: no gas-line work, no HVAC/furnace/AC, no franchise orange, no invented reviews/ratings/stars, no prices, no warranty day-counts ("parts & labour warranty stated on invoice"), no draft strings.

### Responsive-audit kills addressed

| # | Variant A fail (RESPONSIVE-AUDIT.md) | Variant B fix | Where |
| --- | --- | --- | --- |
| 1 | Hard 50/50 hero, nav trapped in left half | Full-width header (logo · nav · phone across the frame). ≥1100: full-bleed cooktop still under an ink scrim, copy overlay capped at 680px with a 4px teal **left** accent. <1100: photo band then copy. Interiors use a 58/42 split, never 50/50. | `pages/index.astro`, `components/Header.astro`, `components/PageHero.astro` |
| 2 | Scroll-reveal `opacity:0` hiding trust/promise | No reveal system at all. Every band and card renders at `opacity:1`; the only motion is hover/focus transitions, disabled under `prefers-reduced-motion`. Verified: zero elements under opacity 1 in `<main>` at 6 widths. | `styles/global.css`, `components/PromiseCards.astro` |
| 3 | Mobile sticky covering hero CTAs / double pairs | Sticky Call/Request (<768 only) shows **only when no Call/Request group is on screen** — hidden at ATF, shown after `#hero-ctas` leaves, hidden again over the mid/footer CTA bands and while the contact form is visible or focused. `body` always reserves `72px + safe-area`. Mobile header carries Logo + Menu only, so there is exactly one Call + Request pair above the fold. | `components/StickyCta.astro`, `components/CtaPair.astro` |
| 4 | Thin content (~150–300 words/page) | Home ≈1,430 words, services ≈1,170, refrigerator ≈990, about ≈700 — all finished prose. | `data/services.ts`, `data/home.ts` |
| 5 | Tiny type (10–11px labels, 13px body) | Body 16–17px fluid, secondary copy 15px, lede 17–20px, labels/eyebrows 13px, smallest UI text 12px. Verified automatically at every width: nothing under 12px, no running text under 15px. | `styles/global.css` tokens |
| 6 | Letterboxed caves / lonely 560px ledes | Every band is full-bleed; only text measure is constrained (65ch). Section heads split H2 left / supporting copy right so the width is used. | `.band`, `.shead` |
| 7 | Mobile spine glitch | Teal spine exists only at ≥1100 (interior photo join + home left accent). Below that it becomes a horizontal seam under the photo band. No right-edge lines. | `components/PageHero.astro` |
| 8 | Motion hurting readability | Nothing waits for JS. Without JS the site is complete: menu is a native `<details>`, FAQ answers are always open, form falls back to a `mailto:` post. | — |

Also fixed from the audit's density gaps: per-appliance symptom lists (6 each), parts-we-test lists, brand pills with an
independence disclaimer, Woodbridge/neighbourhood proof, real form UX, no `[FORM_*]` tokens or draft captions.

### Image slots

Real photography is not in the repo yet. Every image is a **named slot**: drop a photo at `public/images/<slot>.jpg`
(or `.webp` / `.png`) and it replaces the SVG product-geometry art in `public/images/art/<slot>.svg` on the next build.
Then run `npm run images` to generate 640/1024/1600/2400w WebP + AVIF variants; the `Photo` component emits the
`<picture>` `srcset` automatically.

| Slot file | Used on | Recommended source | Brief |
| --- | --- | --- | --- |
| `public/images/hero-cooktop.jpg` | Home hero (full-bleed; copy overlays the left ~45%) | 2400×1350+ | Real dark glass/induction cooktop, subject weighted right, low-key light |
| `public/images/services-overview.jpg` | Services index hero | 1600×1200+ | Built-in appliance wall or stainless fronts, dark and even |
| `public/images/about-diagnostics.jpg` | About hero + home About teaser | 1600×1200+ | Hands-on diagnosis close-up (meter on a control board). No clipboard stock poses |
| `public/images/service-area.jpg` | Service area hero | 1600×1200+ | Real Vaughan street/residential exterior; no other-city landmarks |
| `public/images/service-refrigerator.jpg` | Refrigerator hero | 1600×1200+ | Stainless French-door or built-in fridge, tight on doors/handles |
| `public/images/service-oven-stove.jpg` | Oven & Stove hero | 1600×1200+ | Electric smooth-top or wall oven — never a gas flame |
| `public/images/service-washer.jpg` | Washer hero | 1600×1200+ | Front-load porthole close-up |
| `public/images/service-dryer.jpg` | Dryer hero | 1600×1200+ | Electric dryer drum/door — no gas-dryer imagery |
| `public/images/service-dishwasher.jpg` | Dishwasher hero | 1600×1200+ | Open built-in dishwasher, racks and spray arm |
| `public/images/service-range-hood.jpg` | Range Hood hero | 1600×1200+ | Hood underside with lights on |
| `public/images/service-steam-unit.jpg` | Steam Unit hero | 1600×1200+ | Residential steam-shower control/generator — never a commercial spa |
| `public/images/service-sauna-unit.jpg` | Sauna Unit hero | 1600×1200+ | Home electric sauna heater with stones and control |
| `public/images/og-default.jpg` | Open Graph / social share (present) | 1200×630 | Rendered from the site fonts + hero art; replace with a branded share image anytime |
| `src/components/Logo.astro` | Header/footer wordmark | SVG | Interim dial mark + wordmark; swap in the client master logo |

Slot metadata (alt text, dimensions, briefs) lives in [`src/data/images.ts`](./src/data/images.ts).

### Intentionally pending

- **CRM / request form.** Until `PUBLIC_FORM_ENDPOINT` is set, the form runs in an honest pending mode: a visible note
  says online booking isn't connected yet, and the submit button reads **"Email this request"** — it opens the
  visitor's own email app with every field filled in, addressed to contact@ariaappliancerepair.com. Nothing is
  pretended to be sent. The phone line stays the primary path. When the endpoint is set, the form POSTs `name, phone,
  email, appliance, callback, neighbourhood, message, variant, source, redirect` (redirect = `/thank-you/`), and the
  button becomes "Request service".
- **Reviews / ratings.** Kept hidden. No testimonials, stars or aggregate ratings anywhere, including JSON-LD. Add only
  real, attributed quotes.
- **Street address.** Not published. The site presents as a service-area business (Vaughan, ON) in copy and schema.
- **Client master logo and real photography.** See the image slots above.

### Project structure

```
src/
  config/site.ts          NAP, hours, area, scope bans, nav, form endpoint
  data/services.ts        8 services: copy, symptoms, inclusions, parts, FAQs, related
  data/home.ts            Home symptoms, process, promises, FAQ, brands
  data/images.ts          Image slot registry
  layouts/BaseLayout.astro  <head>, SEO, JSON-LD, header/footer/sticky
  components/             Header, Footer, StickyCta, PageHero, Photo, ServiceCards, ProcessSteps,
                          PromiseCards, FaqList, BrandPills, CtaBand, CtaPair, ContactForm, Icon, Logo
  pages/                  index, services/index, services/[slug], about, service-area, contact,
                          thank-you, 404, robots.txt.ts
  styles/global.css       Tokens, type floors, bands, buttons, chips, focus states
public/images/art/        SVG product-geometry fallbacks for every slot
scripts/make-image-variants.mjs
```

### QA performed

- `npm run build` (15 pages) and `npm run check` (0 errors / 0 warnings).
- Headless Chrome at 320, 390, 768, 1024, 1440 and 1920 across all 15 pages: no horizontal overflow, no text under
  12px, no running text under 15px (only chips and breadcrumbs sit at 14px as labels), no hidden/zero-opacity
  content, all `tel:` links = `tel:+18886420352`, all internal links resolve.
- Sticky bar: hidden at load, shown after the hero CTAs, hidden over the mid CTA band and during form focus.
- Menu: opens, closes on Escape (focus returns), closes on outside click.
- Form: native validation on required fields; pending mode composes the correct `mailto:`; endpoint mode renders a
  POST form with the thank-you redirect.
- Built HTML scanned for banned strings (draft tokens, other cities, ratings, prices, warranty day-counts, 24/7 claims).
