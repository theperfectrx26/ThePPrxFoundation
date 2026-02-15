
import React from 'react';
import { Program, Testimonial, DonationTier } from './types';

export const IMAGE_ASSETS = {
  hero: "https://static.wixstatic.com/media/e6a8e2_7d0ee88810f54b60ad30d576c7af5547~mv2.jpeg/v1/crop/x_0,y_0,w_5549,h_3696/fill/w_1140,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e6a8e2_7d0ee88810f54b60ad30d576c7af5547~mv2.jpeg",
  heroFallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
  aboutStory: "https://static.wixstatic.com/media/e6a8e2_1ba5eead844c47dc9bb4abdbe7d96f4e~mv2.jpeg/v1/fill/w_1582,h_1048,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1D4A8664_JPEG.jpeg",
  founder: "https://static.wixstatic.com/media/e6a8e2_4444c97b76f5432d9caa014a85aad02b~mv2.jpeg/v1/crop/x_0,y_119,w_1884,h_1810/fill/w_1884,h_1810,al_c,q_90,enc_avif,quality_auto/IMG_D26B2480E24A-1.jpeg",
  communityRestoration: "https://static.wixstatic.com/media/e6a8e2_9f3f1eba7f034aa6b7f0ed12ac9531f7~mv2.jpeg/v1/fill/w_1462,h_968,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1D4A8501_JPEG.jpeg",
  mheGrid: [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=1000&auto=format&fit=crop"
  ],
  sosEducation: "https://images.unsplash.com/photo-1523240693567-510e8017ad58?q=80&w=1000&auto=format&fit=crop"
};

export const PROGRAMS: Program[] = [
  {
    id: 'mhe',
    title: 'The Mental Health Experience (MHE)',
    description: 'A global movement bridging dialogue, coping tools, and spiritual healing.',
    path: '/programs/mhe',
    icon: '🧠',
    color: 'bg-teal'
  },
  {
    id: 'sos',
    title: 'The School of the Spirit (S.O.S.)',
    description: 'A 6-week transformative journey into biblical wholeness and mental resilience.',
    path: '/programs/sos',
    icon: '🕊️',
    color: 'bg-lavender'
  },
  {
    id: '40d40n',
    title: '40 Days & 40 Nights Ministry',
    description: 'Spiritual outreach and the Refuge City safe place model for restoration.',
    path: '/programs/40d40n',
    icon: '⛰️',
    color: 'bg-forest'
  },
  {
    id: 'mwfr',
    title: 'Mental Health First Responders',
    description: 'Training community leaders for early response and stabilization support.',
    path: '/programs/mhfr',
    icon: '🏥',
    color: 'bg-amber'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    role: 'MHE Attendee',
    quote: "MHE transformed my understanding of faith and healing. I finally felt seen by both the church and the medical community.",
    location: 'Los Angeles, CA'
  },
  {
    id: '2',
    name: 'Minister Prynce',
    role: 'Partner Pastor',
    quote: "Integrating these tools has saved lives in our congregation. The Perfect Prescription is the bridge we desperately needed.",
    location: 'Lagos, Nigeria'
  },
  {
    id: '3',
    name: 'Dr. Emeka O.',
    role: 'Clinical Partner',
    quote: "As a psychiatrist, seeing a foundation address the soul with this much clinical integrity is groundbreaking for West Africa.",
    location: 'Enugu, Nigeria'
  },
  {
    id: '4',
    name: 'Aisha T.',
    role: 'SOS Graduate',
    quote: "The School of the Spirit didn't just give me information; it gave me an identity that wasn't based on my trauma.",
    location: 'London, UK'
  }
];

export const DONATION_TIERS: DonationTier[] = [
  { id: 't1', amount: 25, label: 'Supporter', impact: 'Provides mental wellness resources for one student.' },
  { id: 't2', amount: 100, label: 'Advocate', impact: 'Sponsors a participant for a regional workshop.' },
  { id: 't3', amount: 500, label: 'Guardian', impact: 'Funds the development of a Refuge City site module.' },
  { id: 't4', amount: 1000, label: 'Visionary', impact: 'Helps bring MHE to a new state or country.' }
];
