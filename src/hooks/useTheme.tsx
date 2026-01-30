import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark'
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode); //doble parametro, si darkMode es true agrega la clase, si es false la quita
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return { darkMode, toggleTheme };
};
