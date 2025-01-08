import { useMatches, useSearchParams } from '@remix-run/react';
import { Filter, FilterX } from 'lucide-react';
import { Button } from '~/components-shadcn/button';
import { Separator } from '~/components-shadcn/separator';
import { HandleFunction } from '~/types/handle';
import { LanguageSwitcher } from './switcher-language';
import { FullscreenSwitcher } from './switcher-fullscreen';

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
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => changeParams('filter', !filter)}>
          {filter ? <FilterX /> : <Filter />}
        </Button>
      )}

      {defaultTools}

      <Separator orientation="vertical" className="mr-2 h-4" />

      {domUiTools}
    </div>
  );
}
