// import type { Server as HttpServer } from 'http';

// import { Server } from 'socket.io';

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
//       origin: `${process.env.VITE_CLIENT_HOST}:${process.env.VITE_CLIENT_PORT}`,
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

//         // 发送确认消息
//         socket.emit('subscription.confirmed', {
//           channel: subscription.channel,
//           subscriptionId: data.subscriptionId,
//         });
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
//         // 广播消息到指定频道
//         io?.to(publication.channel).emit('resources.published', {
//           channel: publication.channel,
//           type: publication.type,
//           payload: publication.payload,
//           date: publication.date || new Date().toISOString(),
//           meta: publication.meta,
//         });

//         console.log(`Published to channel ${publication.channel}:`, publication.type);
//       }
//     });

//     // 处理断开连接
//     socket.on('disconnect', (reason) => {
//       console.log(`Client ${socket.id} disconnected:`, reason);
//     });

//     // 处理错误
//     socket.on('error', (error) => {
//       console.error(`Socket ${socket.id} error:`, error);
//     });
//   });

//   return io;
// }
