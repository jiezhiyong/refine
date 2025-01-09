# Refine & Remix

refine 是一个开源的无头 React 框架，供开发人员构建企业内部工具、管理面板、仪表板、B2B 应用程序。
它消除了 CRUD 操作中的重复性任务，并为关键项目组件（如身份验证、访问控制、路由、网络、状态管理和 i18n）提供行业标准解决方案。

- 📖 [Remix docs](https://remix.run/docs)

# 配置本地 HTTPS 环境

```sh
brew install mkcert # 安装 mkcert
mkcert -install # 安装本地 CA
mkcert oss.tcshuke.com localhost 127.0.0.1 ::1 # 在项目根目录创建证书
sudo echo "127.0.0.1 oss.tcshuke.com" >> /etc/hosts # 修改 hosts 文件，添加本地域名映射
```

## Development

Run the dev server:

```sh
pnpm i
pnpm dev
```

## prisma

```sh
npx prisma migrate dev --name init
npx prisma db seed
npx prisma generate | npx prisma db push
npx prisma studio
```

## Deployment

First, build your app for production:

```sh
pnpm build
docker build -t remix -f Dockerfile .
docker run -p 3000:3000 remix
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

## qrcode sign in

## 功能搜索

## 单点登录、多重身份验证
