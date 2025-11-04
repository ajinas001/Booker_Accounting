"use client";

import { motion } from "framer-motion";

const MainVisionSection = () => {
  const VisionSVG = () => (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c5e6a" stopOpacity="1" />
          <stop offset="100%" stopColor="#0d4a54" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1a20" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a2f38" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Animated Background Circles */}
      <motion.circle
        cx="300"
        cy="200"
        r="180"
        fill="none"
        stroke="#1c5e6a"
        strokeWidth="2"
        opacity="0.1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Rotating Ring */}
      <motion.circle
        cx="300"
        cy="200"
        r="150"
        fill="none"
        stroke="#1c5e6a"
        strokeWidth="1"
        strokeDasharray="10 5"
        opacity="0.3"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "300px 200px" }}
      />

      {/* Central Core - Build */}
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
        cx="300"
        cy="200"
        r="60"
        fill="url(#coreGradient)"
        filter="url(#glow)"
      />
      
      <motion.circle
        cx="300"
        cy="200"
        r="55"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.3"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <text
        x="300"
        y="208"
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontWeight="bold"
        letterSpacing="2"
      >
        BUILD
      </text>

      {/* Balance Orbital - Left */}
      <motion.g
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
      >
        <circle 
          cx="180" 
          cy="200" 
          r="40" 
          fill="url(#orbitalGradient)"
          filter="url(#glow)"
        />
        <circle
          cx="180"
          cy="200"
          r="37"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.2"
        />
        <text
          x="180"
          y="195"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="700"
          letterSpacing="1"
        >
          BALANCE
        </text>
        <text
          x="180"
          y="210"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          opacity="0.3"
        >
          ⚖
        </text>
        
        {/* Connecting Line */}
        <motion.line
          x1="220"
          y1="200"
          x2="240"
          y2="200"
          stroke="#1c5e6a"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.g>

      {/* Brilliance Orbital - Right */}
      <motion.g
        initial={{ scale: 0, rotate: 180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, type: "spring" }}
      >
        <circle 
          cx="420" 
          cy="200" 
          r="40" 
          fill="url(#orbitalGradient)"
          filter="url(#glow)"
        />
        <circle
          cx="420"
          cy="200"
          r="37"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.2"
        />
        <text
          x="420"
          y="193"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fontWeight="700"
          letterSpacing="1"
        >
          BRILLIANCE
        </text>
        <text
          x="420"
          y="210"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          opacity="0.3"
        >
          ✦
        </text>
        
        {/* Connecting Line */}
        <motion.line
          x1="360"
          y1="200"
          x2="380"
          y2="200"
          stroke="#1c5e6a"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </motion.g>

      {/* Strategic Vision Ring */}
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 1.3 }}
        cx="300"
        cy="200"
        r="120"
        fill="none"
        stroke="#1c5e6a"
        strokeWidth="1"
        strokeDasharray="8 4"
      />

      {/* Pulse Rings */}
      <motion.circle
        cx="300"
        cy="200"
        r="60"
        fill="none"
        stroke="#1c5e6a"
        strokeWidth="2"
        opacity="0"
        animate={{ 
          r: [60, 100, 140],
          opacity: [0.6, 0.3, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />

      {/* Floating Particles */}
      <motion.g
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <circle cx="120" cy="120" r="6" fill="#1c5e6a" opacity="0.6" />
        <circle cx="480" cy="280" r="4" fill="#1c5e6a" opacity="0.4" />
        <circle cx="150" cy="300" r="5" fill="#0d1a20" opacity="0.5" />
      </motion.g>

      <motion.g
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <circle cx="480" cy="120" r="7" fill="#0d1a20" opacity="0.5" />
        <circle cx="120" cy="280" r="5" fill="#1c5e6a" opacity="0.3" />
        <circle cx="450" cy="300" r="4" fill="#1c5e6a" opacity="0.4" />
      </motion.g>
    </svg>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-700 text-xs sm:text-sm font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
              Our Core Vision
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight"
            >
              Building Your Financial
              <motion.span 
                className="block text-teal-700 font-bold mt-2 sm:mt-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Future with Purpose
              </motion.span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="space-y-5 sm:space-y-6"
            >
              {/* Build Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateY: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border-l-4 border-teal-600 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className="text-white text-xl sm:text-2xl font-bold">🏗</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-teal-700 mb-2 sm:mb-3">
                      Build
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Empowering businesses to grow stronger with dependable
                      bookkeeping and expert guidance. We lay the foundation for
                      your sustainable success.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Balance & Brilliance Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-white/60"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-white text-lg">⚖️</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                    Balance
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Ensuring compliance and financial stability so you can scale
                    with confidence.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-white/60"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-white text-lg">✦</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                    Brilliance
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    Delivering excellence through insightful, proactive
                    accounting and advisory services.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right SVG Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[550px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-3xl blur-2xl" />
              
              {/* SVG Container */}
              <motion.div 
                className="relative   rounded-3xl p-6 sm:p-8 md:p-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <VisionSVG />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 lg:mt-24 pt-10 sm:pt-14 border-t-2 border-gradient-to-r from-transparent via-teal-200 to-transparent"
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100/50 to-blue-100/50 rounded-2xl blur-xl" />
            <blockquote className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 italic max-w-5xl mx-auto leading-relaxed px-6 sm:px-8">
              <span className="text-teal-600 text-5xl sm:text-6xl leading-none">"</span>
              Where financial clarity, regulatory confidence, and business growth
              are accessible to all — powered by integrity, insight, and
              intelligent technology.
              <span className="text-teal-600 text-5xl sm:text-6xl leading-none">"</span>
            </blockquote>
          </motion.div>
          <motion.div 
            className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-teal-700 font-bold text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-teal-600" />
            <span>BAC Company Vision</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-teal-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainVisionSection;