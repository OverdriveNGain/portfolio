# Jeremy Amon — Portfolio

The source code for my personal portfolio website, live at **[jeremyamon.com](https://jeremyamon.com)**.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, React Router DOM v6 |
| Styling | Bootstrap 5, SASS, Bootstrap Icons |
| Animations | p5.js (via react-p5) |
| HTTP | Axios |
| Deployment | Firebase Hosting |

## Features

- **Animated landing page** — Three distinct p5.js sketches (floating points with quadtree neighbors, interactive border waves, snow effects) respond to scroll position and mouse input.
- **Typewriter introduction** — Custom hook that types out a greeting one character at a time.
- **Skills & Services** — Service tiles with hover-triggered snow animations that follow the cursor.
- **Project gallery** — Filterable by language/tool and searchable by title or description, with responsive tile layout.
- **Project detail pages** — Image galleries with thumbnail previews, fullscreen mode, keyboard navigation, and links to live projects, GitHub repos, and Play Store listings.
- **CV page** — Work experience, academic history, university affiliations, and color-coded skill badges.
- **Contact form** — Sends messages via API endpoint with success dialog.
- **Responsive design** — Fully responsive across mobile, tablet, and desktop breakpoints.

## Getting Started

```bash
npm install
```

Create a `.env` file from the example and set the API endpoint:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm run start
```

## Deployment

```bash
npm run build
firebase deploy
```

The project deploys to Firebase Hosting with SPA rewrites (all paths route to `index.html`).
