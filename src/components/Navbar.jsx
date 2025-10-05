import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const NavItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md text-white z-50 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent hover:opacity-90"
        >
          Harsh Kumar
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {NavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative transition-colors duration-300 ${
                pathname === item.to
                  ? "text-indigo-400"
                  : "hover:text-indigo-300"
              }`}
            >
              {item.label}
              {pathname === item.to && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-400 rounded"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white hover:text-indigo-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-800 px-6 pb-4 space-y-4"
        >
          {NavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg font-medium transition-colors duration-300 ${
                pathname === item.to
                  ? "text-indigo-400"
                  : "hover:text-indigo-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
