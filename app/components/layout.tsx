import { Outlet, useRouteLoaderData } from '@remix-run/react';
import { Breadcrumbs } from '~/component-refine/components';
import { SidebarLeft } from '~/components';
import { Separator } from '~/components-shadcn/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components-shadcn/sidebar';
import { loader, type RootLoaderData } from '~/root';
import { NavTools } from './nav-tools';
import { SidebarRight } from './sidebar-right';

export function Layout() {
  const { sidebarIsClose } = useRouteLoaderData<typeof loader>('root') as RootLoaderData;

  return (
    <SidebarProvider open={!sidebarIsClose || sidebarIsClose !== 'true'}>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 bg-background transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs />
          </div>
          <div className="ml-auto px-3">
            <NavTools />
          </div>
        </header>
        <div className="flex max-w-[calc(100vw-var(--sidebar-width))] flex-1 flex-col gap-4 p-4 pt-0 transition-[max-width] duration-200 ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-data-[collapsible=offcanvas]/sidebar-wrapper:max-w-[100vw]">
          <Outlet />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
