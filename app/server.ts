// import { createServer } from 'http';

// import { broadcastDevReady, createRequestHandler } from '@remix-run/node';
// import type { AppLoadContext, ServerBuild } from '@remix-run/node';

// import { initSocketIO } from '~/services/socket.server';

// // HTTP 服务器实例
// let _httpServer: ReturnType<typeof createServer>;

// // 获取或创建 HTTP 服务器实例
// function getServer(build: ServerBuild) {
//   if (!_httpServer) {
//     const handler = createRequestHandler(build, process.env.NODE_ENV);

//     _httpServer = createServer((req, res) => {
//       console.log('Request received:', req.url);
//       return handler(req as unknown as Request, res as unknown as AppLoadContext);
//     });

//     initSocketIO(_httpServer); // 初始化 Socket.IO 服务
//   }
//   return _httpServer;
// }

// async function start() {
//   try {
//     console.log(`正在启动服务器...`);

//     // 导入服务端构建文件
//     const build = await import('../build/server/index.js');

//     // 获取服务器实例
//     const server = getServer(build as unknown as ServerBuild);

//     // 获取端口配置
//     const port = Number(process.env.VITE_CLIENT_PORT);

//     // 启动服务器
//     server.listen(port, () => {
//       console.log(`服务器已启动，监听端口 ${port}`);

//       if (process.env.NODE_ENV === 'development') {
//         broadcastDevReady(build as unknown as ServerBuild);
//       }
//     });
//   } catch (error) {
//     console.error('服务器启动失败:', error);
//     process.exit(1);
//   }
// }

// // 启动服务器并处理未捕获的错误
// start().catch((error) => {
//   console.error('未捕获的错误:', error);
//   process.exit(1);
// });
