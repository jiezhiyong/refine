import { data } from '@remix-run/node';
import { z } from 'zod';

/**
 * 使用 zod 进行表单验证时，根据错误类型返回不同的响应
 */
export function typedFormError(error: z.ZodError | Error | unknown) {
  if (error instanceof z.ZodError) {
    return data({ errors: error.flatten().fieldErrors });
  } else if (error instanceof Error) {
    return data({ errors: { default: [error?.message || 'unknown error (500 Internal Server Error)'] } });
  } else {
    return data({ errors: error || { default: ['unknown error (500 Internal Server Error)'] } });
  }
}
