import * as React from 'react';
import { AudioLines, ChevronsUpDown, Baby, GalleryVerticalEnd, Plus, BicepsFlexed } from 'lucide-react';

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

// TODO: replace with real roles
const roles = [
  { icon: BicepsFlexed, role: 'Administrator' },
  { icon: AudioLines, role: 'Operations User' },
  { icon: Baby, role: 'Guest' },
];

export function RoleSwitcher() {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(roles[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Remix OSS Inc.</span>
                <span className="truncate text-xs">{activeTeam.role}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">roles</DropdownMenuLabel>
            {roles.map((team, index) => (
              <DropdownMenuItem key={team.role} onClick={() => setActiveTeam(team)} className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <team.icon className="size-4 shrink-0" />
                </div>
                {team.role}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add Role</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
