import * as React from 'react';
import { Sidebar as RefineSidebar } from '~/component-refine/components/sidebar';
import { NavUser, RoleSwitcher } from '~/components';
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
        <RefineSidebar />
        <NavSecondary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
