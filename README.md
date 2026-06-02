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
- **Phone:** +1 403-875-5074
- **Email:** trailerpartmasters@shaw.ca
- **Address:** Taralake Manor NE, Calgary, Alberta, Canada T3J 0N1

## Items to review before going live
- **Logo:** `public/logo.png` is still the Best Trailer Parts logo — replace with the
  Trailer Part Masters logo.
- **Quote form endpoint:** `src/app/request-form/page.tsx` posts to the same Formspree
  endpoint (`/f/xgoqdybp`) as Best Trailer Parts. Create a dedicated Formspree form for
  Trailer Part Masters and swap the `action` URL so submissions don't mix.
- **Production URL:** metadata assumes `https://trailer-part-masters.vercel.app` — update
  if the Vercel project gets a different domain.
