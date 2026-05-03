export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'CSS Crash Course For Beginners',
    issuer: 'Udemy / Proper Dot Institute',
    date: 'Sept 1, 2024',
    description: 'Focusing on modern styling and layout design.',
    link: 'https://ude.my/UC-4dbf5b9e-cc5f-496b-8883-ecd48452f2c1',
  },
  {
    id: 2,
    title: 'Introduction to ChatGPT',
    issuer: 'DataCamp',
    date: 'Mar 27, 2025',
    description: 'Focusing on prompt engineering, AI limitations, and ethical best practices.',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d31fa47fdc304f7d1bc49d84c969cd3462fa82a3',
  },
  {
    id: 3,
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    date: 'Nov 30, 2024',
    description: 'Covering data structures, functions, and control flow for data analysis.',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0667df0808b030f01e7644001b1d6b178b378859',
  },
];
