import * as React from 'react';
import { Sidebar } from '~/components-shadcn/sidebar';
import { useMatches, useSearchParams } from '@remix-run/react';
import { cn } from '~/utils/cn';
import { HandleFunction } from '~/types/handle';

/**
 * 右侧筛选栏
 */
export function SidebarRight({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [searchParams] = useSearchParams();

  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const handle = lastMatch.handle as HandleFunction;

  const { uiFilter } = handle || {};
  if (!uiFilter) {
    return null;
  }

  const isActive = Boolean(searchParams.get('filter'));
  return (
    <Sidebar
      collapsible="none"
      className={cn('sticky top-0 flex h-svh w-0 border-l transition-all', isActive && 'w-[--sidebar-width]')}
      {...props}
    >
      {typeof uiFilter === 'function' ? uiFilter(lastMatch, matches) : uiFilter}
    </Sidebar>
  );
}
