# Sea to Sky Redesign Prototype Tech Stack

Last updated: August 28, 2026

## Prototype Scope

This document defines the recommended tech stack for the **prototype phase** of the Sea to Sky Rental website redesign.

This is **not** a final long-term platform architecture document. The goal of this prototype is to move quickly, produce a high-quality marketing site redesign, and keep the implementation easy to hand off.

## Recommended Core Stack

### Framework

- `Next.js`
- `React`
- `TypeScript`

### Styling

- `Tailwind CSS`

### Deployment

- `Vercel`

### Package Manager

- `pnpm`

### Forms

- Start with simple `Next.js` form handling
- Add a lightweight external service only if needed later

### Analytics

- `Google Analytics 4` or `Plausible`

## Animation And Motion Stack

Use the lightest tool that matches the job.

### Primary Recommendation

- `CSS transitions` for simple interactions
- `Motion` (`motion/react`) for reveal, stagger, layout, and light scroll animation

### Optional Enhancements

- `Lenis` for smoother scroll feel if needed
- `GSAP` for hero sections or more choreographed storytelling sequences

### Parallax Strategy

- Default to `Motion` scroll-linked transforms for subtle parallax
- Use `GSAP ScrollTrigger` only for advanced pinned or layered sequences

## Recommended Library Breakdown

### Required

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `motion`

### Optional

- `lenis`
- `gsap`

### Nice To Have

- `clsx`
- `tailwind-merge`

## What We Are Intentionally Not Adding Yet

- CMS
- custom backend API
- database
- authentication
- admin tooling
- heavy animation infrastructure

## Final Prototype Recommendation

Use:

- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `Motion`
- `Vercel`

Optional only if the design needs it:

- `Lenis`
- `GSAP`
