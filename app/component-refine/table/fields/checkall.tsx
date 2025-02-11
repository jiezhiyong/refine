import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { BaseRecord, HttpError, useTranslate } from '@refinedev/core';
import { FC, forwardRef, PropsWithChildren } from 'react';

import { Button } from '~/components-shadcn/button';
import { Checkbox } from '~/components-shadcn/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components-shadcn/dropdown-menu';
import { UseTableReturnType } from '~/lib/refinedev-react-table';
import { cn } from '~/utils';

type CheckAllProps = React.ComponentPropsWithoutRef<typeof Checkbox> &
  PropsWithChildren<{
    table: UseTableReturnType<BaseRecord, HttpError>;
    options?: {
      disabled?: boolean;
      label: string;
      className?: string;
      onClick: () => void;
    }[];
  }>;

export const CheckAll: FC<CheckAllProps> = forwardRef<React.ElementRef<typeof Checkbox>, CheckAllProps>(
  ({ table, children, options }, ref) => {
    const t = useTranslate();

    const isSomeSelected = table.getIsSomeRowsSelected();
    const isAllSelected = table.getIsAllPageRowsSelected();

    return (
      <>
        <Checkbox
          ref={ref}
          checked={isSomeSelected ? 'indeterminate' : isAllSelected}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          className="ml-2"
          aria-label={t('Select all')}
        />
        {children ||
          (Array.isArray(options) && options.length && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button disabled={!(isSomeSelected || isAllSelected)} size={'icon'} variant={'ghost'}>
                  <DotsVerticalIcon className={cn('h-4 w-4', (isSomeSelected || isAllSelected) && 'text-green-500')} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>{t('Bulk Actions')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {!children && Array.isArray(options) && options?.length > 0
                  ? options.map((option, key) => (
                      <DropdownMenuItem
                        key={key}
                        onSelect={option.onClick}
                        className={cn(option?.className)}
                        disabled={option?.disabled}
                      >
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
