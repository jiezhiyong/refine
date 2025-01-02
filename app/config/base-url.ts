// 获取当前环境的基础 URL
export const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    return import.meta.env.VITE_CLIENT_URL;
  }
  return window.location.origin;
};
