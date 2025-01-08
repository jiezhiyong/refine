import { dataResources } from '~/providers';
import { TAny } from '~/types/any';

/**
 * 获取默认标题
 * @param matches
 * @returns
 */
export function getDefaultTitle(matches: TAny) {
  const { pathname } = matches[matches.length - 1];

  const matchedResource = dataResources.find((r) => pathname.startsWith(r.list));
  const { name, meta } = matchedResource || {};

  let title = meta?.title || name || 'OSS Inc.';
  title = title.charAt(0).toUpperCase() + title.slice(1);

  let action = pathname.replace(`${matchedResource?.list}/`, '').split('/').shift();
  action = action.charAt(0).toUpperCase() + action.slice(1);

  return action ? `${title} - ${action}` : title;
}
