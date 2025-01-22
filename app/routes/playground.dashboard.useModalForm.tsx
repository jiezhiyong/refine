import { Post } from '@prisma/client';
import { HttpError } from '@refinedev/core';
import { useModalForm } from '@refinedev/react-hook-form';
import { MetaFunction } from '@remix-run/node';
import { Button } from '~/components-shadcn/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components-shadcn/dialog';
import { PageError } from '~/components/500';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
export default function DashboardUseModalForm() {
  const {
    formState: { errors },
    refineCore: { onFinish, formLoading },
    modal: { visible, close, show },
    register,
    handleSubmit,
    saveButtonProps,
  } = useModalForm<Post, HttpError, Post>({
    refineCoreProps: { action: 'create' },
  });

  return (
    <>
      <Button onClick={() => show()}>Create Post</Button>

      <Dialog open={visible} onOpenChange={close}>
        <DialogContent className="max-w-6xl">
          <DialogHeader className="border-b pb-4">
            <DialogTitle>Edit Post</DialogTitle>
            <DialogDescription>This is a Demo for Edit Form on Modal.</DialogDescription>
          </DialogHeader>

          <form className="form" onSubmit={handleSubmit(onFinish)}>
            <div className="form-group">
              <label>Title: </label>
              <input
                {...register('title', {
                  required: 'This field is required',
                })}
              />
              {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div className="form-group">
              <label>Status: </label>
              <select {...register('status')}>
                <option value="published">published</option>
                <option value="draft">draft</option>
                <option value="rejected">rejected</option>
              </select>
            </div>
            <Button type="submit" {...saveButtonProps}>
              {formLoading ? 'Loading' : 'Save'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
