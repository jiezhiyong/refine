import { useMatches, useSearchParams } from '@remix-run/react';
import { Filter, FilterX } from 'lucide-react';
import { BackButton } from '~/component-refine/buttons/back';
import { Button } from '~/components-shadcn/button';
import { Separator } from '~/components-shadcn/separator';
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

  const lastMatch = matches[matches.length - 1];
  const handle = lastMatch.handle as HandleFunction;

  const defaultTools = (
    <>
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

      {defaultTools}

      <Separator orientation="vertical" className="h-4" />

      {domUiTools}
    </div>
  );
}
