// src/components/WhatIBuild.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode, FaServer, FaMicrochip, FaRobot, FaMobileAlt, FaTools, FaArrowRight
} from 'react-icons/fa';
import DomainExplorerModal from './DomainExplorerModal';

const CAPABILITIES = [
  {
    id: 'full-stack-web',
    icon: FaLaptopCode,
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
    title: 'Full-Stack Web Applications',
    description: 'Custom React web apps, farm-fresh produce e-commerce stores (Organic Store), feedback portals, and database workflows.',
  },
  {
    id: 'backend-apis',
    icon: FaServer,
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    title: 'Backend & REST APIs',
    description: 'Clean Node.js & Express RESTful services, JWT token authorization, MongoDB/MySQL schema design, and IoT API gateways.',
  },
  {
    id: 'iot-connected',
    icon: FaMicrochip,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30',
    title: 'IoT & Connected Devices',
    description: 'ESP32 & ESP8266 microcontrollers, optical IR sensor arrays, keypad OTP validation, GSM cellular telemetry, and energy meters.',
  },
  {
    id: 'embedded-robotics',
    icon: FaRobot,
    color: 'from-rose-500/20 to-red-500/20 text-rose-600 dark:text-pink-400 border-rose-500/30',
    title: 'Embedded Systems & Robotics',
    description: 'Competition-winning PID autonomous line followers, dual H-bridge motor drivers, sensor calibration, and P10 LED matrix scoreboards.',
  },
  {
    id: 'mobile-apps',
    icon: FaMobileAlt,
    color: 'from-indigo-500/20 to-blue-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    title: 'Mobile Applications',
    description: 'Cross-platform React Native & Expo applications connected to backend REST APIs for parking reservations and live state sync.',
  },
  {
    id: 'tools-cli',
    icon: FaTools,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30',
    title: 'Engineering Tools & CLI',
    description: 'Parallel MPI C/C++ matrix algorithms, speedup benchmark analysis, Lex tokenizers, AST generators, and interactive CLI palettes.',
  },
];

const WhatIBuild = () => {
  const [activeDomainId, setActiveDomainId] = useState(null);

  return (
    <section id="capabilities" className="relative py-14 sm:py-24 px-3 sm:px-6 lg:px-8 bg-transparent text-slate-900 dark:text-white">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-8 sm:mb-16"
        >
          <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase">
            Engineering Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-3 sm:mt-4 tracking-tight">
            What I Build
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base lg:text-lg mt-2 sm:mt-3 max-w-2xl mx-auto">
            Explore detailed engineering case studies across full-stack applications, backend APIs, IoT hardware, robotics, mobile tools, and parallel computing.
          </p>
        </motion.div>

        {/* 2-Column Grid on Mobile Screens (6 Core Domain Cards preserved!) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 w-full">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                onClick={() => setActiveDomainId(item.id)}
                className="group cursor-pointer relative p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br border w-fit mb-3 sm:mb-5 ${item.color}`}>
                    <Icon className="text-xl sm:text-3xl" />
                  </div>
                  <h3 className="text-xs sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-slate-600 dark:text-slate-400 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-8 pt-2.5 sm:pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[10px] sm:text-xs font-mono font-semibold text-blue-600 dark:text-cyan-400 transition-colors">
                  <span>Explore Projects</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Domain Explorer Modal */}
      {activeDomainId && (
        <DomainExplorerModal
          domainId={activeDomainId}
          onClose={() => setActiveDomainId(null)}
        />
      )}
    </section>
  );
};

export default WhatIBuild;
