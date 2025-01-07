import { Bot, Brain, UsersRound } from 'lucide-react';
import { DataProvider, ResourceProps } from '@refinedev/core';
import dataProviderSimpleRest from '@refinedev/simple-rest';
import { apiBase } from '~/config/base-url';
import { PieChart } from 'lucide-react';
import { TAny } from '~/types/any';

// 使用 @refinedev/simple-rest, 并配置正确的基础 URL
export const dataProvider: DataProvider = dataProviderSimpleRest(apiBase);

// 定义的数据资源、菜单项
// icons - https://lucide.dev/icons/
export const dataResources: ResourceProps[] = [
  // 一级菜单 playground
  {
    name: 'playground',
    meta: {},
  },

  // 二级菜单 playground/dashboard
  {
    name: 'dashboard',
    meta: { parent: 'playground', icon: PieChart as TAny },
  },

  // 三级菜单 playground/dashboard/About、Techstack
  {
    name: 'about',
    list: '/playground/dashboard/about',
    meta: { parent: 'dashboard' },
  },
  {
    name: 'techstack',
    list: '/playground/dashboard/techstack',
    meta: { parent: 'dashboard' },
  },

  // 二级菜单 playground/document
  {
    name: 'article',
    meta: { parent: 'playground', icon: Brain },
  },

  // 三级菜单 playground/dashboard/Post、Category
  {
    name: 'post',
    list: '/playground/article/post',
    create: '/playground/article/post/create',
    edit: '/playground/article/post/edit/:id',
    show: '/playground/article/post/show/:id',
    meta: { parent: 'article' },
  },
  {
    name: 'category',
    list: '/playground/article/category',
    meta: { parent: 'article' },
  },

  // 一级菜单 system
  {
    name: 'system',
    meta: {},
  },

  // 二级菜单 system/account
  {
    name: 'account',
    meta: { parent: 'system', icon: UsersRound },
  },

  // 三级菜单 system/account/Role、User
  {
    name: 'user',
    list: '/system/account/user',
    create: '/system/account/user/create',
    edit: '/system/account/user/edit/:id',
    show: '/system/account/user/show/:id',
    meta: { parent: 'account' },
  },
  {
    name: 'role',
    list: '/system/account/role',
    create: '/system/account/role/create',
    edit: '/system/account/role/edit/:id',
    show: '/system/account/role/show/:id',
    meta: { parent: 'account' },
  },

  // 二级菜单 system/admin
  {
    name: 'admin',
    meta: { parent: 'system', icon: Bot },
  },

  // 三级菜单 system/admin/Log
  {
    name: 'log',
    list: '/system/admin/log',
    show: '/system/admin/log/show/:id',
    meta: { parent: 'admin' },
  },
];
