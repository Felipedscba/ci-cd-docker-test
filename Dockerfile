FROM node:20 AS builder
WORKDIR /app

COPY . .
RUN npm install && npm run test && npm run build

FROM node:20
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

CMD ["node", "dist/server.js"]

EXPOSE 3000
