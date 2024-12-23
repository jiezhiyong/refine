import { Bot, LucideIcon, PieChart, Siren, User } from 'lucide-react';

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
      title: '仪表盘',
      icon: PieChart,
      children: [{ id: 'routes/dashboard._index', title: '首页' }],
    },
    {
      id: 'routes/models',
      title: 'AI',
      icon: Bot,
      children: [
        { id: 'routes/models.ChatGPT', title: 'ChatGPT' },
        { id: 'routes/models.Claude', title: 'Claude' },
        { id: 'routes/models.Gemini', title: 'Gemini' },
        { id: 'routes/models.LLaMA', title: 'LLaMA' },
      ],
    },
    {
      id: 'routes/playground',
      title: '代码辅助',
      icon: Bot,
      children: [
        { id: 'routes/playground.v0', title: 'v0' },
        { id: 'routes/playground.bolt', title: 'bolt' },
      ],
    },
    {
      id: 'routes/alerts',
      title: '告警配置',
      icon: Siren,
      children: [{ id: 'routes/alerts._index', title: '首页' }],
    },
    {
      id: 'routes/users',
      title: '用户管理',
      icon: User,
      children: [{ id: 'routes/users._index', title: '用户列表' }],
    },
  ],
};

// 技术菜单
const menusTechStack: menuGroupItem = {
  title: 'Techstack',
  items: [
    {
      id: 'routes/javascript',
      title: 'Javascript',
      icon: Bot,
      children: [
        { id: 'routes/javascript/react', title: 'React' },
        { id: 'routes/javascript/vue', title: 'Vue' },
        { id: 'routes/javascript/svelte', title: 'Svelte' },
        { id: 'routes/javascript/angular', title: 'Angular' },
      ],
    },
    {
      id: 'routes/css',
      title: 'CSS',
      icon: Bot,
      children: [
        { id: 'routes/css.tailwind', title: 'Tailwind' },
        { id: 'routes/css.modules', title: 'Modules' },
      ],
    },
  ],
};

// 所有菜单
export const menuGroups: menuGroupItem[] = [menusBusiness, menusTechStack];
