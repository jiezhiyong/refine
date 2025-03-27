# Refine & Remix APP

[Refine](https://refine.dev) 是一个无头 React 框架，主要用于构建企业内部工具、管理面板、仪表板、B2B等应用程序。它消除了 CRUD 操作中的重复性任务，并为关键项目组件（如身份验证、访问控制、路由、网络、状态管理和 i18n）提供行业标准解决方案。

[Remix](https://remix.run) 是一个全栈式 Web 框架，专注于用户界面，并通过 Web 标准进行工作，以提供快速、流畅且有弹性的用户体验。

## 从环境变量模板文件拷贝，按需修改、配置生产环境变量

```sh
cp .env.example .env
```

## 准备工作 - 本地安装 postgresql 数据库

```sh
brew install postgresql@14 # 本地安装 postgresql 数据库
brew services start postgresql@14 # 启动数据库
createdb refine # 创建数据表
npx prisma migrate dev --name init && npx prisma db seed # 运行数据库迁移 && 向数据库写入Mock数据
npx prisma studio # 查看数据表
```

## 本地开发

Run the dev server, then open `http://localhost:5173` in your browser. (note: proxy may influence this origin)

```sh
pnpm i
pnpm dev
```

## 其他 Prisma 命令行

```sh
npx zenstack generate # 重新生成 Prisma Client
npx prisma db push
npx prisma migrate reset --force # 重置数据库
npx prisma migrate dev --create-only --name add_new_field # 创建迁移文件，不立即应用
npx prisma migrate dev , npx prisma migrate deploy # 部署迁移
npx prisma db pull # 内省 - 从数据库中拉取 schema, 需要重新生成 Prisma Client
```

## 根据 Prisma Schema 生成 OpenAPI 文档

```sh
npx @redocly/cli build-docs openapi.yaml --output public/redoc-static.html
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

## Deployment - DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## 本地使用HTTPS时，需要配置本地 HTTPS 环境（可选）

```sh
brew install mkcert # 安装 mkcert
mkcert -install # 安装本地 CA
mkcert me.ly.com localhost 127.0.0.1 ::1 # 在项目根目录创建证书
sudo echo "127.0.0.1 me.ly.com" >> /etc/hosts # 修改 hosts 文件，添加本地域名映射
```

## Issues

- Q: Cannot find module '.prisma/client/default'
- A: 重新执行 `npx prisma generate` 并重启开发服务 `pnpm dev`

- Q: 命令行更新了数据库数据，但 `db` 查询到的数据不一致
- A: 重启开发服务 `pnpm dev`

- Q: Sentry source maps 无法上传到自托管服务器
- A: 旧版本不支持 Artifact Bundle，需要升级自托管版本到 23.6.1 以上，或使用旧版本方式上传（cli、sentryVitePlugin uploadLegacySourcemaps等）

## TODO: 问题、未实现的功能

- Sentry source maps 文件路径不匹配

- 升级 Remix v3 / React Router v7, 暂时无法升级: @refinedev/remix-router 使用的是 Remix 2.x 版本
- Refine devtool 选择器无法使用
- Refine Live Provider 使用 socket.io | SSE?
- Redis
- MQ
- 单点登录
- 多租户
- 服务状态监控 https://github.com/louislam/uptime-kuma?tab=readme-ov-file、https://prometheus.io

## Remix Resources

- https://remix.run/blog
- https://remix.run/resources?category=all
- https://remix.run/showcase

## Refine Resources

- https://refine.dev/docs/guides-concepts/realtime/、https://refine.dev/docs/realtime/live-provider/

- https://refine.dev/docs/packages/tanstack-table/introduction/、https://tanstack.com/table/v8
- https://refine.dev/docs/packages/react-hook-form/introduction/、https://react-hook-form.com/

- https://refine.dev/docs/guides-concepts/multitenancy/
- https://refine.dev/docs/advanced-tutorials/web3/ethereum-signin/
- https://refine.dev/docs/advanced-tutorials/
- https://refine.dev/blog/how-to-multipart-file-upload-with-react-hook-form/
- https://refine.dev/templates/
- https://github.com/refinedev/refine/blob/master/hackathon/refine-hackathon.md
- https://refine.dev/week-of-refine-supabase/
- https://refine.dev/docs/enterprise-edition/
