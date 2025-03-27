import { Outlet, useRouteLoaderData } from '@remix-run/react';

import { Breadcrumbs } from '~/components/refine/breadcrumbs';
import { SidebarLeft } from '~/components/sidebar-left';
import { Separator } from '~/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar';
import { loader, type RootLoaderData } from '~/root';

import { NavTools } from './nav-tools';
import { SidebarRight } from './sidebar-right';

export function SidebarLayout({ children }: { children?: React.ReactNode }) {
  const { sidebarClose } = useRouteLoaderData<typeof loader>('root') as RootLoaderData;

  return (
    <SidebarProvider open={!sidebarClose || sidebarClose !== 'true'}>
      <SidebarLeft />

      <SidebarInset className="max-w-[100vw] group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-has-data-[state=expanded]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width))]">
        <header className="bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-2!" />
            <Breadcrumbs />
          </div>
          <div className="ml-auto px-3">
            <NavTools />
          </div>
        </header>
        <div className="flex max-w-full flex-1 flex-col gap-4 p-4 pt-0 transition-[max-width] duration-200 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-data-[collapsible=offcanvas]/sidebar-wrapper:max-w-[100vw]">
          {children ? children : <Outlet />}
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
