// 定义的数据资源、菜单项

import { ResourceProps } from '@refinedev/core';
import { PieChart, Brain, UsersRound, Bot } from 'lucide-react';
import { TAny } from '~/types/any';

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
    name: 'health',
    list: '/playground/dashboard/health',
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
    clone: '/playground/article/post/clone/:id',
    meta: { parent: 'article' },
  },
  {
    name: 'category',
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
