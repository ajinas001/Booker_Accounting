"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

// Simple fade-up animation
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const serviceLinks = [
  { name: "Audit & Assurance", href: "/audit-assurance" },
  { name: "Taxation", href: "/taxation" },
  { name: "Accounting & Bookkeeping", href: "/accounting-bookkeeping" },
  { name: "Tax Agent Services", href: "/tax-agent" },
  { name: "Business Advisory", href: "/business-advisory" },
  { name: "CFO Services", href: "/cfo-services" },
];

const pageLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const [openServices, setOpenServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white border-t rounded-t-[4rem]">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo + Description */}
          <motion.div variants={fadeIn} className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/LogoLight.png"
                alt="Booker Accounting Company Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-50 leading-relaxed">
              Booker refers to the global organization of accounting and
              consultancy firms, providing trusted financial services with
              integrity and innovation.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 text-sm font-medium w-full md:w-auto"
          >
            {/* Services Dropdown */}
            <div
              className={`relative ${
                !isMobile ? "group" : ""
              }`} /* enable hover group only for desktop */
            >
              <button
                onClick={() => isMobile && setOpenServices(!openServices)}
                className="text-gray-50 flex items-center justify-between w-full md:w-auto focus:outline-none"
              >
                Services
                <span
                  className={`ml-1 transition-transform duration-300 ${
                    openServices ? "rotate-180" : ""
                  } md:group-hover:rotate-180`}
                >
                  ▾
                </span>
              </button>

              {/* Dropdown content */}
              <div
                className={`absolute md:left-0 mt-2 md:mt-0 bg-white md:bg-transparent text-gray-700 md:text-gray-50 shadow-xl md:shadow-none rounded-lg md:rounded-none py-4 px-6 md:p-0 min-w-[220px] z-50 transition-all duration-300
                  ${
                    isMobile
                      ? openServices
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2"
                  }`}
              >
                {serviceLinks.map((s, idx) => (
                  <Link
                    key={idx}
                    href={s.href}
                    onClick={() => setOpenServices(false)}
                    className="block py-2"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Static Page Links */}
            {pageLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-50">
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeIn}
          className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700"
        >
          <p className="text-sm text-gray-50 leading-relaxed max-w-2xl text-center md:text-left order-2 md:order-1 mt-6 md:mt-0">
            © {new Date().getFullYear()} Booker Global Limited, each of which is
            a separate legal entity.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 order-1 md:order-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-white/10 border border-white/20 rounded-xl w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              >
                <social.icon size={16} className="text-white" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
