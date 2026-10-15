# Ayra Agrawal — Personal portfolio

**[Live portfolio](https://ayra-agrawal-portfolio.vercel.app/)**

A custom portfolio for Summer 2027 software engineering internship applications. The format uses a compact introduction, current status, an expandable experience timeline, project cards, and grouped skills, with original violet/mint styling and locally hosted JetBrains Mono typography. Built with Next.js App Router, React, TypeScript, and Tailwind CSS. Static content, a keyboard-accessible jump menu, and theme controls; no application backend, analytics, or contact-form service.

## Develop

Use Node.js 22 or 24 and npm.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

The build uses webpack explicitly so the tested local and hosted build paths match. Content routes are prerendered. Next.js supplies optimized project images and a generated Open Graph image.

## Content

- `lib/content.ts`: project summaries, links, and experience.
- `app/page.tsx`: homepage sections.
- `app/work/[slug]/page.tsx`: source-backed TraceLab and Recall case studies.
- `components/`: shared site shell, theme switch, and architecture figure.
- `app/globals.css`: light/dark tokens, responsive layouts, focus states, and reduced-motion support.
- `public/`: authentic demo screenshots and the approved phone-redacted public resume.

All experience copy is based on the supplied resume. Technical claims were cross-checked against the source repositories on October 15, 2026. TraceLab performance numbers are reported local API ingestion results, not independently rerun benchmark results or production persistence throughput. SpotOn is credited as a three-person collaboration. Recall's public demo is controlled, with recorded execution rather than live inference.

## Deployment

Deploy this directory as a **new** Vercel project using the Next.js preset. Do not link it to Recall or other existing application projects. No credentials or runtime secrets are required.

Vercel's `VERCEL_PROJECT_PRODUCTION_URL` resolves the social-image base URL. For another host, set `NEXT_PUBLIC_SITE_URL` to the canonical public origin before building. Never put credentials in a `NEXT_PUBLIC_` variable.

The original resume is not included. The public copy removes the phone number and associated icon with the user's approval; other resume content is retained.

## Accessibility and privacy

Semantic landmarks, keyboard-operable native details elements, a skip link, visible focus rings, image alternatives, system-aware persistent themes, and reduced-motion styles are included. No tracking scripts or third-party fonts are requested. Browser storage contains only the chosen theme.

## Dependency audit

The production-only audit returned zero vulnerabilities on October 15, 2026. The full audit reported five high-severity findings through the ESLint configuration's glob/matching development dependency chain; npm's suggested remedy is a major downgrade of `eslint-config-next`. That downgrade was not applied. Reassess when compatible patched lint dependencies are available.
