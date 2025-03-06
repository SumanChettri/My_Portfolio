import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaCalendarAlt,
  FaTag,
} from 'react-icons/fa';

const GITHUB_USERNAME = 'SumanChettri';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-500 overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-gray-500 to-blue-700 bg-clip-text text-transparent mb-16 relative z-10"
      >
        🚀 My GitHub Projects
      </motion.h2>

      {/* Loading */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-gray-500 dark:text-gray-400 animate-pulse"
        >
          Fetching projects...
        </motion.div>
      )}

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-6 rounded-3xl backdrop-blur-2xl bg-white/20 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_0_60px_rgba(0,150,255,0.4)] hover:-translate-y-2 transition-all overflow-visible"
          >
            {/* Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-gray-700 opacity-10 blur-2xl pointer-events-none"></div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-500 transition">
              {repo.name}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
              {repo.description || 'No description provided.'}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 dark:text-gray-400 mb-5">
              <span className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                <FaStar /> {repo.stargazers_count} Stars
              </span>
              <span className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                <FaCodeBranch /> {repo.forks_count} Forks
              </span>
              {repo.language && (
                <span className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  <FaCode /> {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                <FaCalendarAlt /> {new Date(repo.created_at).getFullYear()}
              </span>
            </div>

            {/* Topics */}
            {repo.topics?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {repo.topics.slice(0, 3).map((topic, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 text-xs rounded-full"
                  >
                    <FaTag /> {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition cursor-pointer"
              >
                <FaGithub /> Source Code
              </a>
              {repo.homepage ? (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline hover:scale-105 transition cursor-pointer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              ) : (
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  No live demo
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {!loading && repos.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 dark:text-gray-400 mt-10"
        >
          No public repositories found.
        </motion.p>
      )}
    </section>
  );
};

export default Projects;
