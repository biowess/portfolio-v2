import { cn } from '../lib/cn';
import type { ReactNode, HTMLAttributes } from 'react';

interface PaperPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PaperPanel({ children, className, ...props }: PaperPanelProps) {
  return (
    <div
      className={cn(
        'paper rounded-[var(--radius-lg)] transition-all duration-300',
        'hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
