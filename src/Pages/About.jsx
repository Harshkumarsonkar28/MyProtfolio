import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="pt-24 pb-20 px-6 text-gray-100 bg-gradient-to-br from-indigo-600 via-purple-500 to-teal-500"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 drop-shadow-md">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto text-center leading-relaxed space-y-10">
        {/* Intro */}
        <p className="text-lg md:text-xl">
          I’m a fresher who loves turning complex problems into clean,
          user-friendly web solutions. Working with the{" "}
          <span className="font-semibold text-yellow-200">MERN stack</span>{" "}
          excites me because it blends creativity and logic every single day.
        </p>

        {/* Education Card */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-yellow-300 mb-6">Education</h3>
          <ul className="space-y-4 text-left">
            <li>
              <strong>MCA (Master of Computer Applications)</strong> – 2025 (Pursuing)
              <span className="block text-gray-700">
                Chhattisgarh Swami Vivekanand Technical University (CSVTU)
              </span>
            </li>
            <li>
              <strong>BCA (Bachelor of Computer Applications)</strong> – 2025
              <span className="block text-gray-700">
                Hemchand Yadav Vishwavidyalaya, Durg (C.G.)
              </span>
            </li>
            <li>
              <strong>DCA (Diploma in Computer Applications)</strong> – 2022
              <span className="block text-gray-700">
                Dr. C.V. Raman University
              </span>
            </li>
            <li>
              <strong>12th Standard</strong> – 2021
              <span className="block text-gray-700">CBSE Board</span>
            </li>
          </ul>
        </div>

        {/* Resume Button */}
        <a
          href="/hasrshresume.pdf"
          download
          className="inline-block px-8 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
};

export default About;
