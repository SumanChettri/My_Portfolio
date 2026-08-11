// src/components/SystemMap.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLaptopCode, FaMobileAlt, FaServer, FaDatabase, FaMicrochip,
  FaWifi, FaCogs, FaProjectDiagram, FaInfoCircle, FaLightbulb, FaExchangeAlt
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const SYSTEM_NODES = [
  {
    id: 'react-web',
    title: 'React 19 (Web UI)',
    category: 'Frontend & UI Layer',
    icon: SiReact,
    color: 'text-[#61DAFB] border-[#61DAFB]/40 bg-[#61DAFB]/10',
    analogy: 'The Restaurant Menu 📜 — Beautiful, clean buttons you tap on your web browser to browse products or book parking.',
    description: 'Dynamic web interfaces, farm produce e-commerce stores (Organic Store), and telemetry dashboards with sub-100ms client state sync.',
    connectedTo: ['node-api'],
  },
  {
    id: 'react-native',
    title: 'React Native (Mobile)',
    category: 'Mobile Application',
    icon: FaMobileAlt,
    color: 'text-purple-400 border-purple-500/40 bg-purple-500/10',
    analogy: 'The Pocket App 📱 — The smartphone app drivers use on the go to get OTP gate pins and track orders.',
    description: 'Cross-platform mobile apps used for driver parking reservations, OTP validation, and mobile order tracking.',
    connectedTo: ['node-api'],
  },
  {
    id: 'node-api',
    title: 'Node.js & Express API',
    category: 'Backend & API Gateway',
    icon: SiNodedotjs,
    color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
    analogy: 'The Restaurant Waiter 🤵 — Takes orders from your phone, checks the kitchen, and delivers messages back and forth in milliseconds.',
    description: 'Central API router processing client HTTPS requests, hardware IoT telemetry payloads, authentication JWTs, and database operations.',
    connectedTo: ['mongodb', 'esp32-mcu'],
  },
  {
    id: 'mongodb',
    title: 'MongoDB Cluster',
    category: 'Database & Storage',
    icon: SiMongodb,
    color: 'text-green-400 border-green-500/40 bg-green-500/10',
    analogy: 'The Digital Vault 🗄️ — Safe storage where user passwords, organic vegetable inventories, and parking logs live.',
    description: 'Flexible NoSQL document database storing user profiles, e-commerce produce catalogs, parking slot logs, and telemetry histories.',
    connectedTo: ['node-api'],
  },
  {
    id: 'esp32-mcu',
    title: 'ESP32 / ESP8266 MCU',
    category: 'IoT Controller Firmware',
    icon: FaMicrochip,
    color: 'text-orange-400 border-orange-500/40 bg-orange-500/10',
    analogy: 'The Hardware Brain 🧠 — A tiny $4 computer chip inside physical devices that reads sensors and controls motors.',
    description: 'Dual-core microcontroller executing C++ firmware to process physical sensors, drive H-bridge motors, host embedded web servers, and transmit Wi-Fi/GSM payloads.',
    connectedTo: ['sensors-actuators', 'node-api'],
  },
  {
    id: 'sensors-actuators',
    title: 'Sensors, Motors & GSM',
    category: 'Hardware & Physical Layer',
    icon: FaCogs,
    color: 'text-rose-400 border-rose-500/40 bg-rose-500/10',
    analogy: 'The Muscle & Eyes 🦾 — Physical IR beams detecting cars, keypad buttons, servo motors lifting gates, and LED displays.',
    description: 'Physical hardware layer comprising 8-channel IR sensor arrays, PZEM power meters, GSM modules, servo gates, TB6612 motor drivers, keypads, and P10 LED displays.',
    connectedTo: ['esp32-mcu'],
  },
];

const SystemMap = () => {
  const [selectedNode, setSelectedNode] = useState(SYSTEM_NODES[2]); // Default Node.js
  const [showBeginnerMode, setShowBeginnerMode] = useState(true);

  return (
    <section id="stack-map" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-10 sm:mb-14"
        >
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase inline-flex items-center gap-2">
            <FaProjectDiagram /> Signature Architecture Map
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            My Engineering Stack & Connected Systems
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mt-3 max-w-2xl mx-auto">
            An interactive visual map showing how web apps, mobile phones, databases, and physical hardware motors talk to each other.
          </p>

          {/* Beginner Explanation Mode Toggle */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowBeginnerMode(!showBeginnerMode)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition flex items-center gap-2 border ${
                showBeginnerMode
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-400 shadow-lg'
                  : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-gray-500'
              }`}
            >
              <FaLightbulb className="text-amber-400" />
              <span>{showBeginnerMode ? '✓ Beginner Mode ON (Plain English Analogies)' : 'Turn On Beginner Mode (No Jargon)'}</span>
            </button>
          </div>
        </motion.div>

        {/* Step-by-Step Beginner Data Flow Banner */}
        {showBeginnerMode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mb-8 p-4 sm:p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 text-xs font-sans shadow-lg"
          >
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold uppercase tracking-wider text-xs mb-2">
              <FaExchangeAlt /> How Data Travels (Step-by-Step Example)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-[11px] font-sans leading-relaxed">
              <div className="p-2.5 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="font-bold text-cyan-400 block font-mono">1. Tap Screen 📱</span>
                You tap "Book Parking" on your phone or order fresh produce on Organic Store.
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="font-bold text-emerald-400 block font-mono">2. API Process ⚡</span>
                The Express backend waiter verifies your request in under 100ms.
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="font-bold text-green-400 block font-mono">3. Store in Vault 🗄️</span>
                MongoDB updates your order or issues an OTP pin code.
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-cyan-500/20">
                <span className="font-bold text-orange-400 block font-mono">4. Hardware Action 🦾</span>
                ESP32 chip signals the servo motor to physically raise the gate!
              </div>
            </div>
          </motion.div>
        )}

        {/* Visual Map Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Interactive Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-5 sm:p-8 flex flex-col justify-between relative shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6 pb-3 border-b border-gray-800">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                INTERACTIVE TOPOLOGY MAP
              </span>
              <span className="text-[11px] text-gray-500">Click any block to inspect</span>
            </div>

            {/* Nodes Topology Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 relative z-10">
              {SYSTEM_NODES.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode?.id === node.id;

                return (
                  <motion.div
                    key={node.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedNode(node)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border backdrop-blur-md transition-all flex items-start gap-3.5 ${node.color} ${
                      isSelected
                        ? 'ring-2 ring-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] bg-gray-800/90'
                        : 'hover:bg-gray-800/50 opacity-90 hover:opacity-100'
                    }`}
                  >
                    <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/10 shrink-0">
                      <Icon className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                        {node.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-wide mt-0.5">{node.title}</h3>
                      <p className="text-[10px] sm:text-[11px] text-cyan-300 font-sans mt-0.5 line-clamp-1">
                        {showBeginnerMode ? node.analogy.split('—')[0] : 'Active System Link'}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Protocols Footer */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2 text-[11px] sm:text-xs">
                <FaWifi className="text-cyan-400 animate-pulse" /> REST, WebSockets, UART, I2C, PWM, Wi-Fi
              </span>
            </div>
          </div>

          {/* Right Column: Node Inspector Drawer (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              {selectedNode && (
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-cyan-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl pointer-events-none rounded-full"></div>

                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`p-3.5 rounded-2xl border ${selectedNode.color}`}>
                        <selectedNode.icon className="text-2xl sm:text-3xl" />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                          Selected Layer
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">{selectedNode.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                      {/* Plain English Analogy Box */}
                      <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200">
                        <span className="text-[10px] font-mono text-cyan-400 block mb-0.5 uppercase font-bold flex items-center gap-1">
                          <FaLightbulb className="text-amber-400" /> Everyday Analogy:
                        </span>
                        <p className="text-xs text-cyan-100 font-medium leading-relaxed">{selectedNode.analogy}</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-black/50 border border-gray-800">
                        <span className="text-[10px] font-mono text-gray-400 block mb-1 uppercase font-semibold flex items-center gap-1.5">
                          <FaInfoCircle className="text-cyan-400" /> Engineering Integration
                        </span>
                        <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed">
                          {selectedNode.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Fully Operational
                    </span>
                    <a
                      href="#projects"
                      className="text-cyan-400 hover:underline font-semibold text-[11px] sm:text-xs"
                    >
                      View Case Studies &rarr;
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SystemMap;
