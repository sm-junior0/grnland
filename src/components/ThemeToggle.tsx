import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
      className="w-9 h-9 p-0 transition-colors duration-200 hover:bg-white/10 dark:hover:bg-black/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-white dark:text-black" />
      ) : (
        <Moon size={20} className="text-black dark:text-white" />
      )}
    </Button>
  );
};

export default ThemeToggle; 