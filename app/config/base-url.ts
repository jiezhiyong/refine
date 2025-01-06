import { canUseDOM } from '~/utils/can-use-dom';

// 获取当前环境的基础 URL
export const getBaseUrl = () => {
  if (!canUseDOM()) {
    return import.meta.env.VITE_CLIENT_URL;
  }
  return window.location.origin;
};
