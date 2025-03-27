import { UIMatch } from '@remix-run/react';
import type { JSX } from 'react';

// 自定义处理函数类型
export type HandleFunction = Record<string, unknown> & {
  uiTools?: ((match: UIMatch, matches: UIMatch[]) => JSX.Element) | JSX.Element | string;
  uiFilter?: ((match: UIMatch, matches: UIMatch[]) => JSX.Element) | JSX.Element;
};
