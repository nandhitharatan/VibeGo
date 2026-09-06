import React from 'react';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className={styles.themeToggleBtn}
      onClick={onToggleTheme}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <span aria-hidden="true">{isLight ? '🌙' : '☀️'}</span>
      <span>{isLight ? 'Dark' : 'Light'}</span>
    </button>
  );
};
