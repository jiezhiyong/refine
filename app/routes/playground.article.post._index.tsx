import { Post } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useModal, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { Paperclip } from 'lucide-react';
import { useCallback, useRef } from 'react';
import { CreateButton, ExportButton, ImportButton, ShowButton, Table, TableFilterProps } from '~/component-refine';
import { PageError } from '~/components';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';
import { Badge } from '~/components-shadcn/badge';
import { Checkbox } from '~/components-shadcn/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components-shadcn/dialog';
import { PdfLayout } from '~/components/pdf';
import { EnumAction, EnumResource } from '~/constants';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { PostFormModal } from '~/routes/playground.article.post.edit.$id';
import { dataService } from '~/services';
import { HandleFunction, POST_STATUS, POST_STATUS_MAP, PostStatus, TAny } from '~/types';
import { getDefaultTitle } from '~/utils';

// 自定义获取的数据类型声明
type PostRecord = Post & { user: { name: string; avatar: string } & { category: { title: string } } };

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
    resource: EnumResource.post,
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
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.post, action: EnumAction.delete });
  const { data: filedHitPermission } = useCan({
    resource: EnumResource.post,
    action: EnumAction.field,
    params: { field: 'hit' },
  });

  const recordRef = useRef<PostRecord>();
  const useModalReturn1 = useModal();
  const useModalReturn2 = useModal();
  const friendly = useUserFriendlyName();

  const bulkDeleteAction = (table: UseTableReturnType<BaseRecord, HttpError>) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly('Row', rows.length > 1 ? 'plural' : 'singular')}`;

    return {
      className: 'text-destructive!',
      label,
      disabled: !deletePermission?.can,
      onClick: () => {
        deleteMany(
          {
            resource: EnumResource.post,
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
    <>
      <PostFormModal {...useModalReturn1} record={recordRef.current} />
      <Table
        enableSorting
        enableFilters
        enableHiding
        toolbar={[<CreateButton />]}
        initialState={{
          columnVisibility: {
            updatedAt: false,
          },
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
                field: EnumResource.user,
                select: ['name', 'avatar'],
              },
              {
                field: EnumResource.category,
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
                <span className="inline-block min-w-8 text-muted-foreground">
                  {pageIndex * pageSize + index + 1}.&nbsp;
                </span>
                <span className="py-3 underline-offset-2 hover:text-green-600 hover:underline">{original.title}</span>
              </ShowButton>
            );
          }}
        />

        <Table.Column
          header="Category"
          accessorKey="category.title"
          id="category.title"
          meta={{
            filterOperator: 'contains',
          }}
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
          cell={useCallback(
            ({ row: { original } }: { row: { original: BaseRecord } }) => (
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src={original.user?.avatar || ''} alt={original.user?.name || ''} />
                  <AvatarFallback>{original.user?.name?.slice(0, 1).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span>{original.user?.name}</span>
              </div>
            ),
            []
          )}
        />

        <Table.Column
          header="Actions"
          accessorKey="id"
          id="actions"
          cell={useCallback(
            ({ row: { original } }: { row: { original: PostRecord } }) => (
              <Table.Actions row={original} resource="post">
                <Table.ShowAction />
                <Table.EditAction />

                <Table.EditAction
                  title="Edit in Modal"
                  onClick={() => {
                    recordRef.current = original;
                    useModalReturn1.show();
                  }}
                />

                <Table.CloneAction />
                <Table.DeleteAction />

                <Table.ShowAction
                  title="Show PDF"
                  icon={<Paperclip size={16} />}
                  onClick={() => {
                    recordRef.current = original;
                    useModalReturn2.show();
                  }}
                />
              </Table.Actions>
            ),
            []
          )}
        />
      </Table>

      {/* View PDF in Modal */}
      <Dialog open={useModalReturn2.visible} onOpenChange={useModalReturn2.close}>
        <DialogContent className="max-w-6xl">
          <DialogHeader className="border-b pb-4">
            <DialogTitle>View PDF</DialogTitle>
            <DialogDescription>This is a Demo for View PDF on Modal.</DialogDescription>
          </DialogHeader>
          <PdfLayout record={recordRef.current} />
        </DialogContent>
      </Dialog>
    </>
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
