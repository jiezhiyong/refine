import { data as res } from '@remix-run/node';

/**
 * This helper function helps us to return the accurate HTTP status,
 * 400 Bad Request, to the client.
 */
export const badRequest = <T>(data: T) => res<T>(data, { status: 400 });
