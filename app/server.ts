import express, { createRequestHandler } from '@remix-run/express';
import { broadcastDevReady } from '@remix-run/node';
import { createServer } from 'http';
import type { ServerBuild } from '@remix-run/node';
import * as build from '@remix-run/dev/server-build';
import { initSocketIO } from './services/socket.server';

const app = express();
const httpServer = createServer(app);

// 初始化 Socket.IO
initSocketIO(httpServer);

// 配置 Remix 处理程序
app.all(
  '*',
  createRequestHandler({
    build: build as unknown as ServerBuild,
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log(`Express server listening on port ${port}`);

  if (process.env.NODE_ENV === 'development') {
    broadcastDevReady(build);
  }
});
