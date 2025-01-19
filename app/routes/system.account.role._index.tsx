import dayjs from 'dayjs';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { BaseRecord, HttpError, useCan, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Checkbox } from '~/components-shadcn/checkbox';
import { getDefaultTitle } from '~/utils/get-default-title';
import { PageError } from '~/components/500';
import { Table, TableFilterProps } from '~/component-refine/table';
import { dataService } from '~/services/data.server';
import { Role } from '@prisma/client';
import { parseTableParams } from '@refinedev/remix-router';
import { ExportButton, ShowButton } from '~/component-refine';
import { HandleFunction } from '~/types/handle';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';
import { useCallback } from 'react';

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

  const data = await dataService.getList<Role>({
    ...tableParams,
    resource: 'role',
    meta: {
      include: {
        creator: { select: { name: true, avatar: true } },
      },
    },
  });

  return { initialData: data };
}

export default function RoleIndex() {
  const { initialData } = useLoaderData<typeof loader>();

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: 'role', action: 'delete' });

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
            resource: 'role',
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
              field: 'creator',
              select: ['name', 'avatar'],
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
        header="Title"
        accessorKey="title"
        id="title"
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Title" />}
        cell={({ row: { index, original }, table }) => {
          const pageIndex = table.getState().pagination.pageIndex;
          const pageSize = table.getState().pagination.pageSize;

          return (
            <ShowButton recordItemId={original.id} asChild>
              <span className="inline-block min-w-8 text-muted-foreground">
                {pageIndex * pageSize + index + 1}.&nbsp;
              </span>
              <span className="py-3 capitalize underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline">
                {original.title}
              </span>
            </ShowButton>
          );
        }}
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
        header="Creator"
        accessorKey="creator"
        id="creator"
        enableHiding
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Creator" />}
        cell={useCallback(
          ({ row: { original } }: { row: { original: BaseRecord } }) => (
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src={original.creator?.avatar || ''} alt={original.creator?.name || ''} />
                <AvatarFallback>{original.creator?.name?.slice(0, 1).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span>{original.creator?.name}</span>
            </div>
          ),
          []
        )}
      />

      <Table.Column
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: BaseRecord } }) => (
          <ShowButton recordItemId={original.id} size="icon" variant="ghost" />
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
