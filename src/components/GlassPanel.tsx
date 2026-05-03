import { cn } from '../lib/cn';
import type { ReactNode, HTMLAttributes } from 'react';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'strong';
  glow?: boolean;
}

export function GlassPanel({ children, variant = 'default', glow = false, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)] transition-all duration-300',
        variant === 'strong' ? 'glass-strong' : 'glass',
        glow && 'hover:shadow-glow-accent',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
