import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Different parallax depth layers for ambient orbs
  const orb1Y = useTransform(scrollY, [0, 4000], [0, shouldReduceMotion ? 0 : -350]);
  const orb2Y = useTransform(scrollY, [0, 4000], [0, shouldReduceMotion ? 0 : 400]);
  const orb3Y = useTransform(scrollY, [0, 4000], [0, shouldReduceMotion ? 0 : -250]);
  const orb4Y = useTransform(scrollY, [0, 4000], [0, shouldReduceMotion ? 0 : 280]);

  // Floating Figma Canvas elements depth
  const cursorY = useTransform(scrollY, [0, 3000], [0, shouldReduceMotion ? 0 : -180]);
  const cursorX = useTransform(scrollY, [0, 3000], [0, shouldReduceMotion ? 0 : 60]);
  const tagY = useTransform(scrollY, [0, 3000], [0, shouldReduceMotion ? 0 : 220]);
  const crosshairY = useTransform(scrollY, [0, 3000], [0, shouldReduceMotion ? 0 : -120]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Ambient Gradient Orb 1 (Figma Blue - Top Left) */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#0D99FF]/7 dark:bg-[#0D99FF]/5 blur-3xl"
      />

      {/* Ambient Gradient Orb 2 (Figma Purple - Mid Right) */}
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[30%] -right-32 w-[600px] h-[600px] rounded-full bg-[#9747FF]/7 dark:bg-[#9747FF]/5 blur-3xl"
      />

      {/* Ambient Gradient Orb 3 (Figma Green - Lower Left) */}
      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-[60%] -left-24 w-[500px] h-[500px] rounded-full bg-[#14AE5C]/6 dark:bg-[#14AE5C]/4 blur-3xl"
      />

      {/* Ambient Gradient Orb 4 (Warm Amber - Footer Region) */}
      <motion.div
        style={{ y: orb4Y }}
        className="absolute bottom-10 right-[15%] w-[450px] h-[450px] rounded-full bg-[#FF7262]/6 dark:bg-[#FF7262]/4 blur-3xl"
      />

      {/* Parallax Floating Figma Designer Cursor Badge */}
      <motion.div
        style={{ y: cursorY, x: cursorX }}
        className="hidden lg:flex items-center gap-1.5 absolute top-[45%] left-[8%] bg-[#0D99FF] text-white text-[11px] font-mono px-2.5 py-1 rounded-md shadow-lg shadow-[#0D99FF]/20 border border-white/20"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-3.5 h-3.5 fill-white"
        >
          <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 5.428z" />
        </svg>
        <span className="font-medium tracking-tight">Rohit (Designing...)</span>
      </motion.div>

      {/* Parallax Floating Figma Measurement Tag */}
      <motion.div
        style={{ y: tagY }}
        className="hidden xl:flex items-center gap-2 absolute top-[65%] right-[6%] bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md text-[10px] font-mono text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg border border-gray-200/80 dark:border-zinc-700 shadow-figma-card"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#9747FF]" />
        <span>Canvas Viewport · 1440 × 900</span>
      </motion.div>

      {/* Subtle Figma Canvas Crosshairs (+) */}
      <motion.div
        style={{ y: crosshairY }}
        className="hidden md:block absolute top-[25%] right-[12%] text-gray-300 dark:text-zinc-800 font-mono text-xs select-none"
      >
        +
      </motion.div>
      <motion.div
        style={{ y: tagY }}
        className="hidden md:block absolute top-[75%] left-[12%] text-gray-300 dark:text-zinc-800 font-mono text-xs select-none"
      >
        +
      </motion.div>
    </div>
  );
};
