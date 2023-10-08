"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "./constans";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./smalllogo.png";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const menuVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1, // Adjust the duration as needed
      },
    },
  };
  return (
    <header className="bg-black">
      <nav className=" lg:padding-x padding-y lg:py-8 px-20 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src="logo.png" alt="logo" className="w-20 h-20" />
          </a>
          <span className="text-white text-3xl font-unisans hidden sm:block">
            BlueSpace
          </span>
        </div>
        <ul className="hidden gap-8 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg text-white hover:text-blue-500 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-20"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <div className="p-4 absolute inset-0 flex flex-col items-center justify-center">
                <button
                  className="text-white absolute top-4 right-4 text-4xl px-4 py-2"
                  onClick={closeMobileMenu}
                >
                  <FaTimes />
                </button>
                <ul className="space-y-4 text-center">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-3xl font-unisans text-white hover:text-blue-500 transition-colors duration-300"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="text-white hover:text-blue-500 transition-colors duration-300"
                  >
                    <h1 className="text-white text-2xl">Get in touch</h1>
                    <h1 className="text-white text-l underline">
                      bluespacetechnologiesorg@gmail.com
                    </h1>
                  </a>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* ... SVG path ... */}
                      </svg>
                    </a>
                    {/* Add similar icons for other social links */}
                  </div>
                  <p className="text-white mt-8 text-lg">
                    © {new Date().getFullYear()} BlueSpace Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Nav;
