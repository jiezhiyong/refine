import React, { useContext } from 'react';

import { useRefineKbar } from '../../hooks/useRefineKbar';
import { RefineKbarPropsContext } from '../../index';
import { CommandBar } from '../commandBar';

export const RefineKbar: React.FC<{
  commandBarProps?: React.ComponentProps<typeof CommandBar>;
}> = ({ commandBarProps }) => {
  const context = useContext(RefineKbarPropsContext);
  useRefineKbar();
  const props = { ...context, ...commandBarProps };

  return <CommandBar {...props} />;
};
