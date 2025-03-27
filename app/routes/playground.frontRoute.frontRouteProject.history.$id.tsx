import { AuditRecord } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CalendarIcon, IdCard, LeafyGreen, Type, User2 } from 'lucide-react';

import { PageError } from '~/components/500';
import { Empty } from '~/components/empty';
import { CodeEditor } from '~/components/refine/form/code';
import { Badge } from '~/components/ui/badge';
import { H1 } from '~/components/ui/typography';
import { EnumAction } from '~/constants/action';
import { cn } from '~/lib/utils';
import { dataService } from '~/services/data.server';
import { tyServer } from '~/services/ty.server';
import { TAny } from '~/types/any';
import { TyHistory } from '~/types/ty';
import { deepParse } from '~/utils/deep-parse';
import { getAllParams } from '~/utils/get-all-params';
import { getDefaultTitle } from '~/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const mergedData = await getAllParams(request, params);
  const { name } = mergedData;
  const param = `frontRoute:${name}`;

  const history = await tyServer.deployServiceHistory<TyHistory[]>(request, { param }).then((res) => {
    return res.splice(0, 10);
  });
  const { auditRecordId } = JSON.parse(history?.[0]?.contentJson ?? '');

  let auditRecord: AuditRecord | null = null;
  if (auditRecordId) {
    try {
      const data = await dataService.findUniqueOrThrow<AuditRecord>(
        'auditRecord',
        {
          where: { id: auditRecordId },
        },
        { request }
      );
      auditRecord = data;
    } catch (error: TAny) {
      auditRecord = { dataPrevious: { message: error?.message } } as unknown as AuditRecord;
    }
  }

  return {
    param,
    dataPrevious: auditRecord?.dataPrevious,
    history,
  };
}

// UI
export default function FrontRouteProjectHistory() {
  const { param, dataPrevious, history } = useLoaderData<typeof loader>();

  return (
    <article className="px-8 pt-8 pb-4">
      <header className="mb-8">
        <H1 className="relative mb-4 inline-flex gap-3 text-4xl font-bold">配置发布申请记录 - {param}</H1>
      </header>

      <div className="space-y-6">
        {history.map((log, index) => {
          const { status, content, original } = deepParse(log.contentJson);
          const isDeployed = log.deployStatus === '3';
          const { action, auditRecordId, ...rest } = content;

          return (
            <div key={log.id} className="space-y-2">
              <div className="text-muted-foreground mb-2 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Badge className={cn(isDeployed && 'bg-green-500')}>{index + 1}</Badge>
                  <span className={cn(isDeployed && 'text-green-600')}>{isDeployed ? '发布成功' : '等待发布'}</span>
                </div>
                <div className="flex items-center">
                  <Type className="mr-2 h-4 w-4" />
                  <span>{String(action || log.operateType)}</span>
                </div>
                <div className="flex items-center">
                  <LeafyGreen className="mr-2 h-4 w-4" />
                  <span>{log.issueId && log.issueId !== '0' ? log.issueId : 'N/A'}</span>
                </div>
                <div className="flex items-center">
                  <User2 className="mr-2 h-4 w-4" />
                  <span>{log.commitUser}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>{log.commitTime}</span>
                </div>

                <div className="flex items-center">
                  <IdCard className="mr-2 h-4 w-4" />
                  <span>{String(auditRecordId || 'N/A')}</span>
                </div>
              </div>

              <div className={cn('border-input rounded-lg border-2', isDeployed && 'border-green-500')}>
                {index === 0 && action !== EnumAction.delete ? (
                  <CodeEditor
                    language="json"
                    value={JSON.stringify(dataPrevious, null, 2)}
                    modified={JSON.stringify(rest, null, 2)}
                    enableToggleDiff={false}
                    openDiff={true}
                  />
                ) : (
                  <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm whitespace-pre">
                    {status ? JSON.stringify(rest, null, 2) : (original as string)}
                  </pre>
                )}
              </div>
            </div>
          );
        })}

        {!history.length ? <Empty /> : <p className="text-muted-foreground text-sm">备注: 仅展示最近 10 条数据 ...</p>}
      </div>
    </article>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
