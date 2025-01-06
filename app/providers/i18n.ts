import { type I18nProvider } from '@refinedev/core';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resourcesLanguages, supportedLanguages, defaultNS, fallbackLanguage, LocaleLanguage } from '~/config/i18n';
import Cookies from 'js-cookie';
import { canUseDOM } from '~/utils/can-use-dom';

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
  i18next.use(initReactI18next).init({
    resources: resourcesLanguages,
    supportedLngs: supportedLanguages,
    lng: initialLocale,
    ns: [defaultNS],
    react: { useSuspense: false },
  });
} else if (i18next.language !== initialLocale) {
  i18next.changeLanguage(initialLocale);
}

// 同步服务端和客户端的语言设置
export async function syncServiceLocaleToClient(locale?: LocaleLanguage) {
  console.log('i18next.isInitialized', i18next.isInitialized);
  if (locale !== i18next?.language) {
    try {
      await i18next.changeLanguage(locale);
    } catch (error) {
      console.error('@syncServiceLocaleToClient', error);
    }
  }
}

export const i18nProvider: I18nProvider = {
  translate: (key: string, defaultMessage?: string) => {
    return i18next.t(key, defaultMessage || '');
  },

  changeLocale: async (locale: string) => {
    await i18next.changeLanguage(locale);

    const res = await fetch(`/api/set-locale?locale=${locale}`, {
      method: 'GET',
    });
    const { data } = await res.json();

    return Promise.resolve(data);
  },

  getLocale: () => {
    return i18next.language;
  },
};
