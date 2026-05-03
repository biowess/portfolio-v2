import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { staggerItem, spring } from '../lib/motion';
import type { WritingEntry } from '../data/writing';

interface WritingCardProps {
  entry: WritingEntry;
}

export function WritingCard({ entry }: WritingCardProps) {
  return (
    <motion.a
      href={entry.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -2, scale: 1.005, transition: spring.smooth }}
      className="group block surface p-6 md:p-7 cursor-pointer"
    >
      {/* Meta */}
      <div className="flex items-center gap-2 mb-3">
        <span className="body-sm">{entry.date}</span>
        <span className="text-[var(--text-muted)]">·</span>
        <span className="body-sm">{entry.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="heading-sm mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
        {entry.title}
      </h3>

      {/* Excerpt */}
      <p className="body-md mb-4 line-clamp-2">{entry.excerpt}</p>

      {/* Tags */}
      {entry.tags && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {entry.tags.map(tag => (
            <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)]">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <span className="text-[13px] font-medium text-[var(--accent)] inline-flex items-center gap-1">
        Read on blog
        <ArrowUpRight
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
        />
      </span>
    </motion.a>
  );
}
