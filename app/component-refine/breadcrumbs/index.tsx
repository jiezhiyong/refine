import { matchResourceFromRoute, useBreadcrumb, useRefineContext, useResource } from '@refinedev/core';
import { RefineBreadcrumbProps } from '@refinedev/ui-types';
import { HomeIcon } from 'lucide-react';
import { FC, Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components-shadcn/breadcrumb';

import { Link } from '../components/link';

export type BreadcrumbProps = RefineBreadcrumbProps;

export const Breadcrumbs: FC<BreadcrumbProps> = ({ showHome = true, meta }) => {
  const { breadcrumbs } = useBreadcrumb({
    meta,
  });

  const { hasDashboard } = useRefineContext();

  const { resources } = useResource();

  const dashboardResource = resources[0];

  const rootRouteResource = matchResourceFromRoute('/', resources);

  const BreadCrumbItems = breadcrumbs.map(({ label, href }, key) => (
    <Fragment key={key}>
      <BreadcrumbItem>
        {href ? (
          <BreadcrumbLink asChild className="text-link hover:bg-transparent">
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        ) : (
          <BreadcrumbPage>{label}</BreadcrumbPage>
        )}
      </BreadcrumbItem>
      {key < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
    </Fragment>
  ));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {showHome || hasDashboard || rootRouteResource.found ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={dashboardResource.list?.toString()}
                asChild
                title={dashboardResource?.meta?.title ?? dashboardResource.name ?? 'Dashboard'}
              >
                <Link
                  className="hover:bg-transparent"
                  href={dashboardResource.list?.toString()}
                  title={dashboardResource?.meta?.title ?? dashboardResource.name ?? 'Dashboard'}
                >
                  {dashboardResource?.meta?.icon ?? <HomeIcon className="h-4 w-4" />}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {BreadCrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
