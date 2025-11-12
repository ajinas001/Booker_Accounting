"use client";
import React from "react";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offerings = [
  {
    title: "Accounting & Financial Reporting",
    details:
      "Complete management of your general ledger, accounts payable/receivable, and generation of financial statements (P&L, Balance Sheet, Cash Flow).",
  },
  {
    title: "Cloud-Based Accounting Solutions",
    details:
      "Implementation and support of cloud accounting platforms like QuickBooks & Xero — real-time financial access from anywhere.",
  },
  {
    title: "Audit Preparation & Compliance Support",
    details:
      "Preparation and organization of required documents for audits, ensuring full compliance with UAE regulations.",
  },
  {
    title: "Chart of Accounts & Compliance Structuring",
    details:
      "Design and optimization of chart of accounts aligned with UAE Corporate Tax & VAT regulations.",
  },
  {
    title: "Inventory & Fixed Asset Verification",
    details:
      "Physical verification and reconciliation of inventory & fixed assets ensuring accurate asset valuation.",
  },
];
const features = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M12 3l8 4v5c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V7l8-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description:
      "Local expertise with global standards (IFRS, UAE VAT, Corporate Tax)",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M3 17l6-6 4 4 7-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 4h7v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Scalable solutions for startups, SMEs, and large businesses",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M7 8h10M7 12h6" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 16l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Transparent pricing & reliable communication",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8l3 4-3 4-3-4 3-4z" fill="currentColor" />
      </svg>
    ),
    description: "AI-powered insights & automation",
  },
];

function page() {
 const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* <Navbar /> */}
      {/* Header */}

      <section className="relative overflow-hidden text-white ">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
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
                Accounting & Bookkeeping
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Accounting &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Bookkeeping
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            End-to-end accounting and bookkeeping solutions that ensure
            financial accuracy, compliance, and better business control.
          </motion.p>
        </div>
      </section>

      {/* 1st section */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              {/* <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  OUR APPROACH
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                  Beyond Compliance,
                  <br />
                  <span className="text-teal-500">Towards Excellence</span>
                </h2> */}

              <p className="text-lg text-gray-600 mb-8">
                In today's fast-moving business and regulatory environment,
                accurate bookkeeping and compliant financial reporting are the
                backbone of sustainable growth. Whether you're a startup, SME,
                or an expanding enterprise, maintaining clear and consistent
                books is critical to earning the trust of investors, auditors,
                regulators, and strategic partners.{" "}
              </p>

              <p className="text-lg text-gray-600 mb-10">
                We offer expert bookkeeping and accounting services that combine
                local insights, global standards, and cloud-based accounting
                technology. We don’t just help you stay compliant — we bring
                clarity, control, and confidence to your financial operations.
              </p>

              {/* <div className="grid grid-cols-2 gap-y-6">
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
                </div> */}
            </div>

            <div className="lg:w-1/2 relative">
              <div className=" w-full overflow-hidden rounded-xl ">
                <Image
                  width={600}
                  height={500}
                  src="/images/accounting.jpg"
                  alt="Booker Accounting team working on a laptop, smiling"
                  
                  className=" w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* offerings */}

      <section className="max-w-7xl mx-auto pb-20 px-6">
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6 py-12"
          >
            BAC Accounting &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Complience Offering
            </span>
          </motion.h1>

        <div className="space-y-6">
          {offerings.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-gray-400 italic text-lg font-light">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-lg md:text-2xl font-medium">{item.title}</span>
                </div>
                <span className="text-2xl font-light">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 ml-12 text-gray-600 text-sm md:text-lg leading-relaxed"
                  >
                    {item.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}

      <div className="w-full px-4 md:px-20 mx-auto p-4">
        <div className="relative rounded-3xl overflow-hidden h-[500px]">
          <div className="absolute inset-0">
            <img
              src="./images/business.jpg"
              alt="Professional bookkeeping service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900  to-transparent"></div>
          </div>

          <div className="relative h-full flex flex-col justify-between p-12 md:p-16">
            <div className="max-w-xl">
              <h1 className="text-white mb-2">
                <span className="block text-3xl md:text-5xl font-bold leading-tight">
                  Professional
                </span>
                <span className="block text-3xl md:text-5xl font-light leading-tight text-white/80">
                  Bookkeeping Services
                </span>
              </h1>

              <p className="text-white/90 text-sm md:text-lg leading-relaxed mt-6 mb-8 max-w-md">
                Your business's financial health depends on the quality of your
                bookkeeping. Our team ensures every transaction is recorded
                accurately and stays compliant with UAE VAT and Corporate Tax
                laws — ensuring you're always audit-ready.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the clarity and confidence of working with expert
            accountants
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

      <ContactSection />
      <Footer />
    </>
  );
}

export default page;
