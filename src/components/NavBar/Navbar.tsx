"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./smalllogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./constans";

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
        duration: 0.5, // Reduce the duration for a smoother animation
      },
    },
  };

  return (
    <header className="bg-black">
      <nav className="flex justify-between p-2  items-start lg:py-4 px-6 lg:px-12">
        <div className="flex items-start">
          <a href="/">
            <img src="logo.png" alt="logo" className="py-2 sm:p-8 w-72" />
          </a>
        </div>

        <ul className="hidden sm:flex space-x-8 py-4 px-6 p-2">
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

        <div
          className="md:hidden cursor-pointer py-4 px-6"
          onClick={toggleMobileMenu}
        >
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
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <button
                  className="text-white absolute top-4 right-4 text-3xl px-4 py-2"
                  onClick={closeMobileMenu}
                >
                  <FaTimes />
                </button>

                <ul className="space-y-6 text-center">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-2xl font-semibold text-white hover:text-blue-500 transition-colors duration-300"
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
                    <h1 className="text-xl font-semibold">Get in touch</h1>
                    <p className="text-lg text-white underline">
                      bluespacetechnologiesorg@gmail.com
                    </p>
                  </a>

                  <div className="flex space-x-4 mt-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {/* Add your social media icons here */}
                    </a>
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
