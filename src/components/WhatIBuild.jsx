// src/components/WhatIBuild.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode, FaServer, FaMicrochip, FaRobot, FaMobileAlt, FaTools, FaArrowRight
} from 'react-icons/fa';

const CAPABILITIES = [
  {
    icon: FaLaptopCode,
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
    title: 'Full-Stack Web Applications',
    description: 'Custom React web apps, farm-fresh produce e-commerce stores (Organic Store), telemetry dashboards, authentication systems, and database workflows.',
  },
  {
    icon: FaServer,
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30',
    title: 'Backend & REST APIs',
    description: 'Clean Node.js & Express RESTful services, JWT token authorization, MongoDB/MySQL schema design, and cloud deployments.',
  },
  {
    icon: FaMicrochip,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    title: 'IoT & Connected Devices',
    description: 'ESP32 & ESP8266 microcontrollers, optical IR sensor arrays, keypad OTP validation, GSM cellular telemetry, and embedded web servers.',
  },
  {
    icon: FaRobot,
    color: 'from-purple-500/20 to-pink-500/20 text-pink-400 border-pink-500/30',
    title: 'Embedded Systems & Robotics',
    description: 'C++ firmware, PID closed-loop feedback algorithms, differential motor driving, automated sensor calibration, and autonomous navigation.',
  },
  {
    icon: FaMobileAlt,
    color: 'from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30',
    title: 'Mobile Applications',
    description: 'Cross-platform React Native & Expo applications connected to backend REST APIs for instant mobile access.',
  },
  {
    icon: FaTools,
    color: 'from-rose-500/20 to-red-500/20 text-rose-400 border-rose-400 border-rose-500/30',
    title: 'Engineering Tools & CLI',
    description: 'Monitoring dashboards, interactive terminal palettes, automated shell scripts, and developer workflow tools.',
  },
];

const WhatIBuild = () => {
  return (
    <section id="capabilities" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/60 dark:bg-black/80 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-12 sm:mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold tracking-widest uppercase">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            What I Build
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl mx-auto">
            I engineer software and connected systems bridging web applications, backend APIs, mobile platforms, and physical embedded hardware.
          </p>
        </motion.div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-gray-950/70 backdrop-blur-xl border border-gray-800 shadow-xl hover:border-gray-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br border w-fit mb-5 ${item.color}`}>
                    <Icon className="text-2xl sm:text-3xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono font-semibold text-gray-400 group-hover:text-cyan-400 transition-colors">
                  <span>Explore Technical Details</span>
                  <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
