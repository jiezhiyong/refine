import type { LoaderFunctionArgs } from '@remix-run/node';
import { eventStream } from 'remix-utils/sse/server';
import { emitter, EVENTS } from '~/services/emitter';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return eventStream(request.signal, (send) => {
    function listener(message: string) {
      send({ data: message });
    }

    emitter.addListener(EVENTS.ISSUE_CHANGED, listener);
    return () => {
      emitter.removeListener(EVENTS.ISSUE_CHANGED, listener);
    };
  });
};
