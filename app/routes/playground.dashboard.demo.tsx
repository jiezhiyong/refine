import { zodResolver } from '@hookform/resolvers/zod';
import { Category } from '@prisma/client';
import { HttpError, useDelete, useModal, useNotification, useSelect, useTranslation, useUpdate } from '@refinedev/core';
import { useModalForm, useStepsForm } from '@refinedev/react-hook-form';
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Link, useViewTransitionState } from '@remix-run/react';
import { CheckCheck, Undo2 } from 'lucide-react';
import * as React from 'react';
import { useCallback } from 'react';
import { FieldValues } from 'react-hook-form';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { PageError } from '~/components/500';
import { Combobox } from '~/components/refine/form/combobox';
import { Field } from '~/components/refine/form/field';
import { SelectEasy } from '~/components/refine/form/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '~/components/ui/chart';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Form } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Textarea } from '~/components/ui/textarea';
import { H2 } from '~/components/ui/typography';
import { EnumAction } from '~/constants/action';
import { EnumPostStatus, POST_STATUS_LIST } from '~/constants/post';
import { EnumResource } from '~/constants/resource';
import { cn } from '~/lib/utils';
import { requireUserSession } from '~/services/session.server';
import { dropEmptyKey } from '~/utils/drop-empty-key';
import { getAllParams } from '~/utils/get-all-params';
import { getChangedValues } from '~/utils/get-changed-values';
import { getDefaultTitle } from '~/utils/get-default-title';
import { schemaPost, TSchemaPost } from '~/zod';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 加载器
export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUserSession(request);
  const mergedParams = await getAllParams<{ redirectTo?: string }>(request, params);
  return { paramsFromLoader: mergedParams };
}

// 处理 POST、PATCH、DELETE 请求
export async function action({ request, params }: ActionFunctionArgs) {
  const mergedParams = await getAllParams<{ id?: string }>(request, params);
  return { paramsFromAction: mergedParams };
}

// UI
export default function DashboardDemo() {
  return (
    <div className="px-8 pt-8 pb-4">
      <H2>Chat</H2>
      <DemoAreaChart />
      <DemoBarChart />

      <H2>useViewTransition</H2>
      <DemoUseViewTransitionState />

      <H2>Notification</H2>
      <DemoNotification />

      <H2>AlertDialog & Modal & useModal</H2>
      <DemoModal />

      <H2>useModalForm</H2>
      <DemoUseModalForm />

      <H2>useStepsForm</H2>
      <DemoUseStepsForm />

      <H2>sentry</H2>
      <DemoSentry />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

const DemoNotification = () => {
  const { open: openNotification, close: closeNotification } = useNotification();

  return (
    <ul className="mt-4 flex gap-2">
      <Button
        onClick={() => {
          openNotification?.({
            key: 'my-notification-abc',
            message: 'Test Notification',
            description: 'This is a test notification.',
            type: 'progress',
          });
        }}
      >
        Progress
      </Button>

      <Button
        onClick={() => {
          openNotification?.({
            key: 'my-notification-abc',
            message: 'Test Notification',
            description: 'This is a test notification.',
            type: 'success',
          });
        }}
      >
        Success
      </Button>

      <Button
        onClick={() => {
          openNotification?.({
            key: 'my-notification-abc',
            message: 'Test Notification',
            description: 'This is a test notification.',
            type: 'error',
          });
        }}
      >
        Failed
      </Button>

      <Button
        onClick={() => {
          closeNotification?.('my-notification-abc');
        }}
      >
        Close
      </Button>
    </ul>
  );
};

const DemoModal = () => {
  const { visible: modalVisible, show: showModal, close: closeModal } = useModal();

  return (
    <ul className="mt-4 flex gap-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Show AlertDialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog
        open={modalVisible}
        onOpenChange={(open) => {
          if (open) {
            showModal();
          } else {
            closeModal();
          }
        }}
      >
        <DialogTrigger asChild>
          <Button>Show Modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button onClick={showModal}>Show Modal - useModal</Button>
    </ul>
  );
};

/**
 * useModalForm
 * https://refine.dev/docs/packages/react-hook-form/use-modal-form/
 */
const editPostId = '27fcaa0c-400a-41bf-aee7-18ba631c0074';

const DemoUseModalForm = () => {
  const { options } = useSelect<Category, HttpError>({
    resource: EnumResource.category,
  });

  // 提交前修改数据
  const beforeSubmit = useCallback((val: TSchemaPost) => {
    const changedValues = getChangedValues(val, {} as TSchemaPost);
    return dropEmptyKey(changedValues);
  }, []);

  const form = useModalForm<TSchemaPost>({
    resolver: zodResolver(schemaPost),
    defaultValues: { title: '' },
    modalProps: { defaultVisible: false },
    syncWithLocation: { key: 'modalEditPost', syncId: true },
    mode: 'onChange',
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.create,
      id: editPostId,

      // autoSave: 仅在编辑模式下有效
      // autoSave: {
      //   enabled: true,
      //   debounce: 2000,
      //   invalidateOnClose: true,
      //   invalidateOnUnmount: true,
      //   onFinish: (values) => {
      //     try {
      //       schemaPost.parse(values);
      //       if (isEqual(values, form.formState.defaultValues)) {
      //         throw new Error('表单内容未变化');
      //       }
      //       return beforeSubmit(values as TAny);
      //     } catch (error) {
      //       return null as TAny;
      //     }
      //   },
      // },
    },
  });

  const {
    refineCore: { onFinish, formLoading },
    modal: { title, visible, close, show },
    handleSubmit,
    saveButtonProps,
  } = form;

  const onSubmit = handleSubmit((_data: FieldValues) => {
    const values = form.getValues() as TSchemaPost;
    onFinish(beforeSubmit(values));
  });

  const { translate: t } = useTranslation();
  const disabled = formLoading || saveButtonProps.disabled;
  return (
    <ul className="mt-4 flex gap-2">
      <Button onClick={() => show(editPostId)}>{t(title)}</Button>

      <Dialog open={visible} onOpenChange={close}>
        <DialogContent className="sm:max-w-6xl">
          <DialogHeader className="border-b pb-4">
            <DialogTitle>{t(title)}</DialogTitle>
            <DialogDescription>This is a Demo for Edit Form on Modal.</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-8">
              <Field {...form} name="title" label="Title">
                <Input placeholder="Title" />
              </Field>
              <Field {...form} name="categoryId" label="Category">
                <Combobox options={options} popoverProps={{ modal: true }} />
              </Field>

              <Field {...form} name="status" label="Status">
                <SelectEasy options={POST_STATUS_LIST.map((status) => ({ label: status, value: status }))} />
              </Field>

              <Field {...form} name="content" label="Content">
                <Textarea placeholder="Content" className="min-h-30" />
              </Field>

              <Button type="submit" icon={<CheckCheck />} loading={formLoading} disabled={disabled}>
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </ul>
  );
};

/**
 * useStepsForm
 * https://refine.dev/docs/packages/react-hook-form/use-steps-form/
 * 注意：如果使用 resolver，defaultValues 中的值需要满足 schemaPost 的验证，否则提交按钮将无法点击
 */
const stepTitles = ['Title', 'Status', 'Category', 'Content'];

const DemoUseStepsForm = () => {
  const form = useStepsForm<TSchemaPost>({
    resolver: zodResolver(schemaPost),
    defaultValues: { title: 'abc', status: EnumPostStatus.DRAFT, content: '...', categoryId: '' },
    warnWhenUnsavedChanges: false,
    mode: 'onSubmit',
    stepsProps: { defaultStep: 0, isBackValidate: false },
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.create,
      id: editPostId,
      autoSave: { enabled: false },
    },
  });

  const {
    refineCore: { onFinish, formLoading },
    handleSubmit,
    steps: { currentStep, gotoStep },
    saveButtonProps,
  } = form;

  const { options } = useSelect<Category, HttpError>({
    resource: EnumResource.category,
  });

  const beforeSubmit = useCallback((values: TSchemaPost) => {
    const changedValues = getChangedValues(values, {} as TSchemaPost);
    return dropEmptyKey(changedValues);
  }, []);

  const onSubmit = handleSubmit((_data: FieldValues) => {
    const values = form.getValues() as TSchemaPost;
    onFinish(beforeSubmit(values));
  });

  const disabled = formLoading || saveButtonProps.disabled;
  return (
    <div className="mt-4 flex w-[600px] flex-col gap-8">
      <Tabs
        defaultValue={stepTitles[0]}
        value={stepTitles[currentStep]}
        onValueChange={(value) => gotoStep(stepTitles.indexOf(value))}
      >
        <TabsList>
          {stepTitles.map((title, index) => (
            <TabsTrigger key={index} value={title}>
              {index + 1} - {title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Form {...form}>
        <form className="space-y-8" onSubmit={onSubmit}>
          <Field {...form} name="title" label="Title" className={cn(currentStep !== 0 && 'hidden')}>
            <Input placeholder="Title" />
          </Field>

          <Field {...form} name="status" label="Status" className={cn(currentStep !== 1 && 'hidden')}>
            <SelectEasy options={POST_STATUS_LIST.map((status) => ({ label: status, value: status }))} />
          </Field>

          <Field {...form} name="categoryId" label="Category" className={cn(currentStep !== 2 && 'hidden')}>
            <Combobox options={options} />
          </Field>

          <Field {...form} name="content" label="Content" className={cn(currentStep !== 3 && 'hidden')}>
            <Textarea placeholder="Content" className="min-h-60" />
          </Field>

          <div style={{ display: 'flex', gap: 8 }}>
            {currentStep > 0 && (
              <Button type="button" icon={<Undo2 />} onClick={() => gotoStep(currentStep - 1)} disabled={disabled}>
                Previous
              </Button>
            )}
            {currentStep < stepTitles.length - 1 && (
              <Button type="button" icon={<CheckCheck />} onClick={() => gotoStep(currentStep + 1)} disabled={disabled}>
                Next
              </Button>
            )}
            {currentStep === stepTitles.length - 1 && (
              <Button type="submit" icon={<CheckCheck />} disabled={disabled}>
                Save
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

const DemoUseViewTransitionState = () => {
  const to = `/playground/dashboard/demoViewTransition`;
  const vt = useViewTransitionState(to);

  return (
    <div className="flex flex-col gap-2">
      <Link prefetch="intent" viewTransition to={to}>
        <img
          alt=""
          className="border-secondary mt-4 h-32 rounded-md border shadow-md"
          src="/images/logo.png"
          style={{
            viewTransitionName: vt ? 'image-expand' : '',
          }}
        />
      </Link>
    </div>
  );
};

const DemoSentry = () => {
  const { mutate: mutateDelete } = useDelete();
  const { mutate: mutateUpdate } = useUpdate({ resource: EnumResource.post });

  return (
    <ul className="mt-4 flex gap-2">
      <Button
        onClick={() => {
          throw new Error('Sentry Example Frontend Error');
        }}
      >
        Throw a sample error
      </Button>

      <Button
        onClick={() => {
          mutateDelete({ resource: 'products', id: '123' });
        }}
      >
        Delete a sample record
      </Button>

      <Button
        onClick={() => {
          mutateUpdate({ id: editPostId, values: { invalidKey: '123' } });
        }}
      >
        Update a sample record
      </Button>
    </ul>
  );
};

const chartData1 = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 97, mobile: 180 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 242, mobile: 260 },
  { date: '2024-04-05', desktop: 373, mobile: 290 },
  { date: '2024-04-06', desktop: 301, mobile: 340 },
  { date: '2024-04-07', desktop: 245, mobile: 180 },
  { date: '2024-04-08', desktop: 409, mobile: 320 },
  { date: '2024-04-09', desktop: 59, mobile: 110 },
  { date: '2024-04-10', desktop: 261, mobile: 190 },
  { date: '2024-04-11', desktop: 327, mobile: 350 },
  { date: '2024-04-12', desktop: 292, mobile: 210 },
  { date: '2024-04-13', desktop: 342, mobile: 380 },
  { date: '2024-04-14', desktop: 137, mobile: 220 },
  { date: '2024-04-15', desktop: 120, mobile: 170 },
  { date: '2024-04-16', desktop: 138, mobile: 190 },
  { date: '2024-04-17', desktop: 446, mobile: 360 },
  { date: '2024-04-18', desktop: 364, mobile: 410 },
  { date: '2024-04-19', desktop: 243, mobile: 180 },
  { date: '2024-04-20', desktop: 89, mobile: 150 },
  { date: '2024-04-21', desktop: 137, mobile: 200 },
  { date: '2024-04-22', desktop: 224, mobile: 170 },
  { date: '2024-04-23', desktop: 138, mobile: 230 },
  { date: '2024-04-24', desktop: 387, mobile: 290 },
  { date: '2024-04-25', desktop: 215, mobile: 250 },
  { date: '2024-04-26', desktop: 75, mobile: 130 },
  { date: '2024-04-27', desktop: 383, mobile: 420 },
  { date: '2024-04-28', desktop: 122, mobile: 180 },
  { date: '2024-04-29', desktop: 315, mobile: 240 },
  { date: '2024-04-30', desktop: 454, mobile: 380 },
  { date: '2024-05-01', desktop: 165, mobile: 220 },
  { date: '2024-05-02', desktop: 293, mobile: 310 },
  { date: '2024-05-03', desktop: 247, mobile: 190 },
  { date: '2024-05-04', desktop: 385, mobile: 420 },
  { date: '2024-05-05', desktop: 481, mobile: 390 },
  { date: '2024-05-06', desktop: 498, mobile: 520 },
  { date: '2024-05-07', desktop: 388, mobile: 300 },
  { date: '2024-05-08', desktop: 149, mobile: 210 },
  { date: '2024-05-09', desktop: 227, mobile: 180 },
  { date: '2024-05-10', desktop: 293, mobile: 330 },
  { date: '2024-05-11', desktop: 335, mobile: 270 },
  { date: '2024-05-12', desktop: 197, mobile: 240 },
  { date: '2024-05-13', desktop: 197, mobile: 160 },
  { date: '2024-05-14', desktop: 448, mobile: 490 },
  { date: '2024-05-15', desktop: 473, mobile: 380 },
  { date: '2024-05-16', desktop: 338, mobile: 400 },
  { date: '2024-05-17', desktop: 499, mobile: 420 },
  { date: '2024-05-18', desktop: 315, mobile: 350 },
  { date: '2024-05-19', desktop: 235, mobile: 180 },
  { date: '2024-05-20', desktop: 177, mobile: 230 },
  { date: '2024-05-21', desktop: 82, mobile: 140 },
  { date: '2024-05-22', desktop: 81, mobile: 120 },
  { date: '2024-05-23', desktop: 252, mobile: 290 },
  { date: '2024-05-24', desktop: 294, mobile: 220 },
  { date: '2024-05-25', desktop: 201, mobile: 250 },
  { date: '2024-05-26', desktop: 213, mobile: 170 },
  { date: '2024-05-27', desktop: 420, mobile: 460 },
  { date: '2024-05-28', desktop: 233, mobile: 190 },
  { date: '2024-05-29', desktop: 78, mobile: 130 },
  { date: '2024-05-30', desktop: 340, mobile: 280 },
  { date: '2024-05-31', desktop: 178, mobile: 230 },
  { date: '2024-06-01', desktop: 178, mobile: 200 },
  { date: '2024-06-02', desktop: 470, mobile: 410 },
  { date: '2024-06-03', desktop: 103, mobile: 160 },
  { date: '2024-06-04', desktop: 439, mobile: 380 },
  { date: '2024-06-05', desktop: 88, mobile: 140 },
  { date: '2024-06-06', desktop: 294, mobile: 250 },
  { date: '2024-06-07', desktop: 323, mobile: 370 },
  { date: '2024-06-08', desktop: 385, mobile: 320 },
  { date: '2024-06-09', desktop: 438, mobile: 480 },
  { date: '2024-06-10', desktop: 155, mobile: 200 },
  { date: '2024-06-11', desktop: 92, mobile: 150 },
  { date: '2024-06-12', desktop: 492, mobile: 420 },
  { date: '2024-06-13', desktop: 81, mobile: 130 },
  { date: '2024-06-14', desktop: 426, mobile: 380 },
  { date: '2024-06-15', desktop: 307, mobile: 350 },
  { date: '2024-06-16', desktop: 371, mobile: 310 },
  { date: '2024-06-17', desktop: 475, mobile: 520 },
  { date: '2024-06-18', desktop: 107, mobile: 170 },
  { date: '2024-06-19', desktop: 341, mobile: 290 },
  { date: '2024-06-20', desktop: 408, mobile: 450 },
  { date: '2024-06-21', desktop: 169, mobile: 210 },
  { date: '2024-06-22', desktop: 317, mobile: 270 },
  { date: '2024-06-23', desktop: 480, mobile: 530 },
  { date: '2024-06-24', desktop: 132, mobile: 180 },
  { date: '2024-06-25', desktop: 141, mobile: 190 },
  { date: '2024-06-26', desktop: 434, mobile: 380 },
  { date: '2024-06-27', desktop: 448, mobile: 490 },
  { date: '2024-06-28', desktop: 149, mobile: 200 },
  { date: '2024-06-29', desktop: 103, mobile: 160 },
  { date: '2024-06-30', desktop: 446, mobile: 400 },
];

const chartConfig1 = {
  views: {
    label: 'Page Views',
  },
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

function DemoBarChart() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig1>('desktop');

  const total = React.useMemo(
    () => ({
      desktop: chartData1.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData1.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  return (
    <Card className="mt-4">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>Showing total visitors for the last 3 months</CardDescription>
        </div>
        <div className="flex">
          {['desktop', 'mobile'].map((key) => {
            const chart = key as keyof typeof chartConfig1;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">{chartConfig1[chart].label}</span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig1} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData1}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const chartData2 = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 97, mobile: 180 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 242, mobile: 260 },
  { date: '2024-04-05', desktop: 373, mobile: 290 },
  { date: '2024-04-06', desktop: 301, mobile: 340 },
  { date: '2024-04-07', desktop: 245, mobile: 180 },
  { date: '2024-04-08', desktop: 409, mobile: 320 },
  { date: '2024-04-09', desktop: 59, mobile: 110 },
  { date: '2024-04-10', desktop: 261, mobile: 190 },
  { date: '2024-04-11', desktop: 327, mobile: 350 },
  { date: '2024-04-12', desktop: 292, mobile: 210 },
  { date: '2024-04-13', desktop: 342, mobile: 380 },
  { date: '2024-04-14', desktop: 137, mobile: 220 },
  { date: '2024-04-15', desktop: 120, mobile: 170 },
  { date: '2024-04-16', desktop: 138, mobile: 190 },
  { date: '2024-04-17', desktop: 446, mobile: 360 },
  { date: '2024-04-18', desktop: 364, mobile: 410 },
  { date: '2024-04-19', desktop: 243, mobile: 180 },
  { date: '2024-04-20', desktop: 89, mobile: 150 },
  { date: '2024-04-21', desktop: 137, mobile: 200 },
  { date: '2024-04-22', desktop: 224, mobile: 170 },
  { date: '2024-04-23', desktop: 138, mobile: 230 },
  { date: '2024-04-24', desktop: 387, mobile: 290 },
  { date: '2024-04-25', desktop: 215, mobile: 250 },
  { date: '2024-04-26', desktop: 75, mobile: 130 },
  { date: '2024-04-27', desktop: 383, mobile: 420 },
  { date: '2024-04-28', desktop: 122, mobile: 180 },
  { date: '2024-04-29', desktop: 315, mobile: 240 },
  { date: '2024-04-30', desktop: 454, mobile: 380 },
  { date: '2024-05-01', desktop: 165, mobile: 220 },
  { date: '2024-05-02', desktop: 293, mobile: 310 },
  { date: '2024-05-03', desktop: 247, mobile: 190 },
  { date: '2024-05-04', desktop: 385, mobile: 420 },
  { date: '2024-05-05', desktop: 481, mobile: 390 },
  { date: '2024-05-06', desktop: 498, mobile: 520 },
  { date: '2024-05-07', desktop: 388, mobile: 300 },
  { date: '2024-05-08', desktop: 149, mobile: 210 },
  { date: '2024-05-09', desktop: 227, mobile: 180 },
  { date: '2024-05-10', desktop: 293, mobile: 330 },
  { date: '2024-05-11', desktop: 335, mobile: 270 },
  { date: '2024-05-12', desktop: 197, mobile: 240 },
  { date: '2024-05-13', desktop: 197, mobile: 160 },
  { date: '2024-05-14', desktop: 448, mobile: 490 },
  { date: '2024-05-15', desktop: 473, mobile: 380 },
  { date: '2024-05-16', desktop: 338, mobile: 400 },
  { date: '2024-05-17', desktop: 499, mobile: 420 },
  { date: '2024-05-18', desktop: 315, mobile: 350 },
  { date: '2024-05-19', desktop: 235, mobile: 180 },
  { date: '2024-05-20', desktop: 177, mobile: 230 },
  { date: '2024-05-21', desktop: 82, mobile: 140 },
  { date: '2024-05-22', desktop: 81, mobile: 120 },
  { date: '2024-05-23', desktop: 252, mobile: 290 },
  { date: '2024-05-24', desktop: 294, mobile: 220 },
  { date: '2024-05-25', desktop: 201, mobile: 250 },
  { date: '2024-05-26', desktop: 213, mobile: 170 },
  { date: '2024-05-27', desktop: 420, mobile: 460 },
  { date: '2024-05-28', desktop: 233, mobile: 190 },
  { date: '2024-05-29', desktop: 78, mobile: 130 },
  { date: '2024-05-30', desktop: 340, mobile: 280 },
  { date: '2024-05-31', desktop: 178, mobile: 230 },
  { date: '2024-06-01', desktop: 178, mobile: 200 },
  { date: '2024-06-02', desktop: 470, mobile: 410 },
  { date: '2024-06-03', desktop: 103, mobile: 160 },
  { date: '2024-06-04', desktop: 439, mobile: 380 },
  { date: '2024-06-05', desktop: 88, mobile: 140 },
  { date: '2024-06-06', desktop: 294, mobile: 250 },
  { date: '2024-06-07', desktop: 323, mobile: 370 },
  { date: '2024-06-08', desktop: 385, mobile: 320 },
  { date: '2024-06-09', desktop: 438, mobile: 480 },
  { date: '2024-06-10', desktop: 155, mobile: 200 },
  { date: '2024-06-11', desktop: 92, mobile: 150 },
  { date: '2024-06-12', desktop: 492, mobile: 420 },
  { date: '2024-06-13', desktop: 81, mobile: 130 },
  { date: '2024-06-14', desktop: 426, mobile: 380 },
  { date: '2024-06-15', desktop: 307, mobile: 350 },
  { date: '2024-06-16', desktop: 371, mobile: 310 },
  { date: '2024-06-17', desktop: 475, mobile: 520 },
  { date: '2024-06-18', desktop: 107, mobile: 170 },
  { date: '2024-06-19', desktop: 341, mobile: 290 },
  { date: '2024-06-20', desktop: 408, mobile: 450 },
  { date: '2024-06-21', desktop: 169, mobile: 210 },
  { date: '2024-06-22', desktop: 317, mobile: 270 },
  { date: '2024-06-23', desktop: 480, mobile: 530 },
  { date: '2024-06-24', desktop: 132, mobile: 180 },
  { date: '2024-06-25', desktop: 141, mobile: 190 },
  { date: '2024-06-26', desktop: 434, mobile: 380 },
  { date: '2024-06-27', desktop: 448, mobile: 490 },
  { date: '2024-06-28', desktop: 149, mobile: 200 },
  { date: '2024-06-29', desktop: 103, mobile: 160 },
  { date: '2024-06-30', desktop: 446, mobile: 400 },
];

const chartConfig2 = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export function DemoAreaChart() {
  const [timeRange, setTimeRange] = React.useState('90d');
  const filteredData = chartData2.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date('2024-06-30');
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return (
    <Card className="mt-4">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>Showing total visitors for the last 3 months</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="Select a value">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig2} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
            <Area dataKey="desktop" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
