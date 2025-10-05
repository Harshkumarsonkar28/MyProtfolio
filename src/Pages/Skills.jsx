import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const frontend = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ];

  const backend = [
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  const tools = [
    { name: "Git & GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Render", img: "https://media.licdn.com/dms/image/v2/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/company-logo_200_200/0/1702595267620/renderco_logo?e=2147483647&v=beta&t=ZYrxKUyruOEupgw5Lr5amgwgBCJq8VXH8r05Qr5CeQc" },
    { name: "Vercel", img: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    {name: "Visual Studio", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png"}
  ];

  const renderSkills = (category, title) => (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-center mb-6 text-white ">{title}</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        {category.map(({ name, img }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.07 }}
            className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <img src={img} alt={name} className="w-14 h-14 mb-4" />
            <span className="text-lg font-medium text-gray-100">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section
      className="pt-24 pb-20 bg-gradient-to-br from-indigo-600 via-purple-500 to-teal-500 text-gray-100 px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-md">My Skills</h2>

      {renderSkills(frontend, "Frontend Technologies")}
      {renderSkills(backend, "Backend Technologies")}
      {renderSkills(tools, "Tools & Deployment Platforms")}
    </motion.section>
  );
};

export default Skills;
