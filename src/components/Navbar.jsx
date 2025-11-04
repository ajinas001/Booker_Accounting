"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = ["Home", "About", "Services", "Contact"];

  // 🧭 Handle scroll direction to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down → Hide Navbar
        setShowNavbar(false);
      } else {
        // Scrolling Up → Show Navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="font-sans py-4 fixed top-0 w-full z-50 transition-all duration-300 "
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src={
                  scrolled ? "/images/LogoDark.png" : "/images/LogoLight.png"
                }
                alt="Booker Accounting Company Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, i) => {
              const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              return (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    className={`px-4 py-2 ${
                      scrolled ? "text-gray-800" : "text-white"
                    } hover:text-teal-700 text-xl font-medium transition-colors relative group`}
                  >
                    {link}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-700 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Get Started Button */}
          <motion.button
            className={
              scrolled
                ? "hidden md:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2   text-secondary rounded-lg font-medium hover:bg-teal-800 transition-colors hover:text-white "
                : "hidden md:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2  text-white rounded-lg font-medium hover:bg-teal-800 transition-colors "
            }
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-teal-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className={`w-6 h-6 ${scrolled ? "text-teal-700" : "text-white"}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-primary text-center  rounded-lg mt-2"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, i) => {
                  const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
                  return (
                    <motion.div key={link} custom={i} variants={linkVariants}>
                      <Link
                        href={href}
                        className="block px-4 py-3 text-secondary hover:bg-teal-100 hover:text-teal-700 rounded-lg font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link}
                      </Link>
                    </motion.div>
                  );
                })}
               
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
