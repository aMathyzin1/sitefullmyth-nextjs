'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface EnergyLinesProps {
  className?: string;
}

const energyLines = [
  {
    id: 'line-1',
    path: 'M0 110 C 280 -10 640 210 1200 60',
    duration: 18,
    delay: 0,
  },
  {
    id: 'line-2',
    path: 'M0 260 C 240 180 760 360 1200 280',
    duration: 22,
    delay: 0.6,
  },
  {
    id: 'line-3',
    path: 'M0 420 C 320 520 820 300 1200 420',
    duration: 20,
    delay: 1.2,
  },
];

const energyPulses = [
  { id: 'pulse-1', cx: 220, cy: 170, delay: 0 },
  { id: 'pulse-2', cx: 540, cy: 90, delay: 0.8 },
  { id: 'pulse-3', cx: 880, cy: 260, delay: 1.4 },
  { id: 'pulse-4', cx: 1060, cy: 420, delay: 0.4 },
];

export function EnergyLines({ className }: EnergyLinesProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10', className)} aria-hidden>
      <motion.svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="h-full w-full"
        initial="initial"
        animate="animate"
      >
        <defs>
          <linearGradient id="energyStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="energyGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <filter id="energyBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.2  0 0 0 0 0.4  0 0 0 0 0.6  0 0 0 0.7 0"
            />
          </filter>
        </defs>

        <rect width="1200" height="600" fill="url(#energyGlow)" opacity="0.25" />

        {energyLines.map((line) => (
          <motion.path
            key={line.id}
            d={line.path}
            stroke="url(#energyStroke)"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="12 24"
            filter="url(#energyBlur)"
            initial={{ strokeDashoffset: 180 }}
            animate={{ strokeDashoffset: -360 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: line.duration,
              delay: line.delay,
            }}
            opacity={0.9}
          />
        ))}

        {energyPulses.map((pulse) => (
          <motion.circle
            key={pulse.id}
            cx={pulse.cx}
            cy={pulse.cy}
            r={36}
            fill="url(#energyGlow)"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1, 1.2] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: pulse.delay }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
