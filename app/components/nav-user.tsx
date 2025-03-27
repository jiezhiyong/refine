import { useLogout } from '@refinedev/core';
import { Link, useRouteLoaderData } from '@remix-run/react';
import { t } from 'i18next';
import { Baby, ChevronsUpDown, LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '~/components/ui/sidebar';
import { loader } from '~/root';
import { getFirstLetter } from '~/utils/capitalize-first-letter';

export function NavUser() {
  const { user } = useRouteLoaderData<typeof loader>('root') || {};
  const { mutate: logout } = useLogout();
  const { isMobile } = useSidebar();

  function onLoginout() {
    logout();
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.avatar || '/images/avatar.jpg'} alt={user?.name || ''} />
                <AvatarFallback className="rounded-lg">{getFirstLetter(user?.name || '') || '?'}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold capitalize">{user?.name || 'unknown user'}</span>
                <span className="truncate text-xs">{user?.email || '...'}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.avatar || '/images/avatar.jpg'} alt={user?.name || ''} />
                  <AvatarFallback className="rounded-lg">{getFirstLetter(user?.name || '') || '?'}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold capitalize">{user?.name || 'unknown user'}</span>
                  <span className="truncate text-xs">{user?.email || '...'}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Baby />
                <Link prefetch="intent" viewTransition to="/system/admin/auditRecord/applyRole">
                  {t('menus.auditRecord/applyRole')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLoginout}>
              <LogOut />
              <span>{t('buttons.logout')}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
