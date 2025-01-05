import { useTranslation } from '@refinedev/core';
import { useNavigate, useRouteLoaderData } from '@remix-run/react';
import { Languages } from 'lucide-react';
import { Button } from '~/components-shadcn/button';
import { RootLoaderData } from '~/root';
import { canUseDOM } from '~/utils/can-use-dom';
import { cn } from '~/utils/cn';

export function LanguageSwitcher() {
  const { locale } = useRouteLoaderData('root') as RootLoaderData;
  const { changeLocale, getLocale } = useTranslation();
  const navigate = useNavigate();

  const currentLocale = canUseDOM() ? getLocale() : locale;
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7"
      type="submit"
      onClick={async () => {
        const nextLocale = currentLocale === 'zh' ? 'en' : 'zh';
        await changeLocale(nextLocale);

        const searchParams = new URLSearchParams(location.search);
        searchParams.set('locale', nextLocale);

        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
      }}
    >
      <Languages className={cn('transition-all', currentLocale === 'en' && 'scale-x-[-1]')} />
    </Button>
  );
}
