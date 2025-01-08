import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components-shadcn/table';
import { Button } from '~/components-shadcn/button';
import { Input } from '~/components-shadcn/input';
import { format } from 'date-fns';
import { dataService } from '~/services/data.server';
import { PageError } from '~/components/500';
import { getSearchParams } from '~/utils/search-params';
import { parseTableParams } from '~/utils/table';
import { Log } from '@prisma/client';
import { ShowButton } from '~/component-refine';

// 处理 GET 请求
export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = getSearchParams(request);
  const { pagination, filters, sorters } = parseTableParams(new URL(request.url).search);

  const search = searchParams['search'];
  if (search) {
    const searchValue = Array.isArray(search) ? search[0] : search;
    filters?.push(
      { field: 'resource', operator: 'contains', value: searchValue },
      { field: 'action', operator: 'contains', value: searchValue },
      { field: 'data', operator: 'contains', value: searchValue }
    );
  }

  const logs = await dataService.getList<Log & { user: { name: string; email: string } }>({
    resource: 'log',
    filters,
    pagination,
    sorters,
    meta: {
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    },
  });

  return {
    logs: logs.data,
    total: logs.total,
    page: pagination?.current || 1,
    pageSize: pagination?.pageSize || 10,
  };
}

export default function LogIndex() {
  const { logs, total, page, pageSize } = useLoaderData<typeof loader>();
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="">
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-bold">审计日志</h1>
        <div className="flex gap-4">
          <Input placeholder="搜索资源、动作或数据..." className="max-w-sm" name="search" />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>资源</TableHead>
              <TableHead>动作</TableHead>
              <TableHead>操作人</TableHead>
              <TableHead>时间</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.resource}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.user.name || log.user.email}</TableCell>
                <TableCell>{format(new Date(log.createdAt), 'yyyy-MM-dd HH:mm:ss')}</TableCell>
                <TableCell>
                  <ShowButton resource="log" recordItemId={log.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          共 {total} 条记录，第 {page} / {totalPages} 页
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => {
              const searchParams = new URLSearchParams(window.location.search);
              searchParams.set('page', String(page - 1));
              window.location.search = searchParams.toString();
            }}
          >
            上一页
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => {
              const searchParams = new URLSearchParams(window.location.search);
              searchParams.set('page', String(page + 1));
              window.location.search = searchParams.toString();
            }}
          >
            下一页
          </Button>
        </div>
      </div>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
