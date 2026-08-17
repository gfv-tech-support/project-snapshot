# Plan: GFV Landing Site — Minimal TanStack Start Architecture

Planning only. No files changed yet.

## Verdict

The current structure already follows TanStack Start conventions correctly:
`src/router.tsx`, `src/start.ts`, `src/server.ts`, `src/routeTree.gen.ts`,
file-based routes in `src/routes/` with a single `__root.tsx` shell, Tailwind v4
tokens in `src/styles.css`, shadcn/ui in `src/components/ui`, helpers in
`src/lib`, static files in `public/`. Nothing needs to be moved, renamed, or
removed. Only two additive directories are justified, and only when first used.

## Recommended structure

```text
public/                      # static, URL-addressable files (favicon, robots.txt, og image)
src/
├── routes/                  # file-based routing (URL = filename)
│   ├── __root.tsx           # single app shell: head meta, fonts, Header/Footer, <Outlet />
│   ├── index.tsx            # /  (landing page — composes section components)
│   ├── about.tsx            # /about        (later)
│   ├── coaches.tsx          # /coaches      (later)
│   ├── gyms.tsx             # /gyms         (later)
│   ├── programs.tsx         # /programs     (later)
│   └── exercises.tsx        # /exercises    (later)
├── components/
│   ├── ui/                  # shadcn/ui primitives (unchanged, token-driven)
│   ├── layout/              # Header, Footer, Container, MobileNav  (add when built)
│   └── sections/            # Hero, Features, AppLinks, CTA, FAQ    (add when built)
├── assets/                  # imported images/logos processed by Vite (add when needed)
├── lib/                     # shared utilities + small static content constants
├── hooks/                   # shared React hooks (use-mobile.tsx)
├── styles.css               # GFV design tokens: colors, typography, radius scale
├── router.tsx, start.ts, server.ts, routeTree.gen.ts   # framework wiring — do not restructure
```

## Purpose of each directory

- `src/routes/` — one file per URL; each content route owns its own `head()`
  metadata. Marketing sections are separate routes, not hash anchors.
- `src/components/ui/` — shadcn primitives, customized only through GFV tokens.
- `src/components/layout/` — chrome reused across every page (header, footer,
  page container), rendered from `__root.tsx`.
- `src/components/sections/` — marketing blocks composed by route files. A
  section used by only one route may live in `sections/` as well; that keeps
  route files thin and readable.
- `src/lib/` — `cn()`, formatting helpers, and simple typed content arrays
  (nav links, store links, feature lists). No service/repository layers.
- `src/hooks/` — cross-page hooks only.
- `src/assets/` — images imported in TSX so Vite hashes and optimizes them.
- `public/` — only files needing a stable URL (`robots.txt`, favicon, OG image).

## What stays unchanged

- All framework files: `router.tsx`, `start.ts`, `server.ts`,
  `routeTree.gen.ts` (generated — never edit), `vite.config.ts`,
  `components.json`, `tsconfig.json`.
- `src/components/ui/` and the token system in `src/styles.css`.
- `src/lib/error-*.ts`, `lovable-error-reporting.ts`, `utils.ts`.
- `src/routes/README.md`, `docs/`.

## What to reorganize

Nothing is misplaced. Only additive work, created lazily:

1. `src/components/layout/` and `src/components/sections/` — created when the
   first header/footer/hero is built.
2. `src/assets/` — created when the first real image is imported.
3. `src/routes/index.tsx` — the placeholder must be replaced by the real
   landing page (content work, not architecture).
4. `__root.tsx` head metadata still says "Lovable App" and must be replaced
   with GFV metadata; per-route `head()` on each leaf.

Not adding: `features/`, `services/`, `api/`, `store/`, `types/` barrel,
`constants/` tree, state management, or any backend directory. No database,
auth, API layer, or CMS — none are needed for a static marketing site.

## Why this follows TanStack Start conventions

- Routing is filename-driven; adding `/about` is literally adding
  `src/routes/about.tsx` with `createFileRoute("/about")`. No route table,
  no router abstraction.
- One root layout (`__root.tsx`) is the documented place for shared chrome; the
  framework rejects Next/Remix-style `_app/` or `app/layout.tsx`.
- SEO uses the built-in `head()` option per route rather than a helmet library,
  so each page gets real SSR metadata.
- Static content lives as typed constants imported at build time — no loaders
  or server functions needed, so SSR/prerender stays fully static.
- Scaling is linear: one new route file plus optional section components per
  page. No architectural change required at 5 or 15 pages.

## Next step (small, one piece at a time)

1. Update `__root.tsx` head metadata to GFV title/description/og/twitter and
   add `src/components/layout/Header.tsx` + `Footer.tsx` rendered around
   `<Outlet />` (mobile-first, token-only styling, keyboard accessible).
2. Add `src/lib/site.ts` with typed nav links, GFV Web App URL, and App
   Store / Google Play URLs (placeholders until you supply the real ones).
3. Replace the `src/routes/index.tsx` placeholder with a landing page composed
   of `sections/Hero.tsx` — then verify typecheck, build, and responsive
   behavior before adding further sections.
