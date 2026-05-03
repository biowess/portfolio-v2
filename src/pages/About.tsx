import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { StackCard } from '../components/StackCard';
import { staggerContainer, staggerItem, sectionReveal, sectionRevealConfig, slideInLeft, slideInRight } from '../lib/motion';
import { stack } from '../data/stack';
import { certificates } from '../data/certificates';
import { contactLinks } from '../data/contact';
import { ExternalLink, Award } from 'lucide-react';

export function About() {
  return (
    <PageTransition>
      <SEO title="About" description="About Mohammed W. Hammami — Medical student, engineer, and researcher." />

      <section className="section-padding min-h-screen">
        <div className="section-container">

          {/* ═══ Profile Header ═══ */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-20">
            {/* Photo + Quick Info */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="lg:w-[320px] shrink-0 w-full"
            >
              <div className="aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden mb-6 surface">
                <img
                  src="photo.png"
                  alt="Mohammed W. Hammami portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="heading-md mb-2">Mohammed W. Hammami</h1>
              <p className="text-[var(--accent)] font-medium text-[15px] mb-6">Medical Student</p>

              <div className="space-y-3">
                {[
                  { label: 'Location', value: 'Sousse, TN' },
                  { label: 'Institution', value: 'Faculty of Medicine of Sousse' },
                  { label: 'Focus', value: 'Bioinformatics' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between text-[13px] pb-2.5 border-b border-[var(--border)]">
                    <span className="text-[var(--text-muted)]">{item.label}</span>
                    <span className="font-medium text-[var(--text-primary)]">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {contactLinks.map(link => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium
                               border border-[var(--border)] text-[var(--text-secondary)]
                               hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)]
                               transition-all duration-200"
                  >
                    <link.icon size={13} />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Bio + Philosophy */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="flex-grow"
            >
              <h2 className="heading-lg mb-8">
                Building at the intersection of medicine and computer science to transform healthcare
              </h2>

              <div className="space-y-5 body-md leading-relaxed max-w-none">
                <p>
                  I am a medical student with a strong interest in computer science, focused on building computational tools that improve the way medicine is learned and understood.
                </p>
                <p>
                  My journey began at the intersection of clinical medicine and programming, where I started exploring how software can simplify complex medical concepts. I have developed tools such as a clinical scoring calculator in Python for common pulmonary and cardiac scores, helping streamline medical decision-making and learning.
                </p>
                <p>
                  Currently, I am building structured medical knowledge systems, including a laboratory value database designed as an interactive learning tool for students and clinicians. My broader goal is to expand into web-based and computational health applications, combining React-based interfaces with Python-driven logic, and eventually exploring areas such as bioinformatics and genomics.
                </p>
                <p>
                  I am also involved in early-stage research, having contributed to a preprint, and I aim to continue developing projects at the intersection of medicine, data, and computation. My long-term vision is to contribute to the development of intelligent, accessible tools that support both medical education and biomedical research.
                </p>
              </div>

              {/* Philosophy */}
              <motion.div
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={sectionRevealConfig}
                className="mt-12 pt-10 border-t border-[var(--border)]"
              >
                <h3 className="heading-sm mb-4 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[var(--accent)] inline-block" />
                  Philosophy
                </h3>
                <p className="body-lg italic max-w-2xl">
                  "I believe the best tools are born from deep understanding of the problem domain. In medicine, that means building software with the same rigor and precision we apply to patient care — every detail matters, every edge case counts."
                </p>
              </motion.div>

              {/* Education */}
              <motion.div
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={sectionRevealConfig}
                className="mt-12 pt-10 border-t border-[var(--border)]"
              >
                <h3 className="heading-sm mb-6">Education</h3>
                <div className="surface p-5">
                  <p className="font-medium text-[var(--text-primary)] text-[15px]">Doctor of Medicine (MD), Medical Student</p>
                  <p className="body-sm mt-1">Faculty of Medicine of Sousse · 2022 – Present</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ═══ Stack Section ═══ */}
          <div className="mb-20">
            <SectionHeader
              label="Technical Identity"
              title="Stack & Systems"
              subtitle="A structured view of the languages, tools, systems, and domains that shape my engineering practice."
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {stack.map((cat, i) => (
                <StackCard key={cat.label} category={cat} index={i} />
              ))}
            </motion.div>
          </div>

          {/* ═══ Certificates Section ═══ */}
          <div>
            <SectionHeader
              label="Credentials"
              title="Certificates"
              subtitle="Professional certifications and academic credentials."
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={staggerItem}
                  className="surface p-5 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={16} className="text-emerald-500" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-500">
                      Completed
                    </span>
                  </div>
                  <h3 className="heading-sm text-[16px] mb-2">{cert.title}</h3>
                  <p className="text-[13px] font-medium text-[var(--accent)] mb-1">{cert.issuer}</p>
                  <p className="body-sm mb-3">Completed {cert.date}</p>
                  <p className="body-md text-[14px] mb-4 flex-grow">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--accent)] hover:underline mt-auto w-fit"
                  >
                    <ExternalLink size={13} /> Verify
                  </a>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={sectionRevealConfig}
              className="text-center mt-12"
            >
              <div className="inline-block surface px-6 py-4 text-[var(--text-muted)] text-[13px] italic">
                More certificates are being added as they are verified.
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
