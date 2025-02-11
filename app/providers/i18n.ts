// i18n - 国际化
// https://flaglog.com/country-codes

import { type I18nProvider } from '@refinedev/core';
import i18next, { changeLanguage, use as i18nextUse, t } from 'i18next';
import Cookies from 'js-cookie';
import { initReactI18next } from 'react-i18next';

import { defaultNS, fallbackLanguage, LocaleLanguage, resourcesLanguages, supportedLanguages } from '~/config';
import { canUseDOM, webapi } from '~/utils';

// 获取 cookie
const getCookieLocale = () => {
  try {
    const preferences = Cookies.get('preferences');
    if (!preferences) return null;

    return JSON.parse(preferences)?.locale as LocaleLanguage;
  } catch (error) {
    console.error('@getCookieLocale', error);
    return null;
  }
};

// 客户端初始化
const initialLocale = canUseDOM() ? getCookieLocale() || fallbackLanguage : fallbackLanguage;
if (!i18next.isInitialized) {
  i18nextUse(initReactI18next).init({
    resources: resourcesLanguages,
    supportedLngs: supportedLanguages,
    lng: initialLocale,
    ns: [defaultNS],
    react: { useSuspense: false },
  });
} else if (i18next.language !== initialLocale) {
  changeLanguage(initialLocale);
}

// 同步服务端和客户端的语言设置
export async function syncServiceLocaleToClient(locale?: LocaleLanguage) {
  if (i18next.isInitialized && locale !== i18next?.language) {
    try {
      await changeLanguage(locale);
    } catch (error) {
      console.error('@syncServiceLocaleToClient', error);
    }
  }
}

export const i18nProvider: I18nProvider = {
  translate: (key: string, defaultMessage?: string) => {
    return t(key, defaultMessage || key);
  },

  changeLocale: async (locale: string) => {
    await changeLanguage(locale);

    const res = await webapi.post(`/set-preferences`, {
      locale,
    });

    const { data } = await res.json();

    return Promise.resolve(data);
  },

  getLocale: () => {
    return i18next.language;
  },
};
