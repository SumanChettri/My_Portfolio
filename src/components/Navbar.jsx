// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaPaperPlane, FaTerminal, FaLaptopCode, FaProjectDiagram, FaRocket, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: FaRocket },
  { id: 'about', label: 'About', icon: FaLaptopCode },
  { id: 'capabilities', label: 'Capabilities', icon: FaProjectDiagram },
  { id: 'projects', label: 'Projects', icon: FaRocket },
  { id: 'philosophy', label: 'Principles', icon: FaProjectDiagram },
  { id: 'services', label: 'Services', icon: FaLaptopCode },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
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

  return (
    <div className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <nav
        className={`w-full max-w-7xl rounded-2xl sm:rounded-3xl ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-300/80 dark:border-slate-800 shadow-lg'
            : 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md'
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between py-2.5 sm:py-3.5 px-4 sm:px-6">
          {/* Logo */}
          <a href="#home" className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
              Suman Chettri
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-slate-700">
              SE
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* CLI Trigger */}
            <button
              onClick={onOpenCmd}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 transition"
              title="Open Terminal (Ctrl+K)"
            >
              <span className="text-emerald-500">●</span>
              <span>CLI</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
              title="Toggle Dark/Light Mode"
            >
              {darkMode ? (
                <FaSun className="text-amber-400 text-sm" />
              ) : (
                <FaMoon className="text-slate-700 text-sm" />
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-1.5"
            >
              <FaPaperPlane className="text-[10px]" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Actions Header (Custom Touch Optimized) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenCmd}
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-[11px] font-mono font-bold border border-slate-300 dark:border-slate-800 flex items-center gap-1 active:scale-95 transition"
            >
              <FaTerminal className="text-cyan-600 dark:text-cyan-400 text-[10px]" />
              <span>CLI</span>
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 active:scale-95 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun className="text-amber-400 text-xs" /> : <FaMoon className="text-slate-700 text-xs" />}
            </button>

            <button
              onClick={toggleNav}
              className="p-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white active:scale-95 transition ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {navOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl w-full shadow-2xl overflow-hidden border-t border-slate-200 dark:border-slate-800/80 rounded-b-2xl sm:rounded-b-3xl"
            >
              <div className="flex flex-col py-4 px-5 space-y-1.5">
                {NAV_ITEMS.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={toggleNav}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                    >
                      <ItemIcon className="text-blue-600 dark:text-cyan-400 text-xs shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                  <a
                    href="#contact"
                    onClick={toggleNav}
                    className="w-full text-center py-3 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 shadow-md flex items-center justify-center gap-2 active:scale-98 transition"
                  >
                    <FaPaperPlane className="text-[10px]" />
                    <span>Start a Project &rarr;</span>
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
