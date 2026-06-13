# mysite — Premium Portfolio

Full-stack TypeScript portfolio with Admin CMS, built in the [see-you-tomorrow](https://github.com/RonenCohen7/see-you-tomorrow) monorepo style.

**GitHub:** [RonenCohen7/mysite](https://github.com/RonenCohen7/mysite)

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, TailwindCSS, Framer Motion, GSAP, Axios
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
cd server/api && npm start   # API :3001
cd client && npm start       # Vite :5173
```

Open [http://localhost:5173](http://localhost:5173)

## Admin

- URL: [http://localhost:5173/admin](http://localhost:5173/admin) — **open in dev** (no password)
- Before production: set `ADMIN_AUTH_ENABLED=true` and `ADMIN_PASSWORD=...` in `.env`
- Keep `VITE_API_URL` **empty** in dev

## Project Structure

```
mysite/
├── client/          @mysite/client
├── server/
│   ├── shared/      @mysite/shared
│   ├── api/         @mysite/api
│   └── scripts/     seed
├── docker-compose.yml
└── package.json
```

## Build

```bash
npm run build
```

## License

Proprietary — Ronen Cohen
