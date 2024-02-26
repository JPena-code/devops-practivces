ARG NODE_VERSION=18.14.2
FROM node:${NODE_VERSION}-alpine

RUN corepack enable pnpm

WORKDIR /app

EXPOSE 3000

COPY package.json pnpm-lock.yaml /app/

RUN pnpm install --prod --frozen-lockfile

COPY . /app/

ENTRYPOINT [ "pnpm", "run" ]
CMD [ "prod" ]
