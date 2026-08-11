// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../data/services';
import {
  FaLaptopCode, FaServer, FaMobileAlt, FaShoppingCart, FaWifi, FaMicrochip, FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';

const ICON_MAP = {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaShoppingCart,
  FaWifi,
  FaMicrochip,
};

const Services = () => {
  return (
    <section id="services" className="relative py-14 sm:py-24 px-3 sm:px-6 lg:px-8 bg-transparent text-slate-900 dark:text-white border-t border-slate-300/80 dark:border-slate-800/80">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-8 sm:mb-16"
        >
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Freelance & Collaboration
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-3 sm:mt-4 tracking-tight">
            What I Can Build For You
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base lg:text-lg mt-2 sm:mt-3 max-w-2xl mx-auto">
            Available for selected freelance development, API engineering, custom e-commerce store builds, and hardware/IoT prototype consulting.
          </p>
        </motion.div>

        {/* 2-Column Grid on Mobile Screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 w-full mb-10 sm:mb-16">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] || FaLaptopCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-cyan-500/10 text-blue-600 dark:text-cyan-400 border border-cyan-500/20 text-lg sm:text-2xl">
                      <Icon />
                    </div>
                    <span className="hidden sm:inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-[11px] sm:text-xs font-mono font-semibold rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-1.5 leading-tight">{service.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug sm:leading-relaxed mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-none">{service.tagline}</p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-700 dark:text-slate-300">
                        <FaCheckCircle className="text-emerald-500 shrink-0 text-[10px] sm:text-xs" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-8 pt-3">
                  <a
                    href="#contact"
                    className="w-full py-2 sm:py-3 px-2 sm:px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500/20 text-blue-700 dark:text-cyan-400 border border-slate-300/80 dark:border-slate-700 text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center gap-1 sm:gap-2 transition"
                  >
                    <span>Inquire</span>
                    <FaPaperPlane className="text-[9px] sm:text-[10px]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 via-purple-900 to-slate-950 border border-cyan-500/30 text-center flex flex-col items-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white">
              Ready to Turn Your Idea into a Working System?
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm md:text-base mt-2 max-w-2xl mx-auto">
              Whether you need a full-stack web application, e-commerce store, or ESP32 hardware prototype — let's build together.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-full text-xs sm:text-sm md:text-base shadow-xl transition transform hover:-translate-y-0.5"
            >
              <FaPaperPlane />
              <span>Start a Project &rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
