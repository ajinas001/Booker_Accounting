"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiChevronUp } from "react-icons/fi";
import { FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Data for the menu items
const menuItems = [
  { label: "Websites", href: "#websites" },
  { label: "Mobile App", href: "#mobile-app" },
  { label: "UI/UX", href: "#ui-ux" },
  { label: "Branding", href: "#branding", isActive: true }, // Set one as active for styling
];

const contactItems = [
  { icon: FiPhone, label: "Call now", type: "phone" },
  { icon: FiMail, label: "Mail us", type: "email" },
];

const socialItems = [
  { icon: FaBehance, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaInstagram, href: "#" },
];

// ⚙️ Framer Motion Variants

// Button/Menu Container Animation
const menuContainerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2 },
  },
};

// Individual Menu Item Animation
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function FloatingMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  // 🖱️ Animated Cursor Icon (Mimics the screenshot)
  const CursorIcon = () => (
    <motion.div
      animate={{
        y: [0, -2, 0], // Subtle bounce
        transition: {
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
      className="p-2 bg-pink-100 rounded-lg shadow-md cursor-pointer"
    >
      <svg
        className="w-5 h-5 text-pink-500 transform rotate-12"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M12.93 17.06c-.45.45-1.18.45-1.63 0l-7-7c-.45-.45-.45-1.18 0-1.63l7-7c.45-.45 1.18-.45 1.63 0l7 7c.45.45.45 1.18 0 1.63l-7 7z" />
      </svg>
    </motion.div>
  );

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen ? (
          // --- Menu Pop-up ---
          <motion.div
            key="menu"
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-64 bg-white p-4 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-100"
          >
            {/* Menu Items Section */}
            <motion.div className="mb-4">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <Link href={item.href}>
                      <span
                        className={`block px-4 py-2 rounded-xl text-lg font-medium transition-all ${
                          item.isActive
                            ? "bg-pink-100 text-pink-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div className="mb-4 pt-4 border-t border-gray-100">
              <ul className="space-y-2">
                {contactItems.map((item, index) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <Link
                      href={item.type === "phone" ? "tel:#" : "mailto:#"}
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="text-lg font-medium">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media Section */}
            <motion.div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
              {socialItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Close Button at the Bottom */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute -bottom-4 right-1/2 translate-x-1/2 p-2 bg-white rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronUp className="w-5 h-5 text-gray-500" />
            </motion.button>
          </motion.div>
        ) : (
          // --- Floating Button (Cursor Icon) ---
          <motion.button
            key="button"
            className="relative"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CursorIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ⚠️ Note: Simple Link wrapper for non-Next.js environments.
// In a real Next.js app, replace this with `import Link from 'next/link'`
const Link = ({ href, children }) => (
  <a href={href} style={{ textDecoration: 'none' }}>{children}</a>
);