import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-yellow-300">Harsh</span>
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Full-Stack Developer (MERN) & MCA Student
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I enjoy turning ideas into reality with <span className="font-semibold text-yellow-200">React</span>,{" "}
        <span className="font-semibold text-yellow-200">Node</span>,{" "}
        <span className="font-semibold text-yellow-200">Express</span>, and{" "}
        <span className="font-semibold text-yellow-200">MongoDB</span>.  
        I’m excited to join a team where I can grow, build beautiful user
        experiences, and deliver real impact.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          View My Work
        </a>
        <a
          href="/hasrshresume.pdf"
          download
          className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
