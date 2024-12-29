import { Form, useRouteLoaderData, useNavigate } from '@remix-run/react';
import { Languages } from 'lucide-react';
import { Button } from '~/components-shadcn/button';
import { RootLoaderData } from '~/root';
import { cn } from '~/utils/cn';

export function LanguageSwitcher() {
  const navigate = useNavigate();
  const { locale } = useRouteLoaderData<RootLoaderData>('root') || {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('lng', locale === 'zh' ? 'en' : 'zh');
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button variant="ghost" size="icon" className="h-7 w-7" type="submit">
        <Languages className={cn('transition-all', locale === 'zh' && 'scale-x-[-1]')} />
      </Button>
    </Form>
  );
}
