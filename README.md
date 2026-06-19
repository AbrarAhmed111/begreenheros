# Be Green Heroes — React Rebuild

Static React/TypeScript/Tailwind rebuild of the Be Green Heroes public website.

## Stack

- React 18 with functional components and hooks
- TypeScript in strict mode
- React Router 6 with lazy-loaded pages
- Tailwind CSS 3 using BGH tokens from `tailwind.config.ts`
- Vite

## Structure

- `src/pages/` — public page components, hero profiles, and brand-asset detail pages
- `src/components/layout/` — fixed guest header/sidebar shell
- `src/components/modals/` — static ITSC registration and success flows
- `src/components/ui/` — shared buttons, quotes, form fields, and detail layouts
- `src/context/` and `src/hooks/` — local modal/sidebar state
- `src/types/` — shared TypeScript interfaces
- `src/utils/` — shared content and page data
- `public/img`, `public/pdf`, `public/video` — static public assets

## Commands

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
```

Forms are intentionally static: submissions only write a message to the browser console and never call a backend.
