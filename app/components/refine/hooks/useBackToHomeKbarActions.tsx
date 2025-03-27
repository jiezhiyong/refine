import { useNavigate } from '@remix-run/react';
import { t } from 'i18next';
import { HomeIcon } from 'lucide-react';

import { dashboardResource } from '~/config/resources';
import { createAction, Priority, useRegisterActions } from '~/lib/refinedev-kbar';

export const useBackToHomeKbarActions = () => {
  const navigate = useNavigate();

  const backToHomeAction = createAction({
    section: 'Suggestions',
    name: t('backHome'),
    icon: <HomeIcon size={16} />,
    priority: Priority.HIGH,
    perform: () => {
      navigate(dashboardResource);
    },
  });

  useRegisterActions([backToHomeAction]);
};
