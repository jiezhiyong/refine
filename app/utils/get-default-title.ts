import { t } from 'i18next';

import { dataResources } from '~/config/resources';
import { TAny } from '~/types/any';
import { capitalizeFirstLetter } from '~/utils/capitalize-first-letter';

/**
 * 获取默认标题
 * @param matches
 * @returns
 */
export function getDefaultTitle(matches: TAny) {
  const titles: string[] = [];

  const { pathname } = matches[matches.length - 1];
  const matchedResource = dataResources.find((r) => pathname.startsWith(r.list));
  const { name, meta } = matchedResource || {};

  let parent = meta?.parent;
  parent = t(`menus.${parent}`, parent || '');
  parent = capitalizeFirstLetter(parent);
  titles.push(parent);

  let title = meta?.title;
  if (!title) {
    title = t(`menus.${name}`, name || '');
  }
  title = capitalizeFirstLetter(title);
  titles.push(title);

  let action = pathname.replace(`${matchedResource?.list}/`, '').split('/').shift();
  action = t(`buttons.${action}`, '');
  action = capitalizeFirstLetter(action);
  titles.push(action);

  return titles.filter(Boolean).join(' · ');
}
