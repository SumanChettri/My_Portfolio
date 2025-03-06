// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-7xl rounded-xl ${
          scrolled
            ? 'backdrop-blur-md bg-white/30 dark:bg-black/30 border border-gray-300 dark:border-gray-700 shadow-md'
            : 'bg-transparent border border-gray-200 dark:border-gray-800'
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between py-4 px-4">
          {/* Logo */}
        <div className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Suman Tewari 🚀
        </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-lg capitalize text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 relative group"
              >
                <span>{item}</span>
                <span className="block h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-gray-800 dark:text-white">
              {navOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md w-full shadow-lg overflow-hidden border-t border-gray-200 dark:border-gray-700 rounded-b-xl"
            >
              <div className="flex flex-col py-4 space-y-2">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    variants={menuVariants}
                    whileHover={{ scale: 1.05 }}
                    onClick={toggleNav}
                    className="block text-center text-gray-800 dark:text-white py-3 text-lg capitalize hover:bg-orange-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => {
                    toggleDarkMode();
                    toggleNav();
                  }}
                  className="mx-auto mt-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? (
                    <FaSun className="text-yellow-500" />
                  ) : (
                    <FaMoon className="text-gray-800" />
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
