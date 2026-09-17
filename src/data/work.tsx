import type { ReactNode } from 'react'

export interface WorkEntry {
  id: string
  num: string
  sizeClass: string
  title: string
  tags: string
  year: string
  visual: ReactNode
}

export const work: WorkEntry[] = [
  {
    id: 'merchant-onboarding',
    num: '01',
    sizeClass: 'p-01',
    title: 'Merchant Onboarding',
    tags: 'Product / UX / Systems',
    year: '2025–2026',
    visual: (
      <svg viewBox="0 0 120 80" aria-hidden="true">
        <line x1="8" y1="66" x2="112" y2="14" stroke="#111111" strokeWidth="0.5" />
        <circle cx="8" cy="66" r="4" fill="none" stroke="#111111" strokeWidth="0.6" />
        <circle cx="55" cy="42" r="6" fill="none" stroke="#6B6F2D" strokeWidth="0.6" />
        <circle cx="112" cy="14" r="8" fill="#9B0047" />
      </svg>
    ),
  },
  {
    id: 'gcc',
    num: '02',
    sizeClass: 'p-02',
    title: 'GCC',
    tags: 'Strategy / Systems',
    year: '2025',
    visual: (
      <svg viewBox="0 0 120 80" aria-hidden="true">
        <circle cx="20" cy="55" r="7" fill="none" stroke="#111111" strokeWidth="0.6" />
        <circle cx="60" cy="20" r="7" fill="none" stroke="#111111" strokeWidth="0.6" />
        <circle cx="100" cy="55" r="7" fill="none" stroke="#6B6F2D" strokeWidth="0.6" />
        <line x1="27" y1="50" x2="53" y2="25" stroke="#111111" strokeWidth="0.5" />
        <line x1="67" y1="25" x2="93" y2="50" stroke="#111111" strokeWidth="0.5" />
        <line x1="27" y1="58" x2="93" y2="58" stroke="#6B6F2D" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    id: 'websiteops',
    num: '03',
    sizeClass: 'p-03',
    title: 'WebsiteOps',
    tags: 'Web / Systems',
    year: '2025',
    visual: (
      <svg viewBox="0 0 90 110" aria-hidden="true">
        <rect x="4" y="4" width="82" height="102" fill="none" stroke="#111111" strokeWidth="0.6" />
        <line x1="4" y1="34" x2="70" y2="34" stroke="#6B6F2D" strokeWidth="0.5" />
        <line x1="4" y1="50" x2="55" y2="50" stroke="#111111" strokeWidth="0.4" />
        <line x1="4" y1="66" x2="60" y2="66" stroke="#111111" strokeWidth="0.4" />
        <line x1="66" y1="14" x2="80" y2="14" stroke="#111111" strokeWidth="0.4" />
        <line x1="80" y1="14" x2="80" y2="24" stroke="#111111" strokeWidth="0.4" />
      </svg>
    ),
  },
  {
    id: 'product-videos',
    num: '04',
    sizeClass: 'p-04',
    title: 'Product Videos',
    tags: 'Motion / Brand',
    year: '2024–2025',
    visual: (
      <svg viewBox="0 0 200 60" aria-hidden="true">
        <rect x="8" y="14" width="34" height="32" fill="none" stroke="#111111" strokeWidth="0.5" />
        <rect x="54" y="14" width="34" height="32" fill="none" stroke="#111111" strokeWidth="0.5" />
        <rect x="100" y="14" width="34" height="32" fill="none" stroke="#6B6F2D" strokeWidth="0.5" />
        <rect x="146" y="14" width="34" height="32" fill="none" stroke="#111111" strokeWidth="0.5" />
        <line x1="4" y1="30" x2="196" y2="30" stroke="#111111" strokeWidth="0.3" strokeDasharray="1 3" />
      </svg>
    ),
  },
  {
    id: 'gff',
    num: '05',
    sizeClass: 'p-05',
    title: 'GFF',
    tags: 'Brand / Web',
    year: '2024',
    visual: (
      <svg viewBox="0 0 90 90" aria-hidden="true">
        <line x1="30" y1="10" x2="30" y2="80" stroke="#111111" strokeWidth="0.7" />
        <line x1="30" y1="10" x2="60" y2="80" stroke="#111111" strokeWidth="0.7" />
        <line x1="60" y1="10" x2="60" y2="80" stroke="#6B6F2D" strokeWidth="0.7" />
      </svg>
    ),
  },
  {
    id: 'kross-bridge',
    num: '06',
    sizeClass: 'p-06a',
    title: 'Kross Bridge',
    tags: 'Product / Systems',
    year: '2024',
    visual: (
      <svg viewBox="0 0 160 90" aria-hidden="true">
        <circle cx="18" cy="60" r="6" fill="none" stroke="#111111" strokeWidth="0.6" />
        <circle cx="142" cy="60" r="6" fill="none" stroke="#111111" strokeWidth="0.6" />
        <path d="M18 60 Q80 20 142 60" fill="none" stroke="#6B6F2D" strokeWidth="0.7" />
        <line x1="80" y1="38" x2="80" y2="60" stroke="#111111" strokeWidth="0.4" />
      </svg>
    ),
  },
]
