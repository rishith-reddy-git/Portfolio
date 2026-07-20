# Soodini Rishith Reddy — Portfolio

A premium, responsive personal portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy with GitHub Pages

The included GitHub Actions workflow creates a static export and deploys it whenever `master` is updated.

1. In GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push the project to `master`.
4. The site will publish at `https://rishith-reddy-git.github.io/Portfolio/`.

## Personalize

- Add verified LinkedIn and Instagram URLs in `components/portfolio.tsx`.
- Add a résumé file and update the **Request résumé** action when ready.
- Replace the abstract gallery treatments with your own photography and event imagery.

## Files

- `app/` — App Router pages, metadata, sitemap, and global styling
- `components/` — interactive user interface components
- `data/` — typed portfolio content
- `.github/workflows/deploy.yml` — GitHub Pages build and deployment workflow

It can be deployed directly to GitHub Pages, Netlify, or Vercel without a build step.
