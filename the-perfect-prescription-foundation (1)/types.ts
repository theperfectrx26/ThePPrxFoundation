
import React from 'react';

export interface Program {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  location: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  label: string;
  impact: string;
}

// Fixed: Use declare global to augment the JSX namespace for custom elements.
// This avoids "module not found" errors during augmentation and ensures the
// custom 'stripe-buy-button' is correctly registered globally.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}
