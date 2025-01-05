// // icons
// // https://lucide.dev/icons/
// import { Bot, Brain, Timer, Siren, UsersRound } from 'lucide-react';
// import { ResourceMeta } from 'node_modules/@refinedev/core/dist/contexts/resource/types';
// import { ReactNode } from 'react';

// // 定义数据资源枚举
// export const EnumResource = {
//   user: 'user',
//   role: 'role',
//   log: 'log',
//   post: 'post',
//   category: 'category',
// } as const;

// // 定义数据实体
// export type Resources = (typeof EnumResource)[keyof typeof EnumResource];

// // 从 EnumResource 自动推导出资源数组
// export const resources: IResources = [
//   { name: 'user', meta: { label: 'Users', icon: UsersRound as unknown as ReactNode } },
//   { name: 'role', meta: { label: 'Roles', icon: Siren as unknown as ReactNode } },
//   { name: 'log', meta: { label: 'Audit Logs', icon: Timer as unknown as ReactNode } },
//   { name: 'post', meta: { label: 'Posts', icon: Brain as unknown as ReactNode } },
//   { name: 'category', meta: { label: 'Categories', icon: Bot as unknown as ReactNode } },
// ];

// type IResources = { name: Resources; meta: ResourceMeta }[];
