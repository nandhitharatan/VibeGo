import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onReset: () => void;
  hasActiveFiltersOrSelection: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onReset,
  hasActiveFiltersOrSelection,
}) => {
  const isLight = theme === 'light';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/ui/logo.png"
            alt="Vibe &amp; Go Brand Logo"
            width={180}
            height={48}
            className={styles.logoImage}
          />
          <div className={styles.titleGroup}>
            <span className={styles.title}>Vibe &amp; Go</span>
            <span className={styles.subtitle}>Weekend Discovery</span>
          </div>
        </div>

        <div className={styles.actionsGroup}>
          <button
            type="button"
            className={styles.themeToggleBtn}
            onClick={onToggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <span aria-hidden="true">{isLight ? '🌙' : '☀️'}</span>
            <span>{isLight ? 'Dark' : 'Light'}</span>
          </button>

          {hasActiveFiltersOrSelection && (
            <button
              type="button"
              className={styles.resetBtn}
              onClick={onReset}
              aria-label="Start over - clear all filters and selected trip"
            >
              <span>↺</span>
              <span>Start over</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
