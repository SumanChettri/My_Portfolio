// src/components/CSFoundations.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaNetworkWired, FaCodeBranch, FaChevronDown, FaChartBar, FaInfoCircle } from 'react-icons/fa';

const CS_MODULES = [
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    icon: FaBrain,
    summary: 'Data Structures, Algorithms, OS & Database Systems',
    plainEnglish: 'The structural foundation of computers — how data is organized, how your operating system manages memory, and how databases store user records securely.',
    topics: [
      { tech: 'Data Structures & Algorithms', easy: 'Smart ways to organize data so your apps load and search instantly.' },
      { tech: 'Operating Systems & Paging', easy: 'How operating systems manage RAM so applications don\'t crash.' },
      { tech: 'Database Management (DBMS)', easy: 'Structured storage (SQL/MongoDB) holding user accounts securely.' },
      { tech: 'Computer Networks (TCP/IP)', easy: 'The rules of the internet that let mobile apps talk to web servers.' },
    ],
  },
  {
    id: 'parallel',
    title: 'Parallel & Distributed Computing',
    icon: FaNetworkWired,
    summary: 'MPI Parallelization, Speedup Graphs & Multi-Core Math',
    plainEnglish: 'Instead of having 1 CPU core do a heavy math calculation alone, work is distributed across 4 CPU cores to finish in a fraction of the time.',
    topics: [
      { tech: 'MPI Parallel Programming', easy: 'Splitting heavy calculation tasks across multiple CPU cores simultaneously.' },
      { tech: 'Parallel Matrix & Sorting Algorithms', easy: 'Sorting millions of dataset entries simultaneously in parallel blocks.' },
      { tech: 'Speedup Analysis & Efficiency', easy: 'Measuring performance gains when adding extra processors to a task.' },
      { tech: 'Shared vs Distributed Memory', easy: 'Deciding whether worker threads share central RAM or pass messages over network sockets.' },
    ],
  },
  {
    id: 'compiler',
    title: 'Compiler Design & Grammar Theory',
    icon: FaCodeBranch,
    summary: 'Lexical Tokenization, Parsing Trees & Code Execution',
    plainEnglish: 'Translating human-written code (like C++ or JavaScript) into machine instructions that computer chips can execute directly.',
    topics: [
      { tech: 'Lexical Analysis (Lex/Flex)', easy: 'Reading source code text and converting characters into token streams.' },
      { tech: 'Syntax Parsing & Grammar Sets', easy: 'Checking grammar rules to ensure code forms valid language structures.' },
      { tech: 'Abstract Syntax Trees (AST)', easy: 'Building logic flowcharts of your code to determine execution priority.' },
      { tech: 'Semantic Translation & SDT', easy: 'Translating the logic tree into low-level machine instructions.' },
    ],
  },
];

const CSFoundations = () => {
  const [openModule, setOpenModule] = useState('parallel');
  const [parallelWorkers, setParallelWorkers] = useState(4);

  // Calculate execution time and speedup
  const singleCoreTime = 10.0;
  const parallelTime = (singleCoreTime / parallelWorkers + 0.5).toFixed(1);
  const speedupRatio = (singleCoreTime / parallelTime).toFixed(1);

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 px-2 sm:px-4">
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-mono font-semibold tracking-widest uppercase inline-flex items-center gap-2">
          <FaGraduationCap /> CS Knowledge Base
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
          Computer Science & Systems Foundations
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto">
          Theoretical computer science principles backing software engineering and low-level firmware systems.
        </p>
      </div>

      {/* Interactive Visual Graph: Parallel Processing Speedup */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-950/90 border border-slate-200 dark:border-purple-500/30 text-slate-900 dark:text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <FaChartBar /> Interactive Visual Graph
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
              Parallel Processing Speedup Calculator
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Adjust CPU worker cores to observe how task completion time decreases:
            </p>
          </div>

          {/* Interactive Worker Slider */}
          <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300">Cores: <strong className="text-blue-600 dark:text-cyan-400">{parallelWorkers} Workers</strong></span>
            <input
              type="range"
              min="1"
              max="8"
              value={parallelWorkers}
              onChange={(e) => setParallelWorkers(parseInt(e.target.value))}
              className="accent-blue-600 dark:accent-cyan-400 cursor-pointer w-24 sm:w-32"
            />
          </div>
        </div>

        {/* Graph Display */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Visual Bars */}
          <div className="space-y-4 font-mono text-xs">
            <div>
              <div className="flex justify-between mb-1 text-slate-700 dark:text-slate-300">
                <span>1 CPU Core (Sequential)</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">{singleCoreTime}s</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-slate-700 dark:text-slate-300">
                <span>{parallelWorkers} CPU Cores (Parallel)</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{parallelTime}s</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                <motion.div
                  animate={{ width: `${(parallelTime / singleCoreTime) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400 h-full rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>

          {/* Speedup Ratio Display */}
          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-center flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-cyan-400 font-mono">
              {speedupRatio}x
            </span>
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mt-1 uppercase tracking-wider">
              Performance Speedup Ratio
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Execution completes <span className="text-emerald-600 dark:text-emerald-400 font-bold">{speedupRatio} times faster</span> by parallelizing calculation workloads.
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
              className="rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenModule(isOpen ? null : module.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-3 sm:gap-4 pr-2">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 text-lg sm:text-xl shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {module.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {module.summary}
                    </p>
                  </div>
                </div>
                <FaChevronDown
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-purple-600 dark:text-purple-400' : ''
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
                    className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-200 dark:border-slate-800/60 space-y-3"
                  >
                    {/* Summary Explanation Banner */}
                    <div className="mt-2 p-3.5 rounded-xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/20 text-slate-700 dark:text-cyan-300 text-xs font-sans flex items-start gap-2.5">
                      <FaInfoCircle className="text-blue-600 dark:text-cyan-400 text-base shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold font-mono text-blue-700 dark:text-cyan-400 uppercase text-[10px] tracking-wider block">Overview & Purpose:</strong>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">{module.plainEnglish}</p>
                      </div>
                    </div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {module.topics.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs"
                        >
                          <span className="font-bold font-mono text-purple-700 dark:text-purple-400 block mb-1">
                            {t.tech}
                          </span>
                          <span className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                            {t.easy}
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
