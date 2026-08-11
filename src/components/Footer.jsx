// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative w-full mt-24">
      {/* Top Wave Divider */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-16 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.37C196.76 69.45 86.38 72.35 0 68.13V120h1200V0c-110.28 26.89-221.61 53.78-331.91 51.93-110.3-1.85-221.65-34.51-330.14-33.75C429.47 18.94 418.02 43.3 321.39 56.37z"
            fill="currentColor"
            className="text-slate-200/40 dark:text-slate-900/40"
          />
        </svg>
      </div>

      {/* Footer Container */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 px-6 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo or Name */}
          <div className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Suman Chettri</span>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono">SE</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xl">
            <a
              href="https://github.com/SumanChettri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-pink-600 transition-transform hover:scale-110"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:sumantewari758@gmail.com"
              className="text-slate-700 dark:text-slate-300 hover:text-red-500 transition-transform hover:scale-110"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Suman Chettri. Full-Stack • Mobile • IoT Engineering.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
