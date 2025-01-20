import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components-shadcn/dropdown-menu';
import { Link } from '../../components/link';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { cloneElement, FC, PropsWithChildren, ReactNode, useCallback, memo, useMemo } from 'react';
import { TAny } from '~/types/any';
import { Button } from '~/components-shadcn/button';

interface RowActionsProps {
  row: TAny;
  resource: string;
  children?: ReactNode;
}

export type RowActionProps = PropsWithChildren & {
  to?: string;
  title?: string;
  asChild?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: (event: TAny) => void;
};

export const RowAction: FC<RowActionProps> = (props) => {
  return (
    <DropdownMenuItem
      className={props.className}
      disabled={props.disabled}
      asChild={!(props.disabled || !props.to || (!props.to && !props.children))}
      onClick={props.onClick}
    >
      {props.asChild ? (
        props.children
      ) : props.to && !props.disabled ? (
        <Link href={props.to} title={props.title}>
          {props.icon ? <span className="mr-2">{props.icon}</span> : null}
          {props.title}
        </Link>
      ) : (
        <>
          {props.icon ? <span className="mr-2">{props.icon}</span> : null}
          {props.title}
        </>
      )}
    </DropdownMenuItem>
  );
};

RowAction.displayName = 'RowAction';

export const RowActions = memo(function RowActions({ row, resource, children }: RowActionsProps) {
  const appendProps = useCallback(
    (child: ReactNode, index?: number) => {
      return cloneElement(child as React.ReactElement, { row, resource, key: index });
    },
    [row, resource]
  );

  const memoizedContent = useMemo(() => {
    return Array.isArray(children) ? children.map((child, index) => appendProps(child, index)) : appendProps(children);
  }, [children, appendProps]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{memoizedContent}</DropdownMenuContent>
    </DropdownMenu>
  );
});
