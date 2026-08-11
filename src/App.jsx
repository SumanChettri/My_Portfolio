// src/App.jsx
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WhatIBuild from './components/WhatIBuild';
import About from './pages/About';
import Projects from './pages/Projects';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import Services from './components/Services';
import Contact from './pages/Contacts';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CommandPalette from './components/CommandPalette';

import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || true; // Default to dark
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      rootElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="font-sans transition-colors duration-500 bg-gradient-to-br from-slate-100 via-slate-200 to-white dark:from-slate-950 dark:via-black dark:to-slate-950 min-h-screen text-slate-900 dark:text-slate-100 relative">
          {/* Global Cyber Dots Background Layer */}
          <div className="fixed inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] dark:bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-25 dark:opacity-30 pointer-events-none z-0"></div>

          {/* Global Ambient Glow Orbs */}
          <div className="fixed top-10 left-5 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/15 dark:bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none z-0"></div>
          <div className="fixed bottom-10 right-5 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/15 dark:bg-purple-600/10 blur-[140px] rounded-full pointer-events-none z-0"></div>

          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            onOpenCmd={() => setIsCmdOpen(true)}
          />
          <main className="relative z-10">
            <Home onOpenCmd={() => setIsCmdOpen(true)} />
            <WhatIBuild />
            <About />
            <Projects />
            <EngineeringPhilosophy />
            <Services />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <CommandPalette
            isOpen={isCmdOpen}
            onClose={() => setIsCmdOpen(false)}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>
      )}
    </>
  );
}

export default App;
