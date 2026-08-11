// src/components/DomainExplorerModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes, FaArrowLeft, FaLayerGroup, FaArrowRight, FaSearch, FaCheckCircle,
  FaLaptopCode, FaServer, FaMicrochip, FaRobot, FaMobileAlt, FaTools
} from 'react-icons/fa';
import { DOMAIN_CATEGORIES, DOMAIN_PROJECTS } from '../data/domainProjects';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

const ICON_MAP = {
  FaLaptopCode,
  FaServer,
  FaMicrochip,
  FaRobot,
  FaMobileAlt,
  FaTools,
};

const DomainExplorerModal = ({ domainId, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  if (!domainId) return null;

  const domain = DOMAIN_CATEGORIES.find((d) => d.id === domainId) || DOMAIN_CATEGORIES[0];
  const projects = DOMAIN_PROJECTS[domainId] || [];
  const Icon = ICON_MAP[domain.icon] || FaLaptopCode;

  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        >
          {/* Compact Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900 text-white border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <span className="text-xs font-mono font-bold text-cyan-400">What I Build</span>
              <span className="text-slate-600">&rarr;</span>
              <span className="text-xs font-mono font-bold text-white uppercase truncate">
                {domain.title} ({projects.length} Projects)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition shrink-0 ml-2"
              aria-label="Close Domain Explorer"
            >
              <FaTimes size={15} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div className="relative">
              <FaSearch className="absolute top-2.5 left-3 text-slate-400 text-xs" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search projects in ${domain.title}...`}
                className="w-full pl-9 pr-4 py-1.5 sm:py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs font-mono outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Expanded Project Cards Grid */}
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 font-sans">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 text-slate-500 font-mono text-xs">
                No matching projects found for "{searchQuery}".
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProjects.map((proj) => (
                  <motion.div
                    key={proj.id}
                    whileHover={{ y: -3 }}
                    onClick={() => setSelectedProject(proj)}
                    className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-cyan-500/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 text-[10px] sm:text-xs font-mono font-bold rounded-md border border-blue-200 dark:border-cyan-500/20 truncate">
                          {proj.status || 'Project'}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {proj.metric}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                        {proj.title}
                      </h3>

                      <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {proj.tagline}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {proj.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-blue-600 dark:text-cyan-400 font-mono font-bold text-xs">
                      <span>Explore Case Study</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Compact Footer Bar */}
          <div className="px-4 py-2.5 bg-slate-900 text-white border-t border-slate-800 flex items-center justify-between shrink-0 text-xs font-mono">
            <span className="text-slate-400 text-[11px] hidden sm:inline">
              Click any project card to view architecture, code details, and gallery
            </span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-1.5 px-4 rounded-lg text-xs font-mono font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition text-center"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>

      {/* Nested Case Study Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onBack={() => setSelectedProject(null)}
        />
      )}
    </AnimatePresence>
  );
};

export default DomainExplorerModal;
