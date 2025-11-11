"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Blog", "Contact"];

  const services = [
    {
      title: "Audit & Assurance",
      link: "/audit-assurance",
      description:
        "• Ensure financial accuracy\n• Meet regulatory standards\n• Build stakeholder confidence",
    },
    {
      title: "Taxation",
      link: "/taxation",
      description:
        "• Tax planning & compliance\n• Return preparation\n• Minimize tax liabilities",
    },
    {
      title: "Accounting & Bookkeeping",
      link: "/accounting-bookkeeping",
      description:
        "• Maintain accurate records\n• Manage financial statements\n• Support informed decisions",
    },
    {
      title: "Business Advisory Services",
      link: "/business-advisory",
      description:
        "• Strategic business advice\n• Process improvement\n• Growth and expansion planning",
    },
    {
      title: "Business Support Services",
      link: "/business-support",
      description:
        "• Strategic business advice\n• Process improvement\n• Growth and expansion planning",
    },
    {
      title: "Anti–Money Laundering (AML)",
      link: "/aml",
      description:
        "• AML policy development\n• Risk assessment & monitoring\n• Regulatory compliance support",
    },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
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
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        className="font-sans py-2 w-full sticky top-0  z-50 transition-all duration-300 "
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/LogoDark.png"
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
                      transition={{ delay: i * 0.1 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className="px-4 py-2 text-black hover:text-teal-700 text-xl font-medium transition-colors relative group flex items-center gap-1"
                      >
                        {link}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          } text-black`}
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
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={href}
                      className="px-4 py-2 text-black hover:text-teal-700 text-xl font-medium transition-colors relative group"
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
              className="hidden md:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-black text-black font-medium hover:bg-teal-800 hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
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
                className="w-6 h-6 text-black"
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
                className="lg:hidden overflow-hidden bg-white text-center rounded-lg"
              >
                <div className="py-4 space-y-2">
                  {navLinks.map((link, i) => {
                    const href =
                      link === "Home" ? "/" : `/${link.toLowerCase()}`;

                    if (link === "Services") {
                      return (
                        <motion.div key={link} custom={i} variants={linkVariants}>
                          <button
                            onClick={() => setServicesOpen((prev) => !prev)}
                            className="w-full px-4 py-3 flex items-center justify-center text-black hover:bg-teal-100 hover:text-teal-700 rounded-lg font-medium transition-colors"
                          >
                            Services
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
                          </button>

                          <AnimatePresence>
                            {servicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-6 pr-4 space-y-1 text-start"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.title}
                                    href={service.link}
                                    className="block py-2 text-black hover:text-teal-700 text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div key={link} custom={i} variants={linkVariants}>
                        <a
                          href={href}
                          className="block px-4 py-3 text-black hover:bg-teal-100 hover:text-teal-700 rounded-lg font-medium transition-colors"
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

      {/* Mega Menu */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            variants={megaMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl  rounded-2xl  z-40"
          >
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-1 flex flex-col justify-center pr-6">
                  <h3 className="text-3xl font-bold mb-4 text-black">
                    Our Services
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    No matter your role or goal{" "}
                    <span className="text-teal-700 font-bold">BAC</span> adapts
                    to your needs
                  </p>
                </div>

                <div className="lg:col-span-4 grid grid-cols-6 sm:grid-cols-6 gap-x-3 pt-12 text-center">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="space-y-2"
                    >
                      <Link
                        href={service.link}
                        className="text-lg font-semibold mb-2 text-black"
                      >
                        {service.title}
                      </Link>

                      <ul className="text-start list-disc pl-5 space-y-1 text-gray-700">
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
