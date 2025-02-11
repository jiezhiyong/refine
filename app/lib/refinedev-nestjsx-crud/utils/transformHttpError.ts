import type { HttpError, ValidationErrors } from '@refinedev/core';

import { TAny } from '~/types';
import { tryParse } from '~/utils';

import { transformPrismaError } from './transformPrismaError';

/**
 * 服务器端验证
 * https://refine.dev/docs/guides-concepts/forms/#server-side-validation-
 * https://refine.dev/docs/core/interface-references/#httperror
 *
 * throw new Error(
 *  JSON.stringify({
 *    title: ['Title is required'],
 *    description: 'description is required',
 *    content: {
 *      key: 'form.error.content',
 *      message: 'Content is required.',
 *    },
 *    status: true,
 *  })
 *);
 */
export const transformHttpError = (error: TAny): HttpError => {
  const { status, data, original } = tryParse(error?.message);

  const tryTransformPrismaError = transformPrismaError(!status ? String(original) : '');
  const message = tryTransformPrismaError || error.response?.data?.name || error.response.statusText;
  const statusCode = error.status || error.response.status;

  const httpError: HttpError = {
    message,
    statusCode,
    errors: status ? (data as ValidationErrors) : undefined,
  };

  return httpError;
};
