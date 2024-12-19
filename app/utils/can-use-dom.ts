/**
 * 判断是否可以使用 DOM
 */
export function canUseDOM(): boolean {
  return typeof document !== 'undefined';
}
