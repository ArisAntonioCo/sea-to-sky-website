# Sea to Sky Prototype Structure

Last updated: August 31, 2026

## Folder Strategy

The project is organized for **page ownership** and **section-level iteration** following the route-local `_page` and `_sections` pattern.

### Routes

- `src/app/page.tsx`
- `src/app/_page`
- `src/app/_sections`
- `src/app/_layout`
- `src/app/about/page.tsx`
- `src/app/about/_page`
- `src/app/about/_sections`
- `src/app/services/page.tsx`
- `src/app/services/_page`
- `src/app/services/_sections`
- `src/app/contact/page.tsx`
- `src/app/contact/_page`
- `src/app/contact/_sections`

Each `page.tsx` stays minimal and imports only one main page component from its local `_page` folder.

The root `layout.tsx` also stays thin and delegates the HTML and body shell to `src/app/_layout`.

### Shared Components

- `src/components/layout`
- `src/components/ui`

Use these for shared layout chrome and reusable UI building blocks.

### Route-Local Page Composition

Each route owns its own implementation files:

- `_page/` contains the main page component
- `_sections/` contains section-level UI for that route
- `index.ts` barrel exports keep imports clean

Example:

- `src/app/about/page.tsx` imports only from `src/app/about/_page`
- `src/app/about/_page/about-page.tsx` composes the route
- `src/app/about/_sections/about-hero-section.tsx` holds the section UI

## Why This Structure

- Easier handoff to another developer or agency
- Easier to iterate one page without touching unrelated pages
- Easier to replace prototype copy with approved content later
- Keeps business composition out of `page.tsx`
- Avoids a flat, hard-to-maintain `components/` directory
