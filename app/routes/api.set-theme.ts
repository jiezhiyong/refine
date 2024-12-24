import { createThemeAction } from 'remix-themes';
import { themeSessionResolver } from '~/services/session.server';

// 设置主题
export const action = createThemeAction(themeSessionResolver);
