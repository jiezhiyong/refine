import { useFetcher } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import { EnumAuthProvider } from '~/constants/auth';

export const TcskOAuth2 = ({ redirectTo }: { redirectTo: string }) => {
  const fetcher = useFetcher();
  const loading = fetcher.state !== 'idle';

  const handleLogin = () => {
    fetcher.submit({ redirectTo }, { method: 'post', action: `/api/auth/${EnumAuthProvider.tcshuke}` });
  };

  return (
    <Button type="button" variant="outline" className="w-full" onClick={handleLogin} disabled={loading}>
      {'Continue with TCSK'}
    </Button>
  );
};
