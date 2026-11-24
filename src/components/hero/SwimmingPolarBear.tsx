import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, type PanInfo } from 'framer-motion';

export function SwimmingPolarBear() {
  const [isGrabbed, setIsGrabbed] = useState(false);
  const x = useMotionValue(-170);
  const y = useMotionValue(0);
  const bearRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isGrabbed) return;
    let frame = 0;
    let previousTime = performance.now();
    const swim = (now: number) => {
      const delta = Math.min(0.05, (now - previousTime) / 1000);
      previousTime = now;
      const width = bearRef.current?.closest('section')?.clientWidth ?? window.innerWidth;
      const nextX = x.get() + 46 * delta;
      x.set(nextX > width + 170 ? -170 : nextX);
      frame = requestAnimationFrame(swim);
    };
    frame = requestAnimationFrame(swim);
    return () => cancelAnimationFrame(frame);
  }, [isGrabbed, x]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, _info: PanInfo) => {
    const section = bearRef.current?.closest('section');
    const maxX = (section?.clientWidth ?? window.innerWidth) - 90;
    x.set(Math.max(-90, Math.min(maxX, x.get())));
    y.set(Math.max(-100, Math.min(100, y.get())));
    setIsGrabbed(false);
  };

  return (
    <motion.div
      ref={bearRef}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      onDragStart={() => setIsGrabbed(true)}
      onDragEnd={handleDragEnd}
      style={{ x, y, touchAction: 'none' }}
      className="pointer-events-auto absolute left-0 top-[59%] z-[12] cursor-grab select-none p-3 active:cursor-grabbing"
      role="img"
      aria-label="Oso polar nadando; puedes arrastrarlo"
      title="Arrástrame por el agua"
    >
      <motion.svg
        animate={isGrabbed ? { y: 0, rotate: -4 } : { y: [0, -7, 0, 3, 0], rotate: [0, -2, 0, 2, 0] }}
        transition={isGrabbed ? { duration: 0.15 } : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        width="158"
        height="94"
        viewBox="0 0 158 94"
        fill="none"
        className="drop-shadow-lg"
      >
        <motion.ellipse
          cx="79"
          cy="79"
          rx="65"
          ry="8"
          fill="#b7e3ef"
          animate={{ scaleX: [1, 1.06, 1], opacity: [0.48, 0.25, 0.48] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '79px 79px' }}
        />
        <path d="M23 54C29 35 48 28 79 31L113 36C128 39 138 49 135 62C132 74 112 78 86 75L43 71C27 69 18 64 23 54Z" fill="#fff" stroke="#587b8c" strokeWidth="3" />
        <circle cx="119" cy="38" r="23" fill="#fff" stroke="#587b8c" strokeWidth="3" />
        <circle cx="105" cy="20" r="9" fill="#fff" stroke="#587b8c" strokeWidth="3" />
        <circle cx="132" cy="20" r="9" fill="#fff" stroke="#587b8c" strokeWidth="3" />
        <motion.ellipse
          cx="111"
          cy="40"
          rx="3"
          ry="4"
          fill="#102a3a"
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ repeat: Infinity, duration: 4.8, times: [0, 0.9, 0.93, 0.96, 1], ease: 'easeInOut' }}
          style={{ transformOrigin: '111px 40px' }}
        />
        <motion.ellipse
          cx="126"
          cy="40"
          rx="3"
          ry="4"
          fill="#102a3a"
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ repeat: Infinity, duration: 4.8, times: [0, 0.9, 0.93, 0.96, 1], ease: 'easeInOut' }}
          style={{ transformOrigin: '126px 40px' }}
        />
        <ellipse cx="119" cy="49" rx="8" ry="6" fill="#243746" />
        <path d="M45 68 34 80m36-7-7 12m39-10 8 10" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
        <motion.path d="M50 72q-8 9-2 15m35-12q-8 9-2 15" stroke="#587b8c" strokeWidth="3" strokeLinecap="round" animate={{ y: [0, -3, 0] }} transition={{ duration: .65, repeat: Infinity, ease: 'easeInOut' }} />
        <path d="M13 83c10-4 18-4 28 0m60 0c11-4 21-4 31 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".9" />
      </motion.svg>
    </motion.div>
  );
}
