'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Shield, Globe, Calculator, BookOpen, TrendingUp, Lock, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const services = [
    {
      id: '01',
      icon: FileCheck,
      title: 'Audit Services',
      description: 'Strategic opportunities to unlock value and strengthen your business. We provide External Audit, Internal Audit, Real Estate Audit, Forensic Audit, Inventory Audit, and Due Diligence Support.',
      bgColor: 'bg-indigo-200',
      iconColor: 'text-indigo-600'
    },
    {
      id: '02',
      icon: Shield,
      title: 'Assurance Services',
      description: 'Assess the robustness of your internal systems, controls, and corporate governance. Essential for lenders, investors, regulators, and potential buyers during valuations and compliance reviews.',
      bgColor: 'bg-slate-200',
      iconColor: 'text-slate-700'
    },
    {
      id: '03',
      icon: Globe,
      title: 'IFRS Advisory',
      description: 'Expert guidance to prepare compliant, transparent financial statements under International Financial Reporting Standards. We help your finance team implement effective frameworks.',
      bgColor: 'bg-slate-200',
      iconColor: 'text-slate-700'
    },
    {
      id: '04',
      icon: Calculator,
      title: 'Tax Services',
      description: 'Comprehensive VAT and Corporate Tax services including registration, compliance, planning, and strategic advisory. We help navigate UAE tax framework with confidence and minimize risk.',
      bgColor: 'bg-indigo-200',
      iconColor: 'text-indigo-600'
    },
    {
      id: '05',
      icon: BookOpen,
      title: 'Bookkeeping & Accounting',
      description: 'Expert bookkeeping and accounting services combining deep local insight with AI tools and cloud-based software. We ensure every transaction is properly recorded and audit-ready.',
      bgColor: 'bg-indigo-200',
      iconColor: 'text-indigo-600'
    },
    {
      id: '06',
      icon: TrendingUp,
      title: 'Business Advisory',
      description: 'Strategic business consulting and financial advisory solutions. We offer Corporate Strategy, Feasibility Studies, Business Valuation, Outsourced CFO Services, and M&A Advisory.',
      bgColor: 'bg-slate-200',
      iconColor: 'text-slate-700'
    },
    {
      id: '07',
      icon: Lock,
      title: 'AML Compliance',
      description: 'Comprehensive solutions to prevent money laundering and terrorist financing. We provide risk assessments, compliance training, policy development, and ongoing monitoring services.',
      bgColor: 'bg-slate-200',
      iconColor: 'text-slate-700'
    },
    {
      id: '08',
      icon: Building,
      title: 'Business Lifecycle',
      description: 'Complete support through every stage - from company formation and tax registration to accounting, audit, restructuring, and liquidation. We ensure smooth, compliant transitions.',
      bgColor: 'bg-indigo-200',
      iconColor: 'text-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 max-w-4xl"
          >
            Comprehensive Financial Solutions for Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-slate-600 max-w-3xl"
          >
            From audit and compliance to strategic advisory, we deliver expert services powered by local insight and global standards.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`${service.bgColor} rounded-3xl p-12 relative overflow-hidden group cursor-pointer`}
                >
                  {/* Hover Gradient Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 "
                  />
                  
                  <div className="relative z-10">
                    {/* Number */}
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                      className="text-7xl font-bold text-slate-900 mb-8 opacity-30"
                    >
                      {service.id}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <div className={`inline-flex p-4 rounded-2xl bg-white/50 backdrop-blur-sm ${service.iconColor}`}>
                        <IconComponent className="w-8 h-8" strokeWidth={2} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ y: 0 }}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl font-bold text-slate-900 mb-4"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 flex items-center gap-2 text-slate-900 font-semibold"
                    >
                      Learn more
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-slate-300 mb-10"
          >
            Let's discuss how our expert services can transform your financial operations and drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-slate-100 transition-colors"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ServicesPage;