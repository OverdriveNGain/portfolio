# Jeremy Amon - Portfolio

The source code for my personal portfolio website, live at **[jeremyamon.com](https://jeremyamon.com)**.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, React Router v6 |
| Styling | Bootstrap 5, SCSS, Bootstrap Icons |
| Animations | p5.js (via react-p5) |
| HTTP | Axios (contact form mailer) |
| Testing | Jest, React Testing Library |
| Deployment | Firebase Hosting |

## Features

- **Animated landing page** - Three distinct p5.js sketches (floating point networks with quadtree neighbors, interactive border waves, snow effects) respond to scroll position and mouse input.
- **Typewriter introduction** - Custom hook that types out a greeting one character at a time.
- **Skills & Services** - Service tiles with hover-triggered snow animations.
- **Project gallery** - Filterable by language/tool and searchable by title or description.
- **Project detail pages** - Image galleries with thumbnail previews, fullscreen mode, keyboard navigation, and links to live sites, GitHub repos, and Play Store listings.
- **CV page** - Work experience, academic history, university affiliations, and color-coded skill badges.
- **About Me page** - Background, testimonials, and Q&A section.
- **Contact form** - Sends messages via the [portfolio-api-jeremy](https://github.com/OverdriveNGain/portfolio-api-jeremy) mailer endpoint.
- **Responsive design** - Fully responsive across mobile, tablet, and desktop breakpoints.

## Getting Started

```bash
npm install
```

Create a `.env` file with the mailer endpoint:

```bash
cp .env.example .env
# REACT_APP_MAILER_ENDPOINT=https://myapi.web.app/
```

Start the development server:

```bash
npm start
```

## Available Commands

| Command | Description |
|---|---|
| `npm start` | Start development server on `localhost:3000` |
| `npm run build` | Create optimized production build in `build/` |
| `npm test` | Run Jest test suite |
| `npm run eject` | Eject from react-scripts (one-way) |

## Deployment

```bash
npm run build
firebase deploy
```

The project deploys to Firebase Hosting with SPA rewrites - all paths route to `index.html`.

## Dependency Management

Dependabot is configured to keep dependencies up to date with weekly npm updates. High-severity vulnerabilities are tracked via [GitHub Security Advisories](https://github.com/OverdriveNGain/portfolio/security/dependabot).

Transitive dependency vulnerabilities that can't be resolved by direct upgrades are handled with npm `overrides` in `package.json`. The current overrides patch five known CVEs across transitive dependencies of `react-scripts`.

## VS Code

The `.vscode` directory includes:

- **`launch.json`** - Launch Chrome against the dev server with automatic `npm start`
- **`tasks.json`** - Background task that waits for the dev server to compile before opening the browser

## Opencode Skills

This repository includes workspace-level opencode skills in `.opencode/skills/`:

- **`dependabot`** - Query, triage, and resolve Dependabot vulnerability alerts
- **`query-alerts.sh`** - CLI helper for listing and inspecting alerts via the GitHub API

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Landing` | Landing page with animated backgrounds and typewriter intro |
| `/aboutme` | `AboutMe` | Background, timeline, testimonials |
| `/contact` | `Contact` | Contact form with email submission |
| `/projects` | `Projects` | Filterable project gallery |
| `/projects/:id` | `ProjectDetailsPage` | Individual project detail page |
| `/cv` | `Portfolio` | Work experience, education, and skills |

## License

Private - all rights reserved.
