import { apiBase, isServer } from '~/config';
import { TAny } from '~/types';
import { generateSignature } from '~/utils/signature';

// 类型定义
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestOptions = RequestInit & {
  headers?: Record<string, string>;
};

// 统一的请求函数
async function makeRequest(requestUrl: string, options: RequestOptions = {}): Promise<Response> {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...(options.headers as Record<string, string>),
  };

  return fetch(requestUrl, {
    ...options,
    headers,
  });
}

// 数据转换
const convertToFormData = (data: Record<string, TAny>): FormData | URLSearchParams => {
  if (isServer) {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value != null) {
        params.append(key, String(value));
      }
    });
    return params;
  }

  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value != null) {
      formData.append(key, String(value));
    }
  });
  return formData;
};

// API 请求处理
const request = async (
  method: HttpMethod,
  path: string,
  data?: Record<string, TAny>,
  options: RequestOptions = {}
): Promise<Response> => {
  const url = `${apiBase}${path}`;

  const body = data ? convertToFormData(data) : undefined;

  const requestOptions: RequestOptions = {
    ...options,
    method,
    credentials: 'include',
    body: body instanceof URLSearchParams ? body.toString() : body,
  };

  if (data) {
    const timestamp = Date.now();
    const headers = {
      ...(requestOptions.headers || {}),
      'X-Timestamp': timestamp.toString(),
      'X-Signature': await generateSignature(data, timestamp),
    } as Record<string, string>;
    requestOptions.headers = headers;
  }

  return makeRequest(url, requestOptions);
};

// Web API 工具类
export const webapi = {
  get: (path: string, options?: RequestOptions) => {
    return request('GET', path, undefined, options);
  },

  post: (path: string, data?: Record<string, TAny>, options?: RequestOptions) => {
    return request('POST', path, data, options);
  },

  put: (path: string, data?: Record<string, TAny>, options?: RequestOptions) => {
    return request('PUT', path, data, options);
  },

  delete: (path: string, options?: RequestOptions) => {
    return request('DELETE', path, undefined, options);
  },
};
