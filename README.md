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
- `public/Jhakeem_Moultrie_Software_Engineer_Resume.pdf`: the user-selected résumé with the removed project entry omitted.
- `docs/portfolio-refresh.md`: implementation decisions, source provenance, and validation record.

## Updating content

Edit `app/data/portfolio.ts` to update profile links, technical skills, project descriptions, or repository URLs. The proprietary project type forbids repository, demo, and screenshot properties; keep HELIOS ONE content limited to approved public-facing summaries. Only add a `demo` URL after opening it and verifying it runs the intended project. Check new technical claims against the actual project source.

The showcase leads with HELIOS ONE, a proprietary independent AI systems R&D project, followed by Finance Tracker Dashboard and Job Application Tracker. Counts are derived from project data: three total, one Systems, one Web, and one Mobile. Cards receive full-width feature rows on desktop and stack their image/content at tablet and mobile widths. The Systems card uses a clearly labeled conceptual identity visual; no private source links, screenshots, configuration, or internal assets are included. Implemented capabilities and research goals are distinguished.

Replace the résumé PDF at the same public path to update the download. The website copy omits the removed project entry; the original Desktop résumé is preserved. Update `profile.siteUrl` if the portfolio's production domain changes, and regenerate `public/social-preview.png` if its branding changes.

## Interaction and accessibility

Project platform filters use pressed states, announce result counts, and reset expanded case studies consistently when the selected platform changes. A single result fills the available grid width. Engineering notes use native keyboard-accessible disclosures. The mobile menu uses an opaque native modal dialog with inert background content, keyboard focus containment, Escape dismissal, destination focus, scroll locking, and cleanup when the viewport reaches desktop width. Desktop navigation begins at 901px. Section tracking clears the previous active marker when returning to the hero. Email copy reports success only after the Clipboard API resolves and provides guidance on failure. Core page content is server-rendered; a section-navigation fallback appears when JavaScript is disabled. Animation respects reduced-motion preferences.

No analytics, contact-form service, animation library, or new runtime dependency is required. Contact links use email, GitHub, and LinkedIn. No submission is sent through this site.

Changes are prepared on `portfolio-refresh-2026`. `vercel.json` disables automatic Git deployments for this development branch. Publishing or merging to `main` requires separate approval.

The application-wide refinement findings, source evidence, responsive checks, and remaining release considerations are recorded in [the refinement review](docs/portfolio-refinement-review.md).

The flagship integration and privacy-focused verification are recorded in [the HELIOS ONE portfolio review](docs/helios-portfolio-review.md).
