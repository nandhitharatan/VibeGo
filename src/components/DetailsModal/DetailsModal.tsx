import React, { useEffect, useRef } from 'react';
import { Destination } from '../../types';
import styles from './DetailsModal.module.css';

interface DetailsModalProps {
  destination: Destination;
  isOpen: boolean;
  onClose: () => void;
  onConfirmTrip: (destination: Destination) => void;
  isConfirmed: boolean;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({
  destination,
  isOpen,
  onClose,
  onConfirmTrip,
  isConfirmed,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus the close button on modal open
    const closeBtn = modalRef.current?.querySelector<HTMLElement>('#close-modal-btn');
    closeBtn?.focus();

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePickTrip = () => {
    onConfirmTrip(destination);
    onClose();
  };

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className={styles.modal}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={styles.imageSection}>
          <img
            src={destination.imageSrc}
            alt={destination.imageAlt}
            width={destination.imageWidth}
            height={destination.imageHeight}
            className={styles.image}
          />
          <div className={styles.imageOverlay} aria-hidden="true" />

          <div className={styles.vibeMatchBadge}>
            <span aria-hidden="true">✨</span>
            <span>Vibe Match 98%</span>
          </div>

          <button
            id="close-modal-btn"
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.headerRow}>
            <div className={styles.titleGroup}>
              <h2 id="modal-title" className={styles.title}>
                {destination.name}
              </h2>
              <span className={styles.location}>📍 {destination.location}</span>
            </div>

            <div className={styles.priceBox}>
              <span className={styles.price}>${destination.pricePerNight}</span>
              <span className={styles.perNight}>per night</span>
            </div>
          </div>

          <div className={styles.tagsRow}>
            <span className={styles.pill}>🎭 Vibe: {destination.vibe}</span>
            <span className={styles.pill}>💳 Budget: {destination.budget}</span>
            <span className={styles.pill}>⏱️ {destination.travelTime}</span>
            <span className={styles.pill}>
              ★ {destination.rating} ({destination.reviewCount} reviews)
            </span>
          </div>

          <div className={styles.section}>
            <span className={styles.sectionTitle}>The Atmosphere</span>
            <p className={styles.description}>{destination.description}</p>
          </div>

          <div className={styles.section}>
            <span className={styles.sectionTitle}>Highlights</span>
            <div className={styles.highlightsGrid}>
              {destination.bestFor.map((item, idx) => (
                <div key={idx} className={styles.highlightCard}>
                  <span aria-hidden="true">🌿</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.pickTripBtn}
              onClick={handlePickTrip}
            >
              <span>{isConfirmed ? '✓ Trip Selected' : '⚡ Pick this trip'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
