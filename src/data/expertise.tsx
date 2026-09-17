import type { ReactNode } from 'react'

export interface ExpertiseEntry {
  idx: string
  title: string
  desc: string
  accent?: boolean
  visual: ReactNode
}

export const expertise: ExpertiseEntry[] = [
  {
    idx: '01',
    title: 'Product',
    desc: 'End-to-end product thinking, from problem framing to shipped interface.',
    visual: (
      <>
        <rect x="4" y="4" width="92" height="36" fill="none" />
        <line x1="4" y1="18" x2="70" y2="18" />
        <line x1="4" y1="28" x2="50" y2="28" />
        <line x1="80" y1="4" x2="88" y2="4" />
        <line x1="88" y1="4" x2="88" y2="12" />
      </>
    ),
  },
  {
    idx: '02',
    title: 'Systems',
    desc: 'Design systems built for consistency across teams and surfaces.',
    visual: (
      <>
        <circle cx="15" cy="22" r="6" fill="none" />
        <circle cx="50" cy="10" r="6" fill="none" />
        <circle cx="85" cy="22" r="6" fill="none" />
        <line x1="21" y1="20" x2="45" y2="12" />
        <line x1="55" y1="12" x2="79" y2="20" />
        <line x1="21" y1="24" x2="79" y2="24" />
      </>
    ),
  },
  {
    idx: '03',
    title: 'Fintech',
    desc: 'Complex financial flows made legible and trustworthy.',
    visual: (
      <>
        <path d="M4 36 L26 36 L26 24 L48 24 L48 30 L70 30 L70 12 L96 12" fill="none" />
        <circle cx="26" cy="24" r="2" fill="none" />
        <circle cx="48" cy="30" r="2" fill="none" />
        <circle cx="70" cy="12" r="2" fill="none" />
      </>
    ),
  },
  {
    idx: '04',
    title: 'Onboarding',
    desc: 'First-run experiences that reduce friction without dumbing down.',
    visual: (
      <>
        <line x1="8" y1="30" x2="92" y2="14" />
        <circle cx="8" cy="30" r="3" fill="none" />
        <circle cx="45" cy="22" r="4.5" fill="none" />
        <circle cx="92" cy="14" r="6" fill="none" />
      </>
    ),
  },
  {
    idx: '05',
    title: 'Strategy',
    desc: 'Connecting design decisions back to business and user outcomes.',
    visual: (
      <>
        <circle cx="38" cy="22" r="16" fill="none" />
        <circle cx="62" cy="22" r="16" fill="none" />
        <line x1="50" y1="14" x2="50" y2="30" />
        <line x1="42" y1="22" x2="58" y2="22" />
      </>
    ),
  },
  {
    idx: '06',
    title: 'Leadership',
    desc: 'Guiding teams and stakeholders toward a shared design direction.',
    visual: (
      <>
        <circle cx="50" cy="22" r="4" fill="none" />
        <line x1="50" y1="22" x2="10" y2="6" />
        <line x1="50" y1="22" x2="90" y2="6" />
        <line x1="50" y1="22" x2="10" y2="38" />
        <line x1="50" y1="22" x2="90" y2="38" />
      </>
    ),
  },
  {
    idx: '07',
    title: 'Brand',
    desc: 'Visual identity work that extends beyond a single interface.',
    visual: (
      <>
        <line x1="30" y1="6" x2="30" y2="38" />
        <line x1="30" y1="6" x2="60" y2="38" />
        <line x1="60" y1="6" x2="60" y2="38" />
      </>
    ),
  },
  {
    idx: '08',
    title: 'Motion + AI',
    desc: 'Exploring motion and AI tooling as part of the design process.',
    accent: true,
    visual: (
      <>
        <rect x="4" y="10" width="24" height="24" fill="none" />
        <rect x="38" y="10" width="24" height="24" fill="none" />
        <rect x="72" y="10" width="24" height="24" fill="none" />
        <circle cx="84" cy="22" r="3" className="fill-dot" />
      </>
    ),
  },
]
