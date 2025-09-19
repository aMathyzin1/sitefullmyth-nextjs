'use client';

import { useEffect, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

const lanes = [0, 1, 2];

export function RunnerPreview() {
  const [lane, setLane] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setLane(() => {
        const next = Math.floor(Math.random() * lanes.length);
        controls.start({ x: next * 64 - 64, transition: { type: 'spring', stiffness: 220, damping: 18 } });
        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="relative mx-auto flex h-72 max-w-md items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-black p-6 shadow-2xl shadow-brand-500/20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.15),transparent_60%)]"
          animate={{ y: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        />
      </div>
      <div className="relative flex h-full w-full flex-col justify-between">
        <div className="grid grid-cols-3 gap-4">
          {lanes.map((index) => (
            <div key={index} className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur" />
          ))}
        </div>
        <div className="absolute bottom-16 left-1/2 flex w-[192px] -translate-x-1/2 justify-between">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="h-12 w-12 rounded-2xl border border-brand-500/40 bg-brand-500/20"
              initial={{ y: -200, opacity: 0 }}
              animate={{
                y: ['-160%', '120%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                delay: index * 0.6,
                duration: 4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <motion.div
          animate={controls}
          initial={{ x: 0 }}
          className="absolute bottom-12 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-xl shadow-brand-500/40"
        >
          <span className="text-lg font-bold">aM</span>
        </motion.div>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200">
          <span>XP</span>
          <motion.span
            key={lane}
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 240, damping: 12 }}
            className="text-sm font-semibold text-white"
          >
            {180 + lane * 24}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
