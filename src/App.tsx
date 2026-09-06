import { useState, useMemo, useRef, useEffect } from 'react';
import { VibeFilter, BudgetFilter, Destination } from './types';
import { destinations } from './data/destinations';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { FilterBar } from './components/FilterBar/FilterBar';
import { ConfirmationBanner } from './components/ConfirmationBanner/ConfirmationBanner';
import { DestinationGrid } from './components/DestinationGrid/DestinationGrid';
import { DetailsModal } from './components/DetailsModal/DetailsModal';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [selectedVibe, setSelectedVibe] = useState<VibeFilter>('all');
  const [selectedBudget, setSelectedBudget] = useState<BudgetFilter>('all');
  const [modalDestination, setModalDestination] = useState<Destination | null>(null);
  const [confirmedDestination, setConfirmedDestination] = useState<Destination | null>(null);

  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  // Sync theme with root HTML element attribute without flash
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // AND filtering logic: destination must match both selected vibe AND selected budget
  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      const vibeMatch = selectedVibe === 'all' || item.vibe === selectedVibe;
      const budgetMatch = selectedBudget === 'all' || item.budget === selectedBudget;
      return vibeMatch && budgetMatch;
    });
  }, [selectedVibe, selectedBudget]);

  const handleOpenModal = (dest: Destination, buttonEl: HTMLButtonElement) => {
    triggerButtonRef.current = buttonEl;
    setModalDestination(dest);
  };

  const handleCloseModal = () => {
    setModalDestination(null);
    if (triggerButtonRef.current) {
      triggerButtonRef.current.focus();
      triggerButtonRef.current = null;
    }
  };

  const handleConfirmTrip = (dest: Destination) => {
    setConfirmedDestination(dest);
  };

  const handleResetSelection = () => {
    setConfirmedDestination(null);
  };

  const handleResetAll = () => {
    setSelectedVibe('all');
    setSelectedBudget('all');
    setConfirmedDestination(null);
    setModalDestination(null);
  };

  const hasActiveFiltersOrSelection =
    selectedVibe !== 'all' || selectedBudget !== 'all' || confirmedDestination !== null;

  return (
    <div className="app-container">
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onReset={handleResetAll}
        hasActiveFiltersOrSelection={hasActiveFiltersOrSelection}
      />

      <main>
        <Hero
          selectedVibe={selectedVibe}
          selectedBudget={selectedBudget}
          onSelectVibe={setSelectedVibe}
          onSelectBudget={setSelectedBudget}
        />

        <FilterBar
          matchCount={filteredDestinations.length}
          selectedVibe={selectedVibe}
          selectedBudget={selectedBudget}
          onClearVibe={() => setSelectedVibe('all')}
          onClearBudget={() => setSelectedBudget('all')}
          onResetAll={handleResetAll}
        />

        {confirmedDestination && (
          <ConfirmationBanner
            destination={confirmedDestination}
            onResetSelection={handleResetSelection}
          />
        )}

        <DestinationGrid
          destinations={filteredDestinations}
          confirmedId={confirmedDestination ? confirmedDestination.id : null}
          onSelectDestination={handleOpenModal}
          onResetFilters={handleResetAll}
        />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem 1.5rem',
        borderTop: '1px solid var(--color-outline)',
        color: 'var(--color-on-surface-variant)',
        fontSize: '0.85rem'
      }}>
        <p>Vibe &amp; Go — Built for 1-Hour Weekend Discovery Warmup</p>
      </footer>

      {modalDestination && (
        <DetailsModal
          destination={modalDestination}
          isOpen={modalDestination !== null}
          onClose={handleCloseModal}
          onConfirmTrip={handleConfirmTrip}
          isConfirmed={confirmedDestination?.id === modalDestination.id}
        />
      )}
    </div>
  );
}

export default App;
