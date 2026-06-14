# Project Structure

## Frontend (`frontend/src/`)

```
app/                    # App shell, router, shared API client
sec/components/         # Page sections (self-contained modules)
components/             # Shared UI components
i18n/                   # Translations
hooks/                  # Shared hooks
utils/                  # Shared utilities
styles/                 # Global tokens + animations
config/                 # Site config
```

## Backend (`backend/src/`)

```
server/                 # Express bootstrap, config, db, middleware
controller/             # Route handlers (auth, admin, projects, contact)
services/               # Business logic layer
models/                 # @mysite/shared — schemas, types (shared with frontend)
utils/                  # JWT, sanitization
```

## Shared models (`backend/src/models/`)

```
schemas/                # Zod validation
types/                  # TypeScript types
n8n-contact.ts          # n8n form builder
```

Used by both `@mysite/frontend` and `@mysite/backend` via workspace package `@mysite/shared`.
