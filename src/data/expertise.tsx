export interface ExpertiseEntry {
  id: string
  idx: string
  title: string
  desc: string
  tier: 1 | 2 | 3 | 4
  accent?: boolean
  x: number
  y: number
}

export interface ExpertiseEdge {
  from: string
  to: string
}

/**
 * Product sits at the root. Systems / Strategy / Leadership are the core
 * capabilities that support it. Onboarding / Fintech are where that core
 * gets applied. Brand / Motion+AI are where it gets expressed. Edges are
 * the real working relationships between disciplines, not a decorative
 * flowchart.
 */
export const expertise: ExpertiseEntry[] = [
  {
    id: 'product',
    idx: '01',
    title: 'Product',
    desc: 'I start with the problem, not the pixels. A shipped interface is just where the thinking becomes visible.',
    tier: 1,
    x: 480,
    y: 60,
  },
  {
    id: 'systems',
    idx: '02',
    title: 'Systems',
    desc: 'I map the invisible stuff. Flows, dependencies, edge cases, handoffs.',
    tier: 2,
    x: 260,
    y: 190,
  },
  {
    id: 'strategy',
    idx: '03',
    title: 'Strategy',
    desc: "I connect decisions back to outcomes — for the user, and for whoever's paying for it.",
    tier: 2,
    x: 480,
    y: 190,
  },
  {
    id: 'leadership',
    idx: '04',
    title: 'Leadership',
    desc: 'I align people before I align pixels. Most design problems are alignment problems.',
    tier: 2,
    x: 700,
    y: 190,
  },
  {
    id: 'onboarding',
    idx: '05',
    title: 'Onboarding',
    desc: "I obsess over the first five minutes. That's where trust is won or lost.",
    tier: 3,
    x: 340,
    y: 340,
  },
  {
    id: 'fintech',
    idx: '06',
    title: 'Fintech',
    desc: 'I make money movement feel calm instead of terrifying.',
    tier: 3,
    x: 620,
    y: 340,
  },
  {
    id: 'brand',
    idx: '07',
    title: 'Brand',
    desc: 'I build identity systems that hold up outside a single screen.',
    tier: 4,
    x: 340,
    y: 460,
  },
  {
    id: 'motion-ai',
    idx: '08',
    title: 'Motion + AI',
    desc: 'I use motion and AI tools like a sketchbook — to think faster, not to perform.',
    tier: 4,
    accent: true,
    x: 620,
    y: 460,
  },
]

export const expertiseEdges: ExpertiseEdge[] = [
  { from: 'product', to: 'systems' },
  { from: 'product', to: 'strategy' },
  { from: 'product', to: 'leadership' },
  { from: 'systems', to: 'onboarding' },
  { from: 'systems', to: 'fintech' },
  { from: 'strategy', to: 'fintech' },
  { from: 'fintech', to: 'onboarding' },
  { from: 'systems', to: 'motion-ai' },
  { from: 'onboarding', to: 'motion-ai' },
  { from: 'leadership', to: 'brand' },
  { from: 'fintech', to: 'brand' },
]
