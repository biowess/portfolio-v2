import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ShareButton } from './ShareButton';
import { AnimatedBackground } from './AnimatedBackground';
import { navItems } from '../data/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { spring, staggerContainer, staggerItem } from '../lib/motion';
import { cn } from '../lib/cn';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />

      {/* ═══ Navbar ═══ */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)]"
        style={{ backgroundColor: 'var(--bg-primary)', backdropFilter: 'blur(20px) saturate(1.2)', WebkitBackdropFilter: 'blur(20px) saturate(1.2)', background: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)' }}>
        <div className="section-container px-5 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-tight hover:text-[var(--accent)] transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
            Biowess.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}
                className={({ isActive }) => cn(
                  'px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200',
                  isActive
                    ? 'text-[var(--accent)] bg-[var(--accent-soft)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                )}>
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-1 ml-3 pl-3 border-l border-[var(--border)]">
              <ShareButton />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ShareButton />
            <ThemeToggle />
            <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
              whileTap={{ scale: 0.9 }} transition={spring.snappy}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-[var(--border)]"
              style={{ backgroundColor: 'var(--bg-primary)' }}>
              <motion.nav variants={staggerContainer} initial="hidden" animate="visible" className="px-5 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={staggerItem}>
                    <NavLink to={item.path} onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => cn(
                        'block px-4 py-3 rounded-[var(--radius-sm)] text-[16px] font-medium transition-all duration-200',
                        isActive ? 'text-[var(--accent)] bg-[var(--accent-soft)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                      )}>
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══ Main Content ═══ */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ═══ Footer ═══ */}
      <footer className="border-t border-[var(--border)] py-10 relative z-10">
        <div className="section-container px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[var(--text-muted)]">© {new Date().getFullYear()} Mohammed W. Hammami. All rights reserved.</p>
          <div className="flex items-center gap-5 text-[12px] text-[var(--text-muted)]">
            <Link to="/contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link>
            <a href="https://www.linkedin.com/in/biowess" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
            <a href="https://github.com/biowess" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
