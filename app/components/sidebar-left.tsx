import * as React from 'react';
import { NavMain } from '~/components/nav-main';
import { NavUser } from '~/components/nav-user';
import { RoleSwitcher } from '~/components/switcher-role';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '~/components-shadcn/sidebar';
import { NavSecondary } from './nav-secondary';

// 左侧导航栏
export function SidebarLeft({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <RoleSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavSecondary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
