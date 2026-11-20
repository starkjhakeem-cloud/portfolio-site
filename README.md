# Jhakeem Moultrie — Software Engineering Portfolio

A responsive portfolio built with Next.js App Router, React 19, TypeScript, and Tailwind CSS 4. The site introduces my work, technical skills, education, military background, and contact information.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Fonts and project images are bundled locally; no API keys, database, or external requests are needed to render the site.

## Validate

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

For production locally, run `npm run start` after building. With the server running, `npm run check:site` validates local routes, metadata, assets, and the résumé. Set `PORTFOLIO_BASE_URL` to check a different local port. Tests use the existing TypeScript compiler and Node’s built-in test runner; no test library is installed.

## Structure

- `app/page.tsx`: server-rendered page composition and static sections.
- `app/components/`: reusable navigation, SVG icons, orbital illustration, project showcase, and email-copy control.
- `app/data/portfolio.ts`: profile links, project content, and grouped skills.
- `app/globals.css`: design tokens, layouts, responsive rules, reduced-motion and print styles.
- `app/fonts/`: local Latin variable fonts and their SIL Open Font Licenses.
- `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`: metadata and crawler configuration.
- `public/projects/`: optimized WebP screenshots from the original project repositories.
- `public/Jhakeem_Moultrie_Software_Engineer_Resume.pdf`: the user-selected résumé, preserved without modification.
- `docs/portfolio-refresh.md`: implementation decisions, source provenance, and validation record.

## Updating content

Edit `app/data/portfolio.ts` to update profile links, technical skills, project descriptions, or repository URLs. Only add a `demo` URL after opening it and verifying it runs the intended project. Check new technical claims against the actual project source.

The current Link & Notes repository returns 404. Its card intentionally provides a contact action instead of an unavailable repository or unverified technical claims. Restore its details after the current source is available for inspection. Removing this unverified archive from featured work is recommended for final review unless its source or a credible demonstration can be restored; it has not been silently removed.

Replace the résumé PDF at the same public path to update the download. Its current document includes the old Link & Notes URL; the site does not alter the original résumé. Update `profile.siteUrl` if the portfolio's production domain changes, and regenerate `public/social-preview.png` if its branding changes.

## Interaction and accessibility

Project platform filters use pressed states, announce result counts, and reset expanded case studies consistently when the selected platform changes. A single result fills the available grid width. Engineering notes use native keyboard-accessible disclosures. The mobile menu uses an opaque native modal dialog with inert background content, keyboard focus containment, Escape dismissal, destination focus, scroll locking, and cleanup when the viewport reaches desktop width. Desktop navigation begins at 901px. Section tracking clears the previous active marker when returning to the hero. Email copy reports success only after the Clipboard API resolves and provides guidance on failure. Core page content is server-rendered; a section-navigation fallback appears when JavaScript is disabled. Animation respects reduced-motion preferences.

No analytics, contact-form service, animation library, or new runtime dependency is required. Contact links use email, GitHub, and LinkedIn. No submission is sent through this site.

Changes are prepared on `portfolio-refresh-2026`. `vercel.json` disables automatic Git deployments for this development branch. Publishing or merging to `main` requires separate approval.

The application-wide refinement findings, source evidence, responsive checks, and remaining release considerations are recorded in [the refinement review](docs/portfolio-refinement-review.md).
