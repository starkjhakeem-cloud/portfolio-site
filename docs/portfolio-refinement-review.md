# Portfolio refinement review

> Historical refinement record through the two-project revision. The current three-project lineup, proprietary flagship, and latest validation are recorded in [the HELIOS ONE portfolio review](helios-portfolio-review.md).

Review date: November 19, 2026. Repository: `starkjhakeem-cloud/portfolio-site`. Development branch: `portfolio-refresh-2026`. Local production review: http://127.0.0.1:3000.

## A. Implemented improvements

- Preserved the approved headline, orbital illustration, near-black/cyan palette, project cards, section order, skills cards, résumé presentation, and contact design.
- Replaced the mobile dropdown with an opaque native modal dialog. The background is inert, page scrolling is locked, Escape closes the menu, and section selection moves focus to the destination. The menu closes when resizing to desktop. Desktop navigation begins at 901px to avoid tablet crowding.
- Corrected active-section tracking for long project content, return to the hero, the résumé section, and the short contact section at the bottom. Anchor offsets follow the actual sticky-header height.
- Clarified frontend, full-stack, and mobile specialization in the hero. Updated About to accurately describe current WGU studies, independent application development, AI interests, and Army experience.
- Expanded verified project case studies into concise problem, solution, architecture, implementation, trade-off, engineering considerations, and future-development notes. Removed the unverified third project completely at the user’s request; the showcase now contains only Finance Tracker Dashboard and Job Application Tracker.
- Improved screenshot scaling and intrinsic aspect ratios; added links to the actual bundled screenshots. Both projects use full-width feature rows on desktop and stacked image/content layouts on tablet and mobile. Single filtered results retain that emphasis. Filter changes consistently reset expanded disclosures.
- Improved supporting text, tag, availability, footer, and mobile touch-target readability. Kept decorative orbital content outside keyboard interaction.
- Hardened clipboard feedback: success appears only after completion; failures provide usable guidance. Pending work and component cleanup are handled.
- Added factual Person structured data alongside the existing canonical URL, Open Graph/Twitter metadata, sitemap, and robots configuration.
- Kept static sections server-rendered, local fonts, optimized images, and focused client components. No dependencies were added. No field performance metrics are claimed.

## B. Files modified

Modified:

- `README.md`
- `app/components/copy-email.tsx`
- `app/components/navigation.tsx`
- `app/components/orbit.tsx`
- `app/components/project-showcase.tsx`
- `app/data/portfolio.ts`
- `app/globals.css`
- `app/page.tsx`
- `package.json`
- `public/Jhakeem_Moultrie_Software_Engineer_Resume.pdf`

Created:

- `app/lib/clipboard.ts`
- `app/lib/navigation-state.ts`
- `app/lib/project-filter.ts`
- `tests/interaction-state.test.mjs`
- `scripts/check-site.mjs`
- `docs/portfolio-refinement-review.md`
- `docs/verification/responsive-results.json`
- `docs/verification/desktop-1440.jpg`
- `docs/verification/tablet-768.jpg`
- `docs/verification/mobile-390.jpg`
- `docs/verification/mobile-menu.jpg`
- `docs/verification/project-showcase.jpg`

No whole files removed. Exclusive third-project illustration styles, fallback markup, unverified-source messaging, contact action, data record, and unused verification flag were removed. The lockfile, production configuration, and main branch were not modified. The website résumé copy now omits that project; its Desktop original is unchanged.

## C. Project verification

| Project                   | Evidence and accurate scope                                                                                                                                                                                                                                                                                                              | Availability                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Finance Tracker Dashboard | Public source at `2fcec3312dbd98ac0aaef6fecf174bed47a33e48`: Next.js, React, TypeScript, Tailwind CSS, Recharts; transaction creation/editing/deletion, calculated totals, category/date aggregates, browser localStorage. Screenshot comes from the repository. No account, cloud database, or cross-device synchronization is claimed. | Repository verified. README says live deployment is coming soon; no verified public demo was found.                                                                                |
| Job Application Tracker   | Public source at `70061ef1a5ac2add1ccf16f2e2cf6daee76bbf3e`: React Native, Expo Router, TypeScript, AsyncStorage, reusable cards/modal form, application CRUD, search, status selection, calculated counts, Animated and Haptics. Screenshot comes from the repository.                                                                  | Repository verified. No verified public demo/video was found; the site links the actual screenshot. Source contains an `Offers`/`Offer` mismatch, now disclosed in its case study. |

Finance source: [README](https://github.com/starkjhakeem-cloud/finance-tracker-dashboard/blob/2fcec3312dbd98ac0aaef6fecf174bed47a33e48/README.md), [page/state/storage](https://github.com/starkjhakeem-cloud/finance-tracker-dashboard/blob/2fcec3312dbd98ac0aaef6fecf174bed47a33e48/app/page.tsx), [dashboard](https://github.com/starkjhakeem-cloud/finance-tracker-dashboard/blob/2fcec3312dbd98ac0aaef6fecf174bed47a33e48/app/components/Dashboard.tsx).

Job Tracker source: [README](https://github.com/starkjhakeem-cloud/job-tracker-react-native/blob/70061ef1a5ac2add1ccf16f2e2cf6daee76bbf3e/README.md), [screen](https://github.com/starkjhakeem-cloud/job-tracker-react-native/blob/70061ef1a5ac2add1ccf16f2e2cf6daee76bbf3e/app/%28tabs%29/index.tsx), [form](https://github.com/starkjhakeem-cloud/job-tracker-react-native/blob/70061ef1a5ac2add1ccf16f2e2cf6daee76bbf3e/components/ApplicationForm.tsx), [Expo configuration](https://github.com/starkjhakeem-cloud/job-tracker-react-native/blob/70061ef1a5ac2add1ccf16f2e2cf6daee76bbf3e/app.json).

Skills were checked against repository evidence and documented experience. REST/API and authentication evidence also exists in the public [Helios repository](https://github.com/starkjhakeem-cloud/helios-life-os) at `5e7fd93170237701ec98deec43b05c2b8fd7a5ab` (API client, task service, authentication router, password/token code). Supabase is explicitly labeled familiarity because documented familiarity does not establish advanced proficiency. No proficiency percentages, invented metrics, or engineering employment were added. The two source applications themselves were inspected, not executed as part of this portfolio review.

## D. Responsive verification

Actual rendered-page checks used the local production build in the in-app browser at **320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440, and 1920px**. The page was scrolled through its sections at each width before capture. Final measurements record matching document/viewport widths, loaded fonts, both screenshots loaded with correct proportions, and no horizontally out-of-bounds controls at all eleven widths.

The review corrected narrow filtered cards, tablet navigation crowding, screenshot presentation, and mobile copy-status placement. Both unfiltered cards and single-platform results fill their grid; filter counts are 2 total, 1 Web, and 1 Mobile. Card technology labels are exactly Next.js/TypeScript/Tailwind CSS and React Native/TypeScript/Expo. Recharts and AsyncStorage remain accurately described in the detailed case studies. Expanded native details, filters, mobile menu, and menu-to-desktop resizing were exercised separately. These observations do not substitute for native device or multi-engine testing.

Representative captures: [desktop](verification/desktop-1440.jpg), [tablet](verification/tablet-768.jpg), [mobile](verification/mobile-390.jpg), [opaque mobile menu](verification/mobile-menu.jpg). Two-project feature rows: [showcase screenshot](verification/project-showcase.jpg). Measurements: [responsive results](verification/responsive-results.json). Full-width captures for every tested width are also supplied in the Desktop screenshot folder's `Two Project Review` subfolder.

## E. Accessibility

- Checked semantic landmarks, one H1, section headings, descriptive screenshot alternatives, native button/link/disclosure semantics, and accessible names that include visible link text.
- Verified keyboard disclosure activation, visible focus styles, menu Escape dismissal and trigger focus restoration, section-destination focus, modal background isolation, and scroll-lock cleanup. Native browser chrome can receive keyboard focus; hidden page controls remain inert while the menu is open.
- Platform controls expose pressed state and announce result counts; clipboard feedback uses a polite status. Failure feedback is covered by focused tests.
- Footer links meet 44px minimum targets; mobile menu links have 52px minimum height. Main sections accept programmatic focus without entering normal tab order.
- Sampled contrast ratios: supporting body text 7.82:1, case-study text 7.57:1, availability 10.36:1, primary-button text 4.87:1, footer text 5.62:1, tags 9.72:1.
- Reduced-motion rules remain in the compiled CSS; decorative orbit content is inert.

Remaining limits: no independent VoiceOver or other screen-reader session, no complete WCAG certification, and no OS-level reduced-motion animation session. Accessibility-tree and keyboard observations support the specific claims above.

## F. Validation results

| Check                                                         | Observed result                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm test`                                                    | 5 passed; zero failures, skips, or cancellations. Covers navigation boundaries, immutable platform filtering/counts, and asynchronous clipboard success/failure/missing support.                                                                             |
| `npm run lint`                                                | Passed, exit 0.                                                                                                                                                                                                                                              |
| `npx tsc --noEmit`                                            | Passed, exit 0.                                                                                                                                                                                                                                              |
| `npm run build`                                               | Passed with Next.js 16.2.9/Turbopack; static page, not-found, icon, robots, and sitemap routes generated.                                                                                                                                                    |
| `PORTFOLIO_BASE_URL=http://127.0.0.1:3000 npm run check:site` | Passed: nine routes/assets returned HTTP 200; valid exact PDF, metadata, structured data, one H1, section focus targets, download attributes, local fonts, image optimizer, and compiled reduced-motion/modal styles.                                        |
| Browser interactions                                          | Filter counts 2/1/1; disclosure reset on platform change; keyboard expansion; opaque modal; Escape/link/resize close; correct active markers at hero/contact; successful copy feedback; mobile résumé link click closes the menu and restores trigger focus. |
| Browser console                                               | No warnings or errors observed in the reviewed production tab.                                                                                                                                                                                               |

The served résumé is a valid 32,145-byte one-page PDF and matches the public file. SHA-256: `4fc1ba6d1c33d091623e5f31ab918060504214134e88d4c9878a6431c7a63155`. Exactly four text lines belonging to the removed project were omitted, subsequent content moved up to close the gap, and every other text line was preserved (ignoring extraction whitespace). The revised PDF was rendered and visually inspected. The original Desktop PDF remains unchanged, with SHA-256 `df1984f1a6972e13749c748d10f18156572501b9f5ec9832a908c73ceeaff943`. Navigation and section links retain the intended filename. A browser save-completion event was not observed; the valid PDF response and download attributes were checked.

Local fonts and screenshots are bundled. The public screenshot files are approximately 31KB and 27KB, and the local image optimizer responds successfully. No Lighthouse score, Core Web Vitals result, or quantified performance improvement is claimed.

## G. Remaining issues and coverage limits

The former third-project and stale résumé-link issues are resolved. No project title, unavailable-source message, related contact action, or illustration remains in the rendered page, metadata, structured data, application source, or revised PDF. The social preview contains no project listings. Current limitations:

1. The Job Tracker source prototype has the disclosed status mismatch and needs its own validation/storage review. Its separate repository was not changed here.
2. Layout and interaction checks ran in the available in-app browser. Native Safari verification was interrupted by user control and is incomplete. Chrome, Firefox, Edge, and native iOS were not directly tested. A final native Safari/iOS and multi-browser pass remains recommended.
3. LinkedIn matches the supplied résumé destination, but live profile availability was not independently confirmed. The mailto destination is correct; an external mail-client launch was not exercised. Clipboard rejection/missing-support paths are automated; interactive browser success was observed.
4. No independent screen-reader audit, OS reduced-motion session, field performance measurement, or completed browser save event was observed.

## H. Deployment readiness

The refined implementation is prepared for final review on `portfolio-refresh-2026`, with the existing pull request remaining a draft. Initial branch inspection found a clean working tree; remote changes were fetched before implementation. No pre-existing user edits were discarded. The intended refinement files are committed on the development branch, with final commit and clean-tree evidence recorded in the delivery response.

Automated validation and the rendered responsive checks pass. Production approval should follow final visual review and the remaining native-browser coverage. The site is ready for final review; unconditional cross-browser production readiness is not claimed. **No merge or production deployment was performed.** The existing development-branch deployment exclusion was preserved, and production settings were not changed.
