import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  onReset: () => void;
  hasActiveFiltersOrSelection: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onReset, hasActiveFiltersOrSelection }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoIcon} aria-hidden="true">⚡</div>
          <div className={styles.titleGroup}>
            <span className={styles.title}>Vibe &amp; Go</span>
            <span className={styles.subtitle}>Weekend Discovery</span>
          </div>
        </div>

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
    </header>
  );
};
