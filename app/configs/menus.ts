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

// 业务菜单
const menusBusiness: menuGroupItem = {
  title: 'Business',
  items: [
    {
      id: 'routes/dashboard',
      title: 'Dashboard',
      icon: PieChart,
      children: [
        { id: 'routes/dashboard._index', title: 'Home' },
        { id: 'routes/dashboard.about', title: 'About' },
      ],
    },
    {
      id: 'routes/issues',
      title: 'Issues',
      icon: Siren,
      children: [{ id: 'routes/issues._index', title: 'Home' }],
    },
    {
      id: 'routes/models',
      title: 'AI Models',
      icon: Brain,
      children: [
        { id: 'routes/models.ChatGPT', title: 'ChatGPT' },
        { id: 'routes/models.Claude', title: 'Claude' },
        { id: 'routes/models.Gemini', title: 'Gemini' },
        { id: 'routes/models.LLaMA', title: 'LLaMA' },
      ],
    },
    {
      id: 'routes/copilot',
      title: 'Copilot',
      icon: Bot,
      children: [
        { id: 'routes/copilot.v0', title: 'V0' },
        { id: 'routes/copilot.bolt', title: 'Bolt' },
      ],
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
      children: [{ id: 'routes/users._index', title: 'Home' }],
    },
  ],
};

// 所有菜单
export const menuGroups: menuGroupItem[] = [menusBusiness, menusSetting];

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
