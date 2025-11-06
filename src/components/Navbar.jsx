"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  const services = [
    {
      title: "Audit & Assurance",
      description:
        "• Ensure financial accuracy\n• Meet regulatory standards\n• Build stakeholder confidence",
    },
    {
      title: "Taxation",
      description:
        "• Tax planning & compliance\n• Return preparation\n• Minimize tax liabilities",
    },
    {
      title: "Accounting & Bookkeeping",
      description:
        "• Maintain accurate records\n• Manage financial statements\n• Support informed decisions",
    },
    {
      title: "Business Advisory & Support Services",
      description:
        "• Strategic business advice\n• Process improvement\n• Growth and expansion planning",
    },
    {
      title: "Business Support Services",
      description:
        "• Administrative assistance\n• Compliance management\n• Operational efficiency",
    },
    {
      title: "Anti–Money Laundering",
      description:
        "• AML policy development\n• Risk assessment & monitoring\n• Regulatory compliance support",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
        setServicesOpen(false);
      } else {
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

  const megaMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`font-sans py-4 fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "" : "bg-transparent"
        }`}
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

                if (link === "Services") {
                  return (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={`px-4 py-2 ${
                          scrolled ? "text-gray-800" : "text-white"
                        } hover:text-teal-700 text-xl font-medium transition-colors relative group flex items-center gap-1`}
                      >
                        {link}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-700 origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: servicesOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </button>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <a
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
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Get Started Button */}
            <motion.button
              className={
                scrolled
                  ? "hidden md:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-teal-800 transition-colors hover:text-white"
                  : "hidden md:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-white text-white rounded-lg font-medium hover:bg-teal-800 transition-colors"
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
                className={`w-6 h-6 ${
                  scrolled ? "text-teal-700" : "text-white"
                }`}
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
                className="lg:hidden overflow-hidden bg-white text-center rounded-lg  shadow-lg"
              >
                <div className="py-4 space-y-2">
                  {navLinks.map((link, i) => {
                    const href =
                      link === "Home" ? "/" : `/${link.toLowerCase()}`;
                    return (
                      <motion.div key={link} custom={i} variants={linkVariants}>
                        <a
                          href={href}
                          className="block px-4 py-3 text-gray-800 hover:bg-teal-100 hover:text-teal-700 rounded-lg font-medium transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link}
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mega Menu for Services */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            variants={megaMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className={`fixed left-0 right-0 z-40 ${
              scrolled ? "bg-white m-4 rounded-2xl" : "bg-gray-900 bg-opacity-95 m-4 rounded-2xl"
            } `}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-2 py-20 ">
              {/* ✅ Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-5 ">
                {/* LEFT SIDE → Title + Intro */}
                <div className="lg:col-span-1 flex flex-col justify-center pr-6">
                  <h3
                    className={`text-3xl font-bold mb-4 ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    Our Services
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${
                      scrolled ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    No matter your role or goal <span className="text-secondary font-bold">BAC</span> adapts to your needs
                  </p>
                </div>

                {/* RIGHT SIDE → Simple List */}
                <div className="lg:col-span-4 grid grid-cols-6 sm:grid-cols-6 gap-x-3  pt-12 text-center">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="space-y-2"
                    >
                      <h4
                        className={`text-lg font-semibold mb-2 ${
                          scrolled ? "text-secondary" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h4>

                      <ul
                        className={` text-start list-disc pl-5 space-y-1 ${
                          scrolled ? "text-gray-600" : "text-gray-300"
                        }`}
                      >
                        {service.description.split("\n").map((point, i) => (
                          <li key={i} className="text-sm leading-relaxed">
                            {point.replace("•", "").trim()}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
