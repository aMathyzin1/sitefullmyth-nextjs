'use client';

import { motion } from 'framer-motion';

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-brand-500/30 via-transparent to-sky-500/40 blur-3xl" />
      <motion.div
        className="absolute inset-6 rounded-[2.5rem] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          initial="initial"
          animate="animate"
        >
          <defs>
            <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#14b8a6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="orbit" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="140" fill="url(#heroGradient)" opacity={0.85} />
          <motion.circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#orbit)"
            strokeWidth="2"
            strokeDasharray="12 10"
            initial={{ strokeDashoffset: 180 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          />
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          >
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.circle
                key={angle}
                cx={200 + 150 * Math.cos((angle * Math.PI) / 180)}
                cy={200 + 150 * Math.sin((angle * Math.PI) / 180)}
                r="6"
                fill="url(#orbit)"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: angle / 90 }}
              />
            ))}
          </motion.g>
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <rect
              x="140"
              y="140"
              width="120"
              height="120"
              rx="28"
              fill="#0f172a"
              stroke="url(#orbit)"
              strokeWidth="2"
            />
            <motion.rect
              x="160"
              y="160"
              width="80"
              height="30"
              rx="12"
              fill="#1e293b"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
            />
            <motion.rect
              x="160"
              y="205"
              width="80"
              height="30"
              rx="12"
              fill="#1e293b"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 4.1, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="200"
              cy="260"
              r="18"
              fill="#6366F1"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            />
          </motion.g>
        </motion.svg>
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.4 }}
      >
        <div className="absolute left-8 top-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold text-emerald-200">Tempo real</span>
        </div>
        <div className="absolute bottom-10 right-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right text-xs text-slate-200 shadow-lg shadow-brand-500/20">
          <p className="font-semibold text-white">4.8x FPS médio</p>
          <p className="text-[0.7rem] text-slate-400">Dados coletados pela comunidade</p>
        </div>
      </motion.div>
    </div>
  );
}
