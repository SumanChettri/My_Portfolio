// src/components/ProjectModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaServer, FaCode, FaRocket, FaExclamationTriangle, FaBug, FaTrophy, FaLightbulb, FaSmileWink, FaInfoCircle
} from 'react-icons/fa';
import ArchitectureDiagram from './ArchitectureDiagram';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-lg overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 p-2.5 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaTimes size={16} />
          </button>

          {/* Modal Hero Banner */}
          <div className="relative h-48 sm:h-64 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 p-6 sm:p-8 flex flex-col justify-end shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-mono font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wider">
                {project.category || 'Featured Engineering Case Study'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="mt-1 sm:mt-2 text-white/90 text-xs sm:text-sm md:text-base max-w-2xl font-normal line-clamp-2">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto text-gray-800 dark:text-gray-200 font-sans flex-1">

            {/* Plain English (ELI5) Beginner Summary Banner */}
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 text-xs sm:text-sm leading-relaxed font-sans shadow-sm flex items-start gap-3">
              <FaInfoCircle className="text-cyan-400 text-lg shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold font-mono text-cyan-400 uppercase text-[11px] tracking-wider block mb-0.5">
                  Plain English Summary (For Non-Technical Visitors):
                </strong>
                <p className="text-gray-200 text-xs sm:text-sm">
                  {project.id === 'smart-parking' && "Think of this like an automatic valet — infrared sensors tell your smartphone app where empty spots are, and text you a pin code that automatically raises the gate barrier when typed!"}
                  {project.id === 'organic-store' && "Like Amazon Fresh, but custom-crafted for local organic farms so you can browse fresh fruits & veggies, add items to cart, and place orders with instant status tracking."}
                  {project.id === 'line-follower' && "A high-speed autonomous racecar that reads the track using light sensors and adjusts its motor speeds hundreds of times per second to win 1st place in robotics!"}
                  {project.id === 'argus-rover' && "A remote-controlled video reconnaissance rover equipped with gas and temperature sensors to safely inspect hazardous rescue areas before emergency teams enter."}
                  {project.id === 'basketball-scoreboard' && "A giant outdoor LED score matrix that referees can wirelessly control from their smartphones over local Wi-Fi without needing a manual scorekeeper."}
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
                <span className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 uppercase font-bold tracking-wider font-mono">Role</span>
                <p className="mt-0.5 font-bold text-gray-900 dark:text-white text-xs sm:text-sm">{project.role || 'Software & Hardware Engineer'}</p>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50">
                <span className="text-[10px] sm:text-xs text-purple-600 dark:text-purple-400 uppercase font-bold tracking-wider font-mono">Key Metric</span>
                <p className="mt-0.5 font-bold text-gray-900 dark:text-white text-xs sm:text-sm">{project.metric || 'Optimized Latency & State'}</p>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
                <span className="text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400 uppercase font-bold tracking-wider font-mono">Status</span>
                <p className="mt-0.5 font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-1.5">
                  <FaCheckCircle /> Production Prototype
                </p>
              </div>
            </div>

            {/* 1. Problem & 2. Solution */}
            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-1.5">
                  <FaExclamationTriangle className="text-amber-500 text-sm sm:text-base" /> The Real-World Problem
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-1.5">
                  <FaRocket className="text-cyan-500 text-sm sm:text-base" /> What Was Built (The Solution)
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* 3. Interactive System Architecture & Data Flow */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <FaServer className="text-purple-500" /> System Architecture & Data Flow
              </h3>
              <ArchitectureDiagram
                nodes={project.architectureNodes}
                asciiText={project.architectureText}
              />
            </div>

            {/* 4. Engineering Decisions & Trade-Offs */}
            {project.tradeoffs && (
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                  <FaCode className="text-pink-500" /> Technical Trade-Offs & Decisions
                </h3>
                <div className="space-y-2">
                  {project.tradeoffs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-cyan-500 font-bold mt-0.5">▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Challenges & Debugging */}
            {project.challenges && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <h4 className="text-xs sm:text-sm font-bold text-red-500 flex items-center gap-2 mb-2">
                    <FaBug /> Key Challenges & Bugs
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {project.challenges.map((c, idx) => (
                      <li key={idx}>• {c}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-500 flex items-center gap-2 mb-2">
                    <FaCheckCircle /> How It Was Solved
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {project.debugging.map((d, idx) => (
                      <li key={idx}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 6. Result & 7. Future Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                <h4 className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <FaTrophy /> Result Achieved
                </h4>
                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                  {project.result}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                <h4 className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <FaLightbulb /> Future Roadmap
                </h4>
                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                  {project.future}
                </p>
              </div>
            </div>

            {/* Dev Joke */}
            {project.techJoke && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center gap-2.5">
                <FaSmileWink className="text-amber-400 text-base shrink-0" />
                <span><strong className="font-bold">Developer Humour:</strong> {project.techJoke}</span>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-950/80 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gray-900 text-white dark:bg-gray-800 hover:bg-gray-800 text-xs font-mono font-semibold transition"
                >
                  <FaGithub /> GitHub Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-mono font-semibold hover:shadow-lg transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition text-center"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
