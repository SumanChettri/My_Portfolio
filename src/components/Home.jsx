// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import {
  FaArrowDown, FaTerminal, FaLaptopCode, FaMicrochip
} from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiDocker, SiCplusplus
} from "react-icons/si";

const CODE_SNIPPET = `const engineer = {
  name: "Suman Chettri",
  role: "Software Engineer",
  coffeeToCodeRatio: Infinity,
  bugsInProduction: 0, // *fingers crossed* 🤞
  domains: ["Full-Stack Web", "Mobile Apps", "IoT & Embedded"],
  languages: ["C", "C++", "Java", "SQL", "JavaScript"],
  hardware: ["ESP32", "Arduino", "IR Arrays", "PID Motors"],
  motto: "Bridging modern apps with physical hardware.",
  status: "Available for Roles & Freelance Collaboration 🟢",
};`;

const Home = ({ onOpenCmd }) => {
  const [typedText, setTypedText] = useState("");

  // Code Typewriter animation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= CODE_SNIPPET.length) {
        setTypedText(CODE_SNIPPET.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24 sm:py-28 bg-gradient-to-br from-gray-100 via-gray-200 to-white dark:from-gray-950 dark:via-black dark:to-gray-950 transition-all duration-500 overflow-hidden"
    >
      {/* Background Parallax Orbs */}
      <Parallax speed={-15}>
        <div className="absolute top-10 left-5 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-600/15 blur-3xl rounded-full pointer-events-none"></div>
      </Parallax>
      <Parallax speed={10}>
        <div className="absolute bottom-10 right-5 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/15 blur-3xl rounded-full pointer-events-none"></div>
      </Parallax>

      {/* Subtle Circuit Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

      {/* Main Hero Layout */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        
        {/* Left Column: Headline & Typewriter */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold tracking-wide mb-6 shadow-sm max-w-full overflow-hidden"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="truncate">Software Engineer — Full-Stack • Mobile • IoT • Embedded</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.15] sm:leading-[1.1] text-gray-900 dark:text-white tracking-tight">
            Engineering <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Full-Stack Apps &
            </span> <br />
            Connected Devices.
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-normal">
            Hi, I'm <strong className="text-gray-900 dark:text-white font-semibold">Suman Chettri</strong>. I design and build full-stack web applications, mobile apps, REST APIs, and physical ESP32 connected hardware. No fluff, just working software.
          </p>

          {/* Typewriter Code Block */}
          <div className="mt-6 sm:mt-8 w-full max-w-xl bg-gray-950 border border-gray-800 rounded-2xl p-4 sm:p-5 shadow-2xl font-mono text-xs sm:text-sm text-gray-200 overflow-hidden">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gray-800 text-gray-400 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-gray-500 text-[11px]">engineer.config.ts</span>
            </div>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre-wrap leading-relaxed text-[11px] sm:text-xs">
              <code>{typedText}</code>
              <span className="animate-pulse inline-block w-2 h-4 bg-emerald-400 ml-1"></span>
            </pre>
          </div>

          {/* Action CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-cyan-500/25 transition"
            >
              Explore Flagship Systems
            </motion.a>

            <motion.button
              onClick={onOpenCmd}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-mono font-semibold text-emerald-400 bg-gray-900 dark:bg-black rounded-full shadow-lg border border-gray-800 flex items-center justify-center gap-2 transition"
            >
              <FaTerminal />
              <span>[ &gt;_ Terminal CLI ]</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Multi-Disciplinary Metric Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 mt-4 lg:mt-0"
        >
          {/* Card 1: Web & Mobile */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-5 sm:p-6 rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-xl flex items-center gap-4 sm:gap-5 transition"
          >
            <div className="p-3.5 sm:p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 text-2xl sm:text-3xl shrink-0">
              <FaLaptopCode />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">Web & E-Commerce</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Full-Stack & Mobile Apps</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">React 19, Organic Store, React Native & Express APIs</p>
            </div>
          </motion.div>

          {/* Card 2: IoT & Hardware */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-5 sm:p-6 rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-xl flex items-center gap-4 sm:gap-5 transition"
          >
            <div className="p-3.5 sm:p-4 rounded-2xl bg-orange-500/10 text-orange-400 text-2xl sm:text-3xl shrink-0">
              <FaMicrochip />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider">Hardware & Embedded</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">ESP32 & Microcontrollers</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Keypad OTPs, IR Sensor Arrays, PID Control & GSM</p>
            </div>
          </motion.div>

          {/* Multi-Domain Tech Strip */}
          <div className="p-5 sm:p-6 rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-xl">
            <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider block mb-3">
              Multi-Domain Engineering Ecosystem
            </span>
            <div className="flex items-center justify-between text-2xl sm:text-3xl">
              <SiReact className="text-[#61DAFB] hover:scale-125 transition-transform" title="React 19 & React Native" />
              <SiNodedotjs className="text-[#5FA04E] hover:scale-125 transition-transform" title="Node.js & Express" />
              <SiCplusplus className="text-[#00599C] hover:scale-125 transition-transform" title="C++ Firmware" />
              <FaMicrochip className="text-orange-400 hover:scale-125 transition-transform" title="ESP32 / Arduino" />
              <SiPython className="text-[#3776AB] hover:scale-125 transition-transform" title="Python" />
              <SiMongodb className="text-[#47A248] hover:scale-125 transition-transform" title="MongoDB" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-8 lg:mt-0 flex flex-col items-center text-gray-500 dark:text-gray-400 text-xs font-mono"
      >
        <span>Scroll to Explore Architecture</span>
        <FaArrowDown className="mt-1 text-xs animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default Home;
