"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "80px"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section
      ref={containerRef}
      id="home"
      style={{
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      }}
      className="relative overflow-hidden min-h-screen flex items-center bg-primary text-white font-sans"
    >
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
          src="/images/business5.webp"
          alt="Accounting Team"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-transparent z-10" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-20 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 sm:mb-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block text-white"
            >
              Strategic Expertise From
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-secondary animate-gradient"
            >
              Dedicated Advisors
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            At Booker Accounting, we deliver tailored, technology-driven
            solutions to drive your success in the UAE's dynamic financial
            landscape.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block text-white text-lg font-semibold w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
