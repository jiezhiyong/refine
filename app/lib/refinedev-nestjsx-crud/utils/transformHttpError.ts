import type { HttpError } from '@refinedev/core';

import { transformErrorMessages } from './transformErrorMessages';

export const transformHttpError = (error: any): HttpError => {
  const message = error.response.data.error || error.response.statusText;
  const statusCode = error.response.data.statusCode || error.response.status;
  const errorMessages = error.response.data.message;

  const errors = transformErrorMessages(Array.isArray(errorMessages) ? errorMessages : [errorMessages]);

  const httpError: HttpError = {
    statusCode,
    message,
    errors,
  };

  return httpError;
};
