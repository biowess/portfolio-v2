import { motion } from 'motion/react';
import { cn } from '../lib/cn';
import { buttonPress, spring } from '../lib/motion';
import { useTheme } from '../lib/theme';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface MotionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  external?: boolean;
}

export function MotionButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external,
  className,
  ...props
}: MotionButtonProps) {
  const { isDark } = useTheme();

  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium focus-ring',
    'rounded-full relative overflow-hidden',
    // Sizes
    size === 'sm' && 'px-4 py-2 text-[13px] gap-1.5',
    size === 'md' && 'px-6 py-3 text-[15px] gap-2',
    size === 'lg' && 'px-8 py-3.5 text-[16px] gap-2.5',
    // Variants — base colour tokens only (surface feel set via inline style below)
    variant === 'primary' && [
      'bg-[var(--accent)] text-white',
      'hover:bg-[var(--accent-hover)]',
      isDark ? 'shadow-[0_0_24px_rgba(239,68,68,0.25)] hover:shadow-[0_0_36px_rgba(239,68,68,0.4)]'
             : 'shadow-sm hover:shadow-md',
      'transition-all duration-200',
    ],
    variant === 'outline' && [
      'text-[var(--text-primary)] transition-all duration-200',
      isDark ? 'btn-glass' : 'btn-paper',
    ],
    variant === 'ghost' && [
      'bg-transparent text-[var(--text-secondary)] transition-all duration-200',
      'hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]',
    ],
    className
  );

  const sharedMotionProps = {
    className: baseClasses,
    whileHover: buttonPress.hover,
    whileTap: buttonPress.tap,
    transition: spring.snappy,
  } as const;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...sharedMotionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...sharedMotionProps}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
