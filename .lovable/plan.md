## Goal
Make the Trysoro blog embed feel like a native section of The Smile Sanctuary site, matching the visual language used by Recovery, Concierge, and the Services Carousel (warm sand background, brand fonts, ocean/coral accents, soft cards, reveal animation).

## Approach

The Trysoro script injects markup we don't fully own, so we'll do two things:
1. Wrap the embed in a fully branded section shell (eyebrow, title, intro paragraph) that matches sibling sections.
2. Add scoped CSS overrides under `#soro-blog` to restyle the injected content (typography, colors, cards, buttons, links, images) using our design tokens.

## Changes

### 1. `src/components/site/SoroBlog.tsx` — branded section shell
Replace the bare wrapper with the same pattern Recovery/Concierge use:
- `<section id="blog">` with `bg-secondary` (Warm Sand) and matching vertical padding (`py-24 md:py-[100px]`).
- Centered header block with:
  - Eyebrow: small uppercase tracked text in `text-primary` (e.g. "From Our Blog").
  - `<h2>` in `font-display`, `text-3xl md:text-5xl`, `text-primary`.
  - Intro paragraph in `text-foreground/75`.
- A `reveal` wrapper around the embed container so it fades in like other sections.
- Embed container: `<div id="soro-blog" className="soro-embed mt-12" />` — `soro-embed` is the hook for our scoped CSS.

### 2. `src/i18n/translations.ts` — add blog strings
Add EN + ES keys:
- `blog_eyebrow` ("From Our Blog" / "Desde Nuestro Blog")
- `blog_title` ("Insights, Stories, and Smile Journeys" / "Historias, Consejos y Sonrisas")
- `blog_desc` (one-sentence intro about patient stories and dental tips)

Wire them into `SoroBlog.tsx` via `useLanguage()`.

### 3. `src/index.css` — scoped overrides for the embed
Add a new `@layer components` block scoped under `#soro-blog` (and `.soro-embed`) that:
- Sets typography: headings use `font-display` + `color: hsl(var(--primary))`, body uses `font-body` + `color: hsl(var(--foreground))`.
- Restyles post/card containers: white background, `border-radius: var(--radius)`, `box-shadow: var(--shadow-soft)`, hover lifts to `var(--shadow-lift)` with a small `translateY(-4px)` (mirroring `.card-float`).
- Grid/list spacing: consistent gaps matching our `gap-6` rhythm.
- Images inside cards: `border-radius` top corners, `object-fit: cover`.
- Links: `color: hsl(var(--primary))` with coral hover.
- Buttons (e.g. "Read more"): pill shape, coral background, white text, matching our CTA buttons.
- Tags/badges: warm-sand background, primary text, rounded-full.
- Neutralizes any white/transparent backgrounds the embed sets, so our Warm Sand section shows through cleanly.

Selectors will be defensive (target common patterns like `#soro-blog article`, `#soro-blog a`, `#soro-blog img`, `#soro-blog h1,h2,h3`, `#soro-blog button`) since we don't control the exact class names Trysoro emits. After implementation we'll inspect the rendered DOM in preview and tighten selectors if needed.

### 4. No changes to `Index.tsx`
Section already sits between Recovery and Concierge.

## Visual outcome
The blog section will read as: Warm Sand backdrop → branded eyebrow/title/intro → grid of soft white cards with brand typography, primary-colored headings, coral accents on links/buttons — visually indistinguishable from the rest of the homepage rhythm.

## Follow-up after implementation
Open the preview, inspect the actual DOM Trysoro renders, and tighten any selectors that didn't catch (e.g. if they use Shadow DOM we'll need to fall back to wrapping with an outer frame + overlay header only).