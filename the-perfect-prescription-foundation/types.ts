
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

// Use declare global to properly augment the JSX.IntrinsicElements interface.
// This allows the use of custom web components like 'stripe-buy-button' in TSX
// while merging with existing HTML element definitions.
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
