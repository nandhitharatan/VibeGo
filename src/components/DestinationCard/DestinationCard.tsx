import React from 'react';
import { Destination } from '../../types';
import styles from './DestinationCard.module.css';

interface DestinationCardProps {
  destination: Destination;
  isSelected: boolean;
  onSelect: (destination: Destination, buttonEl: HTMLButtonElement) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  isSelected,
  onSelect,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(destination, e.currentTarget);
  };

  return (
    <button
      type="button"
      className={styles.cardButton}
      data-selected={isSelected}
      onClick={handleClick}
      aria-label={`View trip details for ${destination.name}, ${destination.location}. Rating ${destination.rating} stars. Price $${destination.pricePerNight} per night.`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={destination.imageSrc}
          alt={destination.imageAlt}
          width={destination.imageWidth}
          height={destination.imageHeight}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.imageGradient} aria-hidden="true" />

        <div className={styles.topBadges}>
          <span className={styles.travelBadge}>
            <span aria-hidden="true">⏱️</span> {destination.travelTime}
          </span>
          {isSelected && (
            <span className={styles.selectedBadge}>
              <span aria-hidden="true">✓</span> Confirmed
            </span>
          )}
        </div>

        <div className={styles.ratingBadge}>
          <span className={styles.starIcon} aria-hidden="true">★</span>
          <span>{destination.rating}</span>
          <span style={{ opacity: 0.7 }}>({destination.reviewCount})</span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{destination.name}</h3>
          <div className={styles.priceGroup}>
            <span className={styles.price}>${destination.pricePerNight}</span>
            <span className={styles.perNight}>/ night</span>
          </div>
        </div>

        <span className={styles.location}>📍 {destination.location}</span>

        <p className={styles.tagline}>{destination.tagline}</p>

        <div className={styles.tagRow}>
          <span className={styles.vibeTag}>🎭 {destination.vibe}</span>
          <span className={styles.budgetTag}>💳 {destination.budget}</span>
        </div>

        <div className={styles.actionHint} aria-hidden="true">
          <span>View details</span>
          <span>→</span>
        </div>
      </div>
    </button>
  );
};
