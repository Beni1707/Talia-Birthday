# Birthday Site

Site d'anniversaire — Vite, React, TypeScript, Tailwind CSS, shadcn/ui.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Déploiement

Le déploiement se fait automatiquement via GitHub Actions (`.github/workflows/deploy.yml`) à chaque push sur `main`, vers GitHub Pages.

Sur GitHub, active Pages avec la source "GitHub Actions" (Settings → Pages).

### Ajuster le `base`

Le champ `base` dans `vite.config.ts` doit correspondre au nom du dépôt GitHub :

```ts
base: '/nom-du-depot/',
```

Le `basename` du `BrowserRouter` dans `src/App.tsx` doit rester identique.

## Structure

- `src/pages` — pages de l'application (`Home`, `Gallery`)
- `src/components` — composants réutilisables (layout, hero, gallery, effets)
- `src/data/memories.ts` — contenu des souvenirs
- `src/hooks` — hooks partagés (scroll, musique, reveal)
- `src/styles/globals.css` — palette, polices, styles de base
