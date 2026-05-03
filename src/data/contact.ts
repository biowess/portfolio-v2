import { Mail, Github, Linkedin, Fingerprint } from 'lucide-react';
import type { FC } from 'react';

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: FC<{ size?: number; className?: string }>;
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'biowess@proton.me',
    href: 'mailto:biowess@proton.me',
    icon: Mail,
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/biowess',
    href: 'https://github.com/biowess',
    icon: Github,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/biowess',
    href: 'https://linkedin.com/in/biowess',
    icon: Linkedin,
    external: true,
  },
  {
    id: 'orcid',
    label: 'ORCID',
    value: '0009-0001-5116-5177',
    href: 'https://orcid.org/0009-0001-5116-5177',
    icon: Fingerprint,
    external: true,
  },
];

export const formAccessKey = '80408c4e-47d9-4d27-9a99-65982e23deee';
