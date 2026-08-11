// src/components/ArchitectureDiagram.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaMobileAlt, FaDatabase, FaMicrochip, FaRobot, FaLock, FaWifi } from 'react-icons/fa';

const NODE_ICONS = {
  frontend: FaLaptopCode,
  mobile: FaMobileAlt,
  backend: FaServer,
  database: FaDatabase,
  hardware: FaMicrochip,
  embedded: FaMicrochip,
  robotics: FaRobot,
  security: FaLock,
  firmware: FaMicrochip,
};

const NODE_COLORS = {
  frontend: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/50 text-cyan-400',
  mobile: 'from-purple-500/20 to-pink-500/20 border-pink-500/50 text-pink-400',
  backend: 'from-emerald-500/20 to-green-500/20 border-emerald-500/50 text-emerald-400',
  database: 'from-amber-500/20 to-yellow-500/20 border-amber-500/50 text-amber-400',
  hardware: 'from-red-500/20 to-orange-500/20 border-orange-500/50 text-orange-400',
  embedded: 'from-indigo-500/20 to-blue-500/20 border-blue-500/50 text-blue-400',
  robotics: 'from-rose-500/20 to-red-500/20 border-red-500/50 text-red-400',
  security: 'from-teal-500/20 to-emerald-500/20 border-teal-500/50 text-teal-400',
  firmware: 'from-violet-500/20 to-purple-500/20 border-violet-500/50 text-violet-400',
};

const ArchitectureDiagram = ({ nodes = [], asciiText = '' }) => {
  const [activeNode, setActiveNode] = useState(null);

  if (!nodes || nodes.length === 0) {
    return (
      <div className="p-5 rounded-2xl bg-gray-950 text-emerald-400 font-mono text-xs md:text-sm overflow-x-auto border border-gray-800 shadow-inner">
        <pre>{asciiText}</pre>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Interactive Visual Flow Nodes */}
      <div className="p-6 rounded-2xl bg-gray-950/90 border border-gray-800 shadow-2xl relative overflow-hidden">
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

        <div className="relative z-10 text-xs font-mono text-gray-400 mb-4 flex items-center justify-between">
          <span className="flex items-center gap-2 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            LIVE SYSTEM DATA FLOW DIAGRAM
          </span>
          <span className="text-[11px] text-gray-500">Click node for protocol details</span>
        </div>

        {/* Node Grid Stream */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {nodes.map((node, index) => {
            const Icon = NODE_ICONS[node.type] || FaMicrochip;
            const colorStyle = NODE_COLORS[node.type] || 'from-gray-800 to-gray-900 border-gray-700 text-gray-300';
            const isSelected = activeNode?.id === node.id;

            return (
              <motion.div
                key={node.id || index}
                whileHover={{ scale: 1.03, y: -2 }}
                onClick={() => setActiveNode(isSelected ? null : node)}
                className={`relative cursor-pointer p-4 rounded-xl border backdrop-blur-md bg-gradient-to-br transition-all ${colorStyle} ${
                  isSelected ? 'ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="text-xl" />
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/40 border border-white/10 uppercase tracking-wide">
                    {node.protocol || 'BUS / API'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">{node.label}</h4>
                <p className="text-[11px] text-gray-400 font-mono mt-1 capitalize">
                  Layer: {node.type}
                </p>

                {/* Data Packet Flow Dot */}
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Node Inspector Detail Card */}
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-xl bg-gray-900 border border-cyan-500/40 text-xs font-mono text-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div>
              <span className="text-cyan-400 font-bold uppercase tracking-wider block text-[11px]">
                Selected Layer: {activeNode.label}
              </span>
              <p className="text-gray-300 mt-1">
                Communication Protocol: <span className="text-emerald-400 font-semibold">{activeNode.protocol}</span>
              </p>
            </div>
            <button
              onClick={() => setActiveNode(null)}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded border border-gray-700 text-[11px]"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </div>

      {/* ASCII Technical Reference Box */}
      {asciiText && (
        <details className="group rounded-xl bg-gray-950/80 border border-gray-800 p-3 text-xs font-mono">
          <summary className="cursor-pointer text-gray-400 hover:text-cyan-400 font-semibold select-none flex items-center justify-between">
            <span>View Text Architecture Schematic</span>
            <span className="text-[10px] text-gray-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 p-3 bg-black/60 rounded-lg text-emerald-400 overflow-x-auto leading-relaxed border border-gray-900">
            <pre>{asciiText}</pre>
          </div>
        </details>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
