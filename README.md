# Be Green Heroes

Static React rebuild of the [Be Green Heroes](https://begreenheroes.com) public website — a learning platform focused on environmental science, sustainability education, and the ITSC (International True Sustainability Competition).

## Tech stack

- **React 18** — functional components and hooks
- **TypeScript** — strict mode
- **React Router 6** — client-side routing with lazy-loaded pages
- **Tailwind CSS 3** — utility-first styling with BGH design tokens in `tailwind.config.ts`
- **Vite 5** — dev server and production builds
- **Prettier** — code formatting

## Features

- Welcome landing page with intro video
- Missions hub with modal detail views (Home)
- Green Heroes Creed, Learn, ITSC 2026, BGH Operations, Brand Assets, and Contact pages
- ITSC registration modal (individual and team flows)
- Responsive guest layout with sidebar navigation and mobile menu
- Hero character and brand asset detail pages with downloadable assets
- Under-construction placeholders for upcoming sections (Rewards, Vote, Propose, FAQ)

## Getting started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other commands

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run build`    | Production build to `dist/`          |
| `npm run preview`  | Preview the production build locally |
| `npm run typecheck`| Run TypeScript without emitting      |
| `npm run format`   | Format all files with Prettier       |

## Project structure

```
src/
├── components/
│   ├── layout/       # Header, Sidebar, GuestLayout
│   ├── modals/       # ITSC registration, success modal
│   └── ui/           # Shared UI (Modal, Button, FormField, etc.)
├── context/          # Modal provider
├── hooks/            # useModal, useSidebar
├── pages/            # Route page components
│   ├── brand-assets/ # Individual asset detail pages
│   └── heros/        # Hero character detail pages
├── types/            # Shared TypeScript interfaces
├── utils/            # Mission, hero, and asset content
├── router.tsx        # Route definitions
└── main.tsx          # App entry point

public/
├── img/              # Images and brand assets
├── pdf/              # Downloadable documents
└── video/            # Welcome page video
```

## Deployment

The repo includes a `vercel.json` SPA rewrite so client-side routes work on refresh and direct links:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Build output is the `dist/` folder (`npm run build`). Deploy that directory to any static host (Vercel, Netlify, etc.).

## Notes

- **Static demo:** Forms (contact, ITSC registration, membership) do not submit to a backend. Submissions are logged to the browser console only.
- **Assets:** PDFs and images live under `public/` and are served as static files.
- **Styling:** Prefer Tailwind utilities and tokens from `tailwind.config.ts` over custom CSS.

## License

Private project. All rights reserved.
