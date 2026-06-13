FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY client/package.json ./client/
COPY server/shared/package.json ./server/shared/
COPY server/api/package.json ./server/api/
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server/api/dist ./server/api/dist
COPY --from=builder /app/server/shared/dist ./server/shared/dist
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server/api/package.json ./server/api/
COPY --from=builder /app/package.json ./
ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "server/api/dist/index.js"]
