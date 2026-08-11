// src/components/ImageLightbox.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand, FaImage, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageLightbox = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  if (!images || images.length === 0) return null;

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-3">
      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
        <FaImage className="text-blue-600 dark:text-cyan-400" /> Project Photographs & Gallery
      </h4>

      {/* Image Thumbnails Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((img, idx) => {
          const isFailed = failedImages[idx];

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedIndex(idx)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 shadow-sm flex flex-col justify-between h-44 transition-all"
            >
              {!isFailed ? (
                <div className="relative w-full h-32 overflow-hidden bg-slate-900">
                  <img
                    src={img.url}
                    alt={img.caption || 'Project Image'}
                    onError={() => handleImageError(idx)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-black/60 text-white text-xs">
                      <FaExpand />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-32 bg-slate-200 dark:bg-slate-900/80 border-b border-slate-300/80 dark:border-slate-800 p-3 flex flex-col justify-center items-center text-center">
                  <FaImage className="text-2xl text-slate-400 dark:text-slate-600 mb-1" />
                  <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-medium line-clamp-1">
                    {img.url}
                  </span>
                  <span className="text-[9px] font-mono text-cyan-600 dark:text-cyan-400 mt-1 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Upload image to public/images/img/
                  </span>
                </div>
              )}

              <div className="p-2.5 bg-white/90 dark:bg-slate-950 text-[11px] font-sans text-slate-700 dark:text-slate-300 font-medium truncate">
                {img.caption || `Image ${idx + 1}`}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition"
              >
                <FaTimes size={16} />
              </button>

              {/* Main Enlarged Image Display */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black flex items-center justify-center p-4">
                {!failedImages[selectedIndex] ? (
                  <img
                    src={images[selectedIndex]?.url}
                    alt={images[selectedIndex]?.caption}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center p-6 text-slate-300 font-mono text-xs max-w-md">
                    <FaImage className="text-4xl text-slate-600 mx-auto mb-3" />
                    <p className="font-bold text-white mb-1">Photo Asset Location:</p>
                    <p className="text-cyan-400 text-xs bg-slate-950 p-2 rounded border border-slate-800 font-mono select-all">
                      {images[selectedIndex]?.url}
                    </p>
                    <p className="text-slate-400 text-[11px] mt-2">
                      Drop your photograph or screenshot in the <code className="text-white">public/images/img/</code> folder to display automatically.
                    </p>
                  </div>
                )}

                {/* Nav Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black transition"
                    >
                      <FaChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black transition"
                    >
                      <FaChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* Caption Bar */}
              <div className="w-full p-4 bg-slate-950 text-center text-xs font-mono text-slate-300 border-t border-slate-800">
                {images[selectedIndex]?.caption} ({selectedIndex + 1} of {images.length})
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageLightbox;
