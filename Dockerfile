FROM node:18.14 AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install && pnpm build && pnpm start -p 3001

EXPOSE 3001


