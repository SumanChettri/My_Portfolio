// src/components/CSFoundations.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaNetworkWired, FaCodeBranch, FaChevronDown, FaLightbulb, FaChartBar, FaRocket, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const CS_MODULES = [
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    icon: FaBrain,
    summary: 'Data Structures, Algorithms, OS & Database Systems',
    plainEnglish: 'The structural foundation of computers — how data is organized, how your computer manages memory, and how databases store information securely.',
    jokeNote: 'Why was the computer cold? Because it left its Windows open! ❄️💻',
    topics: [
      { tech: 'Data Structures & Algorithms', easy: 'Smart ways to organize data so your apps load instantly.' },
      { tech: 'Operating Systems & Paging', easy: 'How Windows/Linux manages RAM so apps don\'t crash.' },
      { tech: 'Database Management (DBMS)', easy: 'Digital filing cabinets (SQL/MongoDB) holding user accounts securely.' },
      { tech: 'Computer Networks (TCP/IP)', easy: 'The rules of the internet that let phones talk to web servers.' },
    ],
  },
  {
    id: 'parallel',
    title: 'Parallel & Distributed Computing',
    icon: FaNetworkWired,
    summary: 'MPI Parallelization, Speedup Graphs & Multi-Core Math',
    plainEnglish: 'Instead of having 1 person do a giant math problem alone, you hire 4 workers to do it together in a quarter of the time!',
    jokeNote: 'Parallel Processing Rule: Why hire 1 person for 10 hours when 4 people can finish it in 2.5 hours? ⚡',
    topics: [
      { tech: 'MPI Parallel Programming', easy: 'Splitting heavy math tasks across multiple CPU cores at once.' },
      { tech: 'Parallel Matrix & Sorting Algorithms', easy: 'Sorting millions of numbers simultaneously in parallel blocks.' },
      { tech: 'Amdahl\'s Law & Speedup Analysis', easy: 'Calculating exact percentage speed boosts when adding extra processors.' },
      { tech: 'Shared vs Distributed Memory', easy: 'Deciding whether workers share one notebook or pass letters to each other.' },
    ],
  },
  {
    id: 'compiler',
    title: 'Compiler Design & Code Translation',
    icon: FaCodeBranch,
    summary: 'Lexical Tokenization, Parsing Trees & Code Execution',
    plainEnglish: 'Translating human-readable code (like C++ or JavaScript) into 1s and 0s that computer chips actually understand.',
    jokeNote: 'Compiler Error: "Line 42 has a missing semicolon!" (Real cause: You forgot a bracket on line 3!) 🐞',
    topics: [
      { tech: 'Lexical Analysis (Lex/Flex)', easy: 'Reading your code letter by letter and turning words into tokens.' },
      { tech: 'Syntax Parsing & FIRST/FOLLOW', easy: 'Checking grammar rules to make sure your code forms valid sentences.' },
      { tech: 'Abstract Syntax Trees (AST)', easy: 'Building a flowchart tree of your code to understand what action happens first.' },
      { tech: 'Semantic Translation & SDT', easy: 'Converting the logic tree into machine binary instructions.' },
    ],
  },
];

const CSFoundations = () => {
  const [openModule, setOpenModule] = useState('parallel');
  const [parallelWorkers, setParallelWorkers] = useState(4);

  // Calculate simulated execution time and speedup
  const singleCoreTime = 10.0; // 10 seconds
  const parallelTime = (singleCoreTime / parallelWorkers + 0.5).toFixed(1);
  const speedupRatio = (singleCoreTime / parallelTime).toFixed(1);

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 px-2 sm:px-4">
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold tracking-widest uppercase inline-flex items-center gap-2">
          <FaGraduationCap /> CS Knowledge Made Simple
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-3">
          Computer Science & Systems — Demystified
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto">
          Theoretical computer science explained with plain-English analogies, simple jokes, and interactive visual charts.
        </p>
      </div>

      {/* Interactive Visual Graph: Parallel Computing Speedup Demonstration */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gray-950/90 border border-purple-500/30 text-white shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <FaChartBar /> Interactive Visual Graph
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
              Parallel Processing Speedup Visualizer
            </h4>
            <p className="text-xs text-gray-400">
              Drag the slider to add CPU worker cores and see how execution time drops!
            </p>
          </div>

          {/* Interactive Worker Slider */}
          <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-2xl border border-gray-800">
            <span className="text-xs font-mono text-gray-300">CPU Cores: <strong className="text-cyan-400">{parallelWorkers} Workers</strong></span>
            <input
              type="range"
              min="1"
              max="8"
              value={parallelWorkers}
              onChange={(e) => setParallelWorkers(parseInt(e.target.value))}
              className="accent-cyan-400 cursor-pointer w-24 sm:w-32"
            />
          </div>
        </div>

        {/* Graph Display */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Visual Bars */}
          <div className="space-y-4 font-mono text-xs">
            <div>
              <div className="flex justify-between mb-1 text-gray-300">
                <span>1 CPU Core (Sequential)</span>
                <span className="text-amber-400 font-bold">{singleCoreTime}s</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-gray-300">
                <span>{parallelWorkers} CPU Cores (Parallel)</span>
                <span className="text-emerald-400 font-bold">{parallelTime}s</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <motion.div
                  animate={{ width: `${(parallelTime / singleCoreTime) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>

          {/* Speedup Badge Box */}
          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
              {speedupRatio}x
            </span>
            <span className="text-xs font-mono font-bold text-gray-300 mt-1 uppercase tracking-wider">
              Faster Computation Speed
            </span>
            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
              In plain English: Tasks finish <span className="text-emerald-400 font-bold">{speedupRatio} times faster</span> because work is distributed simultaneously.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion CS Modules */}
      <div className="space-y-4">
        {CS_MODULES.map((module) => {
          const Icon = module.icon;
          const isOpen = openModule === module.id;

          return (
            <div
              key={module.id}
              className="rounded-2xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenModule(isOpen ? null : module.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-3 sm:gap-4 pr-2">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 dark:text-purple-400 text-lg sm:text-xl shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {module.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                      {module.summary}
                    </p>
                  </div>
                </div>
                <FaChevronDown
                  className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-purple-500' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-6 pb-5 pt-1 border-t border-gray-100 dark:border-gray-800/60 space-y-3"
                  >
                    {/* In Plain English Card */}
                    <div className="mt-2 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-sans flex items-start gap-2.5">
                      <FaInfoCircle className="text-cyan-400 text-base shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold block uppercase text-[10px] font-mono tracking-wider text-cyan-400">In Plain English (No Jargon):</strong>
                        <p className="text-gray-300 leading-relaxed mt-0.5">{module.plainEnglish}</p>
                      </div>
                    </div>

                    {/* Witty Dev Side Note */}
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono flex items-center gap-2">
                      <FaLightbulb className="text-amber-400 shrink-0" />
                      <span>{module.jokeNote}</span>
                    </div>

                    {/* Topic Cards with Plain English translation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {module.topics.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-950/80 border border-gray-200/60 dark:border-gray-800 text-xs"
                        >
                          <span className="font-bold font-mono text-purple-400 block mb-1">
                            {t.tech}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
                            💡 {t.easy}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CSFoundations;
