# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run docs:dev      # Dev server (http://localhost:5173)
npm run docs:build    # Production build → docs/.vitepress/dist
npm run docs:preview  # Preview production build
npm install           # Install deps (CI uses npm ci with Node 20)
```

No test runner or linter is configured.

## Architecture

VitePress 1.6.4 documentation site for **ModelGo Licenses** — a standard for model publishing. Deployed to GitHub Pages at `https://www.modelgo.li`.

### Theme & Layout

Custom theme extends VitePress DefaultTheme (`docs/.vitepress/theme/`):

- **Layout.vue** — wraps DefaultTheme.Layout with two injections:
  - `#home-hero-image` slot → `LicenseSelector` (async, home page only)
  - `#layout-bottom` slot → `PixelRobots` (async, `<ClientOnly>` for SSR safety)
  - Busuanzi analytics via manual JSONP in `onMounted`
- **custom.css** — frosted-glass feature cards, banner background, timeline UI, RTL fix for Arabic, mobile breakpoints at 959px/640px

### Key Components (`docs/.vitepress/components/`)

**LicenseSelector.vue** — interactive license picker with 8 license variants, badge system, download/copy, and model sheet generation. Uses `license-i18n.ts` for translations keyed by VitePress `lang` values (`zh-CN`, `zh-TW`, `ja`, etc.).

**PixelRobots.vue** (~2000 lines) — real-time SVG physics simulation at page bottom. Critical patterns:

- **`shallowRef` + `triggerRef`** for all entity arrays (rabbits, mushrooms, grasses, etc.) — deep reactivity would be too expensive for per-frame mutations. Always mutate in-place, then call `triggerRef()`.
- **rAF loop** with `dt` normalized to 16ms (60fps target), clamped to max 3 to prevent physics explosions on tab resume.
- **Sky recomputed every 60 frames** (`SKY_UPDATE_INTERVAL`), not every tick.
- Physics: `GRAVITY=0.25`, `BOUNCE=0.45`, `WALK_SPEED_MIN=0.35`, `WALK_SPEED_MAX=0.7`.
- Entities: rabbits (3, draggable, growth from mushrooms, trip effects, speech bubbles), mushrooms (3 types, grow over 25s), grasses (4 cluster styles, bend with wind/rabbits), butterflies, snails, clouds, weather particles, stars, rainbows, spores, hidden snakes.
- Moon phase calculated from known epoch (Jan 6, 2000 new moon). Weather is season-weighted random.
- `ResizeObserver` on `.VPFooter` for responsive scene sizing.

Supporting data files:
- `pixel-palettes.ts` — color definitions for all creatures
- `rabbit-thoughts.ts` — speech bubble strings in 8 languages, 3 thought categories (idle, trip, baby)

**VideoEmbed.vue** — globally registered iframe wrapper, usable as `<VideoEmbed url="..." caption="..." />` in any markdown file.

### i18n (9 locales)

English (root), zh, zh-tw, ja, ko, ru, es, fr, ar (RTL).

- **VitePress UI strings**: all inline in `config.mts` under each locale's `themeConfig`
- **Content**: mirrored `.md` structure per locale directory (`docs/zh/`, `docs/ja/`, etc.)
- **Component translations**: `license-i18n.ts` and `rabbit-thoughts.ts` each have their own lookup, with English fallback
- Locale detection: components read VitePress's `useData().lang` value

### Config (`docs/.vitepress/config.mts`)

- `cleanUrls: true`, `lastUpdated: true`
- Markdown plugin: `vitepress-plugin-tabs` (enables `:::tabs` syntax)
- Search: local provider
- `nav()` and `sidebar()` are helper functions that take translated strings + locale prefix as arguments
- Social links: GitHub + Google Scholar (custom SVG)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to `main` or manual trigger. Uses Node 20, `npm ci`, `npm run docs:build`.
