import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/cn';
import { cardHover, spring, staggerItem } from '../lib/motion';
import type { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isPlanning = project.status === 'Planning';

  return (
    <motion.article
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -3, scale: 1.006, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
      className={cn(
        'group overflow-hidden flex flex-col h-full',
        'rounded-[var(--radius-lg)] transition-all duration-300',
        isPlanning
          ? 'border-2 border-dashed border-[var(--border-strong)]'
          : 'surface'
      )}
    >
      {/* Thumbnail */}
      {project.thumbnail ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="aspect-[16/9] flex items-center justify-center bg-[var(--bg-secondary)]">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {project.status}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-3 mb-3">
          <div>
            <h3 className="heading-sm group-hover:text-[var(--accent)] transition-colors duration-200">
              {project.title}
            </h3>
            {project.year && (
              <span className="body-sm mt-0.5 block">{project.year}</span>
            )}
          </div>
          <span className={cn(
            'text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap tracking-wide uppercase',
            project.status === 'Active' && 'bg-[var(--accent-soft)] text-[var(--accent)]',
            project.status === 'Planning' && 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
            project.status === 'Archived' && 'bg-[var(--bg-secondary)] text-[var(--text-muted)]',
          )}>
            {project.status}
          </span>
        </div>

        <p className="body-md mb-5 flex-grow line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.cta === 'repo' && project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[var(--accent)] hover:underline mt-auto inline-flex items-center gap-1 w-fit"
          >
            View Repository <ArrowUpRight size={14} />
          </a>
        ) : project.cta === 'contact' ? (
          <Link
            to="/contact"
            className="text-[13px] font-medium text-[var(--accent)] hover:underline mt-auto inline-flex items-center gap-1 w-fit"
          >
            Inquire about collaboration <ArrowUpRight size={14} />
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
