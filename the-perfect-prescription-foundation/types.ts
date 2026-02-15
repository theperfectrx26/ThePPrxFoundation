
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

// Fixed: Augment the 'react' module's JSX namespace instead of using declare global.
// This prevents shadowing the entire JSX.IntrinsicElements interface, which was causing 
// standard HTML tags (like div, header, span) to be unrecognized by the TypeScript compiler.
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
