"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";

import {
  BriefcaseBusiness, // CFO / Strategic
  Scale, // Valuation
  Lightbulb, // Consultation / Ideas
  Shuffle, // M&A
  Workflow, // Process improvement
  BarChart3, // Financial feasibility
  FileText, // IFRS advisory / Documentation
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: BriefcaseBusiness, // ✅ CFO service
    title: "CFO Service",
    description:
      "End-to-end financial leadership for informed decision-making and profitability improvement.",
  },
  {
    id: 2,
    icon: Scale, // ✅ Business valuation
    title: "Business Valuation",
    description:
      "Professional valuation for investors, acquisitions, or financial reporting.",
  },
  {
    id: 3,
    icon: Lightbulb, // ✅ Consultation / strategy
    title: "Business Consultation",
    description:
      "Critical guidance for operational improvement and business scalability.",
  },
  {
    id: 4,
    icon: Shuffle, // ✅ Mergers & acquisition
    title: "Merger & Acquisition",
    description:
      "Advisory on M&A planning, negotiation, due diligence, and integration.",
  },
  {
    id: 5,
    icon: Workflow, // ✅ Business process redesign
    title: "Business Process Re-engineering",
    description:
      "Redesigning processes to boost efficiency, reduce cost, and improve productivity.",
  },
  {
    id: 6,
    icon: BarChart3, // ✅ Finance-based feasibility
    title: "Financial Feasibilities",
    description:
      "Detailed feasibility studies for investment decisions and business expansion.",
  },
  {
    id: 7,
    icon: FileText, // ✅ IFRS documentation
    title: "IFRS Advisory Service",
    description:
      "Expert guidance on IFRS compliance, implementation, and reporting.",
  },
];

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
export default function BusinessAdvisoryPage() {
  return (
    <>
      {/* <Navbar /> */}

      {/* ================= HERO SECTION ================= */}

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
                Business Advisory Service
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Advisory Service
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Strategic Direction. Sustainable Growth. Business Excellence
          </motion.p>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-600 font-semibold tracking-wide uppercase">
              Business Advisory
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
              Helping You Make Confident & Strategic Business Decisions
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              We work closely with startups, SMEs, and enterprises to guide them
              through strategic decision-making, process improvement, financial
              forecasting, and performance optimization.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether you're scaling, restructuring, or pivoting your business,
              our expert advisors provide clear direction backed by data and
              market insights.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/images/business-advisory.jpg"
              alt="advisory team"
              width={550}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= NEW SECTION: BUSINESS advisory SERVICES (from Image) ================= */}

      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Business Advisory Service
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Strategic Direction. Sustainable Growth. Business Excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="rounded-3xl p-10 bg-secondary text-white relative overflow-hidden group cursor-pointer border border-gray-200"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl"
                  />

                  <div className="relative z-10 flex flex-col gap-5">
                    {/* Icon */}
                    <IconComponent className="h-14 w-14 opacity-90" />

                    {/* Title */}
                    <motion.h3 className="text-2xl font-bold">
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
      {/* ================= CTA SECTION ================= */}
      <section className="py-24 max-w-7xl bg-gradient-to-br mx-auto from-gray-900 to-teal-900 rounded-3xl text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to Grow Your Business with Confidence?
        </h2>
        <p className="mt-3 opacity-90 text-lg">
          Let&apos;s work together to unlock new opportunities and improve
          profitability.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block px-10 py-3 bg-white text-teal-700 font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Book Consultation
        </a>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
