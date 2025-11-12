"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ------------------ DATA ------------------ */
const SERVICES = [
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

const NAV = ["Home", "About", "Services", "Blog", "Contact"];

/* ------------------ ANIMATIONS ------------------ */
const menuVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08 },
  }),
};

const megaMenuVariants = {
  closed: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0 },
};

/* ------------------ COMPONENT ------------------ */
export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const textColor = (dark, light) => (scrolled ? dark : light);

  const services = useMemo(
    () =>
      SERVICES.map((s) => ({
        ...s,
        descriptionPoints: s.description
          .split("\n")
          .map((p) => p.replace("•", "").trim()),
      })),
    []
  );

  /* -------- Hide navbar on scroll down -------- */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowNav(!(y > lastScrollY && y > 80));
      if (y > lastScrollY) setServicesOpen(false);
      setLastScrollY(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -120 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 py-4 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">

          {/* Logo */}
          <Image
            src={scrolled ? "/images/LogoDark.png" : "/images/LogoLight.png"}
            alt="BAC Logo"
            width={120}
            height={120}
            className="object-contain"
          />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV.map((item, i) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;

              if (item === "Services") {
                return (
                  <motion.div
                    key={item}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <button
                      className={`px-4 py-2 text-xl font-medium ${textColor(
                        "text-gray-900",
                        "text-white"
                      )} flex gap-1 items-center`}
                    >
                      Services
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        className="inline-block"
                      >
                        ▼
                      </motion.span>
                    </button>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={item}
                  href={href}
                  className={`px-4 py-2 text-xl font-medium ${textColor(
                    "text-gray-900",
                    "text-white"
                  )}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {item}
                </motion.a>
              );
            })}
          </div>

          {/* Get Started Button */}
          <button
            className={`hidden lg:block ml-4 px-8 py-3 rounded-full border-2 ${
              scrolled
                ? "border-gray-900 text-gray-900"
                : "border-white text-white"
            }`}
          >
            Get started
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* -------- Mobile MENU -------- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-white rounded-lg overflow-hidden [transform:translateZ(0)]"
            >
              {NAV.map((item, i) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                if (item === "Services") {
                  return (
                    <motion.div key={item} variants={linkVariants} custom={i}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full px-4 py-3 text-gray-900 font-medium"
                      >
                        Services
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 pr-4 pb-3"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.title}
                                href={service.link}
                                className="block py-2 text-sm text-gray-700"
                                onClick={closeAll}
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
                  <motion.a
                    key={item}
                    href={href}
                    variants={linkVariants}
                    custom={i}
                    className="block px-4 py-3 text-gray-900 font-medium"
                    onClick={closeAll}
                  >
                    {item}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* -------- Desktop Mega Menu -------- */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            variants={megaMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className={`fixed top-20 left-0 right-0 p-4 m-4 rounded-2xl z-40 ${
              scrolled
                ? "bg-white shadow-xl"
                : "bg-gray-900 bg-opacity-95"
            }`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className={`text-3xl font-bold ${textColor(
                "text-gray-900",
                "text-white"
              )}`}>
                Our Services
              </div>

              <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.title}>
                    <Link
                      href={service.link}
                      onClick={closeAll}
                      className={`text-lg font-semibold block mb-2 ${textColor(
                        "text-gray-900",
                        "text-white"
                      )}`}
                    >
                      {service.title}
                    </Link>
                    <ul className={`pl-4 text-sm space-y-1 ${textColor(
                      "text-gray-600",
                      "text-gray-300"
                    )}`}>
                      {service.descriptionPoints.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
