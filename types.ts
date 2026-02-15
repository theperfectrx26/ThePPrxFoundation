
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

// Fix: Augment the 'react' module instead of the global 'JSX' namespace.
// This prevents shadowing standard React IntrinsicElements (like div, span, svg, etc.)
// and ensures our custom 'stripe-buy-button' is added to the existing set of valid tags.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}
