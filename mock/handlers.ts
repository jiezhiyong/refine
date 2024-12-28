import { handlersAuthGithub } from './handlers/auth-github';
import { handlersBase } from './handlers/base';
import { handlersExample } from './handlers/example';

/**
 * mswjs - 定义需要 mock 的 API 请求处理器
 * https://mswjs.io
 */
export const handlers = [...handlersBase, ...handlersAuthGithub, ...handlersExample];
