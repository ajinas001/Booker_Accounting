"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeAboutTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const timelineData = [
    {
      title: "Who We Are",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team is more than just a group of accountants. We are a strategic unit that combines expert minds with cutting-edge AI tools to deliver exceptional financial solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">Expert Team</h4>
              <p className="text-sm text-blue-700">Qualified accountants and compliance advisors with local insight</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">AI-Powered</h4>
              <p className="text-sm text-blue-700">Cutting-edge technology for accurate, efficient results</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">Client-First</h4>
              <p className="text-sm text-blue-700">Building lasting relationships based on trust and results</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our Mission",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            To deliver brilliance through expert financial insights, maintain perfect balance by ensuring accuracy and compliance, and build strong foundations that empower businesses to grow confidently.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Financial Brilliance</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Perfect Balance</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Strong Foundations</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Sustainable Growth</span>
          </div>
        </div>
      )
    },
    {
      title: "Our Vision",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            To become the most trusted and forward-thinking financial partner empowering businesses of all sizes through expert accounting, strategic advisory, and AI-driven innovation.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg mt-4 text-white">
            <h4 className="font-bold text-lg mb-2">Future Forward</h4>
            <p className="text-blue-100">
              Where financial clarity, regulatory confidence, and business growth are accessible to all powered by integrity, insight, and intelligent technology.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          style={{ opacity, y }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Strategic Force Behind Your Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Booker, driven by expertise. Focused on strategy. Committed to your growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform -translate-x-1/2"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                  {item.content}
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10"></div>

              {/* Date/Title for mobile */}
              <div className="md:w-1/2 md:absolute md:left-0 md:right-0 md:mx-auto md:text-center">
                <div className={`${index % 2 === 0 ? 'md:pr-12 text-left' : 'md:pl-12 text-right'} md:block hidden`}>
                  <span className="text-3xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Financial Strategy?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that trust BAC with their financial success.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutTimeline;