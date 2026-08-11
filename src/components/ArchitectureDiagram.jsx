// src/components/ArchitectureDiagram.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaMobileAlt, FaDatabase, FaMicrochip, FaRobot, FaLock } from 'react-icons/fa';

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
  frontend: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/40 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5',
  mobile: 'from-purple-500/20 to-pink-500/20 border-pink-500/40 text-pink-600 dark:text-pink-400 bg-pink-500/5',
  backend: 'from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5',
  database: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/5',
  hardware: 'from-red-500/20 to-orange-500/20 border-orange-500/40 text-orange-600 dark:text-orange-400 bg-orange-500/5',
  embedded: 'from-indigo-500/20 to-blue-500/20 border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/5',
  robotics: 'from-rose-500/20 to-red-500/20 border-red-500/40 text-red-600 dark:text-red-400 bg-red-500/5',
  security: 'from-teal-500/20 to-emerald-500/20 border-teal-500/40 text-teal-600 dark:text-teal-400 bg-teal-500/5',
  firmware: 'from-violet-500/20 to-purple-500/20 border-violet-500/40 text-violet-600 dark:text-violet-400 bg-violet-500/5',
};

const ArchitectureDiagram = ({ nodes = [], asciiText = '' }) => {
  const [activeNode, setActiveNode] = useState(null);

  if (!nodes || nodes.length === 0) {
    return (
      <div className="p-5 rounded-2xl bg-slate-900 text-emerald-400 font-mono text-xs md:text-sm overflow-x-auto border border-slate-800 shadow-inner">
        <pre>{asciiText}</pre>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Interactive Visual Flow Nodes */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden">
        <div className="relative z-10 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-between">
          <span className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
            SYSTEM DATA FLOW TOPOLOGY
          </span>
          <span className="text-[11px] text-slate-400">Click node for details</span>
        </div>

        {/* Node Grid Stream */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {nodes.map((node, index) => {
            const Icon = NODE_ICONS[node.type] || FaMicrochip;
            const colorStyle = NODE_COLORS[node.type] || 'bg-slate-100 border-slate-300 text-slate-700';
            const isSelected = activeNode?.id === node.id;

            return (
              <motion.div
                key={node.id || index}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => setActiveNode(isSelected ? null : node)}
                className={`relative cursor-pointer p-4 rounded-xl border backdrop-blur-md transition-all ${colorStyle} ${
                  isSelected ? 'ring-2 ring-cyan-500 shadow-md' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="text-xl" />
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900/10 dark:bg-black/40 text-slate-800 dark:text-slate-200 uppercase tracking-wide border border-slate-300 dark:border-white/10">
                    {node.protocol || 'BUS / API'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">{node.label}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono mt-0.5 capitalize">
                  Layer: {node.type}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Node Detail */}
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-cyan-500/40 text-xs font-mono text-slate-800 dark:text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm"
          >
            <div>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider block text-[11px]">
                Selected Layer: {activeNode.label}
              </span>
              <p className="text-slate-700 dark:text-slate-300 mt-1">
                Communication Protocol: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeNode.protocol}</span>
              </p>
            </div>
            <button
              onClick={() => setActiveNode(null)}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded border border-slate-300 dark:border-slate-700 text-[11px]"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </div>

      {/* ASCII Technical Reference Box */}
      {asciiText && (
        <details className="group rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 p-3 text-xs font-mono">
          <summary className="cursor-pointer text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold select-none flex items-center justify-between">
            <span>View Text Architecture Diagram</span>
            <span className="text-[10px] text-slate-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-3 p-3 bg-slate-900 text-emerald-400 rounded-lg overflow-x-auto leading-relaxed border border-slate-800">
            <pre>{asciiText}</pre>
          </div>
        </details>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
