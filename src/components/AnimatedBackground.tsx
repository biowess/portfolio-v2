import { useMemo, useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'motion/react';
import { useTheme } from '../lib/theme';

// ─── star field helpers ──────────────────────────────────────────────
function makeStarShadows(count: number, seed: number, color = 'rgba(255,255,255,0.85)'): string {
  let s = (seed * 2654435761) >>> 0;
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const x = s % 2400;
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const y = s % 2400;
    parts.push(`${x}px ${y}px ${color}`);
  }
  return parts.join(', ');
}

function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice && isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export function AnimatedBackground() {
  const { isDark } = useTheme();
  const isMobile = useMobileDetect();

  // Star shadows – reduced count on mobile
  const stars = useMemo(() => {
    if (isMobile) {
      // Mobile: ~70% fewer stars
      return {
        fine:   makeStarShadows(100, 1, 'rgba(255,255,255,0.45)'),
        medium: makeStarShadows(35,  2, 'rgba(255,255,255,0.65)'),
        bright: makeStarShadows(12,  3, 'rgba(255,255,255,0.85)'),
      };
    }
    // Desktop: original star counts
    return {
      fine:   makeStarShadows(360, 1, 'rgba(255,255,255,0.55)'),
      medium: makeStarShadows(140, 2, 'rgba(255,255,255,0.75)'),
      bright: makeStarShadows(48,  3, 'rgba(255,255,255,0.95)'),
    };
  }, [isMobile]);

  // ─── Mouse tracking (reduced spring stiffness on mobile) ─────────
  const rawX = useSpring(0, { stiffness: isMobile ? 20 : 40, damping: 18, mass: 1 });
  const rawY = useSpring(0, { stiffness: isMobile ? 20 : 40, damping: 18, mass: 1 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth)  - 0.5);
      rawY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [rawX, rawY]);

  // Parallax intensity – weaker on mobile
  const parallaxFactor = isMobile ? 0.3 : 1;
  const px1 = useTransform(rawX, v => v * 14 * parallaxFactor);
  const py1 = useTransform(rawY, v => v * 14 * parallaxFactor);
  const px2 = useTransform(rawX, v => v * 28 * parallaxFactor);
  const py2 = useTransform(rawY, v => v * 28 * parallaxFactor);
  const px3 = useTransform(rawX, v => v * 50 * parallaxFactor);
  const py3 = useTransform(rawY, v => v * 50 * parallaxFactor);
  const nx  = useTransform(rawX, v => v * -18 * parallaxFactor);
  const ny  = useTransform(rawY, v => v * -18 * parallaxFactor);

  // Light-variant spotlight offset (cursor-follower)
  const lx = useTransform(rawX, v => v * (isMobile ? 40 : 120));
  const ly = useTransform(rawY, v => v * (isMobile ? 30 : 80));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <AnimatePresence mode="popLayout">

        {/* ══════════ DARK THEME ══════════ */}
        {isDark && (
          <motion.div
            key="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0"
          >
            {/* AMOLED base */}
            <div className="absolute inset-0" style={{ background: '#050507' }} />

            {/* Fine distant stars – no infinite scroll on mobile */}
            <motion.div className="absolute inset-0" style={{ x: px1, y: py1, willChange: 'transform' }}>
              <motion.div
                className="absolute inset-0"
                {...(!isMobile && {
                  animate: { x: [0, -2400] },
                  transition: { duration: 300, repeat: Infinity, ease: 'linear' }
                })}
              >
                <div style={{
                  position: 'absolute', width: 1, height: 1, top: 0, left: 0,
                  background: 'transparent',
                  boxShadow: stars.fine,
                }} />
              </motion.div>
            </motion.div>

            {/* Medium stars */}
            <motion.div className="absolute inset-0" style={{ x: px2, y: py2, willChange: 'transform' }}>
              <motion.div
                className="absolute inset-0"
                {...(!isMobile && {
                  animate: { x: [0, -2400] },
                  transition: { duration: 200, repeat: Infinity, ease: 'linear' }
                })}
              >
                <div style={{
                  position: 'absolute', width: 2, height: 2, top: 0, left: 0,
                  background: 'transparent',
                  boxShadow: stars.medium,
                  borderRadius: '50%',
                }} />
              </motion.div>
            </motion.div>

            {/* Bright foreground stars */}
            <motion.div className="absolute inset-0" style={{ x: px3, y: py3, willChange: 'transform' }}>
              <motion.div
                className="absolute inset-0"
                {...(!isMobile && {
                  animate: { x: [0, -2400] },
                  transition: { duration: 140, repeat: Infinity, ease: 'linear' }
                })}
              >
                <div style={{
                  position: 'absolute', width: 2, height: 2, top: 0, left: 0,
                  background: 'transparent',
                  boxShadow: stars.bright,
                  borderRadius: '50%',
                }} />
              </motion.div>
            </motion.div>

            {/* Nebula counter-parallax – static on mobile */}
            <motion.div style={{ x: nx, y: ny }} className="absolute inset-0">
              <motion.div
                className="absolute"
                style={{
                  top: '-8%', right: '-12%',
                  width: isMobile ? '40vw' : '55vw',
                  height: isMobile ? '40vw' : '55vw',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, rgba(180,20,20,${isMobile ? 0.06 : 0.12}) 0%, rgba(140,10,10,0.03) 35%, transparent 65%)`,
                  filter: `blur(${isMobile ? '32px' : '72px'})`,
                }}
                {...(!isMobile && {
                  animate: {
                    x: [0, -100],
                    scale: [1, 1.04, 1],
                  },
                  transition: {
                    x: { duration: 120, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 24, repeat: Infinity, ease: 'easeInOut' },
                  },
                })}
              />
              <motion.div
                className="absolute"
                style={{
                  bottom: '-15%', left: '-8%',
                  width: isMobile ? '45vw' : '60vw',
                  height: isMobile ? '45vw' : '60vw',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, rgba(160,15,15,${isMobile ? 0.04 : 0.08}) 0%, transparent 60%)`,
                  filter: `blur(${isMobile ? '40px' : '90px'})`,
                }}
                {...(!isMobile && {
                  animate: {
                    x: [0, -80],
                    scale: [1, 1.06, 1],
                  },
                  transition: {
                    x: { duration: 150, repeat: Infinity, ease: 'linear', delay: 4 },
                    scale: { duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 4 },
                  },
                })}
              />
            </motion.div>

            {/* Centre static haze – reduced blur on mobile */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: isMobile ? '50vw' : '70vw',
                height: isMobile ? '30vw' : '40vw',
                borderRadius: '50%',
                background: `radial-gradient(ellipse, rgba(80,0,0,${isMobile ? 0.02 : 0.04}) 0%, transparent 70%)`,
                filter: `blur(${isMobile ? '30px' : '60px'})`,
              }}
            />
          </motion.div>
        )}

        {/* ══════════ LIGHT THEME ══════════ */}
        {!isDark && (
          <motion.div
            key="light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0"
          >
            {/* SVG Paper texture – simplified on mobile */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <filter id="paper-all" x="0" y="0" width="100%" height="100%">
                  {/* Stains / discolouration – fewer octaves on mobile */}
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.015"
                    numOctaves={isMobile ? 1 : 2}
                    seed="11"
                    stitchTiles="stitch"
                    result="stainNoise"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.96 0 0 0 0 0.92 0 0 0 0 0.82 0 0 0 0.18 0"
                    in="stainNoise"
                    result="stainColor"
                  />
                  <feBlend in="SourceGraphic" in2="stainColor" mode="multiply" result="withStains" />

                  {/* Coarse grain – only on desktop */}
                  {!isMobile && (
                    <>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.04"
                        numOctaves="5"
                        seed="3"
                        stitchTiles="stitch"
                        result="coarseNoise"
                      />
                      <feColorMatrix type="saturate" values="0" in="coarseNoise" result="coarseGray" />
                      <feComponentTransfer in="coarseGray" result="coarseMuted">
                        <feFuncA type="linear" slope="0.06" />
                      </feComponentTransfer>
                      <feBlend in="withStains" in2="coarseMuted" mode="multiply" result="withCoarse" />
                    </>
                  )}

                  {/* Fine grain – always present but reduced opacity on mobile */}
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency={isMobile ? "0.5" : "0.65"}
                    numOctaves={isMobile ? 2 : 3}
                    seed="7"
                    stitchTiles="stitch"
                    result="fineNoise"
                  />
                  <feColorMatrix type="saturate" values="0" in="fineNoise" result="fineGray" />
                  <feComponentTransfer in="fineGray" result="fineMuted">
                    <feFuncA type="linear" slope={isMobile ? "0.015" : "0.03"} />
                  </feComponentTransfer>
                  <feBlend in={isMobile ? "withStains" : "withCoarse"} in2="fineMuted" mode="multiply" />
                </filter>
              </defs>

              <rect x="0" y="0" width="100%" height="100%" fill="#faf7f2" filter="url(#paper-all)" />
            </svg>

            {/* Vignette – reduced intensity on mobile */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, transparent 50%, rgba(180,160,130,${isMobile ? 0.06 : 0.12}) 100%)`,
                mixBlendMode: 'multiply',
              }}
            />

            {/* Cursor-following spotlight – weaker on mobile */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                x: lx,
                y: ly,
                willChange: isMobile ? 'auto' : 'transform',
              }}
            >
              {/* Broad soft glow */}
              <div
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: isMobile ? '40vw' : '55vw',
                  height: isMobile ? '40vw' : '55vw',
                  marginLeft: `-${isMobile ? '20vw' : '27.5vw'}`,
                  marginTop: `-${isMobile ? '20vw' : '27.5vw'}`,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, rgba(255,252,235,${isMobile ? 0.4 : 0.6}) 0%, rgba(255,248,220,${isMobile ? 0.2 : 0.3}) 30%, rgba(255,240,210,0.05) 55%, transparent 75%)`,
                  filter: `blur(${isMobile ? '30px' : '60px'})`,
                  transform: 'translate(-10%, -12%)',
                }}
              />
              {/* Tighter inner core – may be removed on mobile to save performance */}
              {!isMobile && (
                <div
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: '25vw',
                    height: '25vw',
                    marginLeft: '-12.5vw',
                    marginTop: '-12.5vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,250,0.7) 0%, rgba(255,250,235,0.35) 40%, transparent 65%)',
                    filter: 'blur(28px)',
                    transform: 'translate(-12%, -14%)',
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
