import * as https from 'node:https';
import { apiBase, isServer } from '~/config';
import { generateSignature } from './signature';

// 类型定义
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestOptions = RequestInit & {
  headers?: Record<string, string>;
};

// 服务端 HTTPS 请求
let makeServerRequest: ((url: string, options: RequestOptions) => Promise<Response>) | undefined;

if (isServer) {
  makeServerRequest = (requestUrl: string, options: RequestOptions = {}): Promise<Response> => {
    return new Promise((resolve, reject) => {
      const parsedUrl = new URL(requestUrl);
      const requestOptions: https.RequestOptions = {
        method: options.method || 'GET',
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + parsedUrl.search,
        rejectUnauthorized: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...(options.headers as Record<string, string>),
        },
      };

      const req = https.request(requestOptions, (res: any) => {
        let data = '';
        res.on('data', (chunk: any) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({
            ok: res.statusCode >= 200 && res.statusCode < 300,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers,
            json: async () => {
              try {
                return JSON.parse(data);
              } catch {
                return {};
              }
            },
          } as Response);
        });
      });

      req.on('error', reject);

      if (options.body) {
        // 如果是 URLSearchParams，需要转换为字符串
        const body = options.body instanceof URLSearchParams ? options.body.toString() : options.body;
        req.write(body);
      }
      req.end();
    });
  };
}

// 数据转换
const convertToFormData = (data: Record<string, any>): FormData | URLSearchParams => {
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
  data?: Record<string, any>,
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

  return isServer && makeServerRequest ? makeServerRequest(url, requestOptions) : fetch(url, requestOptions);
};

// Web API 工具类
export const webapi = {
  get: (path: string, options?: RequestOptions) => {
    return request('GET', path, undefined, options);
  },

  post: (path: string, data?: Record<string, any>, options?: RequestOptions) => {
    return request('POST', path, data, options);
  },

  put: (path: string, data?: Record<string, any>, options?: RequestOptions) => {
    return request('PUT', path, data, options);
  },

  delete: (path: string, options?: RequestOptions) => {
    return request('DELETE', path, undefined, options);
  },
};
