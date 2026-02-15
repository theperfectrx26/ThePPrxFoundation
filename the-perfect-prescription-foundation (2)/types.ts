
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

// Fixed: Augment the global JSX namespace instead of using declare module 'react'.
// This avoids the "module 'react' cannot be found" error during module augmentation
// while ensuring the custom Stripe element is correctly typed for React.
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
