import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaCheckCircle, FaMicrochip } from 'react-icons/fa';

const BOOT_LOGS = [
  'INITIALIZING SYSTEM KERNEL...',
  'LOADING CORE MODULES: REACT 19 + VITE 6... [OK]',
  'VERIFYING FULL-STACK ENGINE & ROUTING... [OK]',
  'MOUNTING ARCHITECTURE SCHEMA & DATA FEEDS... [OK]',
  'SYSTEM READY. LAUNCHING PORTFOLIO EXPERIENCE...',
];

const Preloader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    // Progress counter animation from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Log message update sequence
    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 450);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        finishLoading();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [progress, finishLoading]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 text-gray-100 font-mono select-none px-6"
      >
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        {/* Outer Glow Orb */}
        <div className="absolute w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Center Container */}
        <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
          {/* Animated CPU Icon Header */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-8"
          >
            <FaMicrochip className="text-4xl" />
          </motion.div>

          {/* Boot Status Title */}
          <div className="flex items-center gap-2 text-emerald-400 text-xs tracking-widest uppercase font-bold mb-3">
            <FaTerminal className="animate-pulse" />
            <span>SYSTEM BOOT SEQUENCE</span>
          </div>

          {/* Progress Percentage Display */}
          <div className="text-6xl md:text-7xl font-extrabold tracking-tight text-white font-mono my-2">
            {progress}<span className="text-blue-500 text-4xl">%</span>
          </div>

          {/* Sleek Neon Progress Bar Container */}
          <div className="w-full bg-gray-900 border border-gray-800 rounded-full h-3 p-0.5 overflow-hidden my-6 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Live Terminal Log Stream */}
          <div className="w-full h-14 bg-gray-900/80 border border-gray-800/80 rounded-xl px-4 py-3 flex items-center justify-between text-xs text-gray-400 font-mono shadow-inner">
            <span className="truncate text-emerald-400 font-semibold">
              &gt; {BOOT_LOGS[currentLogIndex]}
            </span>
            <FaCheckCircle className="text-emerald-500 shrink-0 ml-2" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
