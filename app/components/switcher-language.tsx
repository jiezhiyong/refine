import { useTranslation } from 'react-i18next';
import { Button } from '~/components-shadcn/button';
import { useFetcher } from '@remix-run/react';

export function LanguageSwitcher() {
  return null;

  // const { i18n } = useTranslation();
  // const fetcher = useFetcher();

  // const changeLanguage = (lng: string) => {
  //   if (lng === i18n.language) return;
  //   fetcher.submit({ lng }, { method: 'post', action: '/api/set-language' });
  // };

  // return (
  //   <div className="flex gap-2">
  //     <Button
  //       variant="ghost"
  //       size="sm"
  //       className={`rounded px-3 py-1 ${
  //         i18n.language === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
  //       }`}
  //       onClick={() => changeLanguage('zh')}
  //     >
  //       中文
  //     </Button>
  //     <Button
  //       variant="ghost"
  //       size="sm"
  //       className={`rounded px-3 py-1 ${
  //         i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
  //       }`}
  //       onClick={() => changeLanguage('en')}
  //     >
  //       English
  //     </Button>
  //   </div>
  // );
}
