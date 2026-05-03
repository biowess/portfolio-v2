import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Check } from 'lucide-react';
import { spring } from '../lib/motion';
import { useToast } from './Toast';

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      showToast('Link copied to clipboard', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Failed to copy link', 'info');
    }
  };

  return (
    <motion.button
      onClick={handleShare}
      className="p-2.5 rounded-full transition-colors duration-200 focus-ring"
      style={{
        background: copied ? 'var(--accent-soft)' : 'transparent',
      }}
      whileHover={{ scale: 1.08, background: 'var(--accent-soft)' }}
      whileTap={{ scale: 0.92 }}
      transition={spring.snappy}
      aria-label="Share this page"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={spring.bouncy}
          >
            <Check size={16} className="text-emerald-500" />
          </motion.div>
        ) : (
          <motion.div
            key="share"
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -90 }}
            transition={spring.bouncy}
          >
            <Share2 size={16} className="text-[var(--text-secondary)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
