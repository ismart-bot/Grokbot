# AB-NOTES — Aria Appliance Repair, Variant B

How Variant B (this repo) differs from **Variant A** (staging, Designer+Web stack — judged from the two attached
staging screenshots and `RESPONSIVE-AUDIT.md`) and from the **Designer Dense Fluid comps** (`_density-r1`: home desktop,
home mobile, services index, refrigerator template, contact). B was built from scratch; no A source was reused.

Written locks beat pixels: where a comp conflicted with a lock or with accessibility, B follows the lock and the
deviation is listed below.

---

## 1. One-screen summary

| Dimension | Variant A (staging) | Designer comps | Variant B |
| --- | --- | --- | --- |
| Hero (≥1100) | Full-bleed still, copy over it; audit-era build was a hard 50/50 | Full-bleed cooktop under scrim, left accent | Same concept, plus a **01–08 service rail** across the hero foot so services are above the fold at 1440/1920 |
| Hero (<1100) | Photo ~290px, then copy | Photo ≤40vh, then copy | Photo band 150–240px (phone) / 180–340px (tablet); dropped on very short phones so the CTA pair stays above the fold; tablet moves hours/trust into a side card |
| Header | Logo · nav · phone | Same | Same on ≥900; 768–899 logo · phone · Menu; **<768 logo · Menu only** (see §3) |
| Primary CTA | White text on teal (~2.0:1) | White on teal | **Ink on teal (8.6:1)** — same kit colours, WCAG-AA |
| Mobile sticky | Always on; covered hero CTAs | Hidden ATF, shown after hero CTAs | Shown only when **no** Call/Request pair is on screen (hero, mid CTA, closing CTA, contact form); hidden during form focus |
| Motion | Scroll-reveal, content at `opacity:0` | Deferred | None that affects content; hover/focus only; reduced-motion honoured |
| Words / page | Home ~311 · Services ~301 · Fridge ~257 · About ~211 · Contact ~146 | Dense IA outline | Home ~1,430 · Services ~1,170 · Fridge ~990 · About ~700 · Contact ~360 |
| Type floor | 10–11px labels, 13px body | Body ≥15, labels ≥12 | Body 16–17px, secondary 15px, labels 13px, nothing <12px (machine-checked) |
| FAQ | Short | ×5 accordion-look | ×5 on home + 3–4 per service + 3 on area — **always open**, no accordion |
| Contact | `[FORM_*]` tokens, right ⅔ empty | Form + NAP stack | Hero has a direct-line NAP panel; form + 4 aside cards; honest pending-CRM mode |
| Pages | Home, services, fridge, about, contact | Home, services, fridge, contact | **All 8 service pages**, about, service area, contact, thank-you, 404 |

---

## 2. Against the Variant A staging screenshots

What the A screenshots show and what B changes:

1. **Hero composition.** A's 1440 hero fills the viewport with one cooktop crop; the services section only peeks at
   the fold as a label. B keeps the scrim and overlay idea but adds the 01–08 service rail along the hero foot, and
   keeps the hero to `min(100svh − header, 900px)` so all eight services and the teal seam are on screen at 1440×900
   and 1920×1080.
2. **CTA contrast.** A's "Call +1-888-642-0352" is white on #63C6C1 — roughly 2:1, which fails WCAG even for large text.
   B uses ink #1A1A1B on the same teal (8.6:1). The kit colours are unchanged; only the text colour on the button moved.
3. **Mobile ATF.** A's 390 screenshot puts a header phone link plus a ~290px photo ahead of the copy, which pushes the
   Request button to the bottom edge; the audit-era build also ran an always-on sticky that repeated both buttons.
   B's phone photo band is ~185px at 844px tall, the header carries no second phone CTA, and the only Call/Request
   pair above the fold is the hero pair. The sticky appears once that pair scrolls away.
4. **Trust row.** A shows Same-day · Parts & labour warranty · Upfront quote. B keeps all three with the lock
   phrasing ("when available", "before repair", "on your invoice") and adds the hours and Vaughan-only chips beside
   them.
5. **Density below the fold.** A's bands were at `opacity:0` until scrolled (audit #2), which is why full-page captures
   looked empty. B has no reveal system. Every band paints on load, and the Promise cards are plain static markup.
6. **Draft strings.** A shipped "Final B numbered grammar", "Same Call + Request language as Final B hero", "EDITORIAL
   STILL" captions and `[FORM_*]` tokens. None exist in B; the built HTML is scanned for them.
7. **Spine.** A's interior spine became a 4px right-edge line on phones. B's spine renders only at ≥1100.

## 3. Against the Designer Dense Fluid comps

### Kept from the comps

- Tokens: ink #1A1A1B, near-black #2D2D2E, teal #63C6C1, paper #F7F6F4. No franchise orange.
- Full-width header; full-bleed home hero under an ink scrim; copy measure ≤680px; teal left accent instead of a seam.
- Interior heroes: copy left, photo right, 4px teal spine at the join (≥1100 only); stack below.
- Services 01–08 grammar in a hairline card grid (title, blurb, "Covered" tags, deep-link CTA).
- IA order on home: hero → services → symptoms ×6 → process ×3 → promise ×3 → about → brands → mid CTA → FAQ ×5 → footer.
- Refrigerator template: symptoms → what's included → process → related → CTA.
- Services index: hero → 8 cards → "What we don't do" (no gas line / no HVAC / Vaughan only) → "Not sure which page fits?" CTA.
- Contact: "Call first — or request a window", form with Name / Phone / Email (optional) / Appliance / Neighbourhood /
  Message, NAP card, "why call beats the form", service-area clarity.
- Full-width 4px teal seams between major bands; fluid `clamp()` type and padding (tokens follow NOTE.md).

### Evolved (not photocopied)

- **Split section heads.** H2 on the left, supporting copy on the right, so no band has a lonely left-aligned lede.
- **Hero service rail** (desktop) and **tablet meta card** (900–1099) — both use width the comps left empty.
- **Home symptoms become linked cards** with appliance icons and "{Appliance} repair →" deep links.
- **"Have these handy when you call"** strip under the process (appliance, model sticker location, symptom, neighbourhood).
- **Service templates go deeper than the comp.** They add "Before we arrive" safety tips, a parts-we-test tag list, a
  per-appliance scope boundary, a warranty/quote card, 3–4 appliance FAQs, and breadcrumbs (desktop) with
  BreadcrumbList schema.
- **Services index adds a scope comparison table** (common calls · install scope · boundary per lane).
- **Contact hero gets a direct-line panel** on the right, so the hero isn't a lone left column. The form adds a
  "Best time to call back" field (inside 8am–10pm) and a Vaughan neighbourhood datalist.
- **About and Service area pages are fully built.** The comps didn't include them; they follow NOTE.md's copy
  outline. About has a facts panel (08 lanes · 7 days · 1 city · 0 gas/HVAC), four working habits and do/don't
  columns. Service area has a neighbourhood grid, a 7-day hours table, after-hours safety steps and coverage FAQ.
- **Brand pills carry an independence disclaimer** and are omitted on the steam/sauna pages, where appliance brands
  like Samsung/LG would be misleading.
- **Icons.** A small line-icon set for the eight appliances; the audit flagged the missing icons.

### Deliberate deviations

| Comp / brief detail | B choice | Why |
| --- | --- | --- |
| White CTA text on teal | Ink text on teal | 2.0:1 vs 8.6:1 contrast. Kit colours unchanged. |
| Phone number in the mobile header | Logo + Menu only below 768px; phone is in the hero Call button, the menu panel and the sticky bar | Guarantees exactly **one** Call + Request pair ATF on phones (audit #3 / #7). |
| Sticky "after hero CTAs leave viewport" | Sticky shows whenever no Call/Request pair is visible (after the hero pair leaves, and hidden again over the mid/closing CTA bands and the contact form) | Same rule in the normal case. It also covers pages with several CTA bands, and never stacks two pairs on screen. |
| Street address in the contact comp ("65 Santina St…") | Not published | Not in the written NAP locks. The site presents as a Vaughan service-area business; add it in `site.ts` if the client confirms it should be public. |
| Neighbourhoods: comp mentions Woodbridge and Maple | Also lists Concord, Kleinburg, Vellore Village, Thornhill (Vaughan side), VMC | All are inside the City of Vaughan, and they add the neighbourhood proof the audit asked for. Trim `area.neighbourhoods` if the client wants fewer. |
| FAQ rendered as accordion rows | Always-open Q&A list | Nothing hidden behind interaction (audit #8), better for density and scanning. |
| Real cooktop/product photography (`hero-B.jpg`, `still-*.jpg`) | SVG product-geometry art in named slots | Those binaries weren't in this repo. Dropping photos into `public/images/<slot>.jpg` swaps them in automatically (README → Image slots). |
| Reviews row (audit density gap #1) | Omitted | Lock: reviews stay hidden until real attributed quotes exist. |
| Diagnostic fee / pricing near CTA (audit gap #2) | Omitted | Lock: no invented prices. Copy promises an upfront quote after diagnosis instead. |
| Licensed/insured chips (audit gap #3) | Omitted | Not in the locks. Don't claim credentials that aren't confirmed. |

---

## 4. Test design notes for the A/B

- **Variant flag:** `<html data-variant="B">` and `<meta name="ab-variant" content="B">`.
- **Click tracking:** every CTA carries `data-track` (`call-hero`, `request-hero`, `call-sticky`, `request-sticky`,
  `call-mid`, `request-mid`, `call-header`, `call-footer`, `call-hero-<service>`, `call-band-<service>`,
  `request-email-compose`, `request-submit`, …). Compare **tel: taps per session** as the primary metric, since
  both variants are phone-first; use request starts as the secondary metric.
- **Comparable conditions:** until the CRM is live, B's form composes an email rather than submitting. Configure
  `PUBLIC_FORM_ENDPOINT` to the same CRM as A before reading form-conversion numbers.
- **Indexing:** build staging with `PUBLIC_NOINDEX=true` so B doesn't compete with A in search while the test runs.

## 5. Open items for the client / Web bot

1. Real photography for the 12 slots (list + briefs in README).
2. Client master logo (replace `src/components/Logo.astro` markup).
3. CRM endpoint → `PUBLIC_FORM_ENDPOINT`; confirm the CRM honours the `redirect` field or set its own redirect to `/thank-you/`.
4. Confirm whether the neighbourhood list and install scopes per lane match how the client actually books.
5. Real, attributed reviews — only then add a reviews band (and never an aggregate rating without a source).
