// src/components/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative w-full mt-32">
      {/* Particle Background */}
      <Particles
        options={{
          fullScreen: false,
          particles: {
            number: { value: 30 },
            size: { value: { min: 1, max: 3 } },
            color: { value: '#ffffff' },
            opacity: { value: 0.2 },
            move: { enable: true, speed: 0.3 },
            links: { enable: true, color: '#ffffff', opacity: 0.1, distance: 100 },
          },
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Top Wave */}
      <div className="absolute -top-20 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-24 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.37C196.76 69.45 86.38 72.35 0 68.13V120h1200V0c-110.28 26.89-221.61 53.78-331.91 51.93-110.3-1.85-221.65-34.51-330.14-33.75C429.47 18.94 418.02 43.3 321.39 56.37z"
            fill="currentColor"
            className="text-gray-100 dark:text-gray-900"
          />
        </svg>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative py-16 px-6 bg-white/30 dark:bg-black/30 backdrop-blur-xl border-t border-gray-300 dark:border-gray-700 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo or Name */}
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            Suman Chettri 🚀
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/SumanChettri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 text-2xl transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/" // Replace with your Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 text-2xl transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:sumanchettri@example.com" // Replace with your email
              className="text-gray-800 dark:text-white hover:text-green-500 dark:hover:text-green-400 text-2xl transition-transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Suman Chettri. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
