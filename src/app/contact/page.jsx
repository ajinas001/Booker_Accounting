"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Send, } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";


// --- 0. Placeholder Components (Themed) ---

// --- 1. Themed Contact Hero Component (Dark Background, Image & Animation) ---
function ContactHero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <>
      <section className="relative overflow-hidden text-white ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] hover:scale-110"
            style={{
              backgroundImage: `url('/images/img3.jpg')`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex text-gray-300 gap-x-2">
              <Link href="/">
                <span className="text-white cursor-pointer hover:text-teal-400 transition-colors">
                  Home
                </span>
              </Link>
              &nbsp;›&nbsp;
              <span className="text-teal-400 font-medium">Contact Us</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            We're Ready,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              When You Are.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Whether you have a project in mind, a question about our services,
            or just want to say hello, our team is eager to hear from you.
          </motion.p>
        </div>
      </section>
    </>
  );
}

// --- 2. Themed ContactSection (Scroll-Animated + Button Fix) ---


// --- 3. Themed Contact Form Component (with State/Effect Logic) ---
function ContactForm() {
  // State Management for the Form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'idle', 'loading', 'success', 'error'

  // useEffect for Status Cleanup
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };
  const inputVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="contact-form" className="py-20 px-8 md:px-20 bg-gray-100">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-secondary text-center"
      >
        Send us a Message
      </motion.h3>

      <motion.form
        className="max-w-3xl mx-auto space-y-6"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={inputVariants}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary bg-white text-gray-900"
            />
          </motion.div>
          <motion.div variants={inputVariants}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary bg-white text-gray-900"
            />
          </motion.div>
        </div>

        <motion.div variants={inputVariants}>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary bg-white text-gray-900"
          />
        </motion.div>

        <motion.div variants={inputVariants}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary bg-white text-gray-900"
          ></textarea>
        </motion.div>

        {status === "success" && (
          <p className="text-green-600 font-semibold text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-semibold text-center">
            ❌ Failed to send message. Please try again.
          </p>
        )}

        <motion.button
          type="submit"
          variants={inputVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === "loading"}
          // Submit button uses Secondary (dark) for BG and Primary (light) for text
          className="w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-3 mt-6 text-lg font-semibold text-white bg-secondary rounded-tl-full rounded-tr-full rounded-br-full border-2 hover:bg-opacity-90 transition duration-300 shadow-xl disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
          <span>{status === "loading" ? "Sending..." : "Submit Message"}</span>
        </motion.button>
      </motion.form>
    </section>
  );
}

// --- 4. Themed Location Info ---
function LocationInfo() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 px-8 md:px-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                <motion.div variants={itemVariants}>
                    <h4 className="text-xl font-bold text-secondary mb-3">Our Office</h4>
                    <p className="text-gray-700">123 Tech Park Avenue, Suite 400, Innovation City, CA 90210</p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <h4 className="text-xl font-bold text-secondary mb-3">Contact Details</h4>
                    <p className="text-gray-700">**Email:** <a href="mailto:info@yourcompany.com" className="text-secondary hover:underline">info@yourcompany.com</a></p>
                    <p className="text-gray-700">**Phone:** <a href="tel:+15551234567" className="text-secondary hover:underline">+1 (555) 123-4567</a></p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <h4 className="text-xl font-bold text-secondary mb-3">Social Media</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-700 hover:text-secondary transition">Facebook</a>
                        <a href="#" className="text-gray-700 hover:text-secondary transition">LinkedIn</a>
                        <a href="#" className="text-gray-700 hover:text-secondary transition">X (Twitter)</a>
                    </div>
                </motion.div>
            </div> */}

      <motion.div
        className="mt-16 w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center w-full h-full text-secondary font-medium text-lg">
          [Placeholder for Google Maps Embed or Interactive Map Component]
        </div>
      </motion.div>
    </motion.section>
  );
}

// --- 5. Main Contact Page Component ---
export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for Navbar opacity change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      /> */}
      <main>
        <ContactHero />
        <ContactSection/>
        <ContactForm />
        <LocationInfo />
      </main>
      <Footer />
    </div>
  );
}
