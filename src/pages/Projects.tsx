import { useMemo, useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects, projectFilters, type ProjectFilter } from '../data/projects';
import { spring, staggerContainer } from '../lib/motion';
import { cn } from '../lib/cn';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.status === activeFilter);
  }, [activeFilter]);

  return (
    <PageTransition>
      <SEO title="Projects" description="Technical projects and open-source contributions at the intersection of medicine and computer science." />

      <section className="section-padding min-h-screen">
        <div className="section-container">
          <SectionHeader
            label="Work"
            title="Projects"
            subtitle="Technical projects and open-source contributions at the intersection of medicine and computer science."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    'px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border',
                    isActive
                      ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                      : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                  )}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={spring.snappy}
                >
                  {filter}
                </motion.button>
              );
            })}
          </div>

          {/* Project Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-6"
            >
              {visibleProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}