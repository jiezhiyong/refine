import { LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '~/components-shadcn/card';
import { Label } from '~/components-shadcn/label';
import { Button } from '~/components-shadcn/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@remix-run/react';
import { dataService } from '~/services/data.server';
import PageError from '~/components/500';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  const { data: log } = await dataService.getOne<any>({
    resource: 'log',
    id: id as string,
    meta: {
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    },
  });

  if (!log) {
    throw new Response('未找到日志记录', { status: 404 });
  }

  return json({ log });
}

export default function LogShow() {
  const { log } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link to="/log">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回列表
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>日志详情</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>资源</Label>
              <div className="mt-1">{log.resource}</div>
            </div>
            <div>
              <Label>动作</Label>
              <div className="mt-1">{log.action}</div>
            </div>
            <div>
              <Label>操作人</Label>
              <div className="mt-1">{log.author.name || log.author.email}</div>
            </div>
            <div>
              <Label>操作时间</Label>
              <div className="mt-1">{format(new Date(log.createdAt), 'yyyy-MM-dd HH:mm:ss')}</div>
            </div>
          </div>

          {log.data && (
            <div>
              <Label>数据</Label>
              <pre className="mt-1 whitespace-pre-wrap rounded-lg bg-muted p-4">
                {JSON.stringify(JSON.parse(log.data), null, 2)}
              </pre>
            </div>
          )}

          {log.oldData && (
            <div>
              <Label>旧数据</Label>
              <pre className="mt-1 whitespace-pre-wrap rounded-lg bg-muted p-4">
                {JSON.stringify(JSON.parse(log.oldData), null, 2)}
              </pre>
            </div>
          )}

          {log.meta && (
            <div>
              <Label>元数据</Label>
              <pre className="mt-1 whitespace-pre-wrap rounded-lg bg-muted p-4">
                {JSON.stringify(JSON.parse(log.meta), null, 2)}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
