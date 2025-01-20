import enTranslation from '~/locales/en';
import zhTranslation from '~/locales/zh';

// This is the list of languages your application supports, the last one is your fallback language
export const supportedLanguages = ['en', 'zh'];

// This is the language you want to use in case the user language is not in the supportedLanguages
export const fallbackLanguage = 'en';

// The default namespace of i18next is "translation", but you can customize it
export const defaultNS = 'translation';

export const resourcesLanguages = {
  en: { [defaultNS]: enTranslation },
  zh: { [defaultNS]: zhTranslation },
};

export type LocaleLanguage = 'en' | 'zh';
