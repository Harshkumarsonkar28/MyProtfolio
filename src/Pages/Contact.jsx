import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      className="min-h-screen pt-24 pb-20 px-6 text-gray-100 bg-gradient-to-br from-indigo-600 via-purple-500 to-teal-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white drop-shadow-lg">
        Contact Me
      </h2>

      <div className="max-w-md mx-auto bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-2xl p-8 text-gray-100 border border-gray-700 text-center space-y-6">
        <p className="text-gray-300 leading-relaxed">
          I’d love to hear from you—whether it’s a project idea, job opportunity,
          or just a friendly hello!
        </p>

        {/* Contact Details */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-400 text-xl" />
            <a
              href="mailto:harshkumarsonkar55940@gmail.com"
              className="hover:underline break-words"
            >
              harshkumarsonkar55940@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-indigo-400 text-xl" />
            <a
              href="tel:+917898658890"  
              className="hover:underline"
            >
              +91 7898658890
            </a>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="mailto:harshkumarsonkar55940@gmail.com"
          className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Send Email
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://github.com/Harshkumarsonkar28"
            target="_blank"
            className="text-gray-300 hover:text-indigo-400 text-2xl transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-kumar-sonkar"
            target="_blank"
            className="text-gray-300 hover:text-indigo-400 text-2xl transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
