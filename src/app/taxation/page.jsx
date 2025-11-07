"use client";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FileText,
  BarChart3,
  Shield,
  CheckCircle,
  TrendingUp,
  Target,
  Award,
  Briefcase,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
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

        <div className="relative z-10 mx-6 md:mx-20 mx-auto px-6 py-32">
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
                Taxation Compliances
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Taxation{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Compliances
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Comprehensive corporate tax advisory and compliance services for
            startups, SMEs, and multinational businesses.
          </motion.p>
        </div>
      </section>

      {/* FIRST CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider inline-block mb-4">
              Corporate Tax Advisory
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Strategic Tax Guidance
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                in a Complex and Evolving Landscape
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-base mb-3">
              In today's highly regulated and digitally transparent{" "}
              <strong>UAE tax environment</strong>, managing your tax obligations
              is more than just compliance — it's about adding value, minimizing
              risk, and supporting sustainable business growth.
            </p>

            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Booker Accounting offers expert{" "}
              <strong>corporate tax advisory</strong> and comprehensive tax
              compliance services designed to help startups, SMEs, and
              multinational businesses navigate the complexities of the tax
              framework with confidence.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, text: "Value-Driven Compliance" },
                { icon: Target, text: "For All Business Sizes" },
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
              alt="VAT services and tax consulting"
              width={600}
              height={500}
              className="rounded-3xl object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* VAT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/about-hero.png"
              alt="Strategic Corporate Tax Advisory in UAE"
              width={600}
              height={500}
              className="rounded-3xl object-cover"
              priority
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider inline-block mb-4">
              Value Added Tax (VAT) Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              VAT Made Simple,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Compliance + Optimization
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-base mb-3">
              VAT compliance remains a critical focus for businesses operating
              across the UAE. Booker Accounting supports your business with a
              full spectrum of VAT services designed to simplify complexity and
              ensure total accuracy.
            </p>

            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Our team offers tailored VAT expertise for specialized sectors,
              including free zone businesses and the oil and gas
              industry—ensuring full compliance and helping you avoid costly
              penalties.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, text: "VAT registration & Return Filing" },
                {
                  icon: Shield,
                  text: "Audits, Voluntary Disclosures & Advisory",
                },
                {
                  icon: Target,
                  text: "Real-time VAT Reporting & Optimization",
                },
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
        </div>
      </section>

      {/* 🔹 NEW SECTION: Corporate Tax & Transfer Pricing Advisory */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Corporate Tax Advisory &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Compliance
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team provides clear guidance on UAE corporate tax compliance,
            from strategic tax planning and efficient structuring to timely
            filing and reporting. We help you understand your tax exposure,
            identify applicable incentives and reliefs, and ensure your business
            structure supports long-term growth in an evolving regulatory
            landscape.
          </p>
        </motion.div>

        {/* Specialized Areas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-10 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-teal-700">
            Specialized Tax Advisory Areas – Transfer Pricing Advisory
          </h3>
          <p className="text-gray-700 mb-6">
            With increased global scrutiny on intercompany transactions, our
            experts assist you in developing defensible transfer pricing
            policies aligned with UAE regulations and international standards.
            We offer comprehensive support in:
          </p>

          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <ClipboardCheck className="text-teal-600 w-5 h-5 mt-1" />
              Transfer pricing documentation and benchmarking.
            </li>
            <li className="flex items-start gap-3">
              <Layers className="text-teal-600 w-5 h-5 mt-1" />
              Policy development for intellectual property, financing,
              procurement, and services.
            </li>
            <li className="flex items-start gap-3">
              <FileText className="text-teal-600 w-5 h-5 mt-1" />
              Tax dispute support and advance pricing agreement (APA) guidance.
            </li>
            <li className="flex items-start gap-3">
              <Briefcase className="text-teal-600 w-5 h-5 mt-1" />
              Related-party transaction advisory and risk assessment.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* CONTACT */}
      <div id="contact" className="mt-20">
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}
