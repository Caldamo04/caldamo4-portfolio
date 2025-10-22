import React from "react";
import { motion } from "framer-motion";
import phone_icon from "../../assets/mobile.png";
import gmail_icon from "../../assets/gmail.png";
import facebook_icon from "../../assets/facebook.png";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-24 text-white overflow-hidden"
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

      <motion.div
        className="relative z-10 w-full max-w-6xl mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 text-center md:text-left drop-shadow-[0_0_15px_#3b82f6]">
          Get in Touch
        </h1>
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-16 w-full max-w-6xl">
        <motion.div
          className="flex-1 w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-400 mb-8 drop-shadow-[0_0_10px_#3b82f6]">
            Let's Talk
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
            If you’d like to reach me for academic collaboration, project discussions,
            or any inquiries related to computer science, feel free to contact me.
            You can email me at{" "}
            <b className="text-blue-400">caldamo4@gmail.com</b> or connect via social media.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-6">
              <img src={phone_icon} alt="Phone" className="w-8 h-8 object-contain mx-auto sm:mx-0" />
              <p className="text-blue-400 text-lg sm:text-xl mt-2 sm:mt-0">
                +63 928 206 7308
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-6">
              <img src={gmail_icon} alt="Gmail" className="w-8 h-8 object-contain mx-auto sm:mx-0" />
              <p className="text-blue-400 text-lg sm:text-xl mt-2 sm:mt-0">
                caldamo4@gmail.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-6">
              <img src={facebook_icon} alt="Facebook" className="w-8 h-8 object-contain mx-auto sm:mx-0" />
              <a
                href="https://www.facebook.com/warlito.caldamo.5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-lg sm:text-xl mt-2 sm:mt-0 hover:underline hover:brightness-125"
              >
                facebook.com/warlito.caldamo.5
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          action="https://formspree.io/f/mkgqprqg"
          method="POST"
          className="flex-1 w-full md:w-1/2 flex flex-col gap-5 sm:gap-6 bg-gray-900/80 backdrop-blur-[2px] p-6 sm:p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <label className="text-lg sm:text-xl font-semibold text-gray-200">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
            className="px-5 py-3 sm:py-4 rounded-xl border border-gray-600 bg-black/40 text-gray-100 placeholder-gray-400 outline-none focus:border-blue-400 text-base sm:text-lg transition"
          />

          <label className="text-lg sm:text-xl font-semibold text-gray-200">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
            className="px-5 py-3 sm:py-4 rounded-xl border border-gray-600 bg-black/40 text-gray-100 placeholder-gray-400 outline-none focus:border-blue-400 text-base sm:text-lg transition"
          />

          <label className="text-lg sm:text-xl font-semibold text-gray-200">
            Your Message
          </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="px-5 py-3 sm:py-4 rounded-xl border border-gray-600 bg-black/40 text-gray-100 placeholder-gray-400 outline-none focus:border-blue-400 text-base sm:text-lg resize-none transition"
          ></textarea>

          <button
            type="submit"
            className="mt-6 sm:mt-8 bg-blue-500 hover:bg-blue-600 text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Submit Now
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
