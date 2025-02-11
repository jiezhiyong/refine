// 定义的数据资源、菜单项

import { ResourceProps } from '@refinedev/core';
import { Bot, Brain, PieChart, UsersRound } from 'lucide-react';

import { EnumResource } from '~/constants';
import { TAny } from '~/types';

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
    name: 'demo',
    list: '/playground/dashboard/demo',
    meta: { parent: 'dashboard' },
  },
  {
    name: 'viewTransition',
    list: '/playground/dashboard/viewTransition',
    meta: { parent: 'dashboard', label: 'viewTransition' },
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
    name: EnumResource.post,
    list: `/playground/article/${EnumResource.post}`,
    create: `/playground/article/${EnumResource.post}/create`,
    edit: `/playground/article/${EnumResource.post}/edit/:id`,
    show: `/playground/article/${EnumResource.post}/show/:id`,
    clone: `/playground/article/${EnumResource.post}/clone/:id`,
    meta: { parent: 'article' },
  },
  {
    name: EnumResource.category,
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
    name: EnumResource.user,
    list: `/system/account/${EnumResource.user}`,
    create: `/system/account/${EnumResource.user}/create`,
    edit: `/system/account/${EnumResource.user}/edit/:id`,
    show: `/system/account/${EnumResource.user}/show/:id`,
    meta: { parent: 'account' },
  },
  {
    name: EnumResource.role,
    list: `/system/account/${EnumResource.role}`,
    create: `/system/account/${EnumResource.role}/create`,
    edit: `/system/account/${EnumResource.role}/edit/:id`,
    show: `/system/account/${EnumResource.role}/show/:id`,
    meta: { parent: 'account' },
  },

  // 二级菜单 system/admin
  {
    name: 'admin',
    meta: { parent: 'system', icon: Bot },
  },

  // 三级菜单 system/admin/Log
  {
    name: EnumResource.log,
    list: `/system/admin/${EnumResource.log}`,
    show: `/system/admin/${EnumResource.log}/show/:id`,
    meta: { parent: 'admin' },
  },
];
