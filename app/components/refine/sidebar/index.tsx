import { useMenu, useResourceParams } from '@refinedev/core';
import { Link } from '@remix-run/react';
import { t } from 'i18next';
import { ChevronRight } from 'lucide-react';
import { TreeMenuItem } from 'node_modules/@refinedev/core/dist/hooks/menu/useMenu';

import { DynamicIcon } from '~/components/dynamic-icon';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '~/components/ui/sidebar';
import { cn } from '~/lib/utils';

export function SidebarEasy() {
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const resourceParams = useResourceParams();

  const getCrudPaths = (item: TreeMenuItem) => {
    const crudPaths = [item.list?.toString(), item.create?.toString()];

    if (resourceParams.id) {
      crudPaths.push(
        item.edit?.toString()?.replace(':id', resourceParams.id as string),
        item.show?.toString()?.replace(':id', resourceParams.id as string)
      );
    }

    return crudPaths.filter(Boolean) as string[];
  };

  return menuItems.map((menus_1, index) => (
    // <CanAccess key={menus_1.key} resource={menus_1.name} action="list">
    <SidebarGroup key={index}>
      <SidebarGroupLabel>{menus_1.meta?.label || t(`menus.${menus_1.name}`, menus_1.name)}</SidebarGroupLabel>
      <SidebarMenu>
        {menus_1.children.map((menus_2, idx) => {
          const isCollapsibleOpen = defaultOpenKeys.includes(menus_2.key);
          // const Icon = menus_2?.meta?.icon as unknown as ForwardRefExoticComponent<
          //   Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
          // >;

          const menu2Name = menus_2.meta?.label || t(`menus.${menus_2.name}`, menus_2.name);
          return (
            // <CanAccess key={menus_2.key} resource={menus_2.name} action="list">
            <Collapsible key={idx} asChild defaultOpen={isCollapsibleOpen} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={menu2Name}>
                    {menus_2?.meta?.icon && <DynamicIcon name={menus_2.meta.icon as string} />}
                    <span className="capitalize">{menu2Name}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menus_2.children?.map((item) => {
                      const paths = getCrudPaths(item);

                      const isActive =
                        paths.includes(selectedKey) ||
                        paths.some((s) => s?.endsWith(selectedKey) || selectedKey?.endsWith(s));

                      const menu3Name = item.meta?.label || t(`menus.${item.name}`, item.name);
                      return (
                        // <CanAccess key={item.key} resource={item.name} action="list">
                        <SidebarMenuSubItem key={item.key}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActive}
                            className={cn(isActive && 'bg-primary! text-primary-foreground!')}
                          >
                            <Link prefetch="intent" viewTransition to={item.list?.toString() ?? '/#'}>
                              <span className="capitalize">{menu3Name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        // </CanAccess>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            // </CanAccess>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
    // </CanAccess>
  ));
}
