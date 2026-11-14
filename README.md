# Sedgwick Construction — Website

Modern, animated, responsive marketing site for Sedgwick Construction LLC (Tampa, Florida).

Built with **Vite + React 18 + TypeScript + Tailwind CSS v4 + Framer Motion**.
Output is a fully static bundle in `dist/` — deployable anywhere (GitHub Pages included).

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server with hot reload
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build locally
```

Deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

## Where to customize

| What | File |
| --- | --- |
| Phone, email, address, license #, hours | `src/data.ts` → `COMPANY` |
| Navigation links | `src/data.ts` → `NAV_LINKS` |
| Services, projects, stats, process, reviews, FAQs | `src/data.ts` |
| Photos | `public/img/` (replace with real project photos, same filenames) |
| Colors, fonts, keyframes | `src/index.css` (`@theme` block) |
| SEO title/description/JSON-LD | `index.html` |

## Contact form

The form in `src/components/Contact.tsx` validates input and animates to a success state, but has
**no backend wired up yet**. Before launch, point it at a form service by replacing the timeout in
`submit()` with a POST to your endpoint (e.g. Formspree, Netlify Forms, or your own API):

```ts
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

## Notes

- Company details, license number and reviews are realistic placeholders — update them in
  `src/data.ts` before going live.
- Images are Wikimedia Commons photos (free licenses). Credits are in `IMAGE_CREDITS.md`.
  For a commercial launch, swap in your own photography.
- Animations respect `prefers-reduced-motion` (the intro loader and scroll effects are disabled).