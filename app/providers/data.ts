import { Bot, Brain, UsersRound } from 'lucide-react';
import { DataProvider, ResourceProps } from '@refinedev/core';
import dataProviderSimpleRest from '@refinedev/simple-rest';
import { getBaseUrl } from '~/config/base-url';
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
export const apiBase = getBaseUrl() + '/api';
export const dataProvider: DataProvider = dataProviderSimpleRest(apiBase);

// 定义的数据资源、菜单项
// icons - https://lucide.dev/icons/
export const dataResources: ResourceProps[] = [
  // 一级菜单 Playground
  {
    name: 'Playground',
  },

  // 二级菜单 Playground/Dashboard
  {
    name: 'Dashboard',
    meta: { parent: 'Playground', label: 'Dashboard', icon: PieChart as TAny },
  },

  // 三级菜单 Playground/Dashboard/About、Techstack
  {
    name: 'about',
    list: '/dashboard/about',
    create: '/dashboard/about/create',
    edit: '/dashboard/about/edit/:id',
    show: '/dashboard/about/show/:id',
    meta: { parent: 'Dashboard', label: 'About' },
  },
  {
    name: 'techstack',
    list: '/dashboard/techstack',
    create: '/dashboard/techstack/create',
    edit: '/dashboard/techstack/edit/:id',
    show: '/dashboard/techstack/show/:id',
    meta: { parent: 'Dashboard', label: 'Techstack' },
  },

  // 二级菜单 Playground/Document
  {
    name: 'Document',
    meta: { parent: 'Playground', label: 'Document', icon: Brain },
  },

  // 三级菜单 Playground/Dashboard/Post、Category
  {
    name: 'post',
    list: '/document/post',
    create: '/document/post/create',
    edit: '/document/post/edit/:id',
    show: '/document/post/show/:id',
    meta: { parent: 'Document', label: 'Post' },
  },
  {
    name: 'category',
    list: '/document/category',
    create: '/document/category/create',
    edit: '/document/category/edit/:id',
    show: '/document/category/show/:id',
    meta: { parent: 'Document', label: 'Category' },
  },

  // 一级菜单 System
  {
    name: 'System',
  },

  // 二级菜单 System/Account
  {
    name: 'Account',
    meta: { parent: 'System', label: 'Account', icon: UsersRound },
  },

  // 三级菜单 System/Account/Role、User
  {
    name: 'user',
    list: '/account/user',
    create: '/account/user/create',
    edit: '/account/user/edit/:id',
    show: '/account/user/show/:id',
    meta: { parent: 'Account', label: 'User' },
  },
  {
    name: 'role',
    list: '/account/role',
    create: '/account/role/create',
    edit: '/account/role/edit/:id',
    show: '/account/role/show/:id',
    meta: { parent: 'Account', label: 'Role' },
  },

  // 二级菜单 System/Other
  {
    name: 'Other',
    meta: { parent: 'System', label: 'Other', icon: Bot },
  },

  // 三级菜单 System/Other/Log、Demo
  {
    name: 'log',
    list: '/other/log',
    show: '/other/log/show/:id',
    meta: { parent: 'Other', label: 'AuditLog' },
  },
  {
    name: 'demo',
    list: '/other/demo',
    meta: { parent: 'Other', label: 'Demo' },
  },
];
