import { useMenu, useResourceParams } from '@refinedev/core';
import { Link } from '@remix-run/react';
import { ChevronRight, LucideProps } from 'lucide-react';
import { TreeMenuItem } from 'node_modules/@refinedev/core/dist/hooks/menu/useMenu';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components-shadcn/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '~/components-shadcn/sidebar';
import { cn } from '~/utils/cn';

export function Sidebar() {
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
    <SidebarGroup key={index}>
      <SidebarGroupLabel>{menus_1.name}</SidebarGroupLabel>
      <SidebarMenu>
        {menus_1.children.map((menus_2) => {
          const isCollapsibleOpen = defaultOpenKeys.includes(menus_2.key);
          const Icon = menus_2?.meta?.icon as unknown as ForwardRefExoticComponent<
            Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
          >;

          return (
            <Collapsible key={menus_2.key} asChild defaultOpen={isCollapsibleOpen} className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={menus_2.meta?.label}>
                    {Icon && <Icon />}
                    <span>{menus_2.meta?.label}</span>
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

                      return (
                        <SidebarMenuSubItem key={item.key}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActive}
                            className={cn(isActive && '!bg-primary !text-primary-foreground')}
                          >
                            <Link to={item.list?.toString() ?? '/#'}>
                              <span>{item.meta?.label}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  ));
}
