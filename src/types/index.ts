export type Vibe = 'chill' | 'adventure' | 'culture' | 'beach';
export type Budget = 'budget' | 'mid' | 'splurge';

export type VibeFilter = Vibe | 'all';
export type BudgetFilter = Budget | 'all';

export interface Destination {
  id: string;
  name: string;
  location: string;
  vibe: Vibe;
  budget: Budget;
  tagline: string;
  description: string;
  bestFor: string[];
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  rating: number;
  reviewCount: number;
  travelTime: string;
  pricePerNight: number;
}
