"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";

// --- Custom Tailwind-like Colors based on CSS Theme ---
const PRIMARY_BLACK = "#0d1a20"; // --color-primary-black
const SECONDARY_TEAL = "#1c5e6a"; // --color-secondary
const PRIMARY_LIGHT = "#f9f9f9"; // --color-primary
const NEUTRAL_FOREGROUND = "#171717"; // --foreground (Light Mode)

const AboutPageTimeline = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  // --- Scroll Progress Hooks ---
  useEffect(() => {
    if (timelineRef.current) {
      // Use clientHeight for accurate measurement of content height
      setTimelineHeight(timelineRef.current.clientHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the container hits 10% from the top of the viewport
    // Stop tracking when the container ends 50% from the bottom of the viewport
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const titleYTransform = useTransform(scrollYProgress, [0, 1], ["0vh", "3vh"]);

  // --- Animation Variants ---
  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  // -------------------------

  const timelineData = [
    {
      title: "Our Foundation",
      icon: "🏢",
      content: (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={staggerItem} style={{ backgroundColor: PRIMARY_LIGHT, borderColor: SECONDARY_TEAL }} className="rounded-2xl p-8 border-l-4">
            <h4 className="font-extrabold text-2xl mb-4" style={{ color: SECONDARY_TEAL }}>Strategic Partnership</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are not just accountants; we are your strategic financial unit, dedicated to combining **expert human judgment** with the efficiency of **AI-driven insights** for superior results.
            </p>
            <div className="flex items-center space-x-4 p-4 rounded-lg" style={{ backgroundColor: PRIMARY_BLACK, color: PRIMARY_LIGHT }}>
              <span className="text-3xl">👤</span>
              <div>
                <p className="font-semibold text-white">The Human Touch</p>
                <p className="text-sm text-gray-400">Qualified accountants & compliance advisors on your team.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )
    },
    {
      title: "Vision & Purpose",
      icon: "🎯",
      content: (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Block with Visual Emphasis */}
            <motion.div variants={staggerItem} style={{ backgroundColor: PRIMARY_LIGHT, borderBottomColor: SECONDARY_TEAL }} className="rounded-2xl p-8 border-b-4 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-extrabold text-xl mb-3 flex items-center" style={{ color: NEUTRAL_FOREGROUND }}>
                <span className="text-3xl mr-3">🚀</span> Mission: Brilliance
              </h4>
              <p className="text-gray-700 leading-snug">
                Deliver **flawless accuracy** and **proactive insights** to keep your business ahead of the curve.
              </p>
            </motion.div>
            {/* Vision Block with Visual Emphasis */}
            <motion.div variants={staggerItem} style={{ backgroundColor: PRIMARY_LIGHT, borderBottomColor: PRIMARY_BLACK }} className="rounded-2xl p-8 border-b-4 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-extrabold text-xl mb-3 flex items-center" style={{ color: NEUTRAL_FOREGROUND }}>
                <span className="text-3xl mr-3">🌟</span> Vision: Trusted Growth
              </h4>
              <p className="text-gray-700 leading-snug">
                Be the most **reliable and innovative** financial partner for owner-managed businesses in the UAE.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Core Values in Action",
      icon: "🤝",
      content: (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Precision", emoji: "🔍", color: SECONDARY_TEAL, desc: "Flawless attention to detail in all compliance and reporting." },
              { title: "Integrity", emoji: "🛡️", color: PRIMARY_BLACK, desc: "Operating with the highest ethical standards and transparency." },
              { title: "Foresight", emoji: "🔮", color: "rgb(20, 83, 45)", desc: "Proactive advice that turns financial data into future strategy." }
            ].map((value, index) => (
              <motion.div variants={staggerItem} key={index} style={{ backgroundColor: value.color }} className={`relative rounded-xl p-6 text-white text-center shadow-xl transition-all duration-300 transform hover:scale-[1.03]`}>
                <div className="w-14 h-14 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.emoji}</span>
                </div>
                <h4 className="font-extrabold text-xl mb-2">{value.title}</h4>
                <p className="text-sm font-light text-gray-200">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )
    },
    {
      title: "The UAE Advantage",
      icon: "🇦🇪",
      content: (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div style={{ backgroundColor: PRIMARY_LIGHT }} className="rounded-2xl p-8 border-4 border-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
                <h5 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_BLACK }}>Local Mastery, Global Standards</h5>
                
                <div className="flex items-start space-x-3">
                  <span className="text-3xl" style={{ color: SECONDARY_TEAL }}>✨</span>
                  <div>
                    <h6 className="font-semibold" style={{ color: NEUTRAL_FOREGROUND }}>VAT & Corporate Tax Readiness</h6>
                    <p className="text-gray-600 text-sm">Navigating complex UAE tax frameworks is our core strength.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-3xl" style={{ color: SECONDARY_TEAL }}>🏛️</span>
                  <div>
                    <h6 className="font-semibold" style={{ color: NEUTRAL_FOREGROUND }}>Regulatory Compliance</h6>
                    <p className="text-gray-600 text-sm">Full adherence to local Economic Substance Regulations (ESR) and AML requirements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-3xl" style={{ color: SECONDARY_TEAL }}>💼</span>
                  <div>
                    <h6 className="font-semibold" style={{ color: NEUTRAL_FOREGROUND }}>Free Zone Expertise</h6>
                    <p className="text-gray-600 text-sm">Specialized setup and maintenance for all UAE Free Zones.</p>
                  </div>
                </div>
            </div>
            
            {/* Animated Hexagonal Stats Display */}
            <div className="lg:col-span-1 relative">
              <motion.div 
                className="relative h-full min-h-[300px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Center hexagon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div 
                      style={{ 
                        backgroundColor: SECONDARY_TEAL,
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                      }} 
                      className="w-32 h-36 flex items-center justify-center"
                    >
                      <motion.span 
                        className="text-5xl"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        🇦🇪
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Orbiting elements */}
                {[
                  { icon: "📊", delay: 0, radius: 80, angle: 0 },
                  { icon: "🎯", delay: 2, radius: 80, angle: 120 },
                  { icon: "⚡", delay: 4, radius: 80, angle: 240 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: Math.cos((item.angle * Math.PI) / 180 + Date.now() / 1000) * item.radius,
                      y: Math.sin((item.angle * Math.PI) / 180 + Date.now() / 1000) * item.radius,
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: item.delay
                    }}
                  >
                    <div 
                      style={{ backgroundColor: PRIMARY_BLACK }}
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-xl">{item.icon}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Service Ecosystem",
      icon: "📈",
      content: (
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="space-y-8">
            <h5 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_BLACK }}>Our Full-Service Financial Spectrum</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Audit & Assurance", color: "#1c5e6a" },
                { name: "Taxation & VAT", color: "#0d1a20" },
                { name: "Accounting & Bookkeeping", color: "#1c5e6a" },
                { name: "Business Advisory", color: "#0d1a20" },
                { name: "AML Compliance", color: "#1c5e6a" },
                { name: "IFRS Advisory", color: "#0d1a20" }
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1.5 : -1.5, boxShadow: `0 8px 15px -3px ${service.color}80` }}
                  style={{ backgroundColor: service.color }}
                  className="rounded-lg p-3 text-center transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white">{service.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-700 text-base italic text-center border-t border-gray-200 pt-4">
              We guide your business through every stage: from formation to expansion and restructuring.
            </p>
          </div>
        </motion.div>
      )
    }
  ];

  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: PRIMARY_LIGHT }} className="min-h-screen">
      
      {/* Hero Section */}
      <section style={{ backgroundColor: PRIMARY_BLACK }} className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Visual Element (Modern Polygon/Mesh) */}
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_top_right,_rgba(28,94,106,0.5)_0%,_transparent_60%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            <span className="block">The <span style={{ color: SECONDARY_TEAL }}>BAC</span> Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-gray-200 max-w-4xl mx-auto"
          >
            Your Strategic Financial Engine in the UAE
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={containerRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={timelineRef} className="relative">
            {/* Static Background Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 shadow-inner rounded-full" />
            
            {/* Animated Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 overflow-hidden rounded-full">
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                  background: `linear-gradient(to bottom, ${SECONDARY_TEAL}, ${PRIMARY_BLACK})`
                }}
                className="w-full shadow-lg"
              />
            </div>

            {timelineData.map((item, index) => (
              <div key={index} className="flex justify-start pt-20 md:pt-40">
                
                {/* Timeline Dot and Sticky Title (Overlapping Fix) */}
                <div className="sticky flex flex-col md:flex-row z-20 items-center top-28 self-start max-w-xs lg:max-w-sm md:w-full">
                  {/* Dot with Icon */}
                  <div style={{ backgroundColor: SECONDARY_TEAL }} className="h-14 w-14 absolute left-3 md:left-2 flex items-center justify-center rounded-full border-4 border-white shadow-xl">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <motion.h3 
                    style={{ y: titleYTransform, color: PRIMARY_BLACK }} 
                    className="hidden md:block text-2xl md:pl-28 md:text-4xl font-bold tracking-tight whitespace-nowrap"
                  >
                    {item.title}
                  </motion.h3>
                </div>

                {/* Content - Increased padding (pl-24) to prevent overlap with sticky dot */}
                <div className="relative pl-24 pr-2 md:pl-36 w-full">
                  {/* Mobile Title */}
                  <h3 style={{ color: PRIMARY_BLACK }} className="md:hidden block text-2xl mb-6 text-left font-extrabold">
                    {item.title}
                  </h3>
                  {/* Content Box with Enhanced Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {item.content}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mt-20"
          >
            <div style={{ background: `linear-gradient(to right, ${PRIMARY_BLACK}, ${SECONDARY_TEAL})` }} className="rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Ready to Transform Your Finances?</h3>
              <p className="text-gray-200 mb-8 text-xl max-w-2xl mx-auto">
                Get a tailored consultation and start building a stable, growth-focused future in the UAE.
              </p>
              <button 
                style={{ color: SECONDARY_TEAL }}
                className="bg-white px-10 py-4 rounded-full font-extrabold text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.03]"
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPageTimeline;