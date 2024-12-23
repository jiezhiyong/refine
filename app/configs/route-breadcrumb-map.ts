import { UIMatch } from '@remix-run/react';

/**
 * 路由面包屑名称映射
 */
export const routeBreadcrumbMap: Record<UIMatch['id'], string> = {
  'routes/dashboard': '仪表盘',
  'routes/dashboard._index': '首页',
  'routes/models': 'AI模型',
};
