"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Herosection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-dark-primary text-white font-sans"
    >
      {/* Background Image with Continuous Zoom Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/img.jpg"
          alt="Accounting Team"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 sm:mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block text-white "
              >
                A STRATEGIC FORCE
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="block italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-secondary animate-gradient"
              >
                Behind Your Numbers
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            >
              Expert accounting & tax solutions that help Dubai businesses grow
              with confidence.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block  text-white text-lg font-semibold w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        
      </motion.div>
    </section>
  );
}
