import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { WritingCard } from '../components/WritingCard';
import { MotionButton } from '../components/MotionButton';
import { writingEntries } from '../data/writing';
import { staggerContainer } from '../lib/motion';
import { motion } from 'motion/react';
import { ArrowUpRight, Pen } from 'lucide-react';

export function Writing() {
  return (
    <PageTransition>
      <SEO title="Writing" description="Essays and articles on medicine, science, and research." />
      <section className="section-padding min-h-screen">
        <div className="max-w-[900px] mx-auto w-full">
          <SectionHeader label="Essays" title="Writing" subtitle="Thoughts, essays, and commentary on the evolving landscape of medical science and clinical practice." />

          {/* Gateway message */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="surface p-8 md:p-10 text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent-soft)] mb-5">
              <Pen size={24} className="text-[var(--accent)]" />
            </div>
            <h2 className="heading-md mb-3">Writing Archive</h2>
<p className="body-lg max-w-lg mx-auto mb-6">
  Essays, field notes, experiments, and long-form reflections are all published on the external blog.  
  This space serves as an index into the ideas, systems, and stories shaping the work.
</p>
            <MotionButton variant="primary" href="https://biowess.github.io/prooemium" external>
              Visit Blog <ArrowUpRight size={15} />
            </MotionButton>
          </motion.div>

          {/* Writing cards */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {writingEntries.map((entry) => (
              <WritingCard key={entry.id} entry={entry} />
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}