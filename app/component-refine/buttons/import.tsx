import { Button, ButtonProps } from '~/components-shadcn/button';
import { useCan, useImport, useImportButton } from '@refinedev/core';
import { Upload } from 'lucide-react';
import type { ChangeEvent, FC } from 'react';

export const ImportButton: FC<ButtonProps> = (props) => {
  const { inputProps } = useImport({
    onFinish: (data) => {
      console.log(data);
    },
  });
  const { label } = useImportButton();
  const { data: canAccess } = useCan({ action: 'import' });

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

  const disabled = !canAccess?.can;
  return (
    <Button
      icon={<Upload />}
      disabled={disabled}
      {...props}
      onClick={(e) => {
        if (disabled) {
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
