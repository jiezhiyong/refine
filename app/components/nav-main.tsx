import { useMenu, useResourceParams } from '@refinedev/core';
import { Link, useMatches } from '@remix-run/react';
import { ChevronRight, LucideProps } from 'lucide-react';
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

export function NavMain() {
  const { menuItems, selectedKey } = useMenu();
  const resourceParams = useResourceParams();
  const matches = useMatches();

  const lastMatch = matches[matches.length - 1];

  console.log('menuItems', menuItems);
  console.log('selectedKey', selectedKey);
  console.log('lastMatch', lastMatch);
  console.log('resourceParams', resourceParams);

  return menuItems.map((menus_1, index) => (
    <SidebarGroup key={index}>
      <SidebarGroupLabel>{menus_1.name}</SidebarGroupLabel>
      <SidebarMenu>
        {menus_1.children.map((menus_2) => {
          const Icon = menus_2?.meta?.icon as unknown as ForwardRefExoticComponent<
            Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
          >;
          // const isCollapsibleOpen = lastMatch.id.includes(item.id);

          return (
            <Collapsible key={menus_2.key} asChild defaultOpen={true} className="group/collapsible">
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
                    {menus_2.children?.map((menus_3) => {
                      // const isActive = lastMatch.id === menus_3.id;
                      // const url = menus_3.id.replace('._index', '').replace('routes', '').replace(/\./g, '/');

                      return (
                        <SidebarMenuSubItem key={menus_3.key}>
                          <SidebarMenuSubButton
                            asChild
                            // isActive={isActive}
                            // className={cn(isActive && '!bg-primary !text-primary-foreground')}
                          >
                            <Link to={menus_3.list?.toString() ?? '/#'}>
                              <span>{menus_3.meta?.label}</span>
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
