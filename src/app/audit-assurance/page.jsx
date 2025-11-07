"use client";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

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
import Image from "next/image";
import Link from "next/link";

export default function AuditAssurancePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const services = [
    {
      id: 1,
      title: "Internal Audit",
      description:
        "Evaluate internal systems and processes to strengthen governance and operational effectiveness.",
      buttonText: "Learn More",
      bgColor: "bg-secondary",
      textColor: "text-white",
      buttonBorder: "border-white",
      icon: Shield,
      type: "content",
      span: "lg:col-span-2 lg:row-span-1",
      borderRadius: "rounded-tr-[60px]",
      height: "min-h-[380px]",
    },

    {
      id: 2,
      title: "Inventory Audit",
      description:
        "Ensure accuracy and compliance in stock and asset management through detailed inventory verification.",
      buttonText: "Learn More",
      bgColor: "bg-black",
      textColor: "text-white",
      buttonBorder: "border-white",
      icon: BarChart3,
      type: "content",
      span: "lg:col-span-1 lg:row-span-1",
      borderRadius: "rounded-[50px]",
      height: "min-h-[320px]",
    },

    {
      id: 3,
      title: "Due Diligence Support",
      description:
        "Facilitate smooth mergers, acquisitions, and investments with comprehensive due diligence analysis.",
      buttonText: "Learn More",
      bgColor: "bg-secondary",
      textColor: "text-white",
      buttonBorder: "border-white",
      icon: Target,
      type: "content",
      span: "lg:col-span-2 lg:row-span-1",
      borderRadius: "rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px]",
      height: "min-h-[400px]",
    },

    {
      id: 4,
      title: "External Audit",
      description:
        "Independent verification of financial statements to maintain transparency and regulatory compliance.",
      buttonText: "Learn More",
      bgColor: "bg-secondary",
      textColor: "text-white",
      buttonBorder: "border-white",
      icon: FileText,
      type: "content",
      span: "lg:col-span-1 lg:row-span-1",
      borderRadius: "rounded-[45px]",
      height: "min-h-[360px]",
    },

    {
      id: 5,
      title: "Real Estate Audit",
      description:
        "Specialized audit services for property portfolios, construction projects, and real estate transactions.",
      buttonText: "Learn More",
      bgColor: "bg-primary",
      textColor: "text-black",
      buttonBorder: "border-black",
      icon: Users,
      type: "content",
      span: "lg:col-span-1 lg:row-span-1",
      borderRadius: "rounded-[55px]",
      height: "min-h-[340px]",
    },

    {
      id: 6,
      title: "Forensic Audit",
      description:
        "Investigate financial irregularities and detect fraud using data-driven forensic audit techniques.",
      buttonText: "Contact Us",
      bgColor: "bg-black",
      textColor: "text-white",
      buttonBorder: "border-white",
      icon: Lock,
      type: "content",
      span: "lg:col-span-1 lg:row-span-1",
      borderRadius: "rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px]",
      height: "min-h-[300px]",
    },
  ];
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Regulatory Compliance",
      description: "Stay ahead of changing regulations",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Business Insights",
      description: "Unlock strategic opportunities",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Stakeholder Trust",
      description: "Build confidence with investors",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Risk Management",
      description: "Identify and mitigate risks early",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <Navbar />

        {/* Hero Section */}

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

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
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
                  Audit & Assurance
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Audit{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                & Assurance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl"
            >
              Client Credibility. Stakeholder Confidence. Regulatory Compliance.
            </motion.p>
          </div>
        </section>

        {/* Approach Section with Visual Elements */}

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  OUR APPROACH
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                  Beyond Compliance,
                  <br />
                  <span className="text-teal-500">Towards Excellence</span>
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  At Booker Accounting, we believe audits are more than
                  regulatory requirements — they’re strategic opportunities** to
                  unlock value and strengthen your business.
                </p>

                <p className="text-lg text-gray-600 mb-10">
                  Our audit services go beyond the checklist: delivering a
                  **risk-based, systematic examination** of your financial
                  statements, business processes, and internal controls.
                </p>

                <div className="grid grid-cols-2 gap-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl text-teal-500">&#x2692; </span>
                    <p className="text-base font-medium text-gray-700">
                      Risk-Based Analysis
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl text-teal-500">&#x2705;</span>
                    <p className="text-base font-medium text-gray-700">
                      Compliance Assurance
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl text-teal-500">&#x26A1;</span>
                    <p className="text-base font-medium text-gray-700">
                      Strategic Insights
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl text-teal-500">&#x1F4AD;</span>
                    <p className="text-base font-medium text-gray-700">
                      Actionable Results
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className=" w-full overflow-hidden rounded-xl ">
                  <Image
                    width={600}
                    height={500}
                    src="/images/about-hero.png"
                    alt="Booker Accounting team working on a laptop, smiling"
                    objectFit="cover"
                    className=" w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Connected Network Design */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                What We Offer
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Our Comprehensive Audit Services
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tailored solutions for SMEs and large organizations designed to
                enhance trust, compliance, and operational transparency.
              </p>
            </div>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    className={`rounded-3xl p-10  bg-secondary text-white relative overflow-hidden group cursor-pointer border border-gray-200  `}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.15 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl"
                    />

                    <div className="relative z-10">
                      <motion.div
                        initial={{ opacity: 0.25 }}
                        whileHover={{ opacity: 0.4 }}
                        transition={{ duration: 0.3 }}
                        className="text-7xl font-bold  mb-8 opacity-30"
                      >
                        {service.id}
                      </motion.div>

                      <motion.h3
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl font-bold  mb-4"
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <p className=" text-base leading-relaxed">
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

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Us
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference of working with true audit professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="text-gray-800">{feature.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-normal mb-4 text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Assurance Section with Split Layout */}
        

        <section className="py-16 md:py-24 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
              {/* LEFT IMAGE */}
              <div className="lg:w-1/2 w-full lg:order-1 mb-10 lg:mb-0">
                <div className="relative w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/images/about-hero.png"
                    alt="Professional collaboration"
                    
                    className="object-cover rounded-3xl"
                    priority
                    width={600}
                    height={500}
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="lg:w-1/2 w-full lg:order-2">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-600 mb-3">
                  Assurance Services
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Strengthen Confidence,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    Enhance Transparency
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Our assurance services go beyond audit preparation — we ensure
                  your financial systems, processes, and reporting reflect
                  accuracy, integrity, and long-term reliability.
                </p>

                <p className="text-gray-600 leading-relaxed text-base mb-8">
                  We evaluate your internal controls, streamline workflows, and
                  provide insights that help leadership make informed decisions.
                </p>

                {/* ICON GRID */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Internal Systems Review
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Financial Validation
                    </span>
                  </div>

                  <div classonym="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Operational Excellence
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Enhanced Transparency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IFRS Advisory Section */}
        <section className="w-full mx-auto  px-6 md:px-20 py-24">
          <div className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 text-white"
              >
                <span className="bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1 text-sm font-medium text-teal-300 inline-block mb-6">
                  Global Standards
                </span>

                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                  IFRS Advisory
                </h2>

                <p className="text-gray-300 leading-relaxed md:text-lg mb-4">
                  In today's global business environment, consistent financial
                  reporting under International Financial Reporting Standards
                  (IFRS) is essential—particularly for UAE businesses operating
                  internationally or seeking foreign investment.
                </p>

                <p className="text-gray-300 leading-relaxed md:text-lg mb-8">
                  Booker Accounting's IFRS advisory offers expert guidance to
                  prepare compliant, transparent financial statements that meet
                  global expectations.
                </p>

                <button className=" px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 text-white rounded-full font-semibold transition-all duration-300 ">
                  Get IFRS Support
                </button>
              </motion.div>

              {/* RIGHT LIST */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 bg- flex justify-center"
              >
                <div className="space-y-5 w-full max-w-sm">
                  {[
                    "IFRS Compliance Framework",
                    "Financial Statement Preparation",
                    "Standards Update Implementation",
                    "International Competitiveness",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                    >
                      <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                      <span className="text-white font-medium text-base">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <div className="w-full px-4 md:px-20 mx-auto p-4">
          <div className="relative rounded-3xl overflow-hidden h-[500px]">
            <div className="absolute inset-0">
              <img
                src="./images/business.jpg"
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-white/30 to-transparent"></div>
            </div>

            <div className="relative h-full flex flex-col justify-between p-12 md:p-16">
              <div>
                <p className="text-white/90 text-sm font-medium tracking-wide">
                  Mimo Flex
                </p>
              </div>

              <div className="max-w-xl">
                <h1 className="text-white mb-2">
                  <span className="block text-5xl md:text-6xl font-bold leading-tight">
                    Grow now.
                  </span>
                  <span className="block text-5xl md:text-6xl font-light leading-tight text-white/80">
                    Pay suppliers later.
                  </span>
                </h1>

                <p className="text-white/90 text-lg leading-relaxed mt-6 mb-8 max-w-md">
                  Access flexible financing to fund business growth.
                  <br />
                  No monthly interest, no fees on unused funds, no
                  <br />
                  personal guarantees.
                </p>

                <div className="flex gap-4">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Apply now
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
