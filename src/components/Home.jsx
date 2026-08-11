// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import {
  FaArrowDown, FaTerminal, FaLaptopCode, FaMicrochip, FaArrowRight
} from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiCplusplus
} from "react-icons/si";

const CODE_SNIPPET = `const engineer = {
  name: "Suman Chettri",
  role: "Software Engineer",
  focus: ["Full-Stack Web", "Mobile Apps", "IoT & Embedded Systems"],
  languages: ["C", "C++", "Java", "SQL", "JavaScript", "Python"],
  hardware: ["ESP32", "Arduino", "IR Sensor Arrays", "PID Controllers"],
  location: "Sikkim, India",
  status: "Available for Software Roles & Engineering Projects 🟢",
};`;

const Home = ({ onOpenCmd }) => {
  const [typedText, setTypedText] = useState("");

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
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gradient-to-br from-slate-200/80 via-slate-100 to-zinc-200/90 dark:from-slate-950 dark:via-black dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-all duration-500 overflow-hidden"
    >
      {/* Background Parallax Orbs */}
      <Parallax speed={-15}>
        <div className="absolute top-8 left-2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-cyan-500/20 dark:bg-cyan-500/15 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
      </Parallax>
      <Parallax speed={10}>
        <div className="absolute bottom-8 right-2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-purple-600/20 dark:bg-purple-600/15 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
      </Parallax>

      {/* Cyber Dots Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:20px_20px] sm:[background-size:24px_24px] opacity-25 dark:opacity-30 pointer-events-none"></div>

      {/* Hero Container */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto pt-4 sm:pt-0">
        
        {/* Left Column: Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-900/10 dark:bg-emerald-500/15 border border-slate-300 dark:border-emerald-500/30 text-slate-800 dark:text-emerald-400 text-[11px] sm:text-xs font-mono font-semibold tracking-wide mb-4 sm:mb-5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate">Software Engineer — Full-Stack • Mobile • IoT • Embedded</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 dark:text-white tracking-tight">
            Building Full-Stack Apps & <br />
            <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
              Connected Systems.
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
            Hi, I'm <strong className="text-slate-950 dark:text-white font-bold">Suman Chettri</strong>. I design web applications, mobile apps, REST APIs, and microcontroller firmware that bridge digital software with physical hardware.
          </p>

          {/* Code Config Box */}
          <div className="mt-5 sm:mt-6 w-full max-w-xl bg-slate-900 dark:bg-slate-950 border border-slate-700 dark:border-slate-800 rounded-2xl p-3.5 sm:p-5 shadow-xl font-mono text-[11px] sm:text-sm text-slate-200 overflow-hidden">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 text-slate-400 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-slate-400 text-[10px] sm:text-[11px]">engineer.config.ts</span>
            </div>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[160px] sm:max-h-none font-mono">
              <code>{typedText}</code>
              <span className="animate-pulse inline-block w-1.5 h-3.5 bg-emerald-400 ml-1"></span>
            </pre>
          </div>

          {/* Touch-Optimized Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="text-center px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 rounded-xl shadow-md active:scale-98 transition"
            >
              Explore Engineering Projects
            </a>

            <button
              onClick={onOpenCmd}
              className="px-6 py-3.5 text-xs sm:text-sm font-mono font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800 flex items-center justify-center gap-2 active:scale-98 transition hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <FaTerminal className="text-cyan-600 dark:text-cyan-400" />
              <span>[ &gt;_ CLI Terminal ]</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-5 mt-2 lg:mt-0"
        >
          {/* Card 1: Web & Mobile */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-md flex items-center gap-3.5 sm:gap-4 transition">
            <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xl sm:text-3xl shrink-0">
              <FaLaptopCode />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-blue-700 dark:text-cyan-400 uppercase tracking-wider">Web & Mobile</span>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">Full-Stack & E-Commerce</h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">React 19, Organic Store, React Native & REST APIs</p>
            </div>
          </div>

          {/* Card 2: IoT & Hardware */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-md flex items-center gap-3.5 sm:gap-4 transition">
            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xl sm:text-3xl shrink-0">
              <FaMicrochip />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">Hardware & Embedded</span>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">ESP32 Firmware & PID</h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">Keypad OTP, IR arrays, PID motor control & telemetry</p>
            </div>
          </div>

          {/* Tech Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-md">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
              Core Tech Stack
            </span>
            <div className="flex items-center justify-between text-xl sm:text-2xl text-slate-700 dark:text-slate-200">
              <SiReact className="text-[#61DAFB]" title="React 19 & React Native" />
              <SiNodedotjs className="text-[#5FA04E]" title="Node.js & Express" />
              <SiCplusplus className="text-[#00599C]" title="C++ Firmware" />
              <FaMicrochip className="text-amber-500" title="ESP32 / Arduino" />
              <SiPython className="text-[#3776AB]" title="Python" />
              <SiMongodb className="text-[#47A248]" title="MongoDB" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div className="mt-8 flex flex-col items-center text-slate-600 dark:text-slate-400 text-xs font-mono">
        <span>Scroll to Explore</span>
        <FaArrowDown className="mt-1 text-xs animate-bounce" />
      </div>
    </section>
  );
};

export default Home;
