import * as Sentry from '@sentry/remix';
import dayjs from 'dayjs';

import { requireUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { TDeployServiceBuild, TDeployServiceHistory } from '~/types/ty';

/**
 * 天元相关接口
 * 不要在客户端发出请求，否则密钥会暴露
 */
export const tyServer = {
  // 获取与我相关的需求
  async getMyIssues<T>(request: Request) {
    const { list } = await apiPost<{ list: T }>('/getMyIssues', request, { _userKey: 'loginName' });
    if (Array.isArray(list)) {
      return list;
    }
    return [] as T;
  },
  // 发起集测配置申请
  async deployServiceBuild<T>(request: Request, params: TDeployServiceBuild) {
    const { contentJsonObject, ...rest } = params || {};
    return apiPost<T>('/deployServiceBuild', request, {
      _userKey: 'commitUser',

      bizCode: 'CFB',
      projectId: 204,
      commitTime: dayjs().format('YYYYMMDDHHmmss'),
      env: 'inte',
      status: 3, // 跟天元约定，固定为3
      contentJson: JSON.stringify(contentJsonObject),

      ...rest,
    });
  },
  // 查询集测配置申请记录
  async deployServiceHistory<T>(request: Request, params: TDeployServiceHistory) {
    const { list } = await apiPost<{ list: T }>('/deployServiceHistory', request, params);
    if (Array.isArray(list)) {
      return list;
    }
    return [] as T;
  },
};

async function apiPost<T>(
  api: string,
  request: Request,
  params?: Record<string, TAny> & { _userKey?: string }
): Promise<T> {
  const { user } = await requireUser(request);

  const { _userKey, ...rest } = params || {};
  const body = JSON.stringify({
    ...rest,
    secretKey: process.env.TY_SECRET_KEY,
    [_userKey || '?']: user?.email.split('@')[0],
  });

  const response = await fetch(`${process.env.TY_HOST}${api}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  if (!response.ok) {
    Sentry.captureException(new Error(`HTTP错误: ${response.status}`), {
      tags: { type: 'http_error', api, status: response.status },
      extra: { api, params: JSON.stringify(rest), statusText: response.statusText },
    });
    throw new Error(`HTTP error! status = ${response.status}`);
  }

  const { code, data, message } = (await response.json()) || {};
  if (code !== '0000') {
    Sentry.captureException(new Error(`业务错误: ${message}`), {
      tags: { type: 'business_error', api, code },
      extra: { api, params: JSON.stringify(rest), code, message },
    });
    throw new Error(message);
  }

  return data;
}
