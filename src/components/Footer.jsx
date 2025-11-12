"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

// Minimal animation variant for the whole footer content
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1, // Stagger children for a cleaner single animation
    },
  },
};

// Variant for the social icons section (a child of the main variant)
const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// Data structures moved outside the component to prevent re-creation on every render
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
  // Removed useState for dropdown, using CSS hover or a more concise Framer effect if needed.

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white border-t rounded-t-[4rem]">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={footerVariants}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Section - Logo and Description */}
          <motion.div variants={itemVariant} className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/LogoLight.png"
                  alt="Booker Accounting Company Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-50 leading-relaxed">
              Booker refers to the global organization of accounting and
              consultancy firms, providing trusted financial services with
              integrity and innovation.
            </p>
          </motion.div>

          {/* Right Section - Links (Simplified structure) */}
          <motion.div variants={itemVariant} className="flex flex-col md:flex-row items-start md:items-center gap-8 text-sm font-medium">
            
            {/* Services Dropdown - Using CSS for simplicity. Using 'group' utility. */}
            <div className="relative group">
              <button className="hover:underline text-gray-50 hover:text-gray-200 transition-colors flex items-center">
                Services <span className="ml-1 group-hover:rotate-180 transition-transform">▾</span>
              </button>

              {/* Dropdown Content */}
              <div
                className="absolute right-0 md:right-auto md:left-0 top-full mt-2 bg-white text-gray-700 shadow-xl rounded-lg py-4 px-6 min-w-[220px] z-50 
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              >
                {serviceLinks.map((s, idx) => (
                  <Link
                    key={idx}
                    href={s.href}
                    className="block py-2 hover:text-teal-600 transition"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Page Links */}
            {pageLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:underline text-gray-50 hover:text-gray-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* --- */}

        {/* Bottom Section - Copyright and Socials */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
          <motion.p variants={itemVariant} className="text-sm text-gray-50 leading-relaxed max-w-2xl text-center md:text-left order-2 md:order-1 mt-6 md:mt-0">
            © {new Date().getFullYear()} Booker Global Limited, each of which is a separate legal entity.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            variants={itemVariant}
            className="flex gap-3 order-1 md:order-2"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-teal-500/80 border border-white/20 rounded-xl w-10 h-10 flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              >
                <social.icon size={16} className="text-white" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;