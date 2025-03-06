// src/components/Preloader.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Preloader = ({ finishLoading }) => {
  const [loading, setLoading] = useState(true);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      finishLoading();
    }, 3000); // Preloader duration
    return () => clearTimeout(timer);
  }, [finishLoading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      {/* Particle Background */}
      <Particles
        id="preloader-particles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: '#000' },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            color: { value: '#ffffff' },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 150,
              opacity: 0.4,
            },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Glowing Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1, 1, 1.2],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
        }}
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
      >
       Suman Tewari🚀
      </motion.h1>
    </div>
  );
};

export default Preloader;
