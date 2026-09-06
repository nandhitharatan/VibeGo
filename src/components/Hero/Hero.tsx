import React from 'react';
import { VibeFilter, BudgetFilter } from '../../types';
import styles from './Hero.module.css';

interface HeroProps {
  selectedVibe: VibeFilter;
  selectedBudget: BudgetFilter;
  onSelectVibe: (vibe: VibeFilter) => void;
  onSelectBudget: (budget: BudgetFilter) => void;
}

const VIBE_OPTIONS: { id: VibeFilter; label: string; icon: string }[] = [
  { id: 'all', label: 'All Vibes', icon: '✨' },
  { id: 'chill', label: 'Chill', icon: '🧘' },
  { id: 'adventure', label: 'Adventure', icon: '🏔️' },
  { id: 'culture', label: 'Culture', icon: '🏛️' },
  { id: 'beach', label: 'Beach', icon: '🏖️' },
];

const BUDGET_OPTIONS: { id: BudgetFilter; label: string; symbol: string }[] = [
  { id: 'all', label: 'All Budgets', symbol: '🌐' },
  { id: 'budget', label: 'Budget', symbol: '$' },
  { id: 'mid', label: 'Mid-tier', symbol: '$$' },
  { id: 'splurge', label: 'Splurge', symbol: '$$$' },
];

export const Hero: React.FC<HeroProps> = ({
  selectedVibe,
  selectedBudget,
  onSelectVibe,
  onSelectBudget,
}) => {
  return (
    <section className={styles.heroSection} aria-label="Trip Discovery Filters">
      <div className={styles.heroBg} aria-hidden="true">
        <img
          src="/ui/hero-mountain.png"
          alt=""
          width={1600}
          height={900}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.badge}>
          <span>⚡ 1-Hour Weekend Escapes</span>
        </div>

        <h1 className={styles.headline}>
          Find your <span className={styles.gradientText}>weekend vibe</span>
        </h1>

        <p className={styles.tagline}>
          Pick how you want to feel, set your budget, and instantly uncover hand-crafted 48-hour boutique getaways.
        </p>

        <div className={styles.filterCard}>
          {/* Vibe Selection */}
          <div className={styles.filterGroup}>
            <span className={styles.groupLabel}>
              <span>🎭</span> Select Your Vibe
            </span>
            <div className={styles.chipGrid} role="group" aria-label="Select trip vibe">
              {VIBE_OPTIONS.map((opt) => {
                const isSelected = selectedVibe === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    className={styles.vibeChip}
                    aria-pressed={isSelected}
                    onClick={() => onSelectVibe(opt.id)}
                  >
                    <span aria-hidden="true">{opt.icon}</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          {/* Budget Selection */}
          <div className={styles.filterGroup}>
            <span className={styles.groupLabel}>
              <span>💳</span> Select Your Budget
            </span>
            <div className={styles.budgetToggleGrid} role="group" aria-label="Select budget level">
              {BUDGET_OPTIONS.map((opt) => {
                const isSelected = selectedBudget === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    className={styles.budgetBtn}
                    aria-pressed={isSelected}
                    onClick={() => onSelectBudget(opt.id)}
                  >
                    <span aria-hidden="true">{opt.symbol}</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
