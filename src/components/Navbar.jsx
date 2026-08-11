// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack-map', label: 'Stack Map' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ darkMode, toggleDarkMode, onOpenCmd }) => {
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

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-7xl rounded-2xl ${
          scrolled
            ? 'backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-gray-300 dark:border-gray-800 shadow-xl'
            : 'bg-transparent border border-gray-200/50 dark:border-gray-800/50'
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between py-3 px-6">
          {/* Logo */}
          <a href="#home" className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <span>Suman Chettri</span>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 font-mono">SE</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                <span>{item.label}</span>
                <span className="block h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* CLI Terminal Trigger */}
            <button
              onClick={onOpenCmd}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 dark:bg-gray-900 text-emerald-400 hover:bg-black text-xs font-mono font-semibold border border-gray-700 shadow-sm transition"
              title="Open Terminal (Cmd+K / Ctrl+K)"
            >
              <span className="animate-pulse">🟢</span>
              <span>[ &gt;_ CLI ]</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title="Toggle Theme"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500 text-sm" />
              ) : (
                <FaMoon className="text-gray-800 text-sm" />
              )}
            </button>

            {/* Freelance CTA */}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-md hover:shadow-cyan-500/20 transition flex items-center gap-1.5"
            >
              <FaPaperPlane className="text-[10px]" />
              <span>Start a Project</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenCmd}
              className="px-2.5 py-1 rounded-full bg-gray-900 text-emerald-400 text-xs font-mono font-semibold border border-gray-800"
            >
              &gt;_ CLI
            </button>
            <button onClick={toggleNav} className="text-gray-800 dark:text-white p-1">
              {navOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
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
              className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl w-full shadow-2xl overflow-hidden border-t border-gray-200 dark:border-gray-800 rounded-b-2xl"
            >
              <div className="flex flex-col py-4 px-6 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={toggleNav}
                    className="text-left text-gray-800 dark:text-gray-200 py-2 text-base font-semibold hover:text-cyan-500 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      toggleNav();
                    }}
                    className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm"
                  >
                    {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
                  </button>

                  <a
                    href="#contact"
                    onClick={toggleNav}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-md"
                  >
                    Start a Project &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
