import { motion } from 'motion/react';
import { pageTransition, pageTransitionConfig } from '../lib/motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransitionConfig}
    >
      {children}
    </motion.div>
  );
}
