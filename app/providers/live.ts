import { LiveEvent, LiveProvider } from '@refinedev/core';
import { io, Socket } from 'socket.io-client';

import { baseUrl } from '~/config/base-url';
import { Ably } from '~/lib/refinedev-ably';
import { TAny } from '~/types/any';
import { canUseDOM } from '~/utils/can-use-dom';

// Ably 配置
export const ablyClient = new Ably.Realtime('BPxcXA.E1bxAw:T4H-_uL4SC0WfJfZUlRnXZ_XPgZkN8N_DNmGVsH8JNs');
ablyClient.connection.once('connected', () => {
  console.log('Connected to Ably!');
});

let socket: Socket | null = null;
// const SOCKET_PORT = import.meta.env.VITE_CLIENT_PORT || 3001;

// Socket.IO 配置
const socketConfig = {
  path: '/socket.io/', // 添加末尾的斜杠
  transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
  autoConnect: true, // 确保自动连接
  forceNew: true, // 强制创建新连接
};

// 创建一个服务器端安全的 emit 函数
const safeEmit = (eventName: string, data: TAny) => {
  if (canUseDOM()) {
    // 客户端：使用 Socket.IO
    if (!socket) {
      socket = io(baseUrl, socketConfig);

      // 添加事件监听器
      socket.on('connect', () => {
        console.log('Socket connected');
      });

      socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
      });

      socket.on('disconnect', (reason) => {
        console.log('Socket disconnected:', reason);
      });

      socket.on('reconnect', (attemptNumber) => {
        console.log('Socket reconnected after', attemptNumber, 'attempts');
      });

      socket.on('error', (error) => {
        console.error('@liveProvider - Socket error:', error);
      });
    }
    socket.emit(eventName, data);
  }
};

// 生成唯一的订阅 ID
const generateSubscriptionId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// 导出 LiveProvider 实现
export const liveProvider: LiveProvider = {
  subscribe: ({ channel, types = ['*'], callback, params }) => {
    const subscriptionId = generateSubscriptionId();

    // 发送订阅请求
    safeEmit('resources.subscribe', {
      subscription: {
        channel,
        types,
        params,
      },
      subscriptionId,
    });

    // 监听发布事件
    if (socket) {
      socket.on('resources.published', (event: LiveEvent) => {
        if (event.channel === channel) {
          if (types.includes('*') || types.includes(event.type)) {
            callback(event);
          }
        }
      });

      // 监听订阅确认
      socket.on('subscription.confirmed', (data) => {
        if (data.subscriptionId === subscriptionId) {
          console.log(`Subscription confirmed for channel: ${data.channel}`);
        }
      });
    }

    return subscriptionId;
  },

  unsubscribe: (subscriptionId: string) => {
    if (socket) {
      safeEmit('resources.unsubscribe', {
        subscription: {
          subscriptionId,
        },
      });
    }
  },

  publish: ({ channel, type, payload, date, meta }) => {
    safeEmit('resources.publish', {
      publication: {
        channel,
        type,
        payload,
        date: date || new Date().toISOString(),
        meta,
      },
    });
  },
};
