import { useFetcher } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import { EnumAuthProvider } from '~/constants';

export const TcskOAuth2 = ({ redirectTo }: { redirectTo: string }) => {
  const fetcher = useFetcher();
  const loading = fetcher.state !== 'idle';

  const handleLogin = () => {
    fetcher.submit({ redirectTo }, { method: 'POST', action: `/api/auth/${EnumAuthProvider.tcshuke}` });
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border-green-500 text-green-500!"
      onClick={handleLogin}
      loading={loading}
    >
      {'Continue with TCSK'}
    </Button>
  );
};
