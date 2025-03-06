import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { FaArrowDown, FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

// Letter animation variants
const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.5 },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Home = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black transition-all duration-500 overflow-hidden"
    >
      {/* Parallax Glows */}
      <Parallax speed={-20}>
        <div className="absolute -z-10 w-80 h-80 bg-purple-500 opacity-30 blur-3xl rounded-full top-10 left-10"></div>
      </Parallax>

      <Parallax speed={15}>
        <div className="absolute -z-10 w-64 h-64 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-20 right-20"></div>
      </Parallax>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-12 p-12 border-[6px] rounded-[40px] backdrop-blur-3xl bg-white/30 dark:bg-gray-800/40 border-gray-300 dark:border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.2)] max-w-5xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex flex-col md:flex-row items-center justify-center text-center">
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block translate-x-3 md:translate-x-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            <AnimatedText text="Transforming Ideas" />
          </motion.span>

          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block -translate-x-3 md:translate-x-0 whitespace-nowrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent md:ml-3"
          >
            <AnimatedText text="Into Reality" />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-lg md:text-2xl text-gray-700 dark:text-gray-300"
        >
          Turning concepts into dynamic, interactive digital experiences.
        </motion.p>
        <motion.a
          href="#projects"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.1 }}
          className="mt-10 inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-3xl transition-transform"
        >
          Explore My Work
        </motion.a>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl">
        {[
          { icon: <FaCode />, title: "Optimized Code", desc: "Clean, scalable, and high-performance solutions." },
          { icon: <FaLaptopCode />, title: "Adaptive UI", desc: "Fluid designs that work perfectly on any device." },
          { icon: <FaPaintBrush />, title: "Visual Impact", desc: "Modern aesthetics with thoughtful UX." },
        ].map(({ icon, title, desc }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group p-8 rounded-[30px] backdrop-blur-2xl bg-white/60 dark:bg-gray-800/60 shadow-2xl border border-gray-300 dark:border-gray-700 hover:shadow-3xl transition-transform relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-5xl mb-6 text-blue-600 dark:text-yellow-400"
            >
              {icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 flex flex-col items-center text-gray-600 dark:text-gray-300"
      >
        <span className="text-sm uppercase tracking-wide">Scroll Down</span>
        <FaArrowDown className="mt-2 text-xl animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default Home;
