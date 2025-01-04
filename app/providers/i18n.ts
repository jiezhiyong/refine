import { type I18nProvider } from '@refinedev/core';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resourcesLanguages, supportedLanguages, fallbackLanguage, defaultNS } from '~/config/i18n';

const searchParams = new URLSearchParams(location.search);
const locale = searchParams.get('locale') || fallbackLanguage;
console.log('locale 111', locale);

i18next.use(initReactI18next).init({
  resources: resourcesLanguages,
  supportedLngs: supportedLanguages,
  fallbackLng: fallbackLanguage,
  ns: [defaultNS],
  react: { useSuspense: false },
});

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
    console.log('client', i18next.language);
    return i18next.language;
  },
};
