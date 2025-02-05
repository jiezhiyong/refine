import { useMatches, useSearchParams } from '@remix-run/react';
import { Filter, FilterX, Search } from 'lucide-react';
import { BackButton } from '~/component-refine/buttons/back';
import { Badge } from '~/components-shadcn/badge';
import { Button } from '~/components-shadcn/button';
import { Separator } from '~/components-shadcn/separator';
import { useKBar } from '~/lib/refinedev-kbar';
import { HandleFunction } from '~/types';
import { cn } from '~/utils';
import { FullscreenSwitcher } from './switcher-fullscreen';
import { LanguageSwitcher } from './switcher-language';

/**
 * 工具栏
 */
export function NavTools() {
  const [searchParams, setSearchParams] = useSearchParams();
  const matches = useMatches();
  const { query } = useKBar();

  const lastMatch = matches[matches.length - 1];
  const handle = lastMatch.handle as HandleFunction;

  const defaultTools = (
    <>
      <div
        className="flex h-8 cursor-pointer items-center gap-2 rounded-full border px-2 text-sm opacity-50"
        onClick={() => query.toggle()}
      >
        <Search className="size-4" />
        <span>Search...</span>
        <Badge className="size-4 w-auto rounded-full px-1">⌘K</Badge>
      </div>
      <BackButton variant="ghost" size="icon" />
      <LanguageSwitcher />
      <FullscreenSwitcher />
    </>
  );

  const { uiTools, uiFilter } = handle || {};
  if (!uiTools && !uiFilter) {
    return <div className="flex items-center gap-1">{defaultTools}</div>;
  }

  function changeParams(key: string, value: boolean) {
    if (value) {
      searchParams.set(key, '1');
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams, { replace: true });
  }

  const domUiTools = typeof uiTools === 'function' ? uiTools(lastMatch, matches) : uiTools;
  const filter = Boolean(searchParams.get('filter'));
  return (
    <div className="flex items-center gap-1">
      {defaultTools}

      {uiFilter && (
        <Button
          variant="ghost"
          size="icon"
          className={cn(filter && 'text-green-500')}
          onClick={() => changeParams('filter', !filter)}
        >
          {filter ? <FilterX /> : <Filter />}
        </Button>
      )}

      <Separator orientation="vertical" className="h-4" />

      {domUiTools}
    </div>
  );
}
