import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { publications, workInProgress } from '../data/research';
import { staggerContainer, staggerItem, sectionReveal, sectionRevealConfig } from '../lib/motion';
import { FileText, Lock } from 'lucide-react';

export function Research() {
  return (
    <PageTransition>
      <SEO title="Research Archive" description="Academic work, preprints, and ongoing investigations." />
      <section className="section-padding min-h-screen">
        <div className="max-w-[850px] mx-auto w-full">
          <SectionHeader label="Academic" title="Research Archive" subtitle="A collection of my academic work, preprints, and ongoing investigations in computational medicine and pediatrics." />

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="space-y-6 mb-20">
            <h2 className="heading-sm pb-4 border-b border-[var(--border)]">Selected Research</h2>
            {publications.map((pub) => (
              <motion.div key={pub.id} variants={staggerItem} className="surface p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="label">{pub.status}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)]">{pub.lang}</span>
                  <span className="body-sm">{pub.year} · {pub.category}</span>
                </div>
                <h3 className="heading-sm mb-4">{pub.title}</h3>
                <p className="body-md mb-6 leading-relaxed">{pub.abstract}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  {pub.locked ? (
                    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)] px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--bg-secondary)]"><Lock size={15} /> Coming Soon</span>
                  ) : (
                    <>
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] px-4 py-2 rounded-[var(--radius-sm)] transition-colors"><FileText size={15} /> View PDF</a>
                      {pub.doi && <span className="text-[11px] font-mono text-[var(--text-muted)]">DOI: {pub.doi}</span>}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={sectionRevealConfig}>
            <h2 className="heading-sm pb-4 border-b border-[var(--border)] mb-6">Work in Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {workInProgress.map((wip) => (
                <div key={wip.id} className="border-2 border-dashed border-[var(--border-strong)] rounded-[var(--radius-lg)] p-5">
                  <span className="inline-block px-2 py-0.5 text-[11px] font-mono rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] mb-3">{wip.status}</span>
                  <h3 className="heading-sm text-[16px] mb-2">{wip.title}</h3>
                  <p className="body-sm">{wip.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="text-center mt-16"><p className="body-sm italic">More research coming soon.</p></div>
        </div>
      </section>
    </PageTransition>
  );
}