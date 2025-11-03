"use client";

import { motion } from "framer-motion";

const MainVisionSection = () => {
  const VisionSVG = () => (
    <svg 
      viewBox="0 0 600 400" 
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="300" cy="200" r="180" fill="none" stroke="#1c5e6a" strokeWidth="2" opacity="0.1"/>
      
      {/* Central Core - Build */}
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        cx="300" 
        cy="200" 
        r="60" 
        fill="#1c5e6a"
        className="shadow-lg"
      />
      <text x="300" y="205" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
        BUILD
      </text>
      
      {/* Balance Orbital */}
      <motion.g
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <circle cx="180" cy="200" r="40" fill="#0d1a20" className="shadow-md"/>
        <text x="180" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
          BALANCE
        </text>
        {/* Connecting line */}
        <line x1="240" y1="200" x2="340" y2="200" stroke="#1c5e6a" strokeWidth="2" strokeDasharray="4 4"/>
      </motion.g>
      
      {/* Brilliance Orbital */}
      <motion.g
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <circle cx="420" cy="200" r="40" fill="#0d1a20" className="shadow-md"/>
        <text x="420" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
          BRILLIANCE
        </text>
        {/* Connecting line */}
        <line x1="360" y1="200" x2="260" y2="200" stroke="#1c5e6a" strokeWidth="2" strokeDasharray="4 4"/>
      </motion.g>
      
      {/* Strategic Vision Rings */}
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        cx="300" 
        cy="200" 
        r="120" 
        fill="none" 
        stroke="#1c5e6a" 
        strokeWidth="1" 
        strokeDasharray="5 5"
      />
      
      {/* Outer Vision Ring */}
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        cx="300" 
        cy="200" 
        r="150" 
        fill="none" 
        stroke="#1c5e6a" 
        strokeWidth="1" 
        opacity="0.5"
      />
      
      {/* Floating Elements */}
      <motion.g
        animate={{
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="120" cy="120" r="8" fill="#1c5e6a" opacity="0.6"/>
        <circle cx="480" cy="280" r="6" fill="#1c5e6a" opacity="0.4"/>
      </motion.g>
      
      <motion.g
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <circle cx="480" cy="120" r="7" fill="#0d1a20" opacity="0.5"/>
        <circle cx="120" cy="280" r="5" fill="#0d1a20" opacity="0.3"/>
      </motion.g>
    </svg>
  );

  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block border border-secondary text-secondary text-sm font-medium w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full uppercase tracking-widest"
            >
              Our Core Vision
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-black leading-tight"
            >
              Building Your Financial
              <span className="block text-secondary font-bold">Future with Purpose</span>
            </motion.h2>

            {/* Vision Statement */}
            {/* <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-primary-black/80 leading-relaxed"
            >
              To become the most trusted and forward-thinking financial partner 
              empowering businesses of all sizes through expert accounting, 
              strategic advisory, and AI-driven innovation.
            </motion.p> */}

            {/* Values Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Build - Central Value */}
              <div className="bg-white/50 p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-2xl font-bold text-secondary mb-2">Build</h3>
                <p className="text-primary-black/80">
                  Empowering businesses to grow stronger with dependable bookkeeping 
                  and expert guidance. We lay the foundation for your sustainable success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Balance */}
                <div className="bg-white/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-black mb-1">Balance</h4>
                  <p className="text-primary-black/70 text-sm">
                    Ensuring compliance and financial stability so you can scale with confidence.
                  </p>
                </div>

                {/* Brilliance */}
                <div className="bg-white/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-black mb-1">Brilliance</h4>
                  <p className="text-primary-black/70 text-sm">
                    Delivering excellence through insightful, proactive accounting and advisory services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white px-8 py-4 rounded-sm font-semibold hover:bg-secondary/90 transition-colors duration-300"
              >
                Start Building with BAC
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right SVG */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm border border-white/30">
              <VisionSVG />
            </div>
            
            {/* Floating Stats */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="text-sm font-semibold">AI-Driven</div>
              <div className="text-xs opacity-90">Innovation</div>
            </motion.div> */}
            
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 bg-primary-black text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="text-sm font-semibold">UAE Focused</div>
              <div className="text-xs opacity-90">Local Expertise</div>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-300/20"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-primary-black/90 italic max-w-4xl mx-auto">
            "Where financial clarity, regulatory confidence, and business growth are 
            accessible to all powered by integrity, insight, and intelligent technology."
          </blockquote>
          <div className="mt-4 text-secondary font-semibold">
            — BAC Company Vision
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainVisionSection;