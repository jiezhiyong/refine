import { useTranslation } from '@refinedev/core';
import { useNavigate } from '@remix-run/react';
import { Languages } from 'lucide-react';
import { Button } from '~/components-shadcn/button';
import { cn } from '~/utils/cn';

export function LanguageSwitcher() {
  const { getLocale, changeLocale } = useTranslation();
  const currentLocale = getLocale();
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7"
      type="submit"
      onClick={async () => {
        const newLocale = currentLocale === 'zh' ? 'en' : 'zh';
        const { locale } = await changeLocale(newLocale);

        const searchParams = new URLSearchParams(location.search);
        searchParams.set('locale', locale);
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
      }}
    >
      <Languages className={cn('transition-all', currentLocale === 'zh' && 'scale-x-[-1]')} />
    </Button>
  );
}
