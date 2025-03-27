import { EnumResource } from '~/constants/resource';

export const menus = [
  // 一级菜单 playground
  {
    name: 'playground',
  },

  // 二级菜单 playground/dashboard
  {
    name: 'dashboard',
    meta: { parent: 'playground', icon: 'PieChart' },
  },

  // 三级菜单 playground/dashboard/About、Techstack
  {
    name: 'about',
    list: '/playground/dashboard/about',
    meta: { parent: 'dashboard' },
  },
  {
    name: 'dynamic/post',
    list: '/playground/dashboard/dynamic/post',
    meta: { parent: 'dashboard' },
    title: '文章管理',
  },
  {
    name: 'discover',
    list: '/playground/dashboard/discover',
    meta: { parent: 'dashboard' },
  },
  {
    name: EnumResource.dynamicPage,
    list: `/playground/dashboard/${EnumResource.dynamicPage}`,
    create: `/playground/dashboard/${EnumResource.dynamicPage}/create`,
    edit: `/playground/dashboard/${EnumResource.dynamicPage}/edit/:id`,
    clone: `/playground/dashboard/${EnumResource.dynamicPage}/clone/:id`,
    meta: { parent: 'dashboard' },
  },
  {
    name: 'demo',
    list: '/playground/dashboard/demo',
    meta: { parent: 'dashboard' },
  },
  {
    name: 'demoViewTransition',
    list: '/playground/dashboard/demoViewTransition',
    meta: { parent: 'dashboard' },
  },

  // 二级菜单 playground/document
  {
    name: 'article',
    meta: { parent: 'playground', icon: 'Brain' },
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
    list: `/playground/article/${EnumResource.category}`,
    create: `/playground/article/${EnumResource.category}/create`,
    edit: `/playground/article/${EnumResource.category}/edit/:id`,
    meta: { parent: 'article' },
  },

  // 二级菜单 playground/frontRoute
  {
    name: 'frontRoute',
    meta: { parent: 'playground', icon: 'Route' },
  },

  // 三级菜单 playground/frontRoute/project、module
  {
    name: EnumResource.frontRouteProject,
    list: `/playground/frontRoute/${EnumResource.frontRouteProject}`,
    create: `/playground/frontRoute/${EnumResource.frontRouteProject}/create`,
    edit: `/playground/frontRoute/${EnumResource.frontRouteProject}/edit/:id`,
    meta: { parent: 'frontRoute' },
  },
  {
    name: EnumResource.frontRouteModule,
    list: `/playground/frontRoute/${EnumResource.frontRouteModule}`,
    create: `/playground/frontRoute/${EnumResource.frontRouteModule}/create`,
    edit: `/playground/frontRoute/${EnumResource.frontRouteModule}/edit/:id`,
    meta: { parent: 'frontRoute' },
  },

  // 一级菜单 system
  {
    name: 'system',
    meta: {},
  },

  // 二级菜单 system/account
  {
    name: 'account',
    meta: { parent: 'system', icon: 'UsersRound' },
  },

  // 三级菜单 system/account/Role、User
  {
    name: EnumResource.user,
    list: `/system/account/${EnumResource.user}`,
    edit: `/system/account/${EnumResource.user}/edit/:id`,
    meta: { parent: 'account' },
  },
  {
    name: EnumResource.role,
    list: `/system/account/${EnumResource.role}`,
    create: `/system/account/${EnumResource.role}/create`,
    edit: `/system/account/${EnumResource.role}/edit/:id`,
    meta: { parent: 'account' },
  },

  // 二级菜单 system/admin
  {
    name: 'admin',
    meta: { parent: 'system', icon: 'Bot' },
  },

  // 三级菜单 system/admin/auditRecord/create/applyRole
  {
    name: `${EnumResource.auditRecord}/applyRole`,
    list: `/system/admin/${EnumResource.auditRecord}/applyRole`,
    meta: { parent: 'admin' },
  },
  {
    name: EnumResource.casbinRule,
    list: `/system/admin/${EnumResource.casbinRule}`,
    create: `/system/admin/${EnumResource.casbinRule}/create`,
    edit: `/system/admin/${EnumResource.casbinRule}/edit/:id`,
    meta: { parent: 'admin' },
  },
  // 三级菜单 system/admin/auditRecord
  {
    name: EnumResource.auditRecord,
    list: `/system/admin/${EnumResource.auditRecord}`,
    show: `/system/admin/${EnumResource.auditRecord}/show/:id`,
    meta: { parent: 'admin' },
  },
  // 三级菜单 system/admin/menu
  {
    name: EnumResource.menu,
    list: `/system/admin/${EnumResource.menu}`,
    show: `/system/admin/${EnumResource.menu}/show/:id`,
    meta: { parent: 'admin' },
  },
  // 三级菜单 system/admin/Log
  {
    name: EnumResource.log,
    list: `/system/admin/${EnumResource.log}`,
    show: `/system/admin/${EnumResource.log}/show/:id`,
    meta: { parent: 'admin' },
  },
];
