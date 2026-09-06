import React from 'react';
import { Destination } from '../../types';
import { DestinationCard } from '../DestinationCard/DestinationCard';
import styles from './DestinationGrid.module.css';

interface DestinationGridProps {
  destinations: Destination[];
  confirmedId: string | null;
  onSelectDestination: (destination: Destination, buttonEl: HTMLButtonElement) => void;
  onResetFilters: () => void;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({
  destinations,
  confirmedId,
  onSelectDestination,
  onResetFilters,
}) => {
  if (destinations.length === 0) {
    return (
      <section className={styles.gridSection} aria-label="Destination Results">
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon} aria-hidden="true">🌌</div>
          <h3 className={styles.emptyTitle}>No matching escapes found</h3>
          <p className={styles.emptyText}>
            We couldn’t find a weekend destination matching both your chosen vibe and budget level. Try expanding your search by selecting &ldquo;All Vibes&rdquo; or &ldquo;All Budgets&rdquo;.
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={onResetFilters}
          >
            Show All Destinations
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.gridSection} aria-label="Destination Results">
      <div className={styles.grid}>
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            isSelected={confirmedId === dest.id}
            onSelect={onSelectDestination}
          />
        ))}
      </div>
    </section>
  );
};
