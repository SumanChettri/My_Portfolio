// src/components/ProjectCaseStudyModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes, FaArrowLeft, FaGithub, FaExternalLinkAlt, FaVideo, FaCheckCircle,
  FaServer, FaCode, FaRocket, FaExclamationTriangle, FaBug, FaTrophy, FaInfoCircle, FaTools
} from 'react-icons/fa';
import ArchitectureDiagram from './ArchitectureDiagram';
import ImageLightbox from './ImageLightbox';

const ProjectCaseStudyModal = ({ project, onClose, onBack }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        >
          {/* Compact Integrated Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900 text-white border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <button
                onClick={onBack || onClose}
                className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition shrink-0"
              >
                <FaArrowLeft />
                <span className="hidden sm:inline">Back</span>
              </button>

              <span className="text-slate-600 hidden sm:inline">|</span>

              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold uppercase shrink-0">
                {project.category || project.status || 'Case Study'}
              </span>

              <h2 className="text-sm sm:text-lg font-bold text-white truncate">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition shrink-0 ml-2"
              aria-label="Close Case Study"
            >
              <FaTimes size={15} />
            </button>
          </div>

          {/* Expanded Main Scrollable Body */}
          <div className="p-4 sm:p-8 space-y-5 sm:space-y-7 overflow-y-auto flex-1 font-sans text-slate-800 dark:text-slate-200">

            {/* Tagline & Key Metrics Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {project.tagline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between sm:block text-xs">
                  <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold uppercase">Metric:</span>
                  <span className="font-bold text-slate-900 dark:text-white sm:block">{project.metric || 'Optimized'}</span>
                </div>
                <div className="flex items-center justify-between sm:block text-xs">
                  <span className="font-mono text-[11px] text-purple-600 dark:text-purple-400 font-bold uppercase">Status:</span>
                  <span className="font-bold text-slate-900 dark:text-white sm:block">{project.status || 'Working Prototype'}</span>
                </div>
                <div className="flex items-center justify-between sm:block text-xs">
                  <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">Verification:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 sm:inline-flex">
                    <FaCheckCircle className="text-xs" /> Tested & Functional
                  </span>
                </div>
              </div>
            </div>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <FaExclamationTriangle className="text-amber-500 text-sm" /> The Real-World Problem
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <FaRocket className="text-blue-600 dark:text-cyan-400 text-sm" /> Engineering Approach
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* System Architecture */}
            {project.architectureNodes && (
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-2.5">
                  <FaServer className="text-purple-600 dark:text-purple-400 text-sm" /> Complete System Architecture & Workflow
                </h3>
                <ArchitectureDiagram
                  nodes={project.architectureNodes}
                  asciiText={project.architectureText}
                />
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                  <FaTools className="text-blue-600 dark:text-cyan-400 text-sm" /> Key Features & Capabilities
                </h3>
                <div className="space-y-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 shrink-0 text-xs mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Details */}
            {project.implementationDetails && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                  <FaCode className="text-cyan-600 dark:text-cyan-400 text-sm" /> Implementation & Development Details
                </h3>
                <div className="space-y-2">
                  {project.implementationDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold font-mono text-xs shrink-0 mt-0.5">▸</span>
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Debugging */}
            {project.challenges && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40">
                  <h4 className="text-xs sm:text-sm font-bold text-red-800 dark:text-red-400 flex items-center gap-2 mb-2">
                    <FaBug /> Key Challenges & Bugs
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-800 dark:text-slate-200">
                    {project.challenges.map((c, idx) => (
                      <li key={idx} className="leading-relaxed">• {c}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                  <h4 className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2 mb-2">
                    <FaCheckCircle /> Debugging & Solutions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-800 dark:text-slate-200">
                    {project.debugging.map((d, idx) => (
                      <li key={idx} className="leading-relaxed">• {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Results / Achievements */}
            {project.results && (
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40">
                <h4 className="text-xs font-mono font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <FaTrophy /> Results & Achievements
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <ImageLightbox images={project.images} />
            )}

            {/* Tech Stack */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2.5">
                Technologies & Hardware
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Action Footer Bar */}
          <div className="px-4 sm:px-6 py-3 bg-slate-900 text-white border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none justify-center flex items-center gap-1.5 py-2 px-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-bold transition"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none justify-center flex items-center gap-1.5 py-2 px-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.watchDemoUrl && (
                <a
                  href={project.watchDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none justify-center flex items-center gap-1.5 py-2 px-3.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-mono font-bold transition"
                >
                  <FaVideo /> Watch Video
                </a>
              )}
            </div>

            <button
              onClick={onBack || onClose}
              className="w-full sm:w-auto py-2 px-4 rounded-lg text-xs font-mono font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition text-center border border-slate-700"
            >
              ← Back to Projects
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectCaseStudyModal;
