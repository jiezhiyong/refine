import { canUseDOM } from '~/utils';

export const isServer = !canUseDOM();

// 生产修改环境变量需要重新打包
export const baseUrl = import.meta.env.VITE_CLIENT_URL;

export const apiBase = `${baseUrl}/api`;
