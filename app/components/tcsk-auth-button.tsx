import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '~/components-shadcn/button';
import { apiBase } from '~/config/base-url';
import { EnumAuthProvider } from '~/constants/auth';

export const TcskAuthButton = ({ redirectTo }: { redirectTo: string }) => {
  const [loading, setLoading] = useState(false);

  const handleTcskLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('redirectTo', redirectTo);

      setLoading(true);
      const response = await fetch(`${apiBase}/auth/${EnumAuthProvider.tcshuke}`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const res = await response.json();
      if (!response.ok) {
        throw new Error(res.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('@handleTcskLogin', error);

      toast.error(error instanceof Error ? error.message : 'Something went wrong', {
        description: 'Please try again',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button type="button" variant="outline" className="w-full" onClick={handleTcskLogin} loading={loading}>
      {'Continue with tcsk OAuth2'}
    </Button>
  );
};
