# Sea to Sky Design Rules

Last updated: September 1, 2026

## Brand

- Use `sea-to-sky-logo.png` as the primary logo.
- Use the provided SVG partner icons.
- Use `Outfit` throughout: [Outfit on Google Fonts](https://fonts.google.com/specimen/Outfit?preview.script=Latn)
- Do not use all-caps labels.
- Do not use exaggerated letter spacing.
- Keep the visual style clean, premium, calm, modern, and spacious.

## Inspiration

Use [PhysiFlow](https://www.physiflow.ai/) as the main interaction-quality reference for:

- app-shell polish
- sticky elements
- scroll interactions
- section pinning
- parallax
- smooth transitions
- subtle reveal animations
- layered layouts

Do not copy the site directly or make Sea to Sky feel like a SaaS product.

Adapt the interaction quality to a premium short-term rental and property-management brand.

## Hero

- The hero must fill the full viewport: `100vh`
- It should feel immersive and visually strong
- Keep content hierarchy simple and easy to scan
- Media should use a placeholder that can be replaced later
- Consider subtle parallax or scroll-linked movement
- The transition from hero to the next section should feel smooth and intentional

## Navbar

Create a proper sticky navbar.

- Visible while scrolling
- Lightweight and refined
- Smooth transition between top and scrolled states
- Maintain strong readability over different backgrounds
- Use subtle background, blur, border, or shadow changes only when needed

## Motion

Use restrained, polished motion:

- scroll-triggered reveals
- sticky or pinned sections
- parallax
- layered foreground and background movement
- smooth section transitions
- small opacity, scale, and position changes
- section snapping only where it improves the experience

Avoid:

- excessive scroll-jacking
- bouncing
- dramatic 3D effects
- animations that slow down content access

Respect `prefers-reduced-motion`.

## Partners

Create an infinite horizontal partner-logo carousel using the supplied SVG icons in [public/Partners](/Users/arisantonioco/Documents/ChatGPT/Sea-to-sky-website/public/Partners/).

- seamless continuous loop
- slow and smooth
- no visible restart
- preserve logo proportions
- consistent visual sizing
- responsive
- pause or reduce motion on hover if appropriate
- support reduced motion

Use natural casing such as `Our partners`, never `OUR PARTNERS`.

## Media

Use placeholders for all photography, video, and property imagery.

- preserve intended aspect ratios
- make placeholders easy to replace
- do not use fake stock images
- label placeholders clearly where helpful

## Layout

Favor:

- strong whitespace
- large sections
- editorial compositions
- controlled content widths
- large media moments
- thoughtful asymmetry
- minimal shadows and borders
- responsive layouts

Avoid turning every section into a card.

The website should feel like one continuous experience.

## Components

Keep buttons, navigation, cards, forms, headings, CTAs, partner logos, and property previews visually consistent and reusable.

Buttons should be simple, premium, and have clear hover and focus states.

## Responsive

Design intentionally for desktop, tablet, and mobile.

Simplify or disable complex parallax, pinning, and scroll effects on smaller screens when necessary.

## Accessibility

Maintain:

- strong contrast
- visible focus states
- semantic headings
- keyboard accessibility
- comfortable touch targets
- reduced-motion support
- readable font sizes

## Overall Feel

The site should feel:

`Premium, calm, contemporary, scenic, refined, trustworthy, spacious, and experience-led.`

Avoid:

`Busy layouts, generic SaaS styling, excessive luxury, heavy effects, template-like sections, and animation for animation’s sake.`

Use these rules consistently across all Sea to Sky pages.
