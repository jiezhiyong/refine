import { useRevalidator } from '@remix-run/react';
import { useEffect } from 'react';
import { useEventSource } from 'remix-utils/sse/react';

/** 实时更新 */
export function useRealtimeRevalidation({ url }: { url: string }) {
  const data = useEventSource(url);
  const { revalidate } = useRevalidator();
  useEffect(() => {
    revalidate();
  }, [data, revalidate]);
}
