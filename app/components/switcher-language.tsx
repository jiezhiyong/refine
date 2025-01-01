import { useTranslation } from '@refinedev/core';
import { Form, useRouteLoaderData, useNavigate } from '@remix-run/react';
import { Languages } from 'lucide-react';
import { Button } from '~/components-shadcn/button';
import { RootLoaderData } from '~/root';
import { cn } from '~/utils/cn';

export function LanguageSwitcher() {
  const navigate = useNavigate();
  const { translate, getLocale, changeLocale } = useTranslation();
  const currentLocale = getLocale();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('lng', currentLocale === 'zh' ? 'en' : 'zh');
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        type="submit"
        onClick={() => changeLocale(currentLocale === 'zh' ? 'en' : 'zh')}
      >
        <Languages className={cn('transition-all', currentLocale === 'zh' && 'scale-x-[-1]')} />
      </Button>
    </Form>
  );
}
