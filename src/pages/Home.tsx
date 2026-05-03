import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { MotionButton } from '../components/MotionButton';
import { StackCard } from '../components/StackCard';
import { WritingCard } from '../components/WritingCard';
import { letterStagger, letterChild, staggerContainer, staggerItem, sectionReveal, sectionRevealConfig } from '../lib/motion';
import { publications } from '../data/research';
import { stack } from '../data/stack';
import { writingEntries } from '../data/writing';
import { ArrowDown, ArrowUpRight, FileText, Lock } from 'lucide-react';
import sunset2 from '../assets/photos/sunset3.webp';

export function Home() {
  return (
    <PageTransition>
      <SEO title="Home" description="Mohammed W. Hammami — Medical Student, Engineer, Researcher. Portfolio showcasing projects, research, and technical work." />

      {/* ═══ Hero Section ═══ */}
      <section className="min-h-[100vh] flex items-center justify-center section-padding relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          {/* Name with letter stagger */}
          <motion.h1
            variants={letterStagger}
            initial="hidden"
            animate="visible"
            className="heading-xl mb-5"
          >
            {'Mohammed W. Hammami'.split('').map((char, i) => (
              <motion.span key={i} variants={letterChild} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--accent)] text-[clamp(1.125rem,2.5vw,1.5rem)] font-medium mb-6"
          >
            Medical Student · Engineer · Researcher
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="body-lg max-w-2xl mx-auto mb-10"
          >
            Exploring the intersection of medicine and computer science to build intelligent healthcare systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/research">
              <MotionButton variant="primary">
                Explore Research
              </MotionButton>
            </Link>
            <Link to="/about">
              <MotionButton variant="outline">
                About the Author <ArrowUpRight size={15} className="ml-1" />
              </MotionButton>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 md:mt-20 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={20} className="text-[var(--text-muted)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Featured Research ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader
            label="Research"
            title="Recent Research Papers"
            subtitle="Academic work and preprints in computational medicine and pediatrics."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {publications.map((pub) => (
              <motion.div
                key={pub.id}
                variants={staggerItem}
                className="surface p-6 md:p-7"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="label">{pub.status}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)]">
                    {pub.lang}
                  </span>
                  <span className="body-sm">{pub.year} · {pub.category}</span>
                </div>
                <h3 className="heading-sm mb-3">{pub.title}</h3>
                <p className="body-md mb-5 line-clamp-3">{pub.abstract}</p>
                {pub.locked ? (
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--text-muted)]">
                    <Lock size={14} /> Coming Soon
                  </span>
                ) : (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--accent)] hover:underline"
                  >
                    <FileText size={14} /> View Paper
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={sectionRevealConfig}
            className="text-center mt-10"
          >
            <Link to="/research">
              <MotionButton variant="outline" size="sm">
                View All Research <ArrowUpRight size={14} />
              </MotionButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ Stack Preview ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader
            label="Technical Identity"
            title="Stack & Systems"
            subtitle="Languages, tools, and domains that define my engineering practice."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            {stack.slice(0, 2).map((cat, i) => (
              <StackCard key={cat.label} category={cat} index={i} />
            ))}
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={sectionRevealConfig}
            className="text-center mt-10"
          >
            <Link to="/about">
              <MotionButton variant="outline" size="sm">
                View Full Stack <ArrowUpRight size={14} />
              </MotionButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ Photography Teaser ═══ */}
      <section className="section-padding">
        <div className="section-container text-center">
          <SectionHeader
            label="Visual"
            title="Through the Lens"
            subtitle="A visual exploration of diverse landscapes and artistic perspectives."
            align="center"
          />

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={sectionRevealConfig}
            className="relative aspect-video max-w-4xl mx-auto rounded-[var(--radius-lg)] overflow-hidden mb-10 group"
          >
            <img
              src={sunset2}
              alt="Sunset photography"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          <Link to="/photography">
            <MotionButton variant="outline" size="sm">
              View Gallery <ArrowUpRight size={14} />
            </MotionButton>
          </Link>
        </div>
      </section>

      {/* ═══ Writing Teaser ═══ */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader
            label="Writing"
            title="Thoughts & Essays"
            subtitle="Commentary on the evolving landscape of medical science and clinical practice."
            align="center"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
          >
            {writingEntries.map((entry) => (
              <WritingCard key={entry.id} entry={entry} />
            ))}
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={sectionRevealConfig}
            className="text-center mt-10"
          >
            <Link to="/writing">
              <MotionButton variant="outline" size="sm">
                Visit Blog <ArrowUpRight size={14} />
              </MotionButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
