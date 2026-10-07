# Project Architecture

## Overview
Static-export Next.js 16 site with App Router. Optimized for CDN distribution with zero runtime dependencies on Node.js.

## Directory Structure

### Core Directories
- **`app/`** – Route segments, layouts, and page composition (Next.js App Router)
- **`components/`** – UI components grouped by feature area
  - `common/` – Shared: Header, Footer, layout wrappers
  - `ui/` – Primitives: Button, LazySection, OptimizedImage, PageSkeleton
  - `{feature}/` – Feature-specific sections (careers, technology, patients, etc.)
- **`lib/`** – Utilities: animations, i18n, scroll, memoization, DOM helpers
- **`types/`** – Shared TypeScript definitions
- **`constants/`** – Design tokens, theme, config
- **`public/`** – Static assets: fonts, images, SVGs, videos

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| React components | PascalCase | `HeroSection.tsx` |
| Route files | lowercase | `page.tsx`, `layout.tsx` |
| Public assets | kebab-case | `black-diamond-forceps.webp` |
| Feature folders | URL-friendly lowercase | `healthcareprofessional/surgery/` |

## Import Pattern

- Use `@/{category}/*` for scoped imports (e.g., `@/components/home/HeroSection`)
- Aliases map to explicit directories (not root-relative)

## Data Flow

- **No runtime API calls** – All data is compiled at build time via `output: "export"`
- **Metadata** – Built into component props, no external sources
- **Static generation** – Every page pre-rendered, served via CDN

## Component Structure

```
PageRoute (app/feature/page.tsx)
├── HeroSection (composition)
├── FeatureSection (composition)
└── Footer (layout)

Section (e.g., HeroSection.tsx)
├── Lazy load detection (LazySection wrapper)
├── OptimizedImage (responsive, multiple formats)
├── Animation state (framer-motion)
└── Child primitives (Button, text, etc.)
```

## Performance Strategy

- **Code splitting** – Route-based bundles via App Router
- **Image optimization** – AVIF/WebP with device-specific sizes
- **3D assets** – React Three Fiber (deferred on hero sections only)
- **Scroll animation** – Lenis for smooth UX, memoized scroll listeners
- **Minification** – Native Next.js compression enabled

## Error Handling

- **Build errors** – Fixed during `npm run build`
- **Runtime errors** – None expected (static export)
- **Missing assets** – Build fails (preventing broken production)

## Environment

- No `.env` files needed (static content only)
- Bundle analysis: `npm run analyze`
- Preview: `npm run build && npm start`
