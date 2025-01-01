/* eslint-disable import/no-named-as-default-member */
import { type I18nProvider } from '@refinedev/core';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources, supportedLngs, fallbackLng, defaultNS } from '~/config/i18n';
import { TAny } from '~/types/any';

// 初始化 i18next 实例
i18next.use(initReactI18next).init({
  resources,
  supportedLngs,
  fallbackLng,
  ns: [defaultNS],
  react: { useSuspense: false },
});

export const i18nProvider: I18nProvider = {
  translate: (key: string, defaultMessage?: string) => {
    return i18next.t(key, defaultMessage || '');
  },

  changeLocale: async (lang: string, options?: TAny) => {
    await i18next.changeLanguage(lang);

    // 更新 cookie
    const response = await fetch(`/api/set-locales?lng=${lang}&ns=${defaultNS}`, {
      method: 'GET',
      credentials: 'include',
      ...options?.fetchOptions,
    });

    if (!response.ok) {
      throw new Error('Failed to update locale');
    }

    // 重新加载页面以应用 SSR 更改
    window.location.reload();

    return Promise.resolve();
  },

  getLocale: () => {
    return i18next.language;
  },
};
