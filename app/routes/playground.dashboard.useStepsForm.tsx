import { Category, Post } from '@prisma/client';
import { HttpError, useSelect } from '@refinedev/core';
import { useStepsForm } from '@refinedev/react-hook-form';
import { MetaFunction } from '@remix-run/node';
import { Button } from '~/components-shadcn/button';
import { PageError } from '~/components/500';
import { EnumResource } from '~/constants';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// UI
const stepTitles = ['Title', 'Status', 'Category and content'];

export default function DashboardUseStepsForm() {
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    formState: { errors },
    steps: { currentStep, gotoStep },
  } = useStepsForm<Post, HttpError, Post>();

  const { options } = useSelect<Category, HttpError>({
    resource: EnumResource.category,
  });

  const renderFormByStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <label>Title: </label>
            <input
              {...register('title', {
                required: 'This field is required',
              })}
            />
            {errors.title && <span>{errors.title.message}</span>}
          </>
        );
      case 1:
        return (
          <>
            <label>Status: </label>
            <select {...register('status')}>
              <option value="published">published</option>
              <option value="draft">draft</option>
              <option value="rejected">rejected</option>
            </select>
          </>
        );
      case 2:
        return (
          <>
            <label>Category: </label>
            <select
              {...register('categoryId', {
                required: 'This field is required',
              })}
            >
              {options?.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            {errors.categoryId && <span>{errors.categoryId.message}</span>}
            <br />
            <br />
            <label>Content: </label>
            <textarea
              {...register('content', {
                required: 'This field is required',
              })}
              rows={10}
              cols={50}
            />
            {errors.content && <span>{errors.content.message}</span>}
          </>
        );
    }
  };

  if (formLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 36 }}>
        {stepTitles.map((title, index) => (
          <Button
            key={index}
            onClick={() => gotoStep(index)}
            style={{
              backgroundColor: currentStep === index ? 'lightgray' : 'initial',
            }}
          >
            {index + 1} - {title}
          </Button>
        ))}
      </div>
      <form autoComplete="off">{renderFormByStep(currentStep)}</form>
      <div style={{ display: 'flex', gap: 8 }}>
        {currentStep > 0 && (
          <Button
            onClick={() => {
              gotoStep(currentStep - 1);
            }}
          >
            Previous
          </Button>
        )}
        {currentStep < stepTitles.length - 1 && (
          <Button
            onClick={() => {
              gotoStep(currentStep + 1);
            }}
          >
            Next
          </Button>
        )}
        {currentStep === stepTitles.length - 1 && <Button onClick={handleSubmit(onFinish)}>Save</Button>}
      </div>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
