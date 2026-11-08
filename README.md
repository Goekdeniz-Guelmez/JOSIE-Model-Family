# JOSIE Model Family

The JOSIE model family website, prepared for static hosting on GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

Create the static site with:

```sh
npm run build
```

The exported website is written to `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

This repository uses the project-site path `/JOSIE-Model-Family`. The workflow sets `NEXT_PUBLIC_BASE_PATH` for Next.js and public assets so links work under that path. If you attach a custom domain, clear that value in the workflow and update `metadataBase` in `app/layout.tsx` to the custom domain.
