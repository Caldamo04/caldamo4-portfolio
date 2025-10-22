import React from "react";
import { motion } from "framer-motion";
import profile_me from "../../assets/profile_me.jpg";

export default function War() {
  return (
    <motion.div
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-black opacity-30 animate-gradient-slow"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping top-10 left-1/4"></div>
        <div className="absolute w-3 h-3 bg-pink-500 rounded-full animate-pulse bottom-20 right-1/3"></div>
        <div className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping top-1/3 right-10"></div>
        <div className="absolute w-2 h-2 bg-teal-400 rounded-full animate-pulse bottom-10 left-1/5"></div>
      </div>

      <motion.img
        src={profile_me}
        alt="Profile"
        className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 
                   rounded-full border-4 border-blue-500 object-cover mb-10 
                   shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug max-w-3xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          I'M WARLITO CALDAMO
        </span>
        <span className="block text-gray-200 text-2xl sm:text-3xl mt-2">
          Student of CvSU Bacoor
        </span>
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-300 mb-6 sm:mb-8 leading-snug z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Major in Computer Science
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-10 sm:mb-14 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed px-2 sm:px-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I’m learning React and HTML, and this is my personal web project —
        crafted with creativity, curiosity, and passion for coding.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 w-full sm:w-auto z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]"
        >
          Connect With Me
        </button>

        <button
          onClick={() => {
            const section = document.getElementById("projects");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full sm:w-auto bg-transparent border-2 border-blue-500 hover:bg-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]"
        >
          My Resume
        </button>
      </motion.div>
    </motion.div>
  );
}
