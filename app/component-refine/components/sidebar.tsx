import { cn } from '~/utils/cn';
import { buttonVariants } from '~/components-shadcn/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components-shadcn/tooltip';
import { useMenu, useResourceParams } from '@refinedev/core';
import * as pkgReackUse from 'react-use';
import React from 'react';
import { Link } from './link';
import { TAny } from '~/types/any';

type NavProps = {
  isCollapsed: boolean;
};

export const Sidebar = ({ isCollapsed }: NavProps) => {
  const { menuItems } = useMenu();
  const resourceParams = useResourceParams();
  const { pathname } = pkgReackUse.useLocation();

  const currentPathname = String(pathname);

  const GetIcon = (item: (typeof menuItems)[0]) => {
    const icon = item.meta?.icon;
    if (React.isValidElement(icon)) {
      return React.cloneElement<TAny>(icon, {
        className: 'mr-2 w-4 h-4',
      });
    }
    return null;
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex h-[94dvh] flex-col justify-between gap-4 py-2 data-[collapsed=true]:py-2 xl:h-[84dvh]"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {menuItems
          .filter((i) => !i.meta?.hide)
          .map((item, key) => {
            const paths = [
              item.list?.toString(),
              item.create?.toString(),
              item.edit?.toString()?.replace(':id', resourceParams.id as string),
              item.show?.toString()?.replace(':id', resourceParams.id as string),
            ].filter(Boolean) as string[];
            const isActive =
              paths.includes(currentPathname) ||
              paths.some((path) => {
                return path?.startsWith(currentPathname) || currentPathname.startsWith(path);
              });
            return isCollapsed ? (
              <Tooltip key={key} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    key={key}
                    href={item.list?.toString() ?? '/#'}
                    title={item.meta?.title ?? item.name}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                      }),
                      'justify-start',
                      isActive
                        ? 'bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground'
                        : ''
                    )}
                  >
                    {item.meta?.icon}
                    <span className="sr-only">
                      {item.meta?.title ?? item.label} {item.list ? 'List' : 'Create'}
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {item.label}
                  {item.meta?.label && <span className="ml-auto text-muted-foreground">{item.meta?.label}</span>}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={key}
                href={item.list?.toString() ?? '/#'}
                title={item.meta?.title ?? item.name}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'justify-start',
                  isActive ? 'bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground' : ''
                )}
              >
                {GetIcon(item)}
                {item.meta?.title ?? item.name}
              </Link>
            );
          })}
      </nav>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';
