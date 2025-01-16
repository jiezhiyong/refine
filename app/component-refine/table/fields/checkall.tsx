import { Button } from '~/components-shadcn/button';
import { Checkbox } from '~/components-shadcn/checkbox';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components-shadcn/dropdown-menu';

import { BaseRecord, HttpError, useTranslate } from '@refinedev/core';
import { UseTableReturnType } from '~/lib/refinedev-react-table';

import { FC, forwardRef, PropsWithChildren } from 'react';
import { cn } from '~/utils/cn';

type CheckAllProps = React.ComponentPropsWithoutRef<typeof Checkbox> &
  PropsWithChildren<{
    table: UseTableReturnType<BaseRecord, HttpError>;
    options?: {
      label: string;
      className?: string;
      onClick: () => void;
    }[];
  }>;

export const CheckAll: FC<CheckAllProps> = forwardRef<React.ElementRef<typeof Checkbox>, CheckAllProps>(
  ({ table, children, options }, ref) => {
    const t = useTranslate();

    return (
      <>
        <Checkbox
          ref={ref}
          checked={table.getIsSomeRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          className="ml-2"
          aria-label={t('Select all')}
        />
        {children ||
          (Array.isArray(options) && options.length && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  disabled={!(table.getIsSomeRowsSelected() || table.getIsAllPageRowsSelected())}
                  size={'icon'}
                  variant={'ghost'}
                >
                  <DotsVerticalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>{t('Bulk Actions')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {!children && Array.isArray(options) && options?.length > 0
                  ? options.map((option, key) => (
                      <DropdownMenuItem key={key} onSelect={option.onClick} className={cn(option?.className)}>
                        {option.label}
                      </DropdownMenuItem>
                    ))
                  : children}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
      </>
    );
  }
);

CheckAll.displayName = 'CheckAll';
