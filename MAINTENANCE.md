# Maintenance Guide

## Configuration Requirements

### TypeScript Paths (`tsconfig.json`)
All imports must use `@/{category}/*` pattern:
- `@/components/*` – UI components
- `@/app/*` – Routes and pages
- `@/lib/*` – Utilities and helpers
- `@/types/*` – Type definitions
- `@/constants/*` – Config values

**Rule:** Add new path aliases when creating new root-level directories.

### Next.js Config (`next.config.ts`)
- **`output: "export"`** – Enforces static-only output
- **`compress: true`** – Gzip compression for CDN
- **`productionBrowserSourceMaps: false`** – Security (no source maps in prod)
- **`images.unoptimized: true`** – Required for static export
- **`remotePatterns`** – Whitelist for external images (flagcdn.com, github.com)

**Rule:** Only add remote patterns after security review.

### Tailwind Config (`tailwind.config.js`)
Content globs scan `app/` and `components/` for class usage.

**Rule:** Update content paths only if restructuring directories.

### ESLint (`eslint.config.mjs`)
Inherits Next.js recommended rules (web vitals, TypeScript strict).

**Rule:** Do not disable rules without documented justification.

## Build & Deployment

```bash
npm run build    # Generates static export in ./out
npm run analyze  # Bundle size breakdown
npm start        # Preview static build locally
npm run lint     # Check code quality
npm run dev      # Development with HMR
```

**Deployment:** Copy `./out` directory to CDN/static host.

## Common Issues & Solutions

| Issue | Cause | Fix |
|-------|-------|-----|
| Build fails on missing `@/...` import | Path alias undefined | Add to `tsconfig.json` paths |
| Image not optimized | Missing `OptimizedImage` wrapper | Use `<OptimizedImage>` component |
| Slow page load | Blocking 3D or animation imports | Defer with `React.lazy()` or `dynamic()` |
| Tailwind styles not applied | Content paths outdated | Update `tailwind.config.js` globs |
| Type errors in generated files | Stale `.next/` cache | Delete `.next/` and rebuild |

## Adding New Features

1. **New page:** Create route in `app/feature/page.tsx`
2. **New section:** Create component in `components/feature/SectionName.tsx`
3. **New utility:** Add to `lib/` with clear export
4. **New type:** Add to `types/index.ts` with jsdoc
5. **New constant:** Add to `constants/theme.ts`

Run `npm run build` to validate all paths resolve correctly.

## Performance Checklist

- [ ] Images use `OptimizedImage` component
- [ ] Heavy scripts are lazy-loaded or removed
- [ ] Build output < 5MB
- [ ] No console errors in production
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] Unused dependencies removed
