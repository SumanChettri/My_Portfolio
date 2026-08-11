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
  FaFilter,
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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-white dark:from-black dark:via-gray-950 dark:to-black transition-all duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mb-16 relative z-10"
      >
        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
          Engineering Showcase
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 tracking-tight">
          Flagship Engineering Case Studies
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mt-3">
          Deep-dive technical case studies covering architectural decisions, data flows, hardware integration, and trade-offs.
        </p>
      </motion.div>

      {/* Flagship Case Studies Grid (5 Projects) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mb-24">
        {FLAGSHIP_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative p-8 rounded-3xl backdrop-blur-2xl bg-white/70 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold rounded-full border border-cyan-500/20">
                  {project.category}
                </span>
                <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                  <FaLayerGroup /> Architecture
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                {project.tagline}
              </p>

              {/* Performance Metric Badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold rounded-lg border border-purple-500/20">
                {project.id === 'line-follower' ? <FaTrophy className="text-amber-400" /> : null}
                <span>{project.metric}</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-md font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-cyan-600 dark:text-cyan-400 font-mono font-semibold text-xs">
              <span>View Case Study & Schematic</span>
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Live Feed Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-8 relative z-10"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <span>⚡ Public Repositories & Open Source</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2">
          Live synchronized feed from <span className="font-mono font-bold text-cyan-400">github.com/{GITHUB_USERNAME}</span>
        </p>

        {/* Repo Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {REPO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveRepoFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition ${
                activeRepoFilter === cat
                  ? 'bg-cyan-500 text-white shadow-md'
                  : 'bg-white/80 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Loading Indicator */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-mono text-gray-500 dark:text-gray-400 animate-pulse my-8"
        >
          Connecting to GitHub API feed...
        </motion.div>
      )}

      {/* Error Fallback */}
      {error && !loading && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono max-w-md text-center my-6 flex items-center justify-center gap-2">
          <FaExclamationTriangle />
          <span>GitHub API rate limit reached. Displaying featured repositories.</span>
        </div>
      )}

      {/* GitHub Repos Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {filteredRepos.map((repo, index) => (
          <motion.div
            key={repo.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative p-6 rounded-3xl backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-cyan-400 transition font-mono">
                {repo.name}
              </h4>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs leading-relaxed line-clamp-2">
                {repo.description || 'Public engineering repository on GitHub.'}
              </p>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono font-medium text-gray-600 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1 bg-gray-200/80 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                  <FaStar className="text-amber-400" /> {repo.stargazers_count || 0}
                </span>
                <span className="flex items-center gap-1 bg-gray-200/80 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                  <FaCodeBranch className="text-cyan-400" /> {repo.forks_count || 0}
                </span>
                {repo.language && (
                  <span className="flex items-center gap-1 bg-gray-200/80 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                    <FaCode /> {repo.language}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800 text-xs font-mono">
              <a
                href={repo.html_url || `https://github.com/SumanChettri/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
              >
                <FaGithub /> Repository
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
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
