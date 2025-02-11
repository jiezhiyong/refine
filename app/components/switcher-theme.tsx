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
    <div className="w-full cursor-pointer px-0 py-2 select-none" onClick={toggleTheme}>
      <Sun size={16} className="absolute scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon size={16} className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span>&nbsp;</span>
    </div>
  );
}
