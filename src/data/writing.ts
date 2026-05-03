export interface WritingEntry {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  externalUrl: string;
  tags?: string[];
}

export const writingEntries: WritingEntry[] = [
  {
    id: 1,
    title: 'The Future of Personalized Medicine in Oncology',
    excerpt:
      'As genomic sequencing becomes more accessible, we are entering an era where treatments are tailored not just to the disease, but to the individual\'s unique genetic makeup.',
    date: '01/05/2025',
    readTime: '5 min read',
    externalUrl: 'https://biowess.github.io/prooemium',
    tags: ['Medicine', 'Genomics'],
  },
  {
    id: 2,
    title: 'Understanding the Bone Marrow Microenvironment',
    excerpt:
      'The bone marrow is not merely a factory for blood cells; it is a complex ecosystem that dictates cellular fate and plays a crucial role in disease progression.',
    date: '01/05/2026',
    readTime: '5 min read',
    externalUrl: 'https://biowess.github.io/prooemium',
    tags: ['Hematology', 'Research'],
  },
  {
    id: 3,
    title: 'Ethics in Modern Clinical Trials',
    excerpt:
      'Balancing the urgent need for new therapies with the absolute necessity of patient safety and informed consent in experimental treatments.',
    date: '03/05/2026',
    readTime: '5 min read',
    externalUrl: 'https://biowess.github.io/prooemium',
    tags: ['Ethics', 'Clinical Science'],
  },
];
