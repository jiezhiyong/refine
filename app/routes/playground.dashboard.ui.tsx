import { zodResolver } from '@hookform/resolvers/zod';
import { Category } from '@prisma/client';
import { HttpError, useModal, useNotification, useSelect, useTranslation } from '@refinedev/core';
import { useModalForm, useStepsForm } from '@refinedev/react-hook-form';
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { CheckCheck, Undo2 } from 'lucide-react';
import { useCallback } from 'react';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { Combobox, Field, Select } from '~/component-refine/components';
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
} from '~/components-shadcn/alert-dialog';
import { Button } from '~/components-shadcn/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components-shadcn/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components-shadcn/form';
import { Input } from '~/components-shadcn/input';
import { Tabs, TabsList, TabsTrigger } from '~/components-shadcn/tabs';
import { Textarea } from '~/components-shadcn/textarea';
import { H2 } from '~/components-shadcn/typography';
import { PageError } from '~/components/500';
import { EnumAction, EnumResource } from '~/constants';
import { requireUserSession } from '~/services/session.server';
import { POST_STATUS, POST_STATUS_LIST } from '~/types';
import { getAllParams } from '~/utils/get-all-params';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 加载器
export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUserSession(request);
  const mergedParams = await getAllParams<{ redirectTo?: string }>(request, params);
  return {};
}

// 处理 POST、PATCH、DELETE 请求
export async function action({ request, params }: ActionFunctionArgs) {
  const mergedParams = await getAllParams<{ id?: string }>(request, params);
  return {};
}

// UI
export default function DashboardUI() {
  return (
    <div className="px-8 pb-4 pt-8">
      <H2>Notification</H2>
      <DemoNotification />

      <H2>AlertDialog & Modal & useModal</H2>
      <DemoModal />

      <H2>useModalForm</H2>
      <DemoUseModalForm />

      <H2>useStepsForm</H2>
      <DemoUseStepsForm />
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
          open ? showModal() : closeModal();
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
const editPostId = '0d97bea4-a06f-4f7e-8771-d4b884a46be7';
const formSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  content: z.string().min(2).optional(),
});
type FormSchema1 = z.infer<typeof formSchema>;

const DemoUseModalForm = () => {
  // 提交前修改数据，注意：返回新的数据对象而不是修改原对象
  // TODO: 未生效
  const modifyingDataBeforeSubmission = useCallback((values: FormSchema1) => {
    return { content: '...', ...values };
  }, []);

  const form = useModalForm<FormSchema1, HttpError, FormSchema1>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '' },
    modalProps: { defaultVisible: false },
    syncWithLocation: { key: 'modalEditPost', syncId: true },
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.edit,
      id: editPostId,

      // autoSave: { // 注意：autoSave 不会触发表单验证
      //   enabled: false,
      //   onFinish: modifyingDataBeforeSubmission,
      //   debounce: 2000,
      //   invalidateOnClose: true,
      //   invalidateOnUnmount: true,
      // },
    },
  });

  const {
    formState: { errors },
    refineCore: { onFinish, formLoading, autoSaveProps },
    modal: { title, visible, close, show },
    control,
    handleSubmit,
    saveButtonProps,
  } = form;

  const onSubmit = handleSubmit((_data: FieldValues) => {
    debugger;

    const values = form.getValues();
    onFinish(modifyingDataBeforeSubmission(values));
  });

  const { translate: t } = useTranslation();

  return (
    <ul className="mt-4 flex gap-2">
      <Button onClick={() => show(editPostId)}>{t(title)}</Button>

      <Dialog open={visible} onOpenChange={close}>
        <DialogContent className="max-w-6xl">
          <DialogHeader className="border-b pb-4">
            <DialogTitle>{t(title)}</DialogTitle>
            <DialogDescription>This is a Demo for Edit Form on Modal.</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-8">
              <FormField
                control={control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" loading={formLoading} {...saveButtonProps}>
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
 */
const stepTitles = ['Title', 'Status', 'Category and Content'];

const formSchema2 = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  content: z.string().min(2),
  status: z.string(),
  categoryId: z.string(),
});
type FormSchema2 = z.infer<typeof formSchema2>;

const DemoUseStepsForm = () => {
  const form = useStepsForm<FormSchema2>({
    resolver: zodResolver(formSchema2),
    defaultValues: { title: '', status: POST_STATUS.DRAFT, content: '', categoryId: '' },
    warnWhenUnsavedChanges: true,
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.edit,
      id: editPostId,
      autoSave: {
        enabled: false,
      },
    },
    stepsProps: {
      defaultStep: 0,
      isBackValidate: false,
    },
  });

  const {
    formState: { errors },
    refineCore: { onFinish, formLoading, autoSaveProps },
    handleSubmit,
    steps: { currentStep, gotoStep },
  } = form;

  const { options } = useSelect<Category, HttpError>({
    resource: EnumResource.category,
  });

  const renderFormByStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Field {...form} name="title" label="Title">
            <Input placeholder="Title" />
          </Field>
        );
      case 1:
        return (
          <Field {...form} name="status" label="Status">
            <Select options={POST_STATUS_LIST.map((status) => ({ label: status, value: status }))} />
          </Field>
        );
      case 2:
        return (
          <>
            <Field {...form} name="categoryId" label="Category">
              <Combobox options={options} />
            </Field>

            <Field {...form} name="content" label="Content">
              <Textarea placeholder="Content" rows={10} />
            </Field>
          </>
        );
    }
  };

  const modifyingDataBeforeSubmission = useCallback((values: FormSchema2) => {
    return { ...values, content: '...' };
  }, []);

  const onSubmit = handleSubmit((_data: FieldValues) => {
    const values = form.getValues() as FormSchema2;
    onFinish(modifyingDataBeforeSubmission(values));
  });

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
          {renderFormByStep(currentStep)}

          <div style={{ display: 'flex', gap: 8 }}>
            {currentStep > 0 && (
              <Button type="button" icon={<Undo2 />} onClick={() => gotoStep(currentStep - 1)} disabled={formLoading}>
                Previous
              </Button>
            )}
            {currentStep < stepTitles.length - 1 && (
              <Button
                type="button"
                icon={<CheckCheck />}
                onClick={() => gotoStep(currentStep + 1)}
                disabled={formLoading}
              >
                Next
              </Button>
            )}
            {currentStep === stepTitles.length - 1 && (
              <Button type="submit" icon={<CheckCheck />} disabled={formLoading}>
                Save
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};
