"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiChevronUp } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

// Data for the contact items
const contactItems = [
  { icon: FiPhone, label: "Call us now", type: "phone", href: "tel:+1234567890" },
  { icon: FiMail, label: "Mail us now", type: "email", href: "mailto:contact@example.com" },
];

const socialItems = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaWhatsapp, href: "https://wa.me/1234567890", label: "WhatsApp" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
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
    y: [0, -3, 0], // slight hover bounce
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }}
  className="p-2 bg-primary rounded-lg shadow-md cursor-pointer"
>
  <svg
    className="w-6 h-6 text-cyan-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M17 7H9M17 7V15"
    />
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
            {/* Contact Section */}
            <motion.div className="mb-4">
              <ul className="space-y-2">
                {contactItems.map((item, index) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <a
                      href={item.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="text-lg font-medium">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media Section */}
            <motion.div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
              {socialItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-500 hover:text-cyan-600 transition-colors"
                  aria-label={item.label}
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