import { Moon, Sun } from 'lucide-react';
import { Theme } from 'remix-themes';

// 主题切换
export function ThemeSwitcher({
  theme,
  setTheme,
}: {
  theme: Theme | null;
  setTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
}) {
  const toggleTheme = () => {
    const themeNext = theme && theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(themeNext);
    document.documentElement.classList.remove(theme || Theme.LIGHT);
    document.documentElement.classList.add(themeNext);
  };

  return (
    <div className="w-full cursor-pointer select-none px-0 py-2" onClick={toggleTheme}>
      <Sun size={16} className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon size={16} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span>&nbsp;</span>
    </div>
  );
}
