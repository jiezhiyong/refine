import { useBack } from '@refinedev/core';
import { t } from 'i18next';
import { ArrowLeftToLine } from 'lucide-react';
import type { FC } from 'react';

import { ShowButtonProps } from '~/components/refine/types/buttons';
import { Button } from '~/components/ui/button';

export const BackButton: FC<ShowButtonProps> = ({ ...props }) => {
  const back = useBack();

  return (
    <Button icon={<ArrowLeftToLine />} onClick={() => back()} {...props}>
      {t('buttons.back')}
    </Button>
  );
};

BackButton.displayName = 'BackButton';
