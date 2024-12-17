/**
 * 判断是否可以使用 DOM
 */
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
