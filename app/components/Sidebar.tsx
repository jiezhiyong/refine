'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

import { NavMain } from '~/components/nav-main';
import { NavProjects } from '~/components/nav-projects';
import { NavUser } from '~/components/nav-user';
import { TeamSwitcher } from '~/components/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '~/components-shadcn/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatar.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Home',
          url: '/dashboard',
        },
        {
          title: 'About',
          url: '/dashboard/about',
        },
        {
          title: 'Setting',
          url: '/dashboard/setting',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'ChatGPT',
          url: '/models/ChatGPT',
        },
        {
          title: 'Claude',
          url: '/models/Claude',
        },
        {
          title: 'Gemini',
          url: '/models/Gemini',
        },
        {
          title: 'LLaMA',
          url: '/models/LLaMA',
        },
      ],
    },
    {
      title: 'Playground',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'v0',
          url: '/playground/v0',
        },
        {
          title: 'bolt',
          url: '/playground/bolt',
        },
      ],
    },
    {
      title: 'Configs',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'About',
          url: '/configs/about',
        },
        {
          title: 'Setting',
          url: '/configs/about',
        },
      ],
    },
    {
      title: 'Users',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Table Lists',
          url: '/users',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
