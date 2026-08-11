import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaArrowRight } from 'react-icons/fa';

const SIMPLE_FUNNY_JOKES = [
  "Why was the computer cold? Because it left its Windows open! 🥶",
  "Why do programmers hate nature? It has too many bugs! 🐛",
  "Software updates are like cleaning your room — you keep postponing until everything stops working! 🧹",
  "Hardware: The part of a computer you can kick when the software freezes! 🦵",
  "An optimist sees the glass half full. A pessimist sees it half empty. A programmer sees a 50% memory leak! 🥤",
  "Why did the smartphone get glasses? Because it lost all its contacts! 👓"
];

const COMMANDS = {
  help: 'Available commands: help, about, skills, projects, stack, services, experience, status, joke, resume, whoami, coffee, sudo, contact, github, theme, clear',
  about: 'Suman Chettri — Software Engineer building Full-Stack Web Apps, Mobile Apps, REST APIs, and connected ESP32/IoT Hardware Systems.',
  skills: 'Strong: C, C++, Java, SQL, HTML/CSS | Working: React 19, Node.js, Express, MongoDB, Git | Hands-on: ESP32/ESP8266, Arduino, React Native, REST APIs, Robotics PID | Familiar: Python, Docker, Data Analysis',
  projects: 'Flagship Projects: 1. Smart Parking (IoT+Web+Mobile) | 2. Organic Store (E-Commerce) | 3. High-Speed Line Follower (1st Place Winner 🏆) | 4. ARGUS Recon Rover | 5. Basketball Scoreboard (LED Matrix)',
  stack: 'Full-Stack Web (React + Node + Express + MongoDB) ↔ Mobile (React Native) ↔ IoT Telemetry (ESP32 + IR + GSM + Sensors)',
  services: 'Freelance Offerings: Full-Stack Web Apps, REST APIs, Mobile Apps, Organic E-Commerce Stores, IoT Hardware Prototypes, Embedded Motor Control',
  experience: 'Academic & Engineering: B.Tech CSE (SIST 2024-2027) | Diploma Computer Engineering (ATTC 2022-2024) | 1st Place Autonomous Robotics Winner',
  status: '🟢 Status: Available for Software Engineering, Full-Stack, IoT & Select Freelance Project Roles.',
  resume: 'Resume summary available. Request full PDF resume directly at sumantewari758@gmail.com',
  whoami: 'You are a curious visitor exploring Suman Chettri\'s engineering portfolio. Welcome!',
  coffee: '☕ Converting caffeine into clean code... Energy levels at 100%!',
  sudo: '🔒 Permission denied: Nice try! But root access requires sending a message to sumantewari758@gmail.com.',
  ping: '🏓 PONG! 1ms response speed — faster than your morning coffee machine.',
  cat: '🐱 Meow! No cats or files were harmed in the making of this CLI palette.',
  contact: 'Email: sumantewari758@gmail.com | Phone: +91 9641025910 | GitHub: https://github.com/SumanChettri',
  github: 'Opening GitHub profile: https://github.com/SumanChettri',
};

const CommandPalette = ({ isOpen, onClose, darkMode, toggleDarkMode }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Suman Chettri\'s Interactive Engineering CLI (v3.0).' },
    { type: 'system', text: 'Type "help" for commands or "joke" for simple funny jokes!' },
  ]);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) return;

      const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

      if (trimmed === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      if (trimmed === 'joke') {
        const randomJoke = SIMPLE_FUNNY_JOKES[Math.floor(Math.random() * SIMPLE_FUNNY_JOKES.length)];
        newHistory.push({ type: 'system', text: `😄 ${randomJoke}` });
      } else if (trimmed === 'theme') {
        toggleDarkMode();
        newHistory.push({ type: 'system', text: `Theme toggled to ${darkMode ? 'Light' : 'Dark'} mode.` });
      } else if (trimmed === 'github') {
        window.open('https://github.com/SumanChettri', '_blank');
        newHistory.push({ type: 'system', text: COMMANDS.github });
      } else if (COMMANDS[trimmed]) {
        newHistory.push({ type: 'system', text: COMMANDS[trimmed] });
      } else {
        newHistory.push({ type: 'error', text: `Command not found: "${trimmed}". Type "help" or "joke" for fun commands.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-3xl bg-gray-950 border border-gray-800 text-gray-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px] sm:h-[540px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-gray-800 bg-gray-900/80">
            <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs sm:text-sm font-semibold truncate">
              <FaTerminal className="text-base animate-pulse shrink-0" />
              <span className="truncate">suman-chettri@engineering-cli:~</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition shrink-0"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-2.5 leading-relaxed">
            {history.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.type === 'user'
                    ? 'text-yellow-400 font-semibold'
                    : item.type === 'error'
                    ? 'text-red-400'
                    : 'text-gray-300'
                }`}
              >
                {item.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Command Input Area */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-800 bg-gray-900/60 flex items-center gap-2.5">
            <span className="text-emerald-400 font-mono font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="Type a command (e.g. help, joke, projects, stack)..."
              className="flex-1 bg-transparent text-gray-100 font-mono outline-none placeholder-gray-600 text-xs sm:text-sm"
            />
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-gray-800/80 rounded-md text-[11px] text-gray-400 font-mono border border-gray-700">
              <span>Press Enter</span>
              <FaArrowRight size={10} />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
