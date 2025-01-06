import { Bot, Brain, UsersRound } from 'lucide-react';
import { DataProvider, ResourceProps } from '@refinedev/core';
import dataProviderSimpleRest from '@refinedev/simple-rest';
import { apiBase } from '~/config/base-url';
import { PieChart } from 'lucide-react';
import { TAny } from '~/types/any';

// 定义数据资源枚举
export const EnumResource = {
  user: 'user',
  role: 'role',
  log: 'log',
  post: 'post',
  category: 'category',
} as const;

// 定义数据实体
export type Resources = (typeof EnumResource)[keyof typeof EnumResource];

// 使用 @refinedev/simple-rest, 并配置正确的基础 URL
export const dataProvider: DataProvider = dataProviderSimpleRest(apiBase);

// 定义的数据资源、菜单项
// icons - https://lucide.dev/icons/
export const dataResources: ResourceProps[] = [
  // 一级菜单 playground
  {
    name: 'playground',
    meta: { label: 'Playground' },
  },

  // 二级菜单 playground/dashboard
  {
    name: 'dashboard',
    meta: { parent: 'playground', label: 'Dashboard', icon: PieChart as TAny },
  },

  // 三级菜单 playground/dashboard/About、Techstack
  {
    name: 'about',
    list: '/dashboard/about',
    meta: { parent: 'dashboard', label: 'About' },
  },
  {
    name: 'techstack',
    list: '/dashboard/techstack',
    meta: { parent: 'dashboard', label: 'Techstack' },
  },

  // 二级菜单 playground/document
  {
    name: 'article',
    meta: { parent: 'playground', label: 'Article', icon: Brain },
  },

  // 三级菜单 playground/dashboard/Post、Category
  {
    name: 'post',
    list: '/post',
    create: '/post/create',
    edit: '/post/edit/:id',
    show: '/post/show/:id',
    meta: { parent: 'article', label: 'Post' },
  },
  {
    name: 'category',
    list: '/category',
    meta: { parent: 'article', label: 'Category' },
  },

  // 一级菜单 system
  {
    name: 'system',
    meta: { label: 'System' },
  },

  // 二级菜单 system/account
  {
    name: 'account',
    meta: { parent: 'system', label: 'Account', icon: UsersRound },
  },

  // 三级菜单 system/account/Role、User
  {
    name: 'user',
    list: '/user',
    create: '/user/create',
    edit: '/user/edit/:id',
    show: '/user/show/:id',
    meta: { parent: 'account', label: 'User' },
  },
  {
    name: 'role',
    list: '/role',
    create: '/role/create',
    edit: '/role/edit/:id',
    show: '/role/show/:id',
    meta: { parent: 'account', label: 'Role' },
  },

  // 二级菜单 system/other
  {
    name: 'other',
    meta: { parent: 'system', label: 'Other', icon: Bot },
  },

  // 三级菜单 system/other/Log、Demo
  {
    name: 'log',
    list: '/log',
    show: '/log/show/:id',
    meta: { parent: 'other', label: 'AuditLog' },
  },
  {
    name: 'demo',
    list: '/demo',
    meta: { parent: 'other', label: 'Demo' },
  },
];
