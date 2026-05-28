# Project Architecture

This project uses the Next.js App Router. The `app` directory is reserved for route segments and framework files such as `page.tsx`, `layout.tsx`, and `loading.tsx`.

## Source Layout

- `app/`: Route definitions and page composition.
- `components/`: Reusable UI sections grouped by site area.
- `components/common/`: Shared layout components such as `Header` and `Footer`.
- `components/ui/`: Generic UI primitives and loading helpers.
- `constants/`: Shared configuration and design constants.
- `lib/`: Framework-independent utilities.
- `types/`: Shared TypeScript types.
- `public/`: Static assets served from the site root.

## Naming Standards

- React component files use PascalCase, for example `HeroSection.tsx`.
- Route files keep Next.js required lowercase convention, for example `page.tsx`.
- Public asset filenames use lowercase kebab-case, for example `black-diamond-forceps.webp`.
- Feature folders use lowercase URL-friendly names that match the route or product area.

## Import Standards

- Use the `@/` alias for app source imports.
- Keep route files focused on composing sections.
- Keep visual sections inside `components/<feature>/` unless they are truly shared.
