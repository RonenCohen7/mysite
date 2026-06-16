FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY frontend/package*.json ./frontend/
COPY backend/package*.json ./backend/
COPY backend/src/models/package*.json ./backend/src/models/

RUN npm install

COPY . .

RUN npm run build


FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/backend/package*.json ./backend/
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/frontend/dist ./frontend/dist
COPY --from=builder /app/backend/src/models ./backend/src/models
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80

CMD ["node", "backend/dist/server/index.js"]
