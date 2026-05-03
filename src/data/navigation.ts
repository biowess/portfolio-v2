export interface NavItem {
  path: string;
  label: string;
}

export const navItems: NavItem[] = [
  { path: '/projects', label: 'Projects' },
  { path: '/research', label: 'Research' },
  { path: '/writing', label: 'Writing' },
  { path: '/photography', label: 'Photography' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];
