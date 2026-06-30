# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the React/TypeScript rewrite of the RoxGolf frontend — a community sports league tracker for the McKees Rocks, PA area. It replaces the vanilla-JS SPA in `../frontend/`. Deployed to Azure Static Web Apps; the API backend lives in `../api/` (Azure Functions .NET 8).

## Commands

```bash
# Dev server (proxies /api/* to localhost:7071)
npm run dev

# Type-check + production build
npm run build

# Preview production build
npm run preview
```

No test runner is configured. No linter config is present — TypeScript strict mode (`tsc -b`) is the only static check.

The Vite dev server proxies `/api/*` to `http://localhost:7071` (Azure Functions). Run `func start` from `../api/` to get a live backend during development.

## Architecture

### Stack

- **React 18** + **TypeScript** + **Vite 6**
- **React Router v6** (`createBrowserRouter`) — file-based route tree in [src/router/index.tsx](src/router/index.tsx)
- **TanStack Query v5** — data fetching; `QueryClient` configured in [src/main.tsx](src/main.tsx) with 5-minute stale time
- **Tailwind CSS v3** — design system defined in [tailwind.config.ts](tailwind.config.ts)
- **`@` alias** — maps to `src/`; use `@/` for all internal imports

### App shell & routing

All routes share a single layout: `AppShell` ([src/components/layout/AppShell.tsx](src/components/layout/AppShell.tsx)). It renders a sticky header, breadcrumb bar, commissioner banner, and `<Outlet />`.

Each route definition carries a `handle` with `title` and `crumbs` — AppShell reads these via `useMatches()` to populate the header subtitle and breadcrumb trail. When adding a route, always include a `handle: { title: '...', crumbs: [...] }`.

### Commissioner mode

A global toggle in the header switches the app between viewer and commissioner (admin) modes. State lives in `CommissionerContext` ([src/context/CommissionerContext.tsx](src/context/CommissionerContext.tsx)); consume it with `useCommissioner()`. Commissioner-only UI (edit controls, dues status, etc.) should be gated behind `isCommissioner`.

### Design system (Tailwind tokens)

All colors, radii, and shadows are custom tokens defined in `tailwind.config.ts`. Always use these — never raw hex:

| Token group | Examples |
|---|---|
| Brand colors | `rox-green`, `rox-gold`, `rox-blue`, `rox-red`, `rox-purple`, `rox-slate` |
| Light tints | `rox-green-light`, `rox-gold-light`, … |
| Surfaces | `rox-bg`, `rox-card`, `rox-border` |
| Text | `rox-text1` (primary), `rox-text2` (secondary), `rox-text3` (muted) |
| Radius | `rounded-rox` (10px), `rounded-rox-sm` (7px) |
| Shadow | `shadow-rox-sm`, `shadow-rox` |

`cn()` from [src/lib/utils.ts](src/lib/utils.ts) merges Tailwind classes (`clsx` + `tailwind-merge`).

### Reusable layout components

| Component | Purpose |
|---|---|
| `Card` | White card with border, radius, and `shadow-rox-sm` |
| `NavButton` | Tappable nav row with colored left border; accepts `variant` (`golf`/`trip`/`league`/`bowl`/`pok`/`arc`) and `size` (`lg`/`md`/`sm`) |
| `NavGrid` | 1- or 2-column grid for `NavButton` lists |
| `SectionLabel` | Small all-caps section divider |
| `FlightBadge` | Color-coded pill for flights `A`, `B`, `C`, `NIT` |

### Data

Most pages are currently **static** — scores and standings are hardcoded JSX. The API integration via TanStack Query is planned but not yet implemented for most pages. When wiring up API calls, fetch from `/api/golf/...`, `/api/bowling/...`, or `/api/players` — the Vite proxy handles routing to the Functions host in dev.

### Pages structure

Pages live under `src/pages/` grouped by sport/section:

- `golf/` — hub, trip (MASTERS), league (Tuesday League), misc, RgA rules, Donnie memorial
- `bowling/` — hub, current standings, records, archives
- `photos/` — hub, gallery
- `poker/` — Albert's Game
