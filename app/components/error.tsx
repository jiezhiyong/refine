/**
 * 错误信息显示
 */
export function ErrorMessage({ error }: { error?: Error | string }) {
  if (!error) {
    return null;
  }

  let message = '';
  if (typeof error === 'string') {
    message = error;
  } else if (error instanceof Error) {
    message = error.message;
  }
  return <p className="text-sm text-destructive">{message}</p>;
}
