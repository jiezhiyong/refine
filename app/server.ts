// import { broadcastDevReady } from '@remix-run/node';
// import type { ServerBuild } from '@remix-run/node';
// import * as build from '@remix-run/dev/server-build';
// import { createServer } from 'http';
// import express from 'express';
// import { createRequestHandler } from '@remix-run/express';
// import { initSocketIO } from '~/services';

// let _app: express.Application;
// let _httpServer: ReturnType<typeof createServer>;

// function getServer() {
//   if (!_app) {
//     _app = express();
//     _httpServer = createServer(_app);
//     initSocketIO(httpServer);
//   }
//   return { app: _app, httpServer: _httpServer };
// }

// function attachRemixHandler(_build: ServerBuild) {
//   const { app } = getServer();
//   app.all(
//     '*',
//     createRequestHandler({
//       build: _build,
//       mode: process.env.NODE_ENV,
//     })
//   );
// }

// const { httpServer } = getServer();
// attachRemixHandler(build as unknown as ServerBuild);

// const port = process.env.PORT || 3000;
// httpServer.listen(port, () => {
//   console.log(`Express server listening on port ${port}`);
//   if (process.env.NODE_ENV === 'development') {
//     broadcastDevReady(build);
//   }
// });
