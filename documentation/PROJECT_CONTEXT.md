# Sea to Sky Prototype Context

Last updated: August 31, 2026

## Project Status

This repository is set up for the **prototype phase** of the Sea to Sky Rental redesign.

The current goal is:

- move quickly
- keep the stack common and handoff-friendly
- avoid unnecessary infrastructure
- organize files so pages and sections are easy to iterate

## Current Decisions

- Framework: `Next.js`
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- Package manager: `pnpm`
- Deployment target: `Vercel`
- Motion baseline: `CSS + Motion`
- Page-level smooth scrolling: `Lenis`
- Optional motion addition later: `GSAP`
- CMS: not included in prototype
- Backend/API: not included unless needed later

## Repository Structure Intent

- `src/app`: route entry points
- `src/app/**/_page`: route-level page composition
- `src/app/**/_sections`: route-level section UI
- `src/components/layout`: shared layout components
- `src/components/ui`: shared reusable UI components
- `src/config`: navigation and lightweight configuration
- `src/lib`: utilities
- `documentation`: planning and context documents
- `documentation/homepage-sections`: section-by-section homepage content references

## Prototype Note

This setup is intentionally not a final production platform decision. It is a clean prototype foundation that can be handed off and expanded later.
