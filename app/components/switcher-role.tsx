import { ChevronsUpDown, GalleryVerticalEnd, Plus } from 'lucide-react';
import * as React from 'react';

import { useRouteLoaderData } from '@remix-run/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '~/components-shadcn/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '~/components-shadcn/sidebar';
import { rolesAll } from '~/constants';
import { RootLoaderData } from '~/root';
import { webapi } from '~/utils';

export function RoleSwitcher() {
  const { isMobile } = useSidebar();
  const { user } = (useRouteLoaderData('root') || {}) as RootLoaderData;

  const { role, roles = [] } = user || {};
  const userRoles = rolesAll.filter((item) => roles.includes(item.value));

  const [activeRole, setActiveRole] = React.useState(
    rolesAll.find((item) => {
      return item.value === role;
    })
  );

  const switchRole = React.useCallback(async (selectedRole: typeof activeRole) => {
    try {
      await webapi.post('/permissions/switch', {
        role: selectedRole?.value,
      });
      setActiveRole(selectedRole);

      location.reload();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">OSS Inc.</span>
                <span className="truncate text-xs">{activeRole?.label || 'unknown'}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">roles</DropdownMenuLabel>
            {userRoles.map((role, index) => (
              <DropdownMenuItem
                key={role.value}
                onClick={() => switchRole(role)}
                className="gap-2 p-2"
                disabled={role.value === activeRole?.value}
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <role.icon className="size-4 shrink-0" />
                </div>
                {role.label}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Apply Role</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
