// src/pages/Projects.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaLayerGroup,
  FaArrowRight,
  FaTrophy,
  FaExclamationTriangle
} from 'react-icons/fa';
import ProjectModal from '../components/ProjectModal';
import { FLAGSHIP_PROJECTS } from '../data/projects';

const GITHUB_USERNAME = 'SumanChettri';

const REPO_CATEGORIES = ['All', 'Web', 'Backend', 'Mobile', 'IoT', 'Other'];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeRepoFilter, setActiveRepoFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API rate limit or error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching repos:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredRepos = repos.filter((repo) => {
    if (activeRepoFilter === 'All') return true;
    const name = (repo.name || '').toLowerCase();
    const desc = (repo.description || '').toLowerCase();
    const lang = (repo.language || '').toLowerCase();

    if (activeRepoFilter === 'Web') return lang.includes('javascript') || lang.includes('html') || lang.includes('css') || desc.includes('web') || desc.includes('react');
    if (activeRepoFilter === 'Backend') return lang.includes('node') || desc.includes('api') || desc.includes('server') || desc.includes('express');
    if (activeRepoFilter === 'Mobile') return name.includes('mobile') || desc.includes('react native') || desc.includes('expo');
    if (activeRepoFilter === 'IoT') return lang.includes('c++') || lang.includes('c') || desc.includes('esp32') || desc.includes('arduino') || desc.includes('sensor');
    return true;
  });

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center px-3 sm:px-6 lg:px-8 py-14 sm:py-24 bg-transparent text-slate-900 dark:text-white"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mb-8 sm:mb-16 relative z-10"
      >
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase">
          Engineering Case Studies
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-3 sm:mt-4 tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base md:text-lg mt-2 sm:mt-3">
          Practical case studies detailing software design, physical hardware integration, network protocols, and real-world results.
        </p>
      </motion.div>

      {/* Flagship Case Studies Grid (2 Columns per row on Mobile!) */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 max-w-7xl w-full mb-12 sm:mb-24">
        {FLAGSHIP_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/90 dark:bg-slate-900/60 border border-slate-300/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 text-[10px] sm:text-xs font-mono font-bold rounded-full border border-blue-200 dark:border-cyan-500/20 truncate max-w-[110px] sm:max-w-none">
                  {project.category}
                </span>
                <span className="hidden sm:flex text-[11px] text-slate-500 dark:text-slate-400 font-mono items-center gap-1">
                  <FaLayerGroup /> Case Study
                </span>
              </div>

              <h3 className="text-xs sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                {project.title}
              </h3>
              
              <p className="mt-1.5 sm:mt-2.5 text-[11px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                {project.tagline}
              </p>

              {/* Metric Badge */}
              <div className="mt-2.5 sm:mt-4 inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-[10px] sm:text-xs font-mono font-semibold rounded-lg border border-purple-200 dark:border-purple-500/20 truncate max-w-full">
                {project.id === 'line-follower' ? <FaTrophy className="text-amber-500 shrink-0" /> : null}
                <span className="truncate">{project.metric}</span>
              </div>

              <div className="mt-3 sm:mt-5 flex flex-wrap gap-1 sm:gap-2">
                {project.techStack.slice(0, 3).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[10px] sm:text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded font-mono font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 sm:mt-8 pt-2.5 sm:pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-blue-600 dark:text-cyan-400 font-mono font-semibold text-[10px] sm:text-xs">
              <span>Read Case Study</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Live Feed Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-6 sm:mb-8 relative z-10"
      >
        <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
          <span>⚡ Public Repositories</span>
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-sm mt-1.5">
          Live synchronized feed from <span className="font-mono font-bold text-blue-600 dark:text-cyan-400">github.com/{GITHUB_USERNAME}</span>
        </p>

        {/* Repo Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5">
          {REPO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveRepoFilter(cat)}
              className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold transition ${
                activeRepoFilter === cat
                  ? 'bg-blue-600 dark:bg-cyan-500 text-white shadow-md'
                  : 'bg-white/90 dark:bg-slate-800/70 text-slate-800 dark:text-slate-300 border border-slate-300/80 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 animate-pulse my-6">
          Loading GitHub repositories...
        </div>
      )}

      {/* Error Fallback */}
      {error && !loading && (
        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-mono max-w-md text-center my-4 flex items-center justify-center gap-2">
          <FaExclamationTriangle />
          <span>GitHub feed cached. Displaying public projects.</span>
        </div>
      )}

      {/* GitHub Repos Grid (2 Columns per row on Mobile!) */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 max-w-7xl w-full">
        {filteredRepos.map((repo, index) => (
          <motion.div
            key={repo.id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true }}
            className="group relative p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/90 dark:bg-slate-900/60 border border-slate-300/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xs sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition font-mono truncate">
                {repo.name}
              </h4>

              <p className="text-slate-600 dark:text-slate-300 mb-3 text-[11px] sm:text-xs leading-snug sm:leading-relaxed line-clamp-2">
                {repo.description || 'Public engineering repository.'}
              </p>

              <div className="flex flex-wrap gap-1 text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 mb-3">
                <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  <FaStar className="text-amber-500" /> {repo.stargazers_count || 0}
                </span>
                <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  <FaCodeBranch className="text-blue-500 dark:text-cyan-500" /> {repo.forks_count || 0}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-slate-200 dark:border-slate-800 text-[10px] sm:text-xs font-mono">
              <a
                href={repo.html_url || `https://github.com/SumanChettri/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-cyan-400 font-semibold hover:underline"
              >
                <FaGithub /> Code
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
