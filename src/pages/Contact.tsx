import { useState, type ChangeEvent, type FormEvent } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { MotionButton } from '../components/MotionButton';
import { useToast } from '../components/Toast';
import { contactLinks, formAccessKey } from '../data/contact';
import { sectionReveal, sectionRevealConfig, spring } from '../lib/motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

export function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: formAccessKey, ...formData }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        showToast('Message sent successfully!', 'success');
        setTimeout(() => setStatus('idle'), 5000);
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  const inputClass = 'w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all duration-200 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]';

  return (
    <PageTransition>
      <SEO title="Contact" description="Get in touch for collaborations and inquiries." />
      <section className="section-padding min-h-screen flex items-center">
        <div className="section-container">
          <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
            {/* Left: Info */}
            <motion.div variants={sectionReveal} initial="hidden" animate="visible" transition={sectionRevealConfig}>
              <SectionHeader label="Connect" title="Contact" subtitle="I'm always open to discussing research collaborations, technical projects, or academic opportunities." />

              <div className="flex flex-col gap-4 mb-8">
                {contactLinks.map(link => (
                  <a key={link.id} href={link.href} target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-secondary)] text-[var(--text-secondary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
                      <link.icon size={18} />
                    </div>
                    <span className="text-[15px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{link.value}</span>
                  </a>
                ))}
              </div>

              <p className="body-sm italic">Note: I aim to respond to all professional inquiries within 48 hours.</p>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={sectionReveal} initial="hidden" animate="visible" transition={{ ...sectionRevealConfig, delay: 0.2 }}
              className="surface p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring.bouncy} className="mb-4 text-emerald-500">
                      <CheckCircle2 size={56} />
                    </motion.div>
                    <h3 className="heading-md mb-2">Message Sent!</h3>
                    <p className="body-md">Thank you for reaching out. I'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="space-y-5" onSubmit={handleSubmit}>
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Name</label>
                      <input type="text" id="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Email</label>
                      <input type="email" id="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Subject</label>
                      <input type="text" id="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Research Inquiry / Collaboration" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[13px] font-medium text-[var(--text-secondary)] mb-2">Message</label>
                      <textarea id="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="How can I help you?" />
                    </div>
                    {status === 'error' && <p className="text-sm text-red-500">Something went wrong. Please try again.</p>}
                    <MotionButton type="submit" variant="primary" className="w-full" disabled={status === 'submitting'}>
                      {status === 'submitting' ? <Loader2 className="animate-spin" size={18} /> : 'Send Message'}
                    </MotionButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}