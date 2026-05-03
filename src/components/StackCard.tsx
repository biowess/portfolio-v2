import { motion } from 'motion/react';
import { cn } from '../lib/cn';
import { staggerItem, spring } from '../lib/motion';
import type { StackCategory } from '../data/stack';

interface StackCardProps {
  category: StackCategory;
  index: number;
}

export function StackCard({ category, index }: StackCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -3, scale: 1.006, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
      className="surface p-6 md:p-7"
    >
      {/* Header */}
      <div className="mb-5 pb-4 border-b border-[var(--border)]">
        <div className="flex items-baseline justify-between">
          <h3 className="font-mono text-[13px] font-semibold uppercase tracking-widest text-[var(--accent)]">
            {category.label}
          </h3>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            {category.items.length} items
          </span>
        </div>
        <p className="body-sm mt-1">{category.description}</p>
      </div>

      {/* Items */}
      <div className="space-y-2.5">
        {category.items.map((item, i) => (
          <motion.div
            key={item.name}
            className="flex items-center justify-between group"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + i * 0.03, duration: 0.3 }}
          >
            <span className="text-[14px] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {item.name}
            </span>
            {item.level && (
              <div className="flex gap-0.5 ml-3">
                {['core', 'proficient', 'familiar'].map((level, li) => (
                  <div
                    key={level}
                    className={cn(
                      'w-2 h-2 rounded-full transition-colors',
                      li === 0 && 'bg-[var(--accent)]',
                      li === 1 && (
                        item.level === 'core' || item.level === 'proficient'
                          ? 'bg-[var(--accent)]'
                          : 'bg-[var(--border-strong)]'
                      ),
                      li === 2 && (
                        item.level === 'core'
                          ? 'bg-[var(--accent)]'
                          : 'bg-[var(--border-strong)]'
                      ),
                    )}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
