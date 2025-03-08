import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-16 relative z-10 animate-pulse"
      >
        ✨ Get In Touch
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        action="https://formsubmit.co/sumantewari758@gmail.com" 
        method="POST"
        className="relative z-10 w-full max-w-4xl p-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl shadow-2xl space-y-8"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="_subject" value="New Contact Form Submission!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="relative group">
            <FaUser className="absolute top-4 left-4 text-gray-500 group-focus-within:text-blue-500 transition" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full pl-12 p-4 rounded-xl bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <FaEnvelope className="absolute top-4 left-4 text-gray-500 group-focus-within:text-blue-500 transition" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full pl-12 p-4 rounded-xl bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition placeholder-gray-500"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="relative group">
          <FaTag className="absolute top-4 left-4 text-gray-500 group-focus-within:text-blue-500 transition" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full pl-12 p-4 rounded-xl bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition placeholder-gray-500"
          />
        </div>

        {/* Message */}
        <div className="relative group">
          <FaCommentDots className="absolute top-4 left-4 text-gray-500 group-focus-within:text-blue-500 transition" />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full pl-12 p-4 rounded-xl bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition placeholder-gray-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,0,255,0.5)] hover:shadow-[0_0_50px_rgba(0,0,255,0.7)] transition"
        >
          <FaPaperPlane /> Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
