// import { Server } from 'socket.io';
// import type { Server as HttpServer } from 'http';

// let io: Server | null = null;

// export function getSocketIO(): Server {
//   if (!io) {
//     throw new Error('Socket.IO has not been initialized');
//   }
//   return io;
// }

// export function initSocketIO(httpServer: HttpServer) {
//   if (io) return io;

//   io = new Server(httpServer, {
//     cors: {
//       origin: process.env.CLIENT_URL || 'https://oss.tcshuke.com:3000',
//       methods: ['GET', 'POST'],
//       credentials: true,
//     },
//     pingTimeout: 60000,
//     pingInterval: 25000,
//     transports: ['websocket', 'polling'],
//     path: '/socket.io',
//   });

//   io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     // 处理订阅
//     socket.on('resources.subscribe', (data) => {
//       const { subscription } = data;
//       if (subscription?.channel) {
//         socket.join(subscription.channel);
//         console.log(`Client ${socket.id} subscribed to channel: ${subscription.channel}`);
//       }
//     });

//     // 处理取消订阅
//     socket.on('resources.unsubscribe', (data) => {
//       const { subscription } = data;
//       if (subscription?.channel) {
//         socket.leave(subscription.channel);
//         console.log(`Client ${socket.id} unsubscribed from channel: ${subscription.channel}`);
//       }
//     });

//     // 处理发布
//     socket.on('resources.publish', (data) => {
//       const { publication } = data;
//       if (publication?.channel) {
//         io?.to(publication.channel).emit(publication.channel, {
//           type: publication.type,
//           payload: publication.payload,
//           date: publication.date || Date.now(),
//         });
//         console.log(`Published to channel ${publication.channel}:`, publication);
//       }
//     });

//     socket.on('disconnect', () => {
//       console.log('Client disconnected:', socket.id);
//     });

//     socket.on('error', (error) => {
//       console.error('@socket.server -  Socket error:', error);
//     });
//   });

//   // 全局错误处理
//   io.engine.on('connection_error', (error) => {
//     console.error('@socket.server - Connection error:', error);
//   });

//   return io;
// }
