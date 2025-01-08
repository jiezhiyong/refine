import { apiBase } from '~/config/base-url';
import { generateSignature } from './signature';

// API 请求工具
export async function clientApi<T = any>(
  method: string,
  endpoint: string,
  data?: any,
  options: RequestInit = {}
): Promise<T> {
  const url = `${apiBase}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  } as HeadersInit & Record<string, string>;

  if (data) {
    const timestamp = Date.now();
    headers['X-Timestamp'] = timestamp.toString();
    headers['X-Signature'] = await generateSignature(data, timestamp);
  }

  const response = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'include',
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: '请求失败' }));
    throw new Error(error.message || '请求失败');
  }

  return response.json();
}

// 便捷方法
export const api = {
  get: <T = any>(endpoint: string, options?: RequestInit) => {
    return clientApi<T>('GET', endpoint, undefined, options);
  },

  post: <T = any>(endpoint: string, data?: any, options?: RequestInit) => {
    return clientApi<T>('POST', endpoint, data, options);
  },

  put: <T = any>(endpoint: string, data?: any, options?: RequestInit) => {
    return clientApi<T>('PUT', endpoint, data, options);
  },

  delete: <T = any>(endpoint: string, data?: any, options?: RequestInit) => {
    return clientApi<T>('DELETE', endpoint, data, options);
  },
};
