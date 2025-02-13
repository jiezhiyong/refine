import { apiBase, isServer } from '~/config';
import { TAny } from '~/types';
import { generateSignature } from '~/utils/signature';

// 类型定义
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestOptions = RequestInit & {
  headers?: Record<string, string>;
};

// API 请求处理
async function request(
  method: HttpMethod,
  path: string,
  data?: Record<string, TAny>,
  options: RequestOptions = {}
): Promise<Response> {
  const url = isServer ? `${apiBase}${path}` : path;

  const requestOptions: RequestOptions = {
    ...options,
    method,
    credentials: 'include',
  };

  // 如果有请求体且是 POST/PUT/PATCH 请求，确保正确序列化
  if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
    const contentType = options?.headers?.['Content-Type'];
    if (contentType === 'application/json') {
      requestOptions.body = JSON.stringify(data);
    } else if (contentType === 'application/x-www-form-urlencoded') {
      const formData = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        if (value != null) {
          formData.append(key, value.toString());
        }
      });
      requestOptions.body = formData;
    }
  }

  if (data) {
    const timestamp = Date.now();
    const headers = {
      ...(requestOptions.headers || {}),
      'X-Timestamp': timestamp.toString(),
      'X-Signature': await generateSignature(data, timestamp),
    } as Record<string, string>;
    requestOptions.headers = headers;
  }

  return fetch(url, requestOptions);
}

// Web API 工具类
export const webapi = {
  async get(path: string, options: RequestOptions = {}) {
    return request('GET', path, undefined, options);
  },

  async post(path: string, data?: Record<string, TAny>, options: RequestOptions = {}) {
    return request('POST', path, data, options);
  },

  async put(path: string, data?: Record<string, TAny>, options: RequestOptions = {}) {
    return request('PUT', path, data, options);
  },

  async delete(path: string, options: RequestOptions = {}) {
    return request('DELETE', path, undefined, options);
  },
};
