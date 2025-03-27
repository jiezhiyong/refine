import { HttpError } from '@refinedev/core';
import axios, { AxiosHeaders } from 'axios';
import queryString from 'query-string';

import { TAny } from '~/types/any';
import { generateSignature } from '~/utils/signature';

/**
 * 服务器端验证
 * https://refine.dev/docs/guides-concepts/forms/#server-side-validation-
 * https://refine.dev/docs/core/interface-references/#httperror
 */
export const transformHttpError = (error: TAny): HttpError => {
  const { message, status, response } = error || {};
  const { data: responseData, statusText: responseStatusText } = response || {};
  const { target } = responseData || {};

  const msg = responseData?.message || message || responseData?.name || responseStatusText;
  const statusCode = status || response.status;

  const httpError: HttpError = {
    message: msg,
    statusCode,
  };

  if (target) {
    httpError.errors = { [target]: [msg] };
  }

  return httpError;
};

// 创建 axios 实例
export const easyAxios = axios.create();

// 拦截请求，添加签名
easyAxios.interceptors.request.use(
  async (config) => {
    const timestamp = Date.now();
    const headers = new AxiosHeaders(config.headers);

    // 获取需要签名的数据
    let signData = {};

    // 如果是 GET 请求，解析 URL 中的查询参数
    if (config.method?.toUpperCase() === 'GET' || config.method?.toUpperCase() === 'DELETE') {
      const url = config.url || '';
      const queryIndex = url.indexOf('?');
      if (queryIndex !== -1) {
        const queryStr = url.substring(queryIndex + 1);
        signData = queryString.parse(queryStr, {
          arrayFormat: 'index',
          parseNumbers: true,
          parseBooleans: true,
        });
      }
    } else {
      // 其他请求使用 body 数据，确保 signData 始终是一个对象
      signData = config.data || {};
    }

    headers.set('X-Timestamp', timestamp.toString());
    headers.set('X-Signature', await generateSignature(signData, timestamp));

    config.headers = headers;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 拦截响应，处理服务端验证
easyAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(transformHttpError(error));
  }
);
