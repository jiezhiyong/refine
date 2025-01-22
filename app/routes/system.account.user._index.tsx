import { User } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { DeleteButton, ExportButton, ShowButton, Table, TableFilterProps } from '~/component-refine';
import { PageError } from '~/components';
import { Badge } from '~/components-shadcn/badge';
import { Checkbox } from '~/components-shadcn/checkbox';
import { EnumAction, EnumResource } from '~/constants';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { dataService } from '~/services';
import { HandleFunction, USER_PROVIDER } from '~/types';
import { getDefaultTitle } from '~/utils';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export const handle: HandleFunction = {
  uiTools: () => {
    return <UiTools />;
  },
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const tableParams = parseTableParams(url.search);

  const data = await dataService.getList<User>({
    ...tableParams,
    resource: EnumResource.user,
    meta: {
      include: {
        _count: {
          select: {
            Post: true,
          },
        },
      },
    },
  });

  return { initialData: data };
}

export default function UserIndex() {
  const { initialData } = useLoaderData<typeof loader>();

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.user, action: EnumAction.delete });

  const bulkDeleteAction = (table: UseTableReturnType<BaseRecord, HttpError>) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly('Row', rows.length > 1 ? 'plural' : 'singular')}`;

    return {
      className: '!text-destructive',
      label,
      disabled: !deletePermission?.can,
      onClick: () => {
        deleteMany(
          {
            resource: EnumResource.user,
            ids: rows.map((row) => row.original.id!),
          },
          {
            onSuccess: () => {
              table.resetRowSelection();
            },
          }
        );
      },
    };
  };

  return (
    <Table
      enableSorting
      enableFilters
      enableHiding
      initialState={{
        sorting: [
          {
            id: 'createdAt',
            desc: true,
          },
        ],
      }}
      refineCoreProps={{
        queryOptions: { initialData },
        meta: {
          join: [
            {
              field: EnumResource.post,
              count: true,
            },
          ],
        },
      }}
    >
      <Table.Column
        accessorKey="id"
        id="id"
        header={({ table }) => <Table.CheckAll table={table} options={[bulkDeleteAction(table)]} />}
        cell={({ row }) => (
          <Checkbox
            className="ml-2"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            key={`checkbox-${row.original.id}`}
          />
        )}
      />

      <Table.Column
        header="Name"
        accessorKey="name"
        id="name"
        enableHiding
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Author" />}
        cell={useCallback(
          ({ row: { index, original }, table }: { row: { index: number; original: BaseRecord }; table: any }) => {
            const pageIndex = table.getState().pagination.pageIndex;
            const pageSize = table.getState().pagination.pageSize;

            return (
              <ShowButton recordItemId={original.id} asChild>
                <span className="inline-block min-w-8 text-muted-foreground">
                  {pageIndex * pageSize + index + 1}.&nbsp;
                </span>

                <span className="py-3 capitalize underline-offset-2 hover:text-green-600 hover:underline">
                  {original.name}
                </span>
              </ShowButton>
            );
          },
          []
        )}
      />

      <Table.Column
        header="Provider"
        accessorKey="provider"
        id="provider"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => {
          return (
            <Badge variant="outline">{original.provider?.charAt(0)?.toUpperCase() + original.provider?.slice(1)}</Badge>
          );
        }}
        filter={(props: TableFilterProps) => (
          <Table.Filter.Radio
            {...props}
            options={Object.entries(USER_PROVIDER).map(([key, value]) => ({
              label: key?.charAt(0)?.toUpperCase() + key?.slice(1),
              value,
            }))}
          />
        )}
      />

      <Table.Column
        header="CreatedAt"
        accessorKey="createdAt"
        id="createdAt"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <Table.Filter.DateRangePicker {...props} align="end" />}
        cell={({ row: { original } }) => dayjs(original.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      />

      <Table.Column
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: BaseRecord } }) => (
          <DeleteButton recordItemId={original.id} size="icon" variant="ghost" className="!text-destructive" />
        )}
      />
    </Table>
  );
}

function UiTools() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <ExportButton variant="ghost" size="icon" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
