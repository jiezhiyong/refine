import { ShowButtonProps } from '../types';
import { Button } from '~/components-shadcn/button';
import { useBack } from '@refinedev/core';
import type { FC } from 'react';
import { ArrowLeftToLine } from 'lucide-react';

export const BackButton: FC<ShowButtonProps> = ({ ...props }) => {
  const back = useBack();

  return (
    <Button icon={<ArrowLeftToLine />} onClick={() => back()} {...props}>
      Go Back
    </Button>
  );
};

BackButton.displayName = 'BackButton';
