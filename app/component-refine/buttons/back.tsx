import { useBack } from '@refinedev/core';
import { ArrowLeftToLine } from 'lucide-react';
import type { FC } from 'react';

import { Button } from '~/components-shadcn/button';

import { ShowButtonProps } from '../types';

export const BackButton: FC<ShowButtonProps> = ({ ...props }) => {
  const back = useBack();

  return (
    <Button icon={<ArrowLeftToLine />} onClick={() => back()} {...props}>
      Go Back
    </Button>
  );
};

BackButton.displayName = 'BackButton';
