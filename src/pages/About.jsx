// src/components/About.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
  FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaAndroid, FaBolt, FaGraduationCap, FaUniversity
} from 'react-icons/fa';

const About = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 80 },
      color: { value: theme === 'dark' ? '#ffffff' : '#000000' },
      links: {
        enable: true,
        color: theme === 'dark' ? '#ffffff' : '#000000',
        distance: 120,
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 1.2 },
      size: { value: { min: 1, max: 4 } },
      opacity: { value: 0.4 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
    },
    background: { color: 'transparent' },
  };

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-all duration-500 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-900 to-black'
          : 'bg-gradient-to-br from-gray-100 via-gray-200 to-white'
      }`}
    >
      {/* Particles */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

      {/* Floating Glow */}
      <Parallax speed={-20}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      </Parallax>
      <Parallax speed={15}>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      </Parallax>

      {/* Profile */}
      <motion.img
        src={`${import.meta.env.BASE_URL}images/profile.jpg`}
        alt="Suman Chettri"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-44 h-44 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_60px_rgba(0,0,255,0.6)] mb-6"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-center"
      >
        Suman Chettri
      </motion.h1>
      <p className="relative z-10 text-lg text-gray-700 dark:text-gray-300 mt-2">
        Aspiring Full-Stack Developer
      </p>

      {/* Social */}
      <div className="relative z-10 flex space-x-6 mt-4">
        <a href="https://github.com/SumanChettri" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-800 dark:text-white hover:text-blue-500 transition" />
        </a>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-10 bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl p-8 rounded-2xl shadow-xl max-w-3xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
          <FaGraduationCap className="text-yellow-500" /> Education
        </h2>
        <div className="mt-4 space-y-4">
          {[
            {
              icon: <FaUniversity className="text-blue-500" />,
              title: 'B.Tech in Computer Science',
              place: 'Sikkim Institute of Science and Technology (SIST)',
            },
            {
              icon: <FaUniversity className="text-pink-500" />,
              title: 'Diploma in Civil Engineering',
              place: 'Advanced Technical Training Center (ATTC)',
            },
          ].map(({ icon, title, place }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="flex items-center bg-white/40 dark:bg-gray-700/40 p-4 rounded-lg shadow-md backdrop-blur-lg transition"
            >
              {icon}
              <div className="ml-4">
                <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold">{title}</p>
                <p className="text-gray-600 dark:text-gray-400">{place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <h2 className="relative z-10 text-3xl font-bold text-gray-800 dark:text-white mt-14">💡 Skills</h2>
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
        {[
          FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaAndroid, FaBolt
        ].map((Icon, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 10 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4 + idx * 0.1, ease: 'easeInOut' }}
            className="flex flex-col items-center p-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition"
          >
            <Icon className="text-4xl text-blue-400 mb-2" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative z-10 mt-16 p-6 bg-gray-800 text-white rounded-full text-center text-2xl font-bold"
      >
        Ready to build something legendary? Let’s connect!
      </motion.div>
    </section>
  );
};

export default About;
