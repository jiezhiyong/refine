import { AuditRecord, LogAction, Prisma } from '@prisma/client';
import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { useActionData, useLoaderData, useNavigation, useSubmit } from '@remix-run/react';
import { AlertCircle, Ban, CalendarIcon, CheckCheck, Info, LeafyGreen, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { PageError } from '~/components/500';
import { CodeEditor } from '~/components/refine/form/code';
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { H1 } from '~/components/ui/typography';
import { EnumAuditChannel } from '~/constants/audit-channel';
import { AUDIT_STATUS_MAP, EnumAuditStatus } from '~/constants/audit-status';
import { EnumLogType } from '~/constants/log';
import { EnumRole } from '~/constants/roles';
import { AuditProcessor } from '~/services/audit-processor.server';
import { dataService } from '~/services/data.server';
import { getUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { deepParse } from '~/utils/deep-parse';

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { id } = params;
  const user = await getUser(request);

  const args: Prisma.AuditRecordFindUniqueArgs = {
    where: {
      id,
    },
    include: {
      operatedBy: {
        select: { name: true, email: true, avatar: true },
      },
    },
  };

  const record = await dataService.findUniqueOrThrow<
    AuditRecord & { operatedBy: { name: string; email: string; avatar?: string } }
  >('auditRecord', args, { request });

  // 检查用户是否为管理员
  const isAdmin = user?.role === EnumRole.administrator;

  return { record, isAdmin };
}

/**
 * 处理审核操作
 */
export async function action({ request }: ActionFunctionArgs) {
  const user = await getUser(request);

  // 检查用户权限
  if (user?.role !== EnumRole.administrator) {
    return Response.json({ success: false, message: '无权限执行此操作' }, { status: 403 });
  }

  // 获取表单数据
  const formData = await request.formData();
  const id = formData.get('id') as string;
  const action = formData.get('action') as string;
  const reason = formData.get('reason') as string;

  // 数据验证
  if (!id) {
    return Response.json({ success: false, message: '缺少审核记录ID' }, { status: 400 });
  }
  if (!action || !['approve', 'reject'].includes(action)) {
    return Response.json({ success: false, message: '无效的操作类型' }, { status: 400 });
  }

  // 审核通过
  if (action === 'approve') {
    const result = await AuditProcessor.approve(id);
    return Response.json(result);
  }

  // 审核拒绝
  if (!reason) {
    return Response.json({ success: false, message: '拒绝时必须提供原因' }, { status: 400 });
  }
  const result = await AuditProcessor.reject(id, reason);
  return Response.json(result);
}

export default function AuditRecordShow() {
  const { record, isAdmin } = useLoaderData<typeof loader>();
  const { status, channel } = record;

  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const submit = useSubmit();

  const { content: data } = deepParse(record.data || '{}');
  const { content: dataPrevious } = deepParse(record.dataPrevious || '{}');
  const meta = (record.meta || {}) as Record<string, TAny>;

  // 拒绝原因状态
  const [reason, setReason] = useState('');
  const [showReasonInput, setShowReasonInput] = useState(false);

  // 检查是否可以进行审核操作
  const canAudit = isAdmin && status === EnumAuditStatus.PENDING && channel === EnumAuditChannel.SELF;
  const isSubmitting = navigation.state === 'submitting';
  const showAudit = (status === EnumAuditStatus.PENDING || status === EnumAuditStatus.FAILED) && !showReasonInput;

  const showEditor = !([EnumLogType.delete, EnumLogType.deleteMany] as LogAction[]).includes(record.action);
  const openDiff = ([EnumLogType.update, EnumLogType.updateMany] as LogAction[]).includes(record.action);

  // 处理审核操作结果
  useEffect(() => {
    if (!actionData) {
      return;
    }

    if (actionData.success) {
      toast.success(actionData.message);
    } else {
      toast.error(actionData.message);
    }
  }, [actionData]);

  // 处理审核通过
  const handleApprove = () => {
    const formData = new FormData();
    formData.append('id', record.id);
    formData.append('action', 'approve');

    submit(formData, { method: 'post' });
  };

  // 处理审核拒绝
  const handleReject = () => {
    if (!reason.trim()) {
      toast.error('操作有误', { description: '拒绝时必须提供原因' });
      return;
    }

    const formData = new FormData();
    formData.append('id', record.id);
    formData.append('action', 'reject');
    formData.append('reason', reason);

    submit(formData, { method: 'post' });
  };

  const disabled = !canAudit || isSubmitting;
  const domAudit = (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <Button variant="destructive" onClick={() => setShowReasonInput(true)} disabled={disabled} icon={<Ban />}>
          拒绝
        </Button>
        <Button variant="default" onClick={handleApprove} disabled={disabled} icon={<CheckCheck />}>
          通过
        </Button>
      </div>
    </div>
  );

  return (
    <article className="px-8 pt-8 pb-4">
      <header className="mb-8">
        <H1 className="relative mb-4 inline-flex gap-3 text-4xl font-bold">
          <span>Audit Record - {record.title}</span>
          <div className="inline-flex shrink-0 items-start pt-3.5">
            <Badge className="tracking-wide" variant={AUDIT_STATUS_MAP[status as EnumAuditStatus]?.badge as TAny}>
              {status}
            </Badge>
          </div>
        </H1>

        <div className="text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center">
            <Lightbulb className="mr-2 h-4 w-4" />
            <span>ActionType: {record.action}</span>
          </div>
          <div className="flex items-center">
            <LeafyGreen className="mr-2 h-4 w-4" />
            <span>
              Resource: {meta.parent}.{record.resource}
            </span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Created: {new Date(record.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-1 items-center gap-3">
            <Avatar>
              <AvatarImage src={record.operatedBy?.avatar} alt={record.operatedBy?.name || ''} />
              <AvatarFallback>{record.operatedBy?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{record.operatedBy?.name}</p>
              <p className="text-muted-foreground text-sm">{record.operatedBy?.email}</p>
            </div>
          </div>

          {/* 审核操作按钮 */}
          {showAudit &&
            (disabled ? (
              <Tooltip>
                <TooltipTrigger asChild>{domAudit}</TooltipTrigger>
                <TooltipContent side="left" className="flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  {channel === EnumAuditChannel.TIAN_YUAN ? '请通知测试人员在天元审核' : '请通知管理员进行审核'}
                </TooltipContent>
              </Tooltip>
            ) : (
              domAudit
            ))}
        </div>

        {showReasonInput && (
          <div className="mt-5 flex w-full flex-col gap-2">
            <Textarea
              className="min-h-20"
              placeholder="请输入拒绝原因..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowReasonInput(false)} disabled={isSubmitting}>
                取消
              </Button>
              <Button variant="destructive" onClick={handleReject} disabled={isSubmitting}>
                确认拒绝
              </Button>
            </div>
          </div>
        )}
      </header>

      {record.error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="size-4" />
          <AlertTitle>Error: 审核失败</AlertTitle>
          <AlertDescription>{record.error || 'unknown'}</AlertDescription>
        </Alert>
      )}

      {(record.dataPrevious || record.data) && showEditor && (
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
        {record.meta && (
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
