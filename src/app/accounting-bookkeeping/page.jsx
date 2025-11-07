'use client'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  FileText,
  Target,
  Award,
  BarChart3,
  Lock,
  Zap,
} from "lucide-react";  
function page() {
  return (
    <>
    
    
     <Navbar/>

 <section className="relative overflow-hidden text-white">
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

          <div className="relative z-10  mx-auto px-8 md:px-20 py-32">
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
                <span>Services</span>
                &nbsp;›&nbsp;
                <span className="text-teal-400 font-medium">
                  Accounting & Bookkeeeping
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Accounting {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                & Bookkeeeping
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl"
            >
             Financial Clarity. Accurate Records. Informed Decisions.
            </motion.p>
          </div>
        </section>




        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider inline-block mb-4">
                Our Approach
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Beyond Compliance,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Towards Excellence
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-base mb-3">
                At Booker Accounting, we believe audits are more than regulatory
                requirements — they're strategic opportunities to unlock value
                and strengthen your business.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-8">
                Our audit services go beyond the checklist, delivering a
                risk-based, systematic examination of your financial statements,
                business processes, and internal controls.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, text: "Risk-Based Analysis" },
                  { icon: CheckCircle, text: "Compliance Assurance" },
                  { icon: Zap, text: "Strategic Insights" },
                  { icon: Target, text: "Actionable Results" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <item.icon className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 text-sm font-semibold">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/about-hero.png"
                alt="Professional auditing and consulting"
                width={600}
                height={500}
                className="rounded-3xl object-cover "
                priority
              />
            </motion.div>
          </div>
        </section>


     <ContactSection/>
     <Footer/>
    </>
  )
}

export default page