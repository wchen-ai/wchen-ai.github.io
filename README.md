# wchen-ai.github.io

Personal academic website of **Winston (Weijie) Chen** — Postdoctoral Research Fellow at Mayo Clinic Arizona (AI × Cardiovascular Imaging).

Built with **Next.js** (static export) + **Adobe React Spectrum**. Bilingual (EN / 中文) with a site-wide language toggle.

## Sections

- **Home** — bio, recent essays, selected research, news, selected publications
- **Research** — project cards with metrics
- **Publications** — grouped by year, filterable by type; Google Scholar metrics
- **Contributions** — awards, editorial board, interactive peer-review map, teaching, open source
- **Essays** — bilingual writing; markdown in `content/essays/<slug>/{en,zh}.md`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Content

- Publications: `src/data/publications.ts`
- Projects: `src/data/projects.ts`
- News: `src/data/news.ts`
- Reviewing / service: `src/data/service.ts`
- Profile & links: `src/data/profile.ts`
- Essays: `content/essays/<slug>/en.md` and `zh.md` (+ images in `public/essays/<slug>/`)

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`
(GitHub Pages source must be set to **GitHub Actions**).
