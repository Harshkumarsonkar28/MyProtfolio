import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import kepperimg from '../assets/keeper.png';
import Secretimg from '../assets/Secret.png';
import Ecommerce from '../assets/Eccommerce.png';
import Todo from '../assets/Todo.png';

const Projects = () => {
  const projects = [
    {
      title: "Keeper Note App",
      tech: "React, Tailwind",
      about:
        "Create, edit, delete, and copy notes in a clean card layout. Notes persist with localStorage so nothing is lost on refresh.",
      link: "https://github.com/Harshkumarsonkar28/Keeper_Note_App.git",
      live: "https://keeper-note-app1.netlify.app/",
      img: kepperimg,
    },
    {
      title: "Todo Priority Manager",
      tech: "Node.js, Express, EJS, MongoDB",
      about:
        "A to-do app with priority filters, add/edit/delete tasks, and real-time updates—built on Node, Express, and MongoDB.",
      link: "https://github.com/Harshkumarsonkar28/todo_priority_manager.git",
      live: "https://todo-priority-manager-2.onrender.com/",
      img: Todo,
    },
    {
      title: "Secure Authentication System",
      tech: "Node.js, Express, EJS, MongoDB",
      about:
        "JWT authentication with session cookies and protected routes, following a clean MVC pattern.",
      link: "https://github.com/Harshkumarsonkar28/secrets-auth-app.git",
      live: "https://secrets-auth-app-4qw5.onrender.com/",
      img: Secretimg,},
    {
      title: "Ecommerce Forever",
      tech: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Tailwind",
      about:
        "An eCommerce platform where users can browse and buy fashion items. Offers smooth shopping experience with secure checkout and stylish collections.",
      link: "https://github.com/Harshkumarsonkar28/Ecommerce_Forever.git",
      live: "https://ecommerce-forever-frontend-nine.vercel.app/",
      img: Ecommerce,
    },
  ];

  return (
    <motion.section
      className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-indigo-600 via-purple-500 to-teal-500 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-16 text-white drop-shadow-lg">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {projects.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-white/20 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-lg p-6`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 w-full text-gray-100">
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-sm text-yellow-200 mb-3 font-medium">
                Tech Used: <span className="text-gray-100">{item.tech}</span>
              </p>
              <p className="text-gray-200 mb-5 leading-relaxed">{item.about}</p>

              <div className="flex gap-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-black/70 text-white font-medium hover:bg-black transition-all"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={item.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-yellow-400 text-indigo-900 font-semibold hover:bg-yellow-300 transition-all"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
