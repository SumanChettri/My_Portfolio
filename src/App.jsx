// src/App.jsx
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WhatIBuild from './components/WhatIBuild';
import About from './pages/About';
import Projects from './pages/Projects';
import SystemMap from './components/SystemMap';
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
        <div className="font-sans transition-colors duration-500 bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100">
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            onOpenCmd={() => setIsCmdOpen(true)}
          />
          <main>
            <Home onOpenCmd={() => setIsCmdOpen(true)} />
            <WhatIBuild />
            <About />
            <Projects />
            <SystemMap />
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
