import * as React from 'react';

import { NavUser } from '~/components/nav-user';
import { SidebarEasy } from '~/components/refine/sidebar';
import { RoleSwitcher } from '~/components/switcher-role';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '~/components/ui/sidebar';

import { NavSecondary } from './nav-secondary';

// 左侧导航栏
export function SidebarLeft({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <RoleSwitcher />
        {/* <SidebarSearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarEasy />
        <NavSecondary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
