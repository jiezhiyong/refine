import { canUseDOM } from '~/utils/can-use-dom';

export const isServer = !canUseDOM();

export const baseUrl = isServer ? process.env.VITE_CLIENT_URL : window.location.origin;

export const apiBase = `${baseUrl}/api`;
