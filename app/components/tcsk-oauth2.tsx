import { useFetcher } from '@remix-run/react';
import { t } from 'i18next';

import { Button } from '~/components/ui/button';
import { EnumAuthProvider } from '~/constants/user';

export const TcskOAuth2 = ({ redirectTo }: { redirectTo: string }) => {
  const fetcher = useFetcher();
  const loading = fetcher.state !== 'idle';

  const handleLogin = () => {
    fetcher.submit({ redirectTo }, { method: 'POST', action: `/api/auth/${EnumAuthProvider.TC_SHUKE}` });
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border-green-500 text-green-500!"
      onClick={handleLogin}
      loading={loading}
    >
      {t('pages.login.buttons.submitWithTcsk')}
    </Button>
  );
};
