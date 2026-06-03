# Trailer Part Masters

Marketing + catalog website for **Trailer Part Masters (Alberta Inc.)** — a Next.js 13 (App Router) + TypeScript + Tailwind site.

This codebase was forked from the Best Trailer Parts site and rebranded; the two are
separate, independent projects/repos that happen to share a layout and component set.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure
- `src/app` — App Router pages (home, about, categories, request-form, shipping-policy).
- `src/components` — shared UI (header/footer live in `app/layout.tsx`).
- `public/` — static assets, including `logo.png`.

## Brand details
- **Name:** Trailer Part Masters (Alberta Inc.)
- **Tagline:** Master Every Part of the Haul
- **Phone:** +1 403-875-5074
- **Email:** trailerpartmasters@shaw.ca
- **Address:** Taralake Manor NE, Calgary, Alberta, Canada T3J 0N1

## Deployment
- **Live URL:** https://trailerpartmasters.vercel.app (Vercel, auto-deploys from `main`).
- **Quote form:** `src/app/request-form/page.tsx` posts to the Trailer Part Masters
  Formspree form (`/f/xnjyavqd`) and redirects to `/request-form/thanks` on success.
- **Logo:** `public/logo.png` is the Trailer Part Masters badge (background recolored to
  the charcoal header tone). Swap in a transparent PNG if a different host surface needs it.
