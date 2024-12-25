import { data } from '@remix-run/node';
import { z } from 'zod';
import { badRequest } from '~/utils/request';

/**
 * 使用 zod 进行表单验证时，根据错误类型返回不同的响应
 */
export function typedFormError(error: z.ZodError | Error | unknown) {
  if (error instanceof z.ZodError) {
    return badRequest({ errors: error.flatten().fieldErrors });
  } else if (error instanceof Error) {
    return data({ errors: { default: [error?.message || 'unknown error'] } }, { status: 500 });
  } else {
    return data({ errors: { default: ['unknown error'] } }, { status: 500 });
  }
}
