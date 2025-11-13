"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- START: Static Data & Helpers ---

const SERVICES_DATA_RAW = [
  {
    title: "Audit & Assurance",
    link: "/audit-assurance",
    description:
      "• External Audit\n• Real Estate Audit\n• Internal Audit\n• Inventory Audit\n• Due Diligence Support\n• Forensic Audit",
  },
  {
    title: "Taxation",
    link: "/taxation",
    description: "• Corporate Tax\n• Value Added Tax (VAT)\n• Tax Agent Service",
  },
  {
    title: "Accounting & Bookkeeping",
    link: "/accounting-bookkeeping",
    description:
      "• Accounts Regulation\n• Cloud Accounting Services\n• Audit Preparation & Support\n• Accounting & Financial Reporting\n• Inventory & Asset Verification",
  },
  {
    title: "Business Advisory Services",
    link: "/business-advisory",
    description:
      "• CFO Service\n• Business Valuation\n• Business Consultation\n• Merger & Acquisition\n• Business Process Re-engineering\n• Financial Feasibilities\n• IFRS Advisory Service",
  },
  {
    title: "Business Support Services",
    link: "/business-support",
    description:
      "• Mainland Company Formation\n• Freezone Business Setup\n• Company Secretarial Service\n• Liquidation / De-registration\n• ICV Consultancy\n• PRO Service",
  },
  {
    title: "Anti–Money Laundering (AML)",
    link: "/aml",
    description:
      "• AML Risk Assessment\n• Compliance Program Design\n• Transaction Monitoring\n• KYC & Customer Due Diligence\n• AML Training & Awareness\n• Regulatory Reporting",
  },
];

const NAV_LINKS = ["Home", "About", "Services", "Blog", "Contact"];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  // Use a fixed max-height instead of 'auto' for potentially better mobile performance
  open: {
    opacity: 1,
    height: "auto", // Can be changed to '500px' if 'auto' is buggy on iOS
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

// --- END: Static Data & Helpers ---

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  // Helper function for cleaner class assignment based on 'scrolled' prop
  const getColor = (dark, light) => (scrolled ? dark : light);

  // Pre-process services data for cleaner rendering (Optimization/Cleanliness)
  const processedServices = useMemo(() => {
    return SERVICES_DATA_RAW.map(service => ({
      ...service,
      descriptionPoints: service.description
        .split('\n')
        .map(point => point.replace('•', '').trim())
        .filter(point => point.length > 0)
    }));
  }, []);


  

  // Handle mobile services dropdown click
  const toggleMobileServices = () => setServicesOpen((prev) => !prev);
  // Function to close both mobile menus (used on link click)
  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
 <nav className=" absolute font py-4 w-full z-50    bg-transparent text-white">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/LogoL.png"
          alt="Booker Accounting Company Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        {NAV_LINKS.map((link) => {
          const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;

          if (link === "Services") {
            return (
              <div
                key={link}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="relative"
              >
                <button className="px-4 py-2 text-white hover:text-teal-400 text-md font-medium transition-colors relative group flex items-center gap-1">
                  {link}
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />
                </button>
              </div>
            );
          }

          return (
            <a
              key={link}
              href={href}
              className="px-4 py-2 text-white hover:text-teal-400 text-md font-medium transition-colors relative group"
            >
              {link}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0" />
            </a>
          );
        })}
      </div>

      {/* Get Started Button */}
      <button className="hidden lg:block ml-4 w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-white text-white font-medium hover:bg-teal-600 transition-colors">
        Get started
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-teal-400"
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
      </button>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden bg-transparent backdrop-blur-sm text-white text-center rounded-lg"
        >
          <div className="py-4 space-y-2">
            {NAV_LINKS.map((link) => {
              const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;

              if (link === "Services") {
                return (
                  <motion.div
                    key={link}
                    variants={linkVariants}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <button
                      onClick={toggleMobileServices}
                      className="w-full px-4 py-3 flex items-center justify-center text-white hover:text-teal-400 rounded-lg font-medium transition-colors gap-1"
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
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
                          transition={{ duration: 0.2 }}
                          className="w-full pl-6 pr-4 space-y-1 text-start"
                        >
                          {processedServices.map((service) => (
                            <Link
                              key={service.title}
                              href={service.link}
                              className="block py-2 text-gray-200 hover:text-teal-400 text-sm transition-colors"
                              onClick={closeAllMenus}
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
                <motion.div key={link} variants={linkVariants}>
                  <a
                    href={href}
                    className="block px-4 py-3 text-white hover:text-teal-400 rounded-lg font-medium transition-colors"
                    onClick={closeAllMenus}
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
</nav>

{/* Mega Menu */}
<AnimatePresence>
  {servicesOpen && (
    <motion.div
      variants={megaMenuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setServicesOpen(true)}
      onMouseLeave={() => setServicesOpen(false)}
      className="absolute left-0 right-0 z-40 p-4 bg-transparent backdrop-blur-sm text-white m-4 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-2 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-1 flex flex-col justify-center pr-6">
            <h3 className="text-3xl font-bold mb-4">Our Services</h3>
            <p className="text-base leading-relaxed text-gray-200">
              No matter your role or goal{" "}
              <span className="text-teal-400 font-bold">BAC</span> adapts to your needs
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 pt-12 text-start">
            {processedServices.map((service) => (
              <div key={service.title} className="space-y-2">
                <Link
                  href={service.link}
                  className="block text-lg font-semibold mb-2 hover:text-teal-400 transition-colors"
                  onClick={closeAllMenus}
                >
                  {service.title}
                </Link>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  {service.descriptionPoints.map((point, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
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