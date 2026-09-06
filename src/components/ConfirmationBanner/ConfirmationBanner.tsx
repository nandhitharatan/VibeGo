import React from 'react';
import { Destination } from '../../types';
import styles from './ConfirmationBanner.module.css';

interface ConfirmationBannerProps {
  destination: Destination;
  onResetSelection: () => void;
}

export const ConfirmationBanner: React.FC<ConfirmationBannerProps> = ({
  destination,
  onResetSelection,
}) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerCard} role="status" aria-live="polite">
        <div className={styles.glowBlob} aria-hidden="true" />
        
        <div className={styles.leftGroup}>
          <div className={styles.checkIcon} aria-hidden="true">✓</div>
          <div className={styles.infoGroup}>
            <span className={styles.tag}>Trip Confirmed</span>
            <h3 className={styles.heading}>Trip locked in! You’re headed to {destination.name}.</h3>
            <p className={styles.description}>
              Location: {destination.location} • {destination.travelTime} • ${destination.pricePerNight}/night
            </p>
          </div>
        </div>

        <button
          type="button"
          className={styles.startOverBtn}
          onClick={onResetSelection}
          aria-label="Change destination or start over"
        >
          <span>↺</span>
          <span>Start over</span>
        </button>
      </div>
    </div>
  );
};
