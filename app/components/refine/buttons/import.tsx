import { useCan, useImport, useImportButton } from '@refinedev/core';
import { Upload } from 'lucide-react';
import type { ChangeEvent, FC } from 'react';

import { Button, ButtonProps } from '~/components/ui/button';
import { EnumAction } from '~/constants/action';

export const ImportButton: FC<ButtonProps> = (props) => {
  const { inputProps } = useImport({
    onFinish: (data) => {
      console.log('ImportButton useImport', data);
    },
  });
  const { label } = useImportButton();
  const { data: canAccess } = useCan({ action: EnumAction.import });

  const onClick = () => {
    const el = document.createElement('input');
    el.type = inputProps.type;
    el.accept = inputProps.accept;
    el.onchange = (e) => {
      inputProps.onChange(e as unknown as ChangeEvent<HTMLInputElement>);
      el.remove();
    };
    el.click();
  };

  const disabledNew = !canAccess?.can;
  return (
    <Button
      disabled={disabledNew}
      icon={<Upload />}
      {...props}
      onClick={(e) => {
        if (disabledNew) {
          e.preventDefault();
          return;
        }

        onClick();
      }}
    >
      {label}
    </Button>
  );
};

ImportButton.displayName = 'ImportButton';
