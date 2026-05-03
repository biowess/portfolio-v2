import type { Transition, Variants } from 'motion/react';

// ─── Spring Configs (Critical / Overdamped – no bounce) ───
// All ratios ≥ 1 for a clean, settled finish.
// mass · damping² = 4 · stiffness  →  critically damped (fastest no‑overshoot)
export const spring = {
  gentle:  { type: 'spring', stiffness: 80,  damping: 20, mass: 1   } as Transition,
  snappy:  { type: 'spring', stiffness: 150, damping: 25, mass: 0.8 } as Transition,
  precise: { type: 'spring', stiffness: 170, damping: 40, mass: 0.8 } as Transition,
  slow:    { type: 'spring', stiffness: 60,  damping: 28, mass: 1.5 } as Transition,
  smooth:  { type: 'spring', stiffness: 90,  damping: 32, mass: 1   } as Transition,
  critical:{ type: 'spring', stiffness: 100, damping: 20, mass: 1   } as Transition,
};

// ─── Easing Curves ───
// Cubic‑bezier helpers → soft, harmonic movement
export const ease = {
  out:        [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut:      [0.65, 0, 0.35, 1] as [number, number, number, number],
  softOut:    [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  cinematic:  [0.2, 0.8, 0.2, 1] as [number, number, number, number],
  decelerate: [0.0, 0.0, 0.2, 1] as [number, number, number, number], // classic ease‑out
};

// ─── Page Transition ───
// No scale distortion – pure crossfade with a gentle lift
export const pageTransition: Variants = {
  initial: { opacity: 0, filter: 'blur(8px)', y: 12 },
  animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
  exit:    { opacity: 0, filter: 'blur(8px)', y: -10 },
};

export const pageTransitionConfig: Transition = {
  duration: 0.75,
  ease: ease.cinematic,
};

// ─── Section Reveal ───
export const sectionReveal: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const sectionRevealConfig: Transition = {
  duration: 0.65,
  ease: ease.out,
};

// ─── Stagger Container ───
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
};

// ─── Stagger Item ───
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: ease.out },
  },
};

// ─── Card Hover ───
// Minimal lift, shadow depth → remains grounded
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.004,
    transition: { duration: 0.28, ease: ease.out },
  },
};

// ─── Interactive Feedback (buttons, cards) ───
export const interactive = {
  tap: {
    scale: 0.96,
    transition: { duration: 0.1, ease: ease.out },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: ease.out },
  },
};

// ─── Button Press (legacy, keep for compatibility) ───
export const buttonPress = interactive;

// ─── Fade In ───
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: ease.out } },
};

// ─── Scale In ───
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: ease.out } },
};

// ─── Blur In ───
export const blurIn: Variants = {
  hidden:  { opacity: 0, filter: 'blur(6px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: ease.out } },
};

// ─── Slide In From Left ───
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: ease.out } },
};

// ─── Slide In From Right ───
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: ease.out } },
};

// ─── Letter Stagger (hero headlines) ───
export const letterStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.028, delayChildren: 0.2 },
  },
};

export const letterChild: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.38, ease: ease.out },
  },
};

// ─── Fade Slide Up (alternative section reveal) ───
export const fadeSlideUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.out } },
};