import { z } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';
import translation from 'zod-i18n-map/locales/zh-CN/zod.json';

import enTranslation from '~/locales/en';
import zhTranslation from '~/locales/zh';
// This is the list of languages your application supports, the last one is your fallback language
export const supportedLanguages = ['zh', 'en'];

// This is the language you want to use in case the user language is not in the supportedLanguages
export const fallbackLanguage = supportedLanguages[0];

// The default namespace of i18next is "translation", but you can customize it
export const defaultNS = 'translation';

export const resourcesLanguages = {
  zh: { [defaultNS]: zhTranslation, zod: translation },
  en: { [defaultNS]: enTranslation },
};

export type LocaleLanguage = 'zh' | 'en';

// zod: 使用中文语言包
z.setErrorMap(zodI18nMap);
