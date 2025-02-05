# CRUD APP Template, use Refine & Remix

[Refine](https://refine.dev/) 是一个开源的无头 React 框架，供开发人员构建企业内部工具、管理面板、仪表板、B2B 应用程序。
它消除了 CRUD 操作中的重复性任务，并为关键项目组件（如身份验证、访问控制、路由、网络、状态管理和 i18n）提供行业标准解决方案。

[Remix](https://remix.run/) 是一个全栈式 Web 框架，可让您专注于用户界面，并通过 Web 标准进行工作，以提供快速、流畅且有弹性的用户体验。

## 配置本地 HTTPS 环境

```sh
brew install mkcert # 安装 mkcert
mkcert -install # 安装本地 CA
mkcert oss.tcshuke.com localhost 127.0.0.1 ::1 # 在项目根目录创建证书
sudo echo "127.0.0.1 oss.tcshuke.com" >> /etc/hosts # 修改 hosts 文件，添加本地域名映射
```

## 配置环境变量（注意：示例中的变量值仅作参考，需要根据实际情况修改）

```sh
cp .env.example .env
```

## Development

Run the dev server, then open `https://oss.tcshuke.com:5173` in your browser. (note: proxy may influence this origin)

```sh
pnpm i
pnpm dev
```

## Prisma cli

```sh
npx prisma migrate dev --name init # 创建数据库
npx prisma generate # 更新 schema.prisma 文件后，重新生成 Prisma Client
npx prisma studio # 查看数据库
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

## DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## Issues

- Cannot find module '.prisma/client/default'
- 重新执行 `npx prisma generate` 并重启开发服务 `pnpm dev`

- 数据库删除了数据，但 `db` 依然可以查询到数据
- 重启开发服务 `pnpm dev`

## TODO

- 单点登录
- 多因素认证（短信验证码、手机应用验证等）
- 多租户

## Remix Resources

- https://remix.run/docs/en/main/components/links、https://remix.run/docs/en/main/components/prefetch-page-links
- https://remix.run/docs/en/main/hooks/use-action-data

- https://remix.run/blog
- https://remix.run/resources?category=all
- https://remix.run/showcase

## Refine Resources

- https://refine.dev/docs/guides-concepts/realtime/、https://refine.dev/docs/realtime/live-provider/

- https://refine.dev/docs/packages/tanstack-table/introduction/
- https://refine.dev/docs/packages/react-hook-form/introduction/
- https://refine.dev/docs/guides-concepts/deployment/
- https://refine.dev/docs/guides-concepts/multitenancy/
- https://refine.dev/docs/advanced-tutorials/web3/ethereum-signin/
- https://refine.dev/docs/advanced-tutorials/
- https://refine.dev/blog/how-to-multipart-file-upload-with-react-hook-form/
- https://refine.dev/templates/
- https://github.com/refinedev/refine/blob/master/hackathon/refine-hackathon.md
- https://refine.dev/week-of-refine-supabase/
- https://refine.dev/docs/enterprise-edition/
