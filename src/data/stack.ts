export interface StackItem {
  name: string;
  level?: 'core' | 'proficient' | 'familiar';
}

export interface StackCategory {
  label: string;
  description: string;
  items: StackItem[];
}

export const stack: StackCategory[] = [
  {
    label: 'Languages',
    description: 'Primary programming languages',
    items: [
      { name: 'Python', level: 'core' },
      { name: 'TypeScript', level: 'core' },
      { name: 'C', level: 'proficient' },
      { name: 'Assembly', level: 'familiar' },
      { name: 'SQL', level: 'familiar' },
      { name: 'HTML / CSS', level: 'core' },
      { name: 'JavaScript', level: 'core' },
    ],
  },
  {
    label: 'Systems',
    description: 'Low-level & infrastructure',
    items: [
      { name: 'Linux / Unix', level: 'proficient' },
      { name: 'Memory Management', level: 'familiar' },
      { name: 'Networking', level: 'familiar' },
      { name: 'CLI Tooling', level: 'core' },
      { name: 'Shell Scripting', level: 'proficient' },
      { name: 'Performance Tuning', level: 'familiar' },
    ],
  },
  {
    label: 'Frameworks & Tools',
    description: 'Development ecosystem',
    items: [
      { name: 'React', level: 'core' },
      { name: 'Next.js', level: 'proficient' },
      { name: 'Nextflow', level: 'familiar' },
      { name: 'D3.js', level: 'familiar' },
      { name: 'Git', level: 'core' },
      { name: 'Docker', level: 'familiar' },
      { name: 'Framer Motion', level: 'proficient' },
    ],
  },
  {
    label: 'Domains',
    description: 'Fields of expertise',
    items: [
      { name: 'Bioinformatics', level: 'familiar' },
      { name: 'Medical Education', level: 'familiar' },
      { name: 'Clinical Scoring', level: 'familiar' },
      { name: 'Data Visualization', level: 'familiar' },
      { name: 'Genomics', level: 'familiar' },
      { name: 'Cybersecurity', level: 'familiar' },
    ],
  },
];
