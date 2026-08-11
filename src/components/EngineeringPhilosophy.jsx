// src/components/EngineeringPhilosophy.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaProjectDiagram, FaCheckCircle, FaLaptopCode, FaMicrochip, FaShieldAlt } from 'react-icons/fa';

const PHILOSOPHIES = [
  {
    id: 'connected-systems',
    title: 'Bridging Software & Hardware',
    icon: FaMicrochip,
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    summary: 'Connecting web & mobile applications with physical ESP32 microcontrollers, sensors, and cloud APIs.',
  },
  {
    id: 'real-world-constraints',
    title: 'Real-World Constraint Focus',
    icon: FaCogs,
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    summary: 'Designing around physical bounds like signal debouncing, power consumption, sensor noise, and network latency.',
  },
  {
    id: 'clean-architecture',
    title: 'Clean & Maintainable Code',
    icon: FaLaptopCode,
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    summary: 'Writing structured, readable logic across C++, JavaScript, Python, and SQL databases that is easy to extend.',
  },
  {
    id: 'problem-driven',
    title: 'Practical Problem Solving',
    icon: FaShieldAlt,
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    summary: 'Building software and devices to solve practical everyday challenges rather than adding unnecessary complexity.',
  },
];

const EngineeringPhilosophy = () => {
  return (
    <section id="philosophy" className="relative py-14 sm:py-24 px-3 sm:px-6 lg:px-8 bg-transparent text-slate-900 dark:text-white">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-8 sm:mb-16"
        >
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase inline-flex items-center gap-2">
            <FaProjectDiagram /> How I Approach Engineering
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-3 sm:mt-4 tracking-tight">
            Engineering Principles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base lg:text-lg mt-2 max-w-2xl mx-auto">
            A practical, grounded approach to building reliable web applications, mobile tools, and connected hardware devices.
          </p>
        </motion.div>

        {/* 2-Column Grid on Mobile Screens */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 w-full max-w-5xl">
          {PHILOSOPHIES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border w-fit mb-3 sm:mb-5 ${item.color}`}>
                    <Icon className="text-xl sm:text-3xl" />
                  </div>
                  <h3 className="text-xs sm:text-xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  <FaCheckCircle className="text-xs shrink-0" />
                  <span className="truncate">Core Mindset</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
