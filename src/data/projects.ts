import clinicometrixThumb from '../assets/clinicometrix.webp';
import lveThumb from '../assets/lve.webp';
import vestigio from '../assets/vestigio.webp';
import astrolume from '../assets/astrolume.png';
import tellurion from '../assets/tellurion.png';
import prooemium from '../assets/prooemium.png';
import imperium from '../assets/imperium.png';
import aether from '../assets/aether.png'




export type ProjectStatus = 'Active' | 'Planning' | 'Archived';
export type ProjectCTA = 'repo' | 'contact' | 'none';

export interface Project {
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  year?: string;
  tags: string[];
  link?: string | null;
  thumbnail?: string | null;
  cta?: ProjectCTA;
}

export const projects: Project[] = [
  {
  id: 12,
  title: 'Prooemium',
  description:
    'A personal blog and journal built like a small publication. Measured, structured, and intentionally quiet. It avoids noise and gives writing space, framing, and clarity to breathe.',
  status: 'Active',
  year: '2026',
  tags: ['React', 'Blog', 'Editorial Design', 'Minimal UI'],
  link: 'https://github.com/biowess/prooemium',
  thumbnail: prooemium,
  cta: 'repo',
},
{
  id: 18,
  title: 'Imperium',
  description:
    'Not merely a Sudoku app, but a fully realized puzzle instrument. A crafted software experience with a distinct character, cohesive aesthetic identity, and uncompromising attention to detail.',
  status: 'Active',
  year: '2026',
  tags: ['React', 'Game Design', 'Puzzle', 'UI/UX', 'Minimal Design'],
  link: 'https://github.com/biowess/imperium',
  thumbnail: imperium,
  cta: 'repo',
},
{
  id: 8,
  title: 'Tellurion',
  description:
    'A premium interactive geography experience built around a cinematic 3D Earth globe. Explore countries, search instantly, compare nations, and save favorites in a seamless, polished interface.',
  status: 'Active',
  year: '2026',
  tags: ['React', 'Three.js', 'React Three Fiber', 'Framer Motion', 'Data Visualization'],
  link: 'https://github.com/biowess/tellurion',
  thumbnail: tellurion,
  cta: 'repo',
},
{
  id: 8,
  title: 'Aether',
  description:
    'Not a weather app, but an interface for atmospheric perception. It rejects transactional design in favor of continuity, treating atmosphere as a system and interface as an environment.',
  status: 'Active',
  year: '2026',
  tags: ['React', 'UI/UX', 'Atmospheric Design', 'Interaction Design', 'Experimental'],
  link: 'https://github.com/biowess/aether',
  thumbnail: aether,
  cta: 'repo',
},
  {
    id: 1,
    title: 'Clinicometrix',
    description:
      'An educational clinical scoring toolkit featuring a professional command-line interface. Calculates 10 essential medical scores (including SOFA, GCS, and NEWS2) with built-in validation logic and clinical references.',
    status: 'Active',
    year: '2026',
    tags: ['Python', 'Rich', 'CLI'],
    link: 'https://github.com/biowess/clinicometrix',
    thumbnail: clinicometrixThumb,
    cta: 'repo',
  },
  {
    id: 2,
    title: 'Lab Values Explorer',
    description:
      'A modern interactive reference tool for interpreting laboratory values. Designed to help medical students and clinicians quickly understand clinical lab results with structured explanations.',
    status: 'Active',
    year: '2026',
    tags: ['React', 'Medical Education'],
    link: 'https://github.com/biowess/lab-values-explorer',
    thumbnail: lveThumb,
    cta: 'repo',
  },
  {
  id: 3,
  title: 'Vestigio',
  description:
    'A luxurious local-first Markdown writing environment with live preview, local file management, and polished PDF export. Designed for distraction-free writing with a refined, editor-like experience.',
  status: 'Active',
  year: '2026',
  tags: ['React', 'Markdown', 'Local-first', 'Productivity'],
  link: 'https://github.com/biowess/vestigio',
  thumbnail: vestigio,
  cta: 'repo',
},
{
  id: 7,
  title: 'Astrolume',
  description:
    'A cinematic solar system explorer built with React. It transforms planetary data into a premium, immersive experience, presenting the solar system as a dynamic, data-rich visual journey rather than a static model.',
  status: 'Active',
  year: '2026',
  tags: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Framer Motion'],
  link: 'https://github.com/biowess/astrolume',
  thumbnail: astrolume,
  cta: 'repo',
},
  // {
  //   id: 4,
  //   title: 'BioPipeline Toolkit',
  //   description:
  //     'A collection of reusable Nextflow scripts for common bioinformatics tasks in clinical hematology.',
  //   status: 'Planning',
  //   tags: ['Nextflow', 'Bioinformatics'],
  //   cta: 'contact',
  // },
  // {
  //   id: 5,
  //   title: 'MDS-Viz',
  //   description:
  //     'Interactive D3.js visualization tool for mapping clonal evolution in myelodysplastic syndromes.',
  //   status: 'Planning',
  //   tags: ['D3.js', 'Visualization'],
  //   cta: 'contact',
  // },
  // {
  //   id: 5,
  //   title: 'BMI Calculator',
  //   description: 'Simple Python BMI Calculator for medical students.',
  //   status: 'Archived',
  //   year: '2024',
  //   tags: ['Python'],
  //   cta: 'none',
  // },
];

export const projectFilters = ['All', 'Active', 'Planning', 'Archived'] as const;
export type ProjectFilter = (typeof projectFilters)[number];
