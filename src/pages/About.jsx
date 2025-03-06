import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
  FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt,
  FaFigma, FaAndroid, FaBolt, FaGraduationCap, FaUniversity, FaDatabase, FaDocker, FaLinux
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

  const skills = [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaPython, name: 'Python' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: FaFigma, name: 'Figma' },
    { icon: FaAndroid, name: 'Android Studio' },
    { icon: FaBolt, name: 'Tailwind CSS' },
    { icon: FaDatabase, name: 'MongoDB' },
    { icon: FaDocker, name: 'Docker' },
    { icon: FaLinux, name: 'Linux' },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-all duration-500 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-900 to-black'
          : 'bg-gradient-to-br from-gray-100 via-gray-200 to-white'
      }`}
    >
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

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

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-center"
      >
        Suman Chettri
      </motion.h1>
      <p className="relative z-10 text-lg text-center text-gray-700 dark:text-gray-300 mt-2">
        Aspiring Full-Stack Developer
      </p>

      <div className="relative z-10 flex space-x-6 mt-4">
        <a href="https://github.com/SumanChettri" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-800 dark:text-white hover:text-blue-500 transition" />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-10 bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-6xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
          <FaGraduationCap className="text-yellow-500" /> Education
        </h2>
        <div className="mt-6 space-y-6">
          {[
            {
              icon: <FaUniversity className="text-blue-500" />,
              title: 'B.Tech in Computer Science and Engineering',
              place: 'Sikkim Institute of Science and Technology (SIST)',
              duration: '2024 - 2027',
            },
            {
              icon: <FaUniversity className="text-pink-500" />,
              title: 'Diploma in Computer Engineering',
              place: 'Advanced Technical Training Center (ATTC)',
              duration: '2022 - 2024',
            },
            {
              icon: <FaUniversity className="text-green-500" />,
              title: 'Class 12th - Information Technology',
              place: 'Sadam Senior Secondary School',
              duration: 'Completed in 2022',
            },
          ].map(({ icon, title, place, duration }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-white/40 dark:bg-gray-700/40 p-6 rounded-xl shadow-md backdrop-blur-lg transition"
            >
              {icon}
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</p>
                <p className="text-gray-600 dark:text-gray-400">{place}</p>
                <p className="text-sm text-gray-500">{duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <h2 className="relative z-10 text-3xl font-bold text-gray-800 dark:text-white mt-16">💡 Skills</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        {skills.map(({ icon: Icon, name }, idx) => (
          <motion.div
            key={idx}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 + idx * 0.1, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-4 md:p-6 bg-white/40 dark:bg-gray-800/40 rounded-xl shadow-xl"
          >
            <Icon className="text-4xl md:text-5xl text-blue-500 mb-2" />
            <p className="text-sm md:text-base">{name}</p>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="https://wa.me/919641025910"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        className="relative z-10 mt-16 p-4 md:p-6 bg-green-600 text-white rounded-full text-xl md:text-2xl font-bold"
      >
        Ready to build something legendary?
      </motion.a>
    </section>
  );
};

export default About;
