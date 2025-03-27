import { canUseDOM } from '~/utils/can-use-dom';

export const isServer = !canUseDOM();

// 生产修改环境变量需要重新打包
export const baseUrl = `${import.meta.env.VITE_CLIENT_HOST}:${import.meta.env.VITE_CLIENT_PORT}`;

export const apiBase = `${baseUrl}/api`;
