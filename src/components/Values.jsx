"use client";

import { motion } from "framer-motion";

const MainVisionSection = () => {
  // Sophisticated icon components
  const BuildIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      {/* Foundation layers */}
      <motion.rect
        x="20"
        y="65"
        width="60"
        height="8"
        fill="url(#buildGrad)"
        opacity="0.3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "50px 69px" }}
      />
      <motion.rect
        x="25"
        y="52"
        width="50"
        height="8"
        fill="url(#buildGrad)"
        opacity="0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transformOrigin: "50px 56px" }}
      />
      <motion.rect
        x="30"
        y="39"
        width="40"
        height="8"
        fill="url(#buildGrad)"
        opacity="0.7"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ transformOrigin: "50px 43px" }}
      />
      <motion.rect
        x="35"
        y="26"
        width="30"
        height="8"
        fill="url(#buildGrad)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ transformOrigin: "50px 30px" }}
      />
    </svg>
  );

  const BalanceIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="balGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      {/* Balance beam */}
      <motion.line
        x1="50"
        y1="25"
        x2="50"
        y2="70"
        stroke="url(#balGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* Horizontal beam */}
      <motion.line
        x1="20"
        y1="35"
        x2="80"
        y2="35"
        stroke="url(#balGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      {/* Left scale */}
      <motion.path
        d="M 20 35 L 15 45 L 25 45 Z"
        fill="url(#balGrad)"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ transformOrigin: "20px 40px" }}
      />
      {/* Right scale */}
      <motion.path
        d="M 80 35 L 75 45 L 85 45 Z"
        fill="url(#balGrad)"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ transformOrigin: "80px 40px" }}
      />
      {/* Base */}
      <motion.rect
        x="40"
        y="70"
        width="20"
        height="4"
        rx="2"
        fill="url(#balGrad)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ transformOrigin: "50px 72px" }}
      />
    </svg>
  );

  const BrillianceIcon = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="brillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      {/* Diamond shape */}
      <motion.path
        d="M 50 20 L 70 40 L 50 75 L 30 40 Z"
        fill="none"
        stroke="url(#brillGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Inner facets */}
      <motion.line
        x1="30"
        y1="40"
        x2="50"
        y2="40"
        stroke="url(#brillGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.line
        x1="70"
        y1="40"
        x2="50"
        y2="40"
        stroke="url(#brillGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.line
        x1="50"
        y1="40"
        x2="50"
        y2="75"
        stroke="url(#brillGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      {/* Sparkle effect */}
      <motion.circle
        cx="50"
        cy="20"
        r="3"
        fill="url(#brillGrad)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 1.2 }}
      />
    </svg>
  );

  // Enhanced central visualization
  const CentralVision = () => (
    <svg viewBox="0 0 800 500" className="w-full h-auto">
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
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feComposite in="blur" in2="SourceGraphic" operator="over"/>
        </filter>
      </defs>

      {/* Outer framework circle */}
      <motion.circle
        cx="400"
        cy="250"
        r="200"
        fill="none"
        stroke="#e0f2fe"
        strokeWidth="1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Connection paths */}
      <motion.path
        d="M 400 250 L 200 250"
        stroke="url(#mainGrad)"
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d="M 400 250 L 600 250"
        stroke="url(#mainGrad)"
        strokeWidth="2"
        strokeDasharray="6 6"
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
        <circle cx="200" cy="250" r="65" fill="white" stroke="#e0f2fe" strokeWidth="2" />
        <circle cx="200" cy="250" r="58" fill="none" stroke="url(#mainGrad)" strokeWidth="2" />
        <text x="200" y="245" textAnchor="middle" fill="#0e7490" fontSize="15" fontWeight="600">
          BALANCE
        </text>
        <text x="200" y="265" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="500">
          Compliance
        </text>
      </motion.g>

      {/* Central Build node */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
      >
        <circle cx="400" cy="250" r="85" fill="url(#coreGrad)" filter="url(#softGlow)" />
        <circle cx="400" cy="250" r="78" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
        <motion.circle
          cx="400"
          cy="250"
          r="85"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0"
          animate={{
            r: [85, 95],
            opacity: [0.4, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <text x="400" y="255" textAnchor="middle" fill="white" fontSize="22" fontWeight="700" letterSpacing="3">
          BUILD
        </text>
        <text x="400" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="500" opacity="0.9">
          Core Foundation
        </text>
      </motion.g>

      {/* Brilliance node - Right */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
      >
        <circle cx="600" cy="250" r="65" fill="white" stroke="#e0f2fe" strokeWidth="2" />
        <circle cx="600" cy="250" r="58" fill="none" stroke="url(#mainGrad)" strokeWidth="2" />
        <text x="600" y="245" textAnchor="middle" fill="#0e7490" fontSize="15" fontWeight="600">
          BRILLIANCE
        </text>
        <text x="600" y="265" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="500">
          Excellence
        </text>
      </motion.g>

      {/* Decorative nodes */}
      <motion.circle
        cx="300"
        cy="150"
        r="4"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="500"
        cy="150"
        r="5"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.circle
        cx="300"
        cy="350"
        r="4"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.circle
        cx="500"
        cy="350"
        r="5"
        fill="#0891b2"
        opacity="0.4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-cyan-50/20 py-24 md:py-32 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-600" />
            <span className="text-cyan-700 text-sm font-semibold uppercase tracking-widest">
              Our Vision
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-600" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-3 tracking-tight leading-tight">
            Building Your Financial
          </h2>
          <motion.h3
            className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-cyan-700 to-cyan-600 bg-clip-text text-transparent"
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
          className="mb-24"
        >
          <CentralVision />
        </motion.div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 max-w-6xl mx-auto">
          {/* Build Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out" />
            <div className="relative text-center p-8">
              <div className="w-28 h-28 mx-auto mb-6">
                <BuildIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Build</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-5" />
              <p className="text-gray-600 leading-relaxed">
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
            <div className="relative text-center p-8">
              <div className="w-28 h-28 mx-auto mb-6">
                <BalanceIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Balance</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-5" />
              <p className="text-gray-600 leading-relaxed">
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
            <div className="relative text-center p-8">
              <div className="w-28 h-28 mx-auto mb-6">
                <BrillianceIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Brilliance</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400 mx-auto mb-5" />
              <p className="text-gray-600 leading-relaxed">
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
          className="text-center pt-20 border-t border-gray-200/60"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 max-w-5xl mx-auto leading-relaxed mb-10 px-4">
            <motion.span
              className="text-cyan-600 text-4xl font-serif"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              "
            </motion.span>
            Where financial clarity, regulatory confidence, and business growth are accessible to all — powered by integrity, insight, and intelligent technology.
            <motion.span
              className="text-cyan-600 text-4xl font-serif"
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

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-60" />
    </section>
  );
};

export default MainVisionSection;