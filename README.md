# mysite — Premium Portfolio

Full-stack TypeScript portfolio with Admin CMS.

**GitHub:** [RonenCohen7/mysite](https://github.com/RonenCohen7/mysite)

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, CSS, MUI, Framer Motion, GSAP, Axios
- **Backend:** Express, TypeScript, MongoDB, GridFS
- **Security:** Helmet, rate limiting, CSRF, input sanitization, honeypot

## Prerequisites

- Node.js 22+
- MongoDB 7+ (or Docker)

## Setup

```bash
npm install
cp .env.example .env
npm run docker:deps    # starts MongoDB on :27017
npm run seed           # demo projects
```

## Run

```bash
# Both (recommended)
npm run dev

# Or separately
cd backend && npm start    # API :3001
cd frontend && npm start   # Vite :5173
```

Open [http://localhost:5173](http://localhost:5173)

## Admin

- URL: [http://localhost:5173/ronen](http://localhost:5173/ronen) — password in dev only if `ADMIN_AUTH_ENABLED=true`
- Production: auth is **on by default** — set `ADMIN_PASSWORD=...` in `.env` on the server
- `/admin` returns 404 (hidden path)
- Keep `VITE_API_URL` **empty** in dev

## Project Structure

```
mysite/
├── frontend/              @mysite/frontend
│   ├── Models/            site.ts, techStack.ts
│   └── src/
│       ├── Components/    *Area folders (Hero, Contact, Admin, Layout, Ui…)
│       ├── Services/      ApiService, ContactService
│       ├── Utils/         cn, useScrollSpy
│       ├── Assets/        Images/, Video/
│       ├── i18n/
│       └── styles/
├── backend/
│   ├── src/
│   │   ├── server/        Express app, config, middleware
│   │   ├── controller/    Route handlers
│   │   ├── services/      Business logic
│   │   ├── models/        @mysite/shared (schemas + types)
│   │   └── utils/
│   └── scripts/           seed
├── docker-compose.yml
└── package.json
```

Each section lives in its own `*Area` folder under `src/components/` (e.g. `HeroArea/Hero/`), with styles in `Component.css`. [MUI](https://mui.com/) is used for tooltips and theme baseline. Layout, routing, and shared UI are in `LayoutArea`, `PagesArea`, and `UiArea`.

## Build

```bash
npm run build
```

## License

Proprietary — Ronen Cohen
