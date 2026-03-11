# Portfolio

A personal portfolio site built with [Next.js](https://nextjs.org/), deployed to [GitHub Pages](https://pages.github.com/).

Live site: [https://TamukongBt.github.io](https://TamukongBt.github.io)

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to GitHub Pages

This project uses [`gh-pages`](https://github.com/tschaub/gh-pages) to publish the static export.

**One-command deploy:**

```bash
yarn deploy
```

This runs `next build` (which outputs to `out/`) and then pushes it to the `main` branch of the remote repository via `gh-pages`.

**Manual steps:**

```bash
# 1. Build static export
yarn build

# 2. Push out/ to GitHub Pages branch
npx gh-pages -b main -d out
```

> **Note:** The site is exported as fully static HTML via `output: 'export'` in `next.config.js`. A `.nojekyll` file is included in `public/` so GitHub Pages skips Jekyll processing and serves Next.js assets correctly.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
