import { Log } from '@prisma/client';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CalendarIcon, LeafyGreen, MailIcon } from 'lucide-react';

import { PageError } from '~/components';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';
import { Badge } from '~/components-shadcn/badge';
import { Label } from '~/components-shadcn/label';
import { H1 } from '~/components-shadcn/typography';
import { EnumResource } from '~/constants';
import { dataService } from '~/services';
import { LOG_STATUS_MAP, LogStatus, TAny } from '~/types';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  const { data: log } = await dataService.getOne<Log & { user: { name: string; email: string; avatar?: string } }>({
    resource: EnumResource.log,
    id: id as string,
    meta: {
      include: {
        user: {
          select: { name: true, email: true, avatar: true },
        },
      },
    },
  });

  if (!log) {
    throw new Response('未找到日志记录', { status: 404 });
  }

  return { log };
}

export default function LogShow() {
  const { log } = useLoaderData<typeof loader>();

  const data = JSON.parse(log.data || '{}');
  const previousData = JSON.parse(log.previousData || '{}');
  const meta = JSON.parse(log.meta || '{}');

  return (
    <article className="px-8 pt-8 pb-4">
      <header className="mb-8">
        <H1 className="relative mb-4 inline-flex gap-3 text-4xl font-bold">
          <span className="capitalize">
            Audit Log Detail - {meta.parent}.{log.resource}
          </span>
          <div className="inline-flex shrink-0 items-start pt-3.5">
            <Badge className="tracking-wide" variant={LOG_STATUS_MAP[log.action as LogStatus]?.badge as TAny}>
              {log.action}
            </Badge>
          </div>
        </H1>

        <div className="text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center">
            <LeafyGreen className="mr-2 h-4 w-4" />
            <span>
              Resource: {meta.parent}.{log.resource}
            </span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Created: {new Date(log.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={log.user?.avatar || ''} alt={log.user?.name || ''} />
            <AvatarFallback>{log.user?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{log.user?.name}</p>
            <p className="text-muted-foreground flex items-center text-sm">
              <MailIcon className="mr-2 h-4 w-4" />
              {log.user?.email}
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-6">
        {log.data && (
          <div>
            <Label>Data</Label>
            <pre className="bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}

        {log.previousData && (
          <div>
            <Label>Previous Data</Label>
            <pre className="bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre">
              {JSON.stringify(previousData, null, 2)}
            </pre>
          </div>
        )}

        {log.meta && (
          <div>
            <Label>Meta Data</Label>
            <pre className="bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre">
              {JSON.stringify(meta, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </article>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
