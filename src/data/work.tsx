export type ProjectType = 'flow' | 'architecture' | 'data' | 'motion' | 'brand' | 'identity'

export interface WorkEntry {
  id: string
  num: string
  sizeClass: string
  projectType: ProjectType
  title: string
  tags: string
  year: string
}

export const work: WorkEntry[] = [
  {
    id: 'merchant-onboarding',
    num: '01',
    sizeClass: 'p-01',
    projectType: 'flow',
    title: 'Merchant Onboarding',
    tags: 'Product / UX / Systems',
    year: '2025–2026',
  },
  {
    id: 'gcc',
    num: '02',
    sizeClass: 'p-02',
    projectType: 'architecture',
    title: 'GCC',
    tags: 'Strategy / Systems',
    year: '2025',
  },
  {
    id: 'websiteops',
    num: '03',
    sizeClass: 'p-03',
    projectType: 'data',
    title: 'WebsiteOps',
    tags: 'Web / Systems',
    year: '2025',
  },
  {
    id: 'product-videos',
    num: '04',
    sizeClass: 'p-04',
    projectType: 'motion',
    title: 'Product Videos',
    tags: 'Motion / Brand',
    year: '2024–2025',
  },
  {
    id: 'gff',
    num: '05',
    sizeClass: 'p-05',
    projectType: 'brand',
    title: 'GFF',
    tags: 'Brand / Web',
    year: '2024',
  },
  {
    id: 'kross-bridge',
    num: '06',
    sizeClass: 'p-06a',
    projectType: 'identity',
    title: 'Kross Bridge',
    tags: 'Product / Systems',
    year: '2024',
  },
]
