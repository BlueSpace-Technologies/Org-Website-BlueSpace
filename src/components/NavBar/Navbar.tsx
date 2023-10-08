"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "./constans"; // Corrected the import path
import { LiaBarsSolid } from "react-icons/lia";

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

  return (
    <header className="bg-black">
      <nav className="padding-x padding-y mx-auto flex justify-between items-center py-4">
        {/* Logo and text on the left */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src="logo.png" alt="logo" className="w-20 h-20" />
          </a>
          <span className="text-white text-3xl font-unisans">BlueSpace</span>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <img src="pngegg.png" alt="hamburger icon" width={25} height={25} />
        </div>

        {/* Navigation links for large screens */}
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

        {/* Mobile menu */}
        <div
          className={`${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 transition-all duration-500 ease-in-out"
              : "opacity-0 -translate-y-full transition-all duration-500 ease-in-out"
          } lg:hidden fixed inset-0 padding-x padding-y flex your-custom-bg flex-col items-start justify-top z-50 transform`}
        >
          <button
            className="text-white absolute top-4 right-4 text-4xl px-4 py-2"
            onClick={closeMobileMenu}
          >
            {/* Close button */}
            &times;
          </button>

          <div className="text-white mb-8">
            {/* Logo */}
            <img src="samlllogo.png" alt="Logo" className="h-16 w-16 mb-2" />
          </div>

          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-3xl font-unisans text-white hover:text-blue-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {" "}
              {/* Adjusted the spacing */}
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                <h1 className="text-white text-2xl">Get in touch</h1>
                <h1 className="text-white text-l underline">
                  bluespacetechnologiesorg@gmail.com
                </h1>
              </a>
            </div>
            <div className="flex space-x-4 mt-6">
              {" "}
              {/* Adjusted the spacing */}
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
            <div>
              <h1 className="text-white text-2xl mt-8 underline">
                © {new Date().getFullYear()} BlueSpace Technologies
              </h1>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
