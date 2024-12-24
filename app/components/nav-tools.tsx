import { useMatches } from '@remix-run/react';
import { HandleFunction } from '~/types/handle';

/**
 * 工具栏
 */
export function NavTools() {
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const handle = lastMatch.handle as HandleFunction;

  const { uiTools } = handle || {};
  if (!uiTools) {
    return null;
  }

  if (typeof uiTools === 'function') {
    return uiTools(lastMatch, matches);
  }

  return uiTools;
}
