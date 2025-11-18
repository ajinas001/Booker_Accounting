"use client";

import { motion } from "framer-motion";
import MottoSwiper from "./MottoSwiper";

const MainVisionSection = () => {
  // Sophisticated icon components
  const BuildIcon = () => (
    // Reduced viewBox from 100 100 to 50 50
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      {/* Foundation layers (All coordinates and sizes halved) */}
      <motion.rect
        x="10"
        y="32.5"
        width="30"
        height="4"
        fill="url(#buildGrad)"
        opacity="0.3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "25px 34.5px" }}
      />
      <motion.rect
        x="12.5"
        y="26"
        width="25"
        height="4"
        fill="url(#buildGrad)"
        opacity="0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transformOrigin: "25px 28px" }}
      />
      <motion.rect
        x="15"
        y="19.5"
        width="20"
        height="4"
        fill="url(#buildGrad)"
        opacity="0.7"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ transformOrigin: "25px 21.5px" }}
      />
      <motion.rect
        x="17.5"
        y="13"
        width="15"
        height="4"
        fill="url(#buildGrad)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ transformOrigin: "25px 15px" }}
      />
    </svg>
  );

  const BalanceIcon = () => (
    // Reduced viewBox from 100 100 to 50 50
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="balGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      {/* Balance beam (All coordinates and sizes halved) */}
      <motion.line
        x1="25"
        y1="12.5"
        x2="25"
        y2="35"
        stroke="url(#balGrad)"
        strokeWidth="1.25"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* Horizontal beam */}
      <motion.line
        x1="10"
        y1="17.5"
        x2="40"
        y2="17.5"
        stroke="url(#balGrad)"
        strokeWidth="1.25"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      {/* Left scale */}
      <motion.path
        d="M 10 17.5 L 7.5 22.5 L 12.5 22.5 Z" // Reduced coordinates
        fill="url(#balGrad)"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ transformOrigin: "10px 20px" }}
      />
      {/* Right scale */}
      <motion.path
        d="M 40 17.5 L 37.5 22.5 L 42.5 22.5 Z" // Reduced coordinates
        fill="url(#balGrad)"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ transformOrigin: "40px 20px" }}
      />
      {/* Base */}
      <motion.rect
        x="20"
        y="35"
        width="10"
        height="2"
        rx="1"
        fill="url(#balGrad)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ transformOrigin: "25px 36px" }}
      />
    </svg>
  );

  const BrillianceIcon = () => (
    // Reduced viewBox from 100 100 to 50 50
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="brillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      {/* Diamond shape (All coordinates and sizes halved) */}
      <motion.path
        d="M 25 10 L 35 20 L 25 37.5 L 15 20 Z"
        fill="none"
        stroke="url(#brillGrad)"
        strokeWidth="1.25"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Inner facets */}
      <motion.line
        x1="15"
        y1="20"
        x2="25"
        y2="20"
        stroke="url(#brillGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.line
        x1="35"
        y1="20"
        x2="25"
        y2="20"
        stroke="url(#brillGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.line
        x1="25"
        y1="20"
        x2="25"
        y2="37.5"
        stroke="url(#brillGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      {/* Sparkle effect */}
      <motion.circle
        cx="25"
        cy="10"
        r="1.5" // Reduced radius
        fill="url(#brillGrad)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 1.2 }}
      />
    </svg>
  );

  // Enhanced central visualization
  const CentralVision = () => (
    // Reduced viewBox from 800 500 to 400 250
    <svg viewBox="0 0 400 250" className="w-full h-auto">
      <defs>
        <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="50%" stopColor="#0e7490" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#155e75" />
        </linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1" result="blur"/> {/* Reduced stdDeviation */}
          <feComposite in="blur" in2="SourceGraphic" operator="over"/>
        </filter>
      </defs>

      {/* Outer framework circle (All coordinates and sizes halved) */}
      <motion.circle
        cx="200"
        cy="125"
        r="100"
        fill="none"
        stroke="#e0f2fe"
        strokeWidth="1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Connection paths */}
      <motion.path
        d="M 200 125 L 100 125"
        stroke="url(#mainGrad)"
        strokeWidth="1"
        strokeDasharray="3 3" // Reduced dash size
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d="M 200 125 L 300 125"
        stroke="url(#mainGrad)"
        strokeWidth="1"
        strokeDasharray="3 3" // Reduced dash size
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Balance node - Left */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
      >
        <circle cx="100" cy="125" r="32.5" fill="white" stroke="#e0f2fe" strokeWidth="1" />
        <circle cx="100" cy="125" r="29" fill="none" stroke="url(#mainGrad)" strokeWidth="1" />
        <text x="100" y="122.5" textAnchor="middle" fill="#0e7490" fontSize="7.5" fontWeight="600"> {/* Reduced font size */}
          BALANCE
        </text>
        <text x="100" y="132.5" textAnchor="middle" fill="#0891b2" fontSize="5.5" fontWeight="500"> {/* Reduced font size */}
          Compliance
        </text>
      </motion.g>

      {/* Central Build node */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
      >
        <circle cx="200" cy="125" r="42.5" fill="url(#coreGrad)" filter="url(#softGlow)" />
        <circle cx="200" cy="125" r="39" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />
        <motion.circle
          cx="200"
          cy="125"
          r="42.5"
          fill="none"
          stroke="white"
          strokeWidth="0.5" // Reduced stroke width
          opacity="0"
          animate={{
            r: [42.5, 47.5], // Reduced animation radius
            opacity: [0.4, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <text x="200" y="127.5" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="1.5"> {/* Reduced font size/spacing */}
          BUILD
        </text>
        <text x="200" y="137.5" textAnchor="middle" fill="white" fontSize="6" fontWeight="500" opacity="0.9"> {/* Reduced font size */}
          Core Foundation
        </text>
      </motion.g>

      {/* Brilliance node - Right */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
      >
        <circle cx="300" cy="125" r="32.5" fill="white" stroke="#e0f2fe" strokeWidth="1" />
        <circle cx="300" cy="125" r="29" fill="none" stroke="url(#mainGrad)" strokeWidth="1" />
        <text x="300" y="122.5" textAnchor="middle" fill="#0e7490" fontSize="7.5" fontWeight="600"> {/* Reduced font size */}
          BRILLIANCE
        </text>
        <text x="300" y="132.5" textAnchor="middle" fill="#0891b2" fontSize="5.5" fontWeight="500"> {/* Reduced font size */}
          Excellence
        </text>
      </motion.g>

      {/* Decorative nodes */}
      <motion.circle
        cx="150"
        cy="75"
        r="2"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="250"
        cy="75"
        r="2.5"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.circle
        cx="150"
        cy="175"
        r="2"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.circle
        cx="250"
        cy="175"
        r="2.5"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );

  return (
    <>
      {/* <MottoSwiper/> */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-cyan-50/20 py-16 md:py-16 overflow-hidden">
        {/* Subtle top border */}

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8" // Reduced margin-bottom
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12  bg-gradient-to-r from-transparent to-cyan-600" />
              <span className="text-cyan-700 text-sm font-semibold uppercase tracking-widest">
                Our Vision
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-600" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 tracking-tight leading-tight">
              Building Your Financial
            </h2>
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-cyan-700 to-cyan-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Future with Purpose
            </motion.h3>
          </motion.div>

          {/* Central Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 max-w-3xl mx-auto" // Added max-width to contain the diagram
          >
            <CentralVision />
          </motion.div>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"> {/* Reduced gap and margin */}
            {/* Build Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out" />
              <div className="relative text-center p-6"> {/* Reduced padding */}
                <div className="w-20 h-20 mx-auto mb-4"> {/* Reduced size */}
                  <BuildIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Build</h3> {/* Reduced font size */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed"> {/* Reduced font size */}
                  Empowering businesses to grow stronger with dependable bookkeeping and expert guidance. We lay the foundation for your sustainable success.
                </p>
              </div>
            </motion.div>

            {/* Balance Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out" />
              <div className="relative text-center p-6"> {/* Reduced padding */}
                <div className="w-20 h-20 mx-auto mb-4"> {/* Reduced size */}
                  <BalanceIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Balance</h3> {/* Reduced font size */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed"> {/* Reduced font size */}
                  Ensuring compliance and financial stability so you can scale with confidence and maintain peace of mind throughout your growth journey.
                </p>
              </div>
            </motion.div>

            {/* Brilliance Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out" />
              <div className="relative text-center p-6"> {/* Reduced padding */}
                <div className="w-20 h-20 mx-auto mb-4"> {/* Reduced size */}
                  <BrillianceIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Brilliance</h3> {/* Reduced font size */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed"> {/* Reduced font size */}
                  Delivering excellence through insightful, proactive accounting and advisory services tailored to your unique business needs.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pt-16 border-t border-gray-200/60" // Reduced padding-top
          >
            <blockquote className="text-xl font-light text-gray-700 mx-auto leading-relaxed mb-8 px-4"> {/* Reduced font size and margin */}
              <motion.span
                className="text-cyan-600 text-3xl font-serif" // Reduced font size
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                "
              </motion.span>
                Where financial clarity, regulatory confidence, and business growth are accessible to all <br/>
                powered by integrity, insight, and intelligent technology.
              <motion.span
                className="text-cyan-600 text-3xl font-serif" // Reduced font size
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                "
              </motion.span>
            </blockquote>

            <motion.div
              className="inline-flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-10 h-px bg-cyan-600" />
              <span className="text-cyan-700 font-semibold text-sm uppercase tracking-widest">
                BAC Vision
              </span>
              <div className="w-10 h-px bg-cyan-600" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MainVisionSection;