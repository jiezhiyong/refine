import dayjs from 'dayjs';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { BaseRecord, HttpError, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
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
import { CreateButton } from '~/component-refine';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const tableParams = parseTableParams(url.search);

  const data = await dataService.getList<Post>({
    ...tableParams,
    resource: 'post',
    meta: {
      include: {
        user: { select: { name: true } },
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

  const bulkDeleteAction = (table: UseTableReturnType<BaseRecord, HttpError>) => {
    const label = `Delete Selected (${table.getSelectedRowModel().rows.length}) ${friendly(
      'Row',
      table.getSelectedRowModel().rows.length > 1 ? 'plural' : 'singular'
    )}`;

    return {
      className: '!text-destructive',
      label,
      onClick: () => {
        // deleteMany();
        alert('Delete Selected');
      },
    };
  };

  return (
    <Table
      enableSorting
      enableFilters
      enableHiding
      toolbar={<CreateButton variant="outline" className="border-dashed" />}
      initialState={{
        columnVisibility: {
          updatedAt: false,
        },
      }}
      refineCoreProps={{
        queryOptions: { initialData },
        meta: {
          join: [
            {
              field: 'user',
              select: ['name'],
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
        id={'select'}
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
        header={'Title'}
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
            <>
              <span className="text-muted-foreground">{pageIndex * pageSize + index + 1}.&nbsp;</span>
              <span>{original.title}</span>
            </>
          );
        }}
      />

      <Table.Column
        header={'Category'}
        accessorKey="category.title"
        id="category.title"
        enableHiding
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Category" />}
      />

      <Table.Column
        header={'Hit'}
        accessorKey="hit"
        id="hit"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => <span>{original.hit.toLocaleString()}</span>}
      />

      <Table.Column
        header={'Status'}
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
        header={'CreatedAt'}
        accessorKey="createdAt"
        id="createdAt"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <Table.Filter.DateRangePicker {...props} align="end" />}
        cell={({ row: { original } }) => dayjs(original.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      />

      <Table.Column
        header={'UpdatedAt'}
        accessorKey="updatedAt"
        id="updatedAt"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <Table.Filter.DateRangePicker {...props} align="end" />}
        cell={({ row: { original } }) => dayjs(original.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
      />

      <Table.Column
        header={'Author'}
        accessorKey="user.name"
        id="user.name"
        enableHiding
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Author" />}
        cell={({ row: { original } }) => original.user?.name}
      />

      <Table.Column
        accessorKey={'id'}
        id={'actions'}
        cell={({ row: { original } }) => (
          <Table.Actions row={original} resource="post">
            <Table.ShowAction />
            <Table.EditAction />
            <Table.CloneAction />
            <Table.DeleteAction />
          </Table.Actions>
        )}
      />
    </Table>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
