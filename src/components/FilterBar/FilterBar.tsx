import React from 'react';
import { VibeFilter, BudgetFilter } from '../../types';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  matchCount: number;
  selectedVibe: VibeFilter;
  selectedBudget: BudgetFilter;
  onClearVibe: () => void;
  onClearBudget: () => void;
  onResetAll: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  matchCount,
  selectedVibe,
  selectedBudget,
  onClearVibe,
  onClearBudget,
  onResetAll,
}) => {
  const hasVibeFilter = selectedVibe !== 'all';
  const hasBudgetFilter = selectedBudget !== 'all';
  const hasActiveFilters = hasVibeFilter || hasBudgetFilter;

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className={styles.barContainer}>
      <div className={styles.barContent}>
        <div className={styles.countGroup}>
          <h2 className={styles.countText}>
            {hasActiveFilters ? 'Filtered Matches' : 'Curated Escapes'}
          </h2>
          <span className={styles.countBadge}>
            {matchCount} {matchCount === 1 ? 'trip' : 'trips'}
          </span>
        </div>

        {hasActiveFilters && (
          <div className={styles.activeFilters}>
            {hasVibeFilter && (
              <span className={styles.filterPill}>
                Vibe: <strong>{capitalize(selectedVibe)}</strong>
                <button
                  type="button"
                  className={styles.clearFilterBtn}
                  onClick={onClearVibe}
                  aria-label={`Clear vibe filter: ${selectedVibe}`}
                >
                  ✕
                </button>
              </span>
            )}

            {hasBudgetFilter && (
              <span className={styles.filterPill}>
                Budget: <strong>{capitalize(selectedBudget)}</strong>
                <button
                  type="button"
                  className={styles.clearFilterBtn}
                  onClick={onClearBudget}
                  aria-label={`Clear budget filter: ${selectedBudget}`}
                >
                  ✕
                </button>
              </span>
            )}

            <button
              type="button"
              className={styles.resetAllBtn}
              onClick={onResetAll}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
