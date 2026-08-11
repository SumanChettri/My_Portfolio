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
    <section id="services" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/40 dark:bg-gray-950/60 text-white overflow-hidden border-t border-gray-800">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-5 w-72 sm:w-80 h-72 sm:h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-72 sm:w-80 h-72 sm:h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-12 sm:mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold tracking-widest uppercase inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Freelance & Engineering Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            What I Can Build For You
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl mx-auto">
            Available for selected freelance development, API engineering, custom e-commerce store builds, and hardware/IoT prototype consulting. No corporate buzzwords, just software that works.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12 sm:mb-16">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] || FaLaptopCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-8 rounded-3xl bg-gray-950/80 backdrop-blur-xl border border-gray-800 shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xl sm:text-2xl">
                      <Icon />
                    </div>
                    <span className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-[11px] sm:text-xs font-mono font-semibold rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">{service.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-5">{service.tagline}</p>

                  <div className="space-y-2 pt-4 border-t border-gray-800/80">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <FaCheckCircle className="text-emerald-400 shrink-0 text-xs" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4">
                  <a
                    href="#contact"
                    className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gray-900 hover:bg-cyan-600/20 text-cyan-400 hover:text-white border border-gray-800 hover:border-cyan-500/50 text-xs font-mono font-bold flex items-center justify-center gap-2 transition"
                  >
                    <span>Inquire About This Service</span>
                    <FaPaperPlane className="text-[10px]" />
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
          className="w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/80 via-purple-950/80 to-black border border-cyan-500/30 text-center flex flex-col items-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
              Ready to Turn Your Idea into a Working Product?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2 max-w-2xl mx-auto">
              Whether you need a full-stack web application, an e-commerce platform, or an ESP32 hardware prototype — let's build something exceptional together.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-full text-xs sm:text-sm md:text-base shadow-xl hover:shadow-cyan-500/20 transition transform hover:-translate-y-0.5"
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
