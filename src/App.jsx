// src/App.jsx
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contacts';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || true; // Default to dark
  });
  const [isLoading, setIsLoading] = useState(true);

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
    }, 2000); // Matches Preloader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className={`font-sans transition-colors duration-500 bg-white dark:bg-gray-900`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
