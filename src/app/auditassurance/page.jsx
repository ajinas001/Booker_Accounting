"use client";

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
      id: "01",
      title: "Internal Audit",
      description:
        "Evaluate internal systems and processes to strengthen governance and operational effectiveness.",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      iconColor: "text-teal-600",
    },
    {
      id: "02",
      title: "Inventory Audit",
      description:
        "Ensure accuracy and compliance in stock and asset management through detailed inventory verification.",
      icon: BarChart3,
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      iconColor: "text-cyan-600",
    },
    {
      id: "03",
      title: "Due Diligence Support",
      description:
        "Facilitate smooth mergers, acquisitions, and investments with comprehensive due diligence analysis.",
      icon: Target,
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      iconColor: "text-sky-600",
    },
    {
      id: "04",
      title: "External Audit",
      description:
        "Independent verification of financial statements to maintain transparency and regulatory compliance.",
      icon: FileText,
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      iconColor: "text-indigo-600",
    },
    {
      id: "05",
      title: "Real Estate Audit",
      description:
        "Specialized audit services for property portfolios, construction projects, and real estate transactions.",
      icon: Users,
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      iconColor: "text-blue-600",
    },
    {
      id: "06",
      title: "Forensic Audit",
      description:
        "Investigate financial irregularities and detect fraud using data-driven forensic audit techniques.",
      icon: Lock,
      bgColor: "bg-gradient-to-br from-gray-50 to-white",
      iconColor: "text-rose-600",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      desc: "Stay ahead of changing regulations",
    },
    {
      icon: TrendingUp,
      title: "Business Insights",
      desc: "Unlock strategic opportunities",
    },
    {
      icon: Users,
      title: "Stakeholder Trust",
      desc: "Build confidence with investors",
    },
    {
      icon: Lock,
      title: "Risk Management",
      desc: "Identify and mitigate risks early",
    },
  ];

  const stats = [
    { number: "500+", label: "Audits Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Compliance Rate" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className=" px-6 py-2">
              <nav className="text-sm text-gray-500 mb-6">
                <span>Home</span> &nbsp;›&nbsp;
                <span>Services</span> &nbsp;›&nbsp;
                <span className="text-teal-600 font-medium">
                  Audit & Assurance
                </span>
              </nav>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Client Credibility. Stakeholder Confidence. Regulatory Compliance.
          </motion.p>
        </div>

        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-32 left-10 opacity-20"
        >
          <FileText className="w-16 h-16 text-teal-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-32 right-10 opacity-20"
        >
          <Shield className="w-20 h-20 text-cyan-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section with Visual Elements */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Beyond Compliance,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Towards Excellence
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              At Booker Accounting, we believe audits are more than regulatory
              requirements — they're strategic opportunities to unlock value and
              strengthen your business.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our audit services go beyond the checklist, delivering a
              risk-based, systematic examination of your financial statements,
              business processes, and internal controls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-12 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"
              />

              <div className="relative space-y-6">
                {[
                  { icon: Shield, text: "Risk-Based Analysis" },
                  { icon: CheckCircle, text: "Compliance Assurance" },
                  { icon: Zap, text: "Strategic Insights" },
                  { icon: Target, text: "Actionable Results" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
          {/* Header */}
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

          {/* Services Grid */}
          <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-10">
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
                  {/* Hover gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Number */}
                    <motion.div
                      initial={{ opacity: 0.25 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                      className="text-7xl font-bold  mb-8 opacity-30"
                    >
                      {service.id}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-white/70 backdrop-blur-sm shadow-md`}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${service.iconColor}`}
                          strokeWidth={2}
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
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
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference of working with true audit professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Assurance Section with Split Layout */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2">
                          Internal Systems Review
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Comprehensive evaluation of controls and processes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2">
                          Financial Validation
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Ensure accuracy and transparency in reporting
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2">
                          Operational Excellence
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Improve effectiveness across your organization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Assurance Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold my-6">
                Beyond Audit-Ready
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Being audit-ready is just one aspect of strong financial
                governance. Booker Accounting's assurance services assess the
                robustness of your internal systems, controls, and corporate
                governance.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                From validating financial accuracy to improving operational
                effectiveness, our experts help safeguard your company's
                integrity and transparency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IFRS Advisory Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 text-white"
            >
              <div className="inline-block mb-4">
                <span className="bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1 text-sm font-medium text-teal-300">
                  Global Standards
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                IFRS Advisory
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                In today's global business environment, consistent financial
                reporting under International Financial Reporting Standards
                (IFRS) is essential—particularly for UAE businesses operating
                internationally or seeking foreign investment.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Booker Accounting's IFRS advisory offers expert guidance to
                prepare compliant, transparent financial statements that meet
                global expectations.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl">
                Get IFRS Support
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-teal-500/20 to-cyan-500/20 p-12 flex items-center"
            >
              <div className="space-y-4">
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
                    <span className="text-white font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our audit and assurance services can strengthen
              your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
