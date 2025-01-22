import { createAction, Priority, useRegisterActions } from '@refinedev/kbar';
import { useNavigate } from '@remix-run/react';
import { HomeIcon } from 'lucide-react';

export const useBackToHomeKbarActions = () => {
  const navigate = useNavigate();

  const backToHomeAction = createAction({
    section: 'suggestions',
    name: 'Back to home',
    icon: <HomeIcon size={16} />,
    priority: Priority.HIGH,
    perform: () => {
      navigate('/');
    },
  });

  useRegisterActions([backToHomeAction]);
};
