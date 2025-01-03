import { data } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { getSocketIO } from '~/services/socket.server';

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return data({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await request.json();
    const { eventName, data } = body;

    if (!eventName || !data) {
      return data({ error: 'Missing required fields: eventName or data' }, { status: 400 });
    }

    const io = getSocketIO();
    io.emit(eventName, data);

    return { success: true };
  } catch (error) {
    console.error('@api.publish - Error publishing event:', error);
    return data({ error: 'Internal server error' }, { status: 500 });
  }
};
