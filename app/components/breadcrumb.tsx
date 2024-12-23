import { useMatches } from '@remix-run/react';
import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '~/components-shadcn/breadcrumb';
import { routeBreadcrumbMap } from '~/configs/route-breadcrumb-map';

/**
 * Breadcrumb - 面包屑导航
 */
export function Breadcrumb() {
  const matches = useMatches();
  // console.log(matches);

  return (
    <BreadcrumbComponent>
      <BreadcrumbList>
        {matches.map((match, index) => {
          const isRoot = index === 0;
          if (isRoot) {
            return null;
          }

          const isCurrent = match.pathname === matches[matches.length - 1].pathname;
          const showSeparator = !isRoot && index < matches.length - 1;
          const name = routeBreadcrumbMap[match.id] || match.pathname.split('/').pop() || 'home';
          return (
            <>
              <BreadcrumbItem className="hidden capitalize md:block" key={index}>
                {isCurrent ? (
                  <BreadcrumbPage>{name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={match.pathname}>{name}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {showSeparator && <BreadcrumbSeparator className="hidden md:block" />}
            </>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbComponent>
  );
}
