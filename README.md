// TODO: 使用最新版本依赖

# Welcome to Remix

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
pnpm i
pnpm dev
```

## prisma

```shellscript
npx prisma migrate dev --name init
pnpm db:setup
npx prisma generate | npx prisma db push
npx prisma studio
```

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## 消息队列和批处理 - https://github.com/taskforcesh/bullmq

[![Open in codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/remix-run/examples/tree/main/bullmq-task-queue)

https://github.com/redis/ioredis

## 批处理、数据缓存

https://github.com/graphql/dataloader

## Sentry

https://docs.sentry.io/platforms/javascript/guides/remix/
