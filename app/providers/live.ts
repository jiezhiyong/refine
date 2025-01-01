import { LiveProvider, LiveEvent, CrudFilters, CrudSorting } from '@refinedev/core';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;
const SOCKET_PORT = process.env.SOCKET_PORT || 3001;

// Socket.IO 配置
const socketConfig = {
  path: '/socket.io',
  transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
};

// 创建一个服务器端安全的 emit 函数
const safeEmit = (eventName: string, data: any) => {
  if (typeof window !== 'undefined') {
    // 客户端：使用 Socket.IO
    if (!socket) {
      socket = io(`http://localhost:${SOCKET_PORT}`, socketConfig);

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
        console.error('Socket error:', error);
      });
    }
    socket.emit(eventName, data);
  } else {
    // 服务器端：使用 HTTP 请求
    fetch(`http://localhost:${SOCKET_PORT}/api/publish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        data,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch((err) => {
        console.error('Failed to publish event:', err);
      });
  }
};

interface SubscriptionParams {
  channel: string;
  ids: string[];
  types: string[];
  meta?: Record<string, unknown>;
  filters?: CrudFilters;
  sorters?: CrudSorting;
  subscriptionId?: string;
}

interface PublishParams {
  channel: string;
  type: string;
  payload: unknown;
  date?: string;
  meta?: Record<string, unknown>;
}

class SocketManager {
  private socket: Socket;
  private subscriptions: Map<string, (data: LiveEvent) => void>;
  private connectionStatus: 'connected' | 'disconnected' | 'connecting' = 'disconnected';

  constructor(url: string) {
    this.socket = io(url, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
    });
    this.subscriptions = new Map();
    this.initializeSocketListeners();
  }

  private initializeSocketListeners(): void {
    this.socket.on('connect', () => {
      this.connectionStatus = 'connected';
      console.log('Socket connected successfully');
      this.resubscribeAll();
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      this.connectionStatus = 'disconnected';
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
      this.connectionStatus = 'disconnected';
    });

    this.socket.on('reconnect', (attemptNumber) => {
      console.log('Socket reconnected after', attemptNumber, 'attempts');
      this.connectionStatus = 'connected';
    });
  }

  private resubscribeAll(): void {
    this.subscriptions.forEach((callback, subscriptionId) => {
      const [channel, idsString, typesString] = subscriptionId.split('-');
      const ids = idsString.split(',');
      const types = typesString.split(',');

      this.socket.emit('subscribe', {
        channel,
        ids,
        types,
        subscriptionId,
      });
    });
  }

  public subscribe(params: SubscriptionParams, callback: (data: LiveEvent) => void): string {
    const { channel, ids, types, meta } = params;
    const subscriptionId = `${channel}-${ids.join(',')}-${types.join(',')}`;

    this.socket.emit('subscribe', { ...params, subscriptionId });
    this.socket.on(subscriptionId, callback);
    this.subscriptions.set(subscriptionId, callback);

    return subscriptionId;
  }

  public unsubscribe(subscriptionId: string): void {
    const callback = this.subscriptions.get(subscriptionId);
    if (callback) {
      this.socket.emit('unsubscribe', { subscriptionId });
      this.socket.off(subscriptionId, callback);
      this.subscriptions.delete(subscriptionId);
    }
  }

  public publish(params: PublishParams): void {
    if (this.connectionStatus !== 'connected') {
      console.warn('Socket is not connected. Message might not be delivered.');
    }
    this.socket.emit('publish', params);
  }

  public getConnectionStatus(): string {
    return this.connectionStatus;
  }
}

// 创建 socket 管理器实例
const socketManager = new SocketManager(`http://localhost:${SOCKET_PORT}`);

// 导出 LiveProvider 实现
export const liveProvider: LiveProvider = {
  subscribe: ({ channel, params: { ids }, types, callback, meta }) => {
    // 订阅只在客户端进行
    if (typeof window === 'undefined') {
      return '';
    }

    if (!socket) {
      socket = io(`http://localhost:${SOCKET_PORT}`, socketConfig);
    }

    const subscriptionId = `${channel}-${ids.join('-')}-${types.join('-')}`;

    socket.emit('resources.subscribe', {
      subscription: {
        channel,
        types,
        params: { ids },
      },
    });

    socket.on(channel, (event) => {
      try {
        callback(event);
      } catch (error) {
        console.error('Error in subscription callback:', error);
      }
    });

    return subscriptionId;
  },

  unsubscribe: (subscriptionId) => {
    if (typeof window === 'undefined' || !socket) {
      return;
    }

    try {
      const [channel] = subscriptionId.split('-');

      socket.emit('resources.unsubscribe', {
        subscription: {
          channel,
        },
      });

      socket.off(channel);
    } catch (error) {
      console.error('Error in unsubscribe:', error);
    }
  },

  publish: ({ channel, type, payload, date }) => {
    try {
      safeEmit('resources.publish', {
        publication: {
          channel,
          type,
          payload,
          date: date || new Date(),
        },
      });
    } catch (error) {
      console.error('Error in publish:', error);
    }
  },
};
