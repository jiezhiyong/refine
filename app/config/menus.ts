// TODO: 权限控制

import { UIMatch } from '@remix-run/react';
import { Bot, Brain, LucideIcon, PieChart, Siren, UsersRound } from 'lucide-react';

export type MenuItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  children?: Omit<MenuItem, 'children' | 'icon'>[];
};

export type menuGroupItem = {
  title: string;
  items: MenuItem[];
};

// 主菜单
const menusPlayground: menuGroupItem = {
  title: 'Playground',
  items: [
    {
      id: 'routes/dashboard',
      title: 'Dashboard',
      icon: PieChart,
      children: [
        { id: 'routes/dashboard._index', title: 'index' },
        { id: 'routes/dashboard.about', title: 'about' },
        { id: 'routes/dashboard.image', title: 'image' },
      ],
    },
    {
      id: 'routes/techstack',
      title: 'Techstack',
      icon: Brain,
      children: [
        { id: 'routes/techstack.sentry', title: 'sentry' },
        { id: 'routes/techstack.msw', title: 'msw' },
        { id: 'routes/techstack.i18n', title: 'i18n' },
      ],
    },
    {
      id: 'routes/issues',
      title: 'Issues',
      icon: Siren,
      children: [{ id: 'routes/issues._index', title: 'index' }],
    },
  ],
};

// 设置菜单
const menusSetting: menuGroupItem = {
  title: 'Settings',
  items: [
    {
      id: 'routes/users',
      title: 'User Management',
      icon: UsersRound,
      children: [
        { id: 'routes/users._index', title: 'index' },
        { id: 'routes/users.role', title: 'role' },
        { id: 'routes/users.audit-log', title: 'audit log' },
      ],
    },
  ],
};

// 所有菜单
export const menuGroups: menuGroupItem[] = [menusPlayground, menusSetting];

/**
 * 路由面包屑名称映射 - title
 */
export const routeBreadcrumbMap: Record<UIMatch['id'], string> = menuGroups.reduce(
  (acc, group) => {
    group.items.forEach((item) => {
      acc[item.id] = item.title;
      if (item.children) {
        item.children.forEach((child) => {
          acc[child.id] = child.title;
        });
      }
    });
    return acc;
  },
  {} as Record<UIMatch['id'], string>
);
