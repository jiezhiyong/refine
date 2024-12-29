import { Moon, Sun } from 'lucide-react';
import { Theme } from 'remix-themes';
import { useFetcher } from '@remix-run/react';

// 主题切换
export function ThemeSwitcher({
  theme,
  setTheme,
}: {
  theme: Theme | null;
  setTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
}) {
  const fetcher = useFetcher();

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    fetcher.submit({ theme: newTheme }, { method: 'POST', action: '/api/set-theme', encType: 'application/json' });
  };

  return (
    <div className="w-full cursor-pointer select-none px-0 py-2" onClick={toggleTheme}>
      <Sun size={16} className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon size={16} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span>&nbsp;</span>
    </div>
  );
}
