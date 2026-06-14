FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY frontend/package.json ./frontend/
COPY backend/src/models/package.json ./backend/src/models/
COPY backend/package.json ./backend/
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/backend/dist ./backend/dist
COPY --from=builder /app/backend/src/models/dist ./backend/src/models/dist
COPY --from=builder /app/frontend/dist ./frontend/dist
COPY --from=builder /app/backend/package.json ./backend/
COPY --from=builder /app/package.json ./
ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "backend/dist/server/index.js"]
