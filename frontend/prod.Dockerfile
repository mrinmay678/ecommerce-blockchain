FROM node:lts as dependencies
WORKDIR /web/app
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /web/app
COPY . .
COPY --from=dependencies /web/app/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /web/app

COPY --from=builder /web/app/next.config.js ./
COPY --from=builder /web/app/public ./public
COPY --from=builder /web/app/.next ./.next
COPY --from=builder /web/app/node_modules ./node_modules
COPY --from=builder /web/app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]