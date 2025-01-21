import { useTranslation } from '@refinedev/core';
import { useRouteLoaderData, useSearchParams } from '@remix-run/react';
import { Languages } from 'lucide-react';
import { Button } from '~/components-shadcn/button';
import { RootLoaderData } from '~/root';
import { canUseDOM, cn } from '~/utils';

export function LanguageSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { locale } = useRouteLoaderData('root') as RootLoaderData;
  const { changeLocale, getLocale } = useTranslation();

  const currentLocale = canUseDOM() ? getLocale() : locale;
  return (
    <Button
      variant="ghost"
      size="icon"
      type="submit"
      onClick={async () => {
        const nextLocale = currentLocale === 'zh' ? 'en' : 'zh';
        await changeLocale(nextLocale);

        searchParams.set('locale', nextLocale);
        setSearchParams(searchParams, { replace: true });
      }}
    >
      <Languages className={cn('transition-all', currentLocale === 'en' && 'scale-x-[-1]')} />
    </Button>
  );
}
