import { Post, Prisma } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useModal, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { t } from 'i18next';
import { Paperclip } from 'lucide-react';
import { useCallback, useRef } from 'react';

import { PageError } from '~/components/500';
import { PdfLayout } from '~/components/pdf';
import { CreateButton } from '~/components/refine/buttons/create';
import { ExportButton } from '~/components/refine/buttons/export';
import { ImportButton } from '~/components/refine/buttons/import';
import { ShowButton } from '~/components/refine/buttons/show';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Checkbox } from '~/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { EnumAction } from '~/constants/action';
import { EnumPostStatus, POST_STATUS_LIST, POST_STATUS_MAP } from '~/constants/post';
import { EnumResource } from '~/constants/resource';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { PostFormModal } from '~/routes/playground.article.post.edit.$id';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { HandleFunction } from '~/types/handle';
import { getDefaultTitle } from '~/utils/get-default-title';
import { buildTableParams } from '~/utils/request';

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
  const tableParams = parseTableParams(new URL(request.url).search);

  const include: Prisma.PostInclude = {
    operatedBy: { select: { name: true, avatar: true } },
    category: { select: { title: true } },
  };
  const args: Prisma.PostFindManyArgs = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: 'desc' },
    include,
  };
  const res = await dataService.findMany<PostRecord>(EnumResource.post as TAny, args, { request });

  return { initialData: res, include };
}

export default function PostIndex() {
  const { initialData, include } = useLoaderData<typeof loader>();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.post, action: EnumAction.delete });
  const { data: _filedHitPermission } = useCan({
    resource: EnumResource.post,
    action: EnumAction.field,
    params: { field: 'hit' },
  });

  const recordRef = useRef<PostRecord>(undefined);
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
      <PostFormModal {...useModalReturn1} action={EnumAction.edit} record={recordRef.current} />
      <TableEasy
        enableSorting
        enableFilters
        enableHiding
        toolbar={[<CreateButton key="create" />, <ExportButton key="export" />]}
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
            include,
          },
        }}
      >
        <TableEasy.Column
          accessorKey="id"
          id="id"
          header={({ table }) => <TableEasy.CheckAll table={table} options={[bulkDeleteAction(table)]} />}
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

        <TableEasy.Column
          header="Title"
          accessorKey="title"
          id="title"
          meta={{
            filterOperator: 'contains',
          }}
          filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Title" />}
          cell={({ row: { index, original }, table }) => {
            const pageIndex = table.getState().pagination.pageIndex;
            const pageSize = table.getState().pagination.pageSize;
            return (
              <ShowButton recordItemId={original.id} asChild>
                <span className="text-muted-foreground inline-block min-w-6">
                  {pageIndex * pageSize + index + 1}.&nbsp;
                </span>
                <span className="py-3 underline-offset-2 hover:text-green-600 hover:underline">{original.title}</span>
              </ShowButton>
            );
          }}
        />

        <TableEasy.Column
          header="Category"
          accessorKey="category.title"
          id="category.title"
          meta={{
            filterOperator: 'contains',
          }}
          enableHiding
          filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Category" />}
        />

        <TableEasy.Column
          header="Hit"
          accessorKey="hit"
          id="hit"
          enableSorting
          enableHiding
          cell={({ row: { original } }) => <span>{original.hit.toLocaleString()}</span>}
        />

        <TableEasy.Column
          header="Status"
          accessorKey="status"
          id="status"
          enableSorting
          enableHiding
          cell={({ row: { original } }) => (
            <Badge variant={POST_STATUS_MAP[original.status as EnumPostStatus]?.badge as TAny}>{original.status}</Badge>
          )}
          filter={(props: TableFilterProps) => (
            <TableEasy.Filter.Dropdown
              {...props}
              options={POST_STATUS_LIST.map((key) => ({
                label: key,
                value: key,
              }))}
            />
          )}
        />

        <TableEasy.Column
          header="CreatedAt"
          accessorKey="createdAt"
          id="createdAt"
          enableSorting
          enableHiding
          filter={(props: TableFilterProps) => <TableEasy.Filter.DateRangePicker {...props} align="end" />}
          cell={({ row: { original } }) => dayjs(original.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        />

        <TableEasy.Column
          header="UpdatedAt"
          accessorKey="updatedAt"
          id="updatedAt"
          enableSorting
          enableHiding
          filter={(props: TableFilterProps) => <TableEasy.Filter.DateRangePicker {...props} align="end" />}
          cell={({ row: { original } }) => dayjs(original.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
        />

        <TableEasy.Column
          header="OperatedBy"
          accessorKey="operatedBy.name"
          id="operatedBy.name"
          enableHiding
          meta={{
            filterOperator: 'contains',
          }}
          filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search OperatedBy" />}
          cell={useCallback(
            ({ row: { original } }: { row: { original: BaseRecord } }) => (
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src={original.operatedBy?.avatar} alt={original.operatedBy?.name || ''} />
                  <AvatarFallback>{original.operatedBy?.name?.slice(0, 1).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span>{original.operatedBy?.name}</span>
              </div>
            ),
            []
          )}
        />

        <TableEasy.Column
          header="Actions"
          accessorKey="id"
          id="actions"
          cell={useCallback(
            ({ row: { original } }: { row: { original: PostRecord } }) => (
              <TableEasy.Actions row={original} resource="post">
                <TableEasy.ShowAction />
                <TableEasy.ShowAction
                  title={`${t('buttons.show')} PDF`}
                  icon={<Paperclip size={16} />}
                  onClick={() => {
                    recordRef.current = original;
                    useModalReturn2.show();
                  }}
                />
                <TableEasy.EditAction />

                <TableEasy.EditAction
                  title={`${t('buttons.edit')} in Modal`}
                  onClick={() => {
                    recordRef.current = original;
                    useModalReturn1.show();
                  }}
                />

                <TableEasy.CloneAction />
                <TableEasy.DeleteAction />
              </TableEasy.Actions>
            ),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
          )}
        />
      </TableEasy>

      {/* View PDF in Modal */}
      <Dialog open={useModalReturn2.visible} onOpenChange={useModalReturn2.close}>
        <DialogContent className="sm:max-w-6xl">
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
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
