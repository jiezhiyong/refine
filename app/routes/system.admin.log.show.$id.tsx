import { Log, LogAction, Prisma } from '@prisma/client';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CalendarIcon, LeafyGreen } from 'lucide-react';

import { PageError } from '~/components/500';
import { CodeEditor } from '~/components/refine/form/code';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Label } from '~/components/ui/label';
import { H1 } from '~/components/ui/typography';
import { EnumLogType, LOG_STATUS_MAP } from '~/constants/log';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { deepParse } from '~/utils/deep-parse';

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { id } = params;

  const args: Prisma.LogFindUniqueArgs = {
    where: { id },
    include: {
      operatedBy: {
        select: { name: true, email: true, avatar: true },
      },
    },
  };

  const log = await dataService.findUniqueOrThrow<
    Log & { operatedBy: { name: string; email: string; avatar?: string } }
  >('log', args, { request });

  return { log };
}

export default function LogShow() {
  const { log } = useLoaderData<typeof loader>();
  const { content: data } = deepParse(log.data || '{}');
  const { content: dataPrevious } = deepParse(log.dataPrevious || '{}');
  const meta = (log.meta || {}) as Record<string, TAny>;

  const showEditor = !([EnumLogType.delete, EnumLogType.deleteMany] as LogAction[]).includes(log.action);
  const openDiff = ([EnumLogType.update, EnumLogType.updateMany] as LogAction[]).includes(log.action);
  return (
    <article className="px-8 pt-8 pb-4">
      <header className="mb-8">
        <H1 className="relative mb-4 inline-flex gap-3 text-4xl font-bold">
          <span className="capitalize">
            Audit Log - {meta?.parent}.{log.resource}
          </span>
          <div className="inline-flex shrink-0 items-start pt-3.5">
            <Badge className="tracking-wide" variant={LOG_STATUS_MAP[log.action as EnumLogType]?.badge as TAny}>
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

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={log.operatedBy?.avatar} alt={log.operatedBy?.name || ''} />
            <AvatarFallback>{log.operatedBy?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{log.operatedBy?.name}</p>
            <p className="text-muted-foreground text-sm">{log.operatedBy?.email}</p>
          </div>
        </div>
      </header>

      {(log.dataPrevious || log.data) && showEditor && (
        <div className="space-y-6">
          <Label>{openDiff ? 'Previous Resource Data & New Resource Data' : 'Resource Data'}</Label>
          <CodeEditor
            language="json"
            value={JSON.stringify(dataPrevious, null, 2)}
            modified={JSON.stringify(data, null, 2)}
            enableToggleDiff={false}
            openDiff={openDiff}
          />
        </div>
      )}

      <div className="mt-6">
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
