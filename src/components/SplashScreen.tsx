import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ─── Spinner constants ───
// r=18 → circumference ≈ 113.1
// Arc breathes between ~8 (tiny sliver) and ~85 (¾ of circle).
// While the whole SVG rotates — same mechanic as Material Design / Apple HIG,
// but slowed and thinned for a luxury feel.
const R = 18;
const C = 2 * Math.PI * R; // 113.097...

export function SplashScreen() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('splash-shown');
  });

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem('splash-shown', '1');
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--bg-primary)' }}
          exit={{
            opacity: 0,
            filter: 'blur(18px)',
            scale: 1.04,
            transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
          }}
        >
          {/* ── Scoped CSS for spinner keyframes ── */}
          <style>{`
            @keyframes splash-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes splash-dash {
  0%   { stroke-dashoffset: ${C * 0.92}; }
  50%  { stroke-dashoffset: ${C * 0.22}; }
  100% { stroke-dashoffset: ${C * 0.92}; }
}

.splash-spinner {
  transform-box: view-box;
  transform-origin: 50% 50%;
  animation: splash-spin 1.9s linear infinite;
}

.splash-arc {
  animation: splash-dash 1.9s ease-in-out infinite;
  filter: drop-shadow(0 0 5px rgba(239,68,68,0.45));
}
          `}</style>

          {/* ── Ambient red glow (dark mode) / warm bloom (light) ── */}
          <motion.div
            className="absolute w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* ── Logo area ── */}
          <div className="relative flex flex-col items-center gap-6">

            {/* Tiny accent bar — draws in before the letters */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 28, height: 2,
                borderRadius: 2,
                background: 'var(--accent)',
                transformOrigin: 'left center',
              }}
            />

            {/* Name with letter stagger */}
            <div className="flex items-baseline">
              {'Biowess.'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="text-[clamp(2.4rem,5.5vw,3.8rem)] font-bold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                  initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0,  filter: 'blur(0px)'  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.2, 0.8, 0.2, 1],
                    delay: 0.18 + i * 0.055,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Thin underline that draws in once the name is visible */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%', height: 1,
                background: 'linear-gradient(90deg, transparent, var(--border-strong), transparent)',
                transformOrigin: 'left center',
              }}
            />

            {/* ── Luxury spinner ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg
                width="36" height="36"
                  style={{ display: 'block' }}
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Track — full dim circle */}
                <g className="splash-spinner">
  <circle
    cx="22"
    cy="22"
    r={R}
    stroke="rgba(239,68,68,0.10)"
    strokeWidth="1.5"
  />

  <circle
    cx="22"
    cy="22"
    r={R}
    stroke="var(--accent)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeDasharray={`${C} ${C}`}
    className="splash-arc"
  />
</g>
              </svg>
            </motion.div>
          </div>

          {/* ── Copyright footer ── */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              bottom: 32,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              userSelect: 'none',
            }}
          >
            biowess © 2026
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}