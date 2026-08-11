// src/pages/About.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
  FaGraduationCap, FaUniversity, FaTerminal, FaGithub, FaTrophy
} from 'react-icons/fa';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/skills';
import CSFoundations from '../components/CSFoundations';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [theme, setTheme] = useState('dark');

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 45 },
      color: { value: theme === 'dark' ? '#ffffff' : '#000000' },
      links: {
        enable: true,
        color: theme === 'dark' ? '#ffffff' : '#000000',
        distance: 120,
        opacity: 0.2,
        width: 1,
      },
      move: { enable: true, speed: 0.8 },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.25 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
    },
    background: { color: 'transparent' },
  };

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-500 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-950 to-black'
          : 'bg-gradient-to-br from-gray-100 via-gray-200 to-white'
      }`}
    >
      <Particles id="tsparticles-about" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0 pointer-events-none" />

      <Parallax speed={-15}>
        <div className="absolute top-20 left-5 sm:left-10 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500 opacity-15 blur-3xl rounded-full pointer-events-none"></div>
      </Parallax>
      <Parallax speed={10}>
        <div className="absolute bottom-20 right-5 sm:right-10 w-60 sm:w-72 h-60 sm:h-72 bg-purple-500 opacity-15 blur-3xl rounded-full pointer-events-none"></div>
      </Parallax>

      {/* Profile Header */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/profile.jpg`}
          alt="Suman Chettri"
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.4)] mb-5 sm:mb-6"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text">
          Suman Chettri
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mt-2 max-w-xl">
          Software Engineer | Full-Stack • Mobile • IoT • Embedded Systems
        </p>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 max-w-2xl leading-relaxed">
          I'm passionate about writing code that lives at the intersection of modern software applications and physical microcontrollers. Whether it's building an e-commerce platform like Organic Store, tuning PID loops for an autonomous robot, or setting up REST APIs, I focus on clean execution and real results.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://github.com/SumanChettri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:text-cyan-400 hover:scale-110 transition shadow-md"
            title="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </motion.div>

      {/* Academic & Engineering Journey Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-12 sm:mt-16 bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-5xl border border-gray-200 dark:border-gray-800"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <FaGraduationCap className="text-cyan-500" /> Academic & Engineering Journey
          </h2>
          <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 w-fit">
            <FaTrophy className="text-amber-400" /> Autonomous Rover Winner 🏆
          </span>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {[
            {
              icon: <FaUniversity className="text-cyan-500 text-xl sm:text-2xl" />,
              title: 'B.Tech in Computer Science and Engineering',
              place: 'Sikkim Institute of Science and Technology (SIST)',
              duration: '2024 - 2027',
              details: 'Deepening foundations in Data Structures, Algorithms, Software Engineering, Parallel Computing (MPI), Web Architecture, and Cloud Systems.',
            },
            {
              icon: <FaUniversity className="text-purple-500 text-xl sm:text-2xl" />,
              title: 'Diploma in Computer Engineering',
              place: 'Advanced Technical Training Center (ATTC)',
              duration: '2022 - 2024',
              details: 'Rigorous computer engineering fundamentals, OOP with C++/Java, operating systems, and microcontroller firmware programming.',
            },
            {
              icon: <FaUniversity className="text-emerald-500 text-xl sm:text-2xl" />,
              title: 'Class 12th — Information Technology Focus',
              place: 'Sadam Senior Secondary School',
              duration: 'Completed in 2022',
              details: 'Information Technology foundations, software logic, and relational database basics.',
            },
          ].map(({ icon, title, place, duration, details }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 4 }}
              className="flex items-start bg-white/60 dark:bg-gray-800/40 p-4 sm:p-6 rounded-2xl shadow-md border border-gray-200/60 dark:border-gray-700/40 transition"
            >
              <div className="p-2.5 sm:p-3 bg-cyan-500/10 rounded-xl mt-0.5 shrink-0">{icon}</div>
              <div className="ml-4 sm:ml-5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                    {duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-0.5">{place}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Categorized Tech Radar / Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 sm:mt-20 w-full max-w-5xl flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center flex items-center gap-2.5">
          <FaTerminal className="text-cyan-500 text-xl sm:text-2xl" /> Multi-Domain Skills & Radar
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 text-center max-w-xl">
          Filter technical competencies across languages, frontend, backend, mobile, IoT, robotics, and data analysis
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 sm:mt-8 max-w-4xl">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/70 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-6 sm:mt-8 w-full">
          {filteredSkills.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3, scale: 1.01 }}
              className="flex flex-col justify-between p-4 sm:p-5 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{item.name}</h4>
                  <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full ${
                    item.level === 'Strong'
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : item.level === 'Working'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : item.level.includes('Achievement')
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}>
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-800 text-[10px] font-mono text-gray-400">
                Category: <span className="text-cyan-400">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CS Foundations Section Integration */}
      <CSFoundations />

      {/* Call to Action */}
      <motion.a
        href="https://wa.me/919641025910"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 mt-12 sm:mt-16 px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-600 text-white rounded-full text-sm sm:text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition flex items-center gap-2.5"
      >
        <span>💬 Let's Build Something Exceptional</span>
      </motion.a>
    </section>
  );
};

export default About;
