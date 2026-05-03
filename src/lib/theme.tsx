import {
  createContext, useContext, useEffect, useState,
  useCallback, useRef, type ReactNode
} from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// ─── Cinematic wipe overlay ───
// When the theme toggles, this full-screen layer (painted the OLD theme colour)
// clip-path wipes across the screen, revealing the new theme underneath.
// Dark→Light : wipe from left to right (light entering)
// Light→Dark : wipe from right to left (darkness rolling in)
interface OverlayState { key: number; fromDark: boolean }

function ThemeWipeOverlay({ overlay }: { overlay: OverlayState | null }) {
  return (
    <AnimatePresence>
      {overlay && (
        <motion.div
          key={overlay.key}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            // Painted the OLD theme colour so new theme is revealed underneath
            background: overlay.fromDark ? '#050507' : '#f5f0eb',
          }}
          initial={{
            clipPath: overlay.fromDark
              ? 'inset(0 0% 0 0)'      // full screen
              : 'inset(0 0 0 0%)',     // full screen
          }}
          animate={{
            clipPath: overlay.fromDark
              ? 'inset(0 100% 0 0)'    // wipe rightward → reveals light from left
              : 'inset(0 0 0 100%)',   // wipe leftward  → reveals dark from right
          }}
          transition={{
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1],  // sharp cinematic ease
          }}
        />
      )}
    </AnimatePresence>
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [overlay, setOverlay] = useState<OverlayState | null>(null);
  const isDark = theme === 'dark';
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.classList.toggle('light', !isDark);
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  const toggleTheme = useCallback(() => {
    const fromDark = theme === 'dark';

    // Clear any pending timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // 1. Paint the overlay in the CURRENT theme colour
    setOverlay({ key: Date.now(), fromDark });

    // 2. Switch the theme (happens immediately, covered by overlay)
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    // 3. Remove overlay after wipe animation completes
    timerRef.current = setTimeout(() => setOverlay(null), 1300);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
      <ThemeWipeOverlay overlay={overlay} />
    </ThemeContext.Provider>
  );
}
