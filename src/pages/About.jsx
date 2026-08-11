// src/pages/About.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaUniversity, FaTerminal, FaGithub, FaTrophy, FaNetworkWired
} from 'react-icons/fa';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/skills';
import CSFoundations from '../components/CSFoundations';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-transparent text-slate-900 dark:text-white transition-all duration-500"
    >
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
          className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.3)] mb-4 sm:mb-6"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text">
          Suman Chettri
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 mt-2 max-w-xl">
          Software & Systems Engineer | Full-Stack • Networking • IoT
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-2xl leading-relaxed">
          I write code and configure systems at the intersection of modern web software, computer networks, and physical microcontrollers. From building e-commerce platforms like Organic Store to configuring switches/routers, tuning PID motor algorithms, and building REST APIs, I focus on real results.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://github.com/SumanChettri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:text-cyan-600 hover:scale-110 transition shadow-md border border-slate-300 dark:border-slate-700"
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
        className="relative z-10 mt-12 sm:mt-16 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl p-5 sm:p-10 rounded-3xl shadow-xl w-full max-w-5xl border border-slate-300/80 dark:border-slate-800"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <FaGraduationCap className="text-cyan-600 dark:text-cyan-400" /> Academic & Engineering Journey
          </h2>
          <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 w-fit">
            <FaTrophy className="text-amber-500" /> Autonomous Rover Winner 🏆
          </span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {[
            {
              icon: <FaUniversity className="text-blue-600 dark:text-cyan-400 text-xl sm:text-2xl" />,
              title: 'B.Tech in Computer Science and Engineering',
              place: 'Sikkim Institute of Science and Technology (SIST)',
              duration: '2024 - 2027',
              details: 'Deepening foundations in Data Structures, Computer Networks, Switch & Router Configuration, Operating Systems, Parallel Computing (MPI), and Cloud Systems.',
            },
            {
              icon: <FaNetworkWired className="text-purple-600 dark:text-purple-400 text-xl sm:text-2xl" />,
              title: 'Computer Networking & System Engineering',
              place: 'Practical & Hardware Lab Work',
              duration: '2022 - Present',
              details: 'Strong hands-on experience in switch and router configuration, IP subnetting, VLAN segmentation, TCP/IP socket programming, and Wi-Fi access point routing.',
            },
            {
              icon: <FaUniversity className="text-emerald-600 dark:text-emerald-400 text-xl sm:text-2xl" />,
              title: 'Diploma in Computer Engineering',
              place: 'Advanced Technical Training Center (ATTC)',
              duration: '2022 - 2024',
              details: 'Rigorous computer engineering fundamentals, OOP with C++/Java, operating systems, and microcontroller firmware programming.',
            },
          ].map(({ icon, title, place, duration, details }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 3 }}
              className="flex items-start bg-slate-50/90 dark:bg-slate-800/50 p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/50 transition"
            >
              <div className="p-2.5 sm:p-3 bg-blue-500/10 rounded-xl mt-0.5 shrink-0">{icon}</div>
              <div className="ml-3.5 sm:ml-5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h3>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-0.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-700">
                    {duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5">{place}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">{details}</p>
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
        className="relative z-10 mt-12 sm:mt-20 w-full max-w-5xl flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center flex items-center gap-2.5">
          <FaTerminal className="text-blue-600 dark:text-cyan-400 text-xl sm:text-2xl" /> Multi-Domain Skills & Radar
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5 text-center max-w-xl">
          Filter technical competencies across networking, frontend, backend, mobile, IoT, robotics, and data analysis
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-8 max-w-4xl">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white shadow-md'
                  : 'bg-white/90 dark:bg-slate-800/70 text-slate-800 dark:text-slate-300 border border-slate-300/80 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
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
              whileHover={{ y: -3 }}
              className="flex flex-col justify-between p-4 sm:p-5 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-md border border-slate-300/80 dark:border-slate-800 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full ${
                    item.level === 'Strong'
                      ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30'
                      : item.level === 'Working'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                      : item.level.includes('Achievement')
                      ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                      : 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/30'
                  }`}>
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                Category: <span className="text-blue-600 dark:text-cyan-400 font-semibold">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CS Foundations */}
      <CSFoundations />
    </section>
  );
};

export default About;
