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
import { Post } from '@prisma/client';
import { parseTableParams } from '@refinedev/remix-router';
import { Badge } from '~/components-shadcn/badge';
import { POST_STATUS, POST_STATUS_MAP, PostStatus } from '~/types/post';
import { TAny } from '~/types/any';
import { CreateButton, ExportButton, ImportButton, ShowButton } from '~/component-refine';
import { useCallback } from 'react';
import { HandleFunction } from '~/types/handle';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';

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

  const data = await dataService.getList<Post>({
    ...tableParams,
    resource: 'post',
    meta: {
      include: {
        user: { select: { name: true, avatar: true } },
        category: { select: { title: true } },
      },
    },
  });

  return { initialData: data };
}

export default function PostIndex() {
  const { initialData } = useLoaderData<typeof loader>();

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: 'post', action: 'delete' });

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
            resource: 'post',
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
      toolbar={[<CreateButton />]}
      initialState={{
        columnVisibility: {
          createdAt: false,
        },
        sorting: [
          {
            id: 'updatedAt',
            desc: true,
          },
        ],
      }}
      refineCoreProps={{
        queryOptions: { initialData },
        meta: {
          join: [
            {
              field: 'user',
              select: ['name', 'avatar'],
            },
            {
              field: 'category',
              select: ['title'],
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
              <span className="text-muted-foreground">{pageIndex * pageSize + index + 1}.&nbsp;</span>
              <span className="py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline">
                {original.title}
              </span>
            </ShowButton>
          );
        }}
      />

      <Table.Column
        header="Category"
        accessorKey="category.title"
        id="category.title"
        enableHiding
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Category" />}
      />

      <Table.Column
        header="Hit"
        accessorKey="hit"
        id="hit"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => <span>{original.hit.toLocaleString()}</span>}
      />

      <Table.Column
        header="Status"
        accessorKey="status"
        id="status"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => (
          <Badge variant={POST_STATUS_MAP[original.status as PostStatus]?.badge as TAny}>
            {original.status?.charAt(0)?.toUpperCase() + original.status?.slice(1)?.toLowerCase()}
          </Badge>
        )}
        filter={(props: TableFilterProps) => (
          <Table.Filter.Dropdown
            {...props}
            options={Object.entries(POST_STATUS).map(([key, value]) => ({
              label: key?.charAt(0)?.toUpperCase() + key?.slice(1)?.toLowerCase(),
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
        header="UpdatedAt"
        accessorKey="updatedAt"
        id="updatedAt"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <Table.Filter.DateRangePicker {...props} align="end" />}
        cell={({ row: { original } }) => dayjs(original.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
      />

      <Table.Column
        header="Author"
        accessorKey="user.name"
        id="user.name"
        enableHiding
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Author" />}
        cell={({ row: { original } }) => (
          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src={original.user?.avatar || ''} alt={original.user?.name || ''} />
              <AvatarFallback>{original.user?.name?.slice(0, 1).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span>{original.user?.name}</span>
          </div>
        )}
      />

      <Table.Column
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={useCallback(
          ({ row: { original } }: { row: { original: BaseRecord } }) => (
            <Table.Actions row={original} resource="post">
              <Table.ShowAction />
              <Table.EditAction />
              <Table.CloneAction />
              <Table.DeleteAction />
            </Table.Actions>
          ),
          []
        )}
      />
    </Table>
  );
}

function UiTools() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <ImportButton variant="ghost" size="icon" />
      <ExportButton variant="ghost" size="icon" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
