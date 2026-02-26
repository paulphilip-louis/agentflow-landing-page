# Agentflow Landing Page

Landing page for the Agentflow startup.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint (eslint-config-next)

## Project Structure

```
src/
  app/           # App Router pages and layouts
    layout.tsx   # Root layout
    page.tsx     # Home page
    globals.css  # Global styles (Tailwind base)
public/          # Static assets
```

## Dev Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Conventions

- **TypeScript**: Strict mode enabled — always use explicit types, no `any`
- **Components**: Functional components only, no class components
- **Styling**: Tailwind CSS utility classes only; no inline styles, no CSS Modules
- **Imports**: Use `@/*` alias for src-relative imports (e.g. `@/components/Button`)
- **Design**: Mobile-first — start with mobile styles, layer up with `sm:`, `md:`, `lg:` breakpoints
- **File naming**: kebab-case for files, PascalCase for component exports

## Notes

- This is a static landing page — avoid unnecessary client-side state or `"use client"` unless required
- Prefer Server Components by default
- Keep bundle size lean; no heavy UI libraries unless necessary
