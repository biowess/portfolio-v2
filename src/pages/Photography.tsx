import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { staggerItem, spring } from '../lib/motion';
import { cn } from '../lib/cn';
import { X } from 'lucide-react';

const imageModules = import.meta.glob('../assets/photos/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

const photos = Object.entries(imageModules).map(([path, url], index) => {
  const fileName = path.split('/').pop()?.replace('.webp', '') ?? '';
  const match = fileName.match(/^([a-zA-Z]+)/);
  const categoryRaw = match?.[1] ?? 'Uncategorized';
  return { id: index + 1, url, title: fileName, category: categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1) };
});

const categories = ['All', ...new Set(photos.map((p) => p.category))];
type Photo = (typeof photos)[number];

export function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPhotos = activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <SEO title="Photography" description="Visual documentation and artistic exploration." />
      <section className="section-padding min-h-screen">
        <div className="max-w-[1200px] mx-auto w-full">
          <SectionHeader label="Visual" title="Photography" subtitle="Documenting the intersection of science, medicine, and human resilience." align="center" />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)}
                className={cn('px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border',
                  activeCategory === cat
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                    : 'bg-transparent border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                )}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={spring.snappy}>
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredPhotos.map((photo) => (
              <motion.div key={photo.id} variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-[var(--radius-md)] surface group"
                onClick={() => setSelectedPhoto(photo)}>
                <img src={photo.url} alt={photo.title}
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  referrerPolicy="no-referrer" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 
    </PageTransition>
  );
}