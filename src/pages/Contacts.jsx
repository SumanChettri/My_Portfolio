// src/pages/Contacts.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaCommentDots, FaSpinner } from 'react-icons/fa';

const PRESETS = [
  { label: '💼 Hiring for a Software Role', subject: 'Engineering Role Inquiry / Software Opportunity' },
  { label: '🔌 Networking & Infrastructure Setup', subject: 'Switch / Router Network Configuration Inquiry' },
  { label: '🚀 Freelance / Project Inquiry', subject: 'Freelance Project Collaboration / Inquiry' },
  { label: '☕ Connect & Chat', subject: 'Connecting via Portfolio' },
];

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-transparent text-slate-900 dark:text-white transition-all duration-500"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-8 sm:mb-12 relative z-10"
      >
        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
          Let's Connect
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 mt-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2">
          Have a software role, networking configuration task, or freelance project? Email directly at <span className="font-mono text-blue-700 dark:text-cyan-400 font-bold">sumantewari758@gmail.com</span>.
        </p>
      </motion.div>

      {/* Preset Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 max-w-2xl">
        {PRESETS.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSubject(preset.subject)}
            className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-mono font-medium transition shadow-sm border ${
              subject === preset.subject
                ? 'bg-blue-600 dark:bg-cyan-500 text-white border-blue-500 dark:border-cyan-400'
                : 'bg-white/90 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-slate-800 hover:border-cyan-500'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        action="https://formsubmit.co/sumantewari758@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-4xl p-5 sm:p-10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-2xl rounded-3xl shadow-xl space-y-4 sm:space-y-6 border border-slate-300/80 dark:border-slate-800"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="_subject" value={subject || 'New Portfolio / Engineering Inquiry!'} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Name */}
          <div className="relative group">
            <FaUser className="absolute top-4 left-4 text-slate-400 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-500 transition" />
            <input
              type="text"
              name="name"
              placeholder="Your Name / Organization"
              required
              className="w-full pl-11 sm:pl-12 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 outline-none transition placeholder-slate-400 text-xs sm:text-sm font-sans"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <FaEnvelope className="absolute top-4 left-4 text-slate-400 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-500 transition" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full pl-11 sm:pl-12 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 outline-none transition placeholder-slate-400 text-xs sm:text-sm font-sans"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="relative group">
          <FaTag className="absolute top-4 left-4 text-slate-400 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-500 transition" />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject (e.g. Software Role / Networking Inquiry / Project)"
            required
            className="w-full pl-11 sm:pl-12 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 outline-none transition placeholder-slate-400 text-xs sm:text-sm font-sans"
          />
        </div>

        {/* Message */}
        <div className="relative group">
          <FaCommentDots className="absolute top-4 left-4 text-slate-400 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-500 transition" />
          <textarea
            name="message"
            placeholder="Tell me about your project scope, engineering requirements, or role details..."
            required
            rows="4"
            className="w-full pl-11 sm:pl-12 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 outline-none transition placeholder-slate-400 text-xs sm:text-sm font-sans"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white text-xs sm:text-base font-bold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" /> Transmitting Message...
            </>
          ) : (
            <>
              <FaPaperPlane /> Send Engineering Message
            </>
          )}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
