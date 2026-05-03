import { motion } from 'motion/react';
import { sectionReveal, sectionRevealConfig } from '../lib/motion';
import { cn } from '../lib/cn';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ label, title, subtitle, align = 'left', className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={sectionRevealConfig}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <span className="label mb-3 block">{label}</span>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {subtitle && (
        <p className={cn('body-lg max-w-2xl', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
