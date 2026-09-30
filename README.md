# MAAHI Newborn Care Centre

Website for MAAHI Newborn Care Centre, a Level III NICU in Rajkot. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Every page is statically prerendered.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local   # optional: override the public site URL
npm run dev                  # http://localhost:3000
```

| Script                 | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Development server                              |
| `npm run build`        | Production build                                |
| `npm start`            | Serve the production build                      |
| `npm run lint`         | ESLint (Next.js core-web-vitals + TypeScript)   |
| `npm run typecheck`    | Generate route types, then run `tsc`            |
| `npm run format`       | Prettier, with Tailwind class sorting           |

## Project structure

```
src/
├─ app/                  Routes, metadata files (sitemap, robots, manifest, icon) and globals.css
│  ├─ services/[slug]/   Service detail pages, generated from content/services.ts
│  └─ news/[slug]/       Articles, generated from content/news.ts
├─ components/
│  ├─ layout/            Header, navigation and footer
│  ├─ ui/                Primitives: Button, Section, Photo, Icon, Typography, ...
│  ├─ sections/          Blocks shared across pages: PageHero, CtaBand, ServiceCards, ...
│  ├─ home/ doctors/ contact/   Page-specific components
│  ├─ motion/            Scroll-reveal observer
│  └─ seo/               JSON-LD renderer
├─ config/               Site-wide settings (contact details, URLs) and navigation
├─ content/              All page copy and data: services, doctors, FAQs, news, ...
└─ lib/                  cn(), metadata and schema.org helpers
public/images/           Photos and logo
```

## Editing content

- **Phone, email, address, map and social links:** `src/config/site.ts`
- **Services, doctors, FAQs, facilities and news:** the matching file in `src/content/`. Adding an entry to `services` or `articles` creates its page, adds it to the sitemap and adds it to the navigation where relevant.
- **Design tokens (colours, type scale, radii, breakpoints):** the `@theme` block in `src/app/globals.css`

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter tags come from `createMetadata()` in `src/lib/seo.ts`.
- Structured data: MedicalClinic on every page, plus FAQPage, Physician, MedicalProcedure, NewsArticle and BreadcrumbList where they apply.
- `sitemap.xml` and `robots.txt` are generated from the content files.
- Old `.html` URLs permanently redirect to the new clean URLs (see `next.config.ts`).

## Before launch

- The appointment form currently only confirms on screen. Connect it to a backend (API route, email service or CRM) in `src/components/contact/AppointmentForm.tsx`.
- Add the OPD timings (`src/app/contact/page.tsx`) and the privacy policy text (`src/app/privacy-policy/page.tsx`).
- Set the article publish date (`publishedAt` in `src/content/news.ts`).
- The three news cards without articles link to `#`. Write those articles or remove the cards.
