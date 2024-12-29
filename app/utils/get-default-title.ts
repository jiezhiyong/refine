import { routeBreadcrumbMap } from '~/config/menus';
import { TAny } from '~/types/any';

/**
 * 获取默认标题
 * @param matches
 * @returns
 */
export function getDefaultTitle(matches: TAny) {
  const matchCurrent = matches[matches.length - 1];
  const matchPrev = matches[matches.length - 2];

  const titlePrev = routeBreadcrumbMap[matchPrev.id] || '';
  const titleCurrent = routeBreadcrumbMap[matchCurrent.id] || matchCurrent.pathname.split('/').pop() || '';

  return `${titlePrev}${titlePrev && titleCurrent ? ' - ' : ''}${titleCurrent}`;
}
