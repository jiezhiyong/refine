import { useModal, useNotification } from '@refinedev/core';
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
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
import { H2 } from '~/components-shadcn/typography';
import { PageError } from '~/components/500';
import { requireUserSession } from '~/services/session.server';
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
  const { open: openNotification, close: closeNotification } = useNotification();
  const { visible: modalVisible, show: showModal, close: closeModal } = useModal();

  return (
    <div className="px-8 pb-4 pt-8">
      <H2>Notification</H2>

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

      <H2>AlertDialog</H2>

      <ul className="mt-4 flex gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Show</Button>
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

        <Button onClick={showModal}>useModal</Button>
        <AlertDialog
          open={modalVisible}
          onOpenChange={(open) => {
            open ? showModal() : closeModal();
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                https://refine.dev/docs/core/hooks/utilities/use-modal/#usage
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ul>

      <H2>Modal</H2>

      <ul className="mt-4 flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Show</Button>
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
      </ul>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
