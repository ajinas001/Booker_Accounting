"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users, // Used for Consultancy
  FileText, // Used for Policy/Training
  ClipboardCheck, // Used for Inspection/Support
  Handshake, // Used for Compliance Support
  Search, // Used for Audit Support
} from "lucide-react";
import Link from "next/link";
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

// The icons from the image map well to the lucide-react icons:
// 1. AML Consultancy: Users (People discussing)
// 2. AML Policy/Training: FileText (Document/Training material)
// 3. AML Inspection: ClipboardCheck (Checklist/Inspection)
// 4. AML Compliance Support: Handshake (Support/Partnership)
// 5. AML Audit Support: Search (Investigation/Audit)

const amlFlowSteps = [
  {
    icon: Users,
    title: "AML Consultancy and Implementation",
    description:
      "Expert guidance to tailor and establish effective AML controls.",
    position: "top",
  },
  {
    icon: FileText,
    title: "AML Policy Implementation and Training",
    description: "Developing robust policies and training staff for adherence.",
    position: "bottom",
  },
  {
    icon: ClipboardCheck,
    title: "AML Inspection and Other Support",
    description: "Regular checks and general assistance to maintain controls.",
    position: "top",
  },
  {
    icon: Handshake,
    title: "AML Compliance Support",
    description:
      "Ongoing support to address compliance challenges as they arise.",
    position: "bottom",
  },
  {
    icon: Search,
    title: "Internal and external AML audit support",
    description:
      "Assistance with audit processes to ensure regulatory confidence.",
    position: "top",
  },
];

export default function AntiMoneyLaunderingPage() {
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
                Anti-Money Laundering
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Anti-Money{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Laundering
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Risk Prevention. Financial Transparency. Regulatory Compliance.
          </motion.p>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION (Text from Image) ================= */}

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
              UAE AML Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
              Implementing Strong Controls Against Financial Crime
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Our AML compliance solutions help businesses implement strong
              controls to prevent money laundering and terrorist financing.{" "}
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We offer comprehensive risk assessments, compliance
              training, policy development, and ongoing monitoring to
              ensure full adherence to UAE AML regulations. With our
              expertise, we safeguard your company's reputation and mitigate
              legal risks effectively.
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
              src="/images/aml.jpg"
              alt="Aml "
              width={550}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= AML PROCESS FLOW (Diagram from Image) ================= */}

      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Our Structured AML Compliance Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ensuring effective Anti-Money Laundering compliance through a
              strategic and streamlined approach.
            </p>
          </div>

          {/* Card Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {amlFlowSteps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="rounded-3xl p-10 bg-secondary text-white relative overflow-hidden group cursor-pointer border border-gray-200"
                >
                  {/* Gradient hover layer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl"
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col gap-5 items-start text-left">
                    <IconComponent className="h-14 w-14 opacity-90" />

                    <motion.h3 className="text-2xl font-bold">
                      {step.title}
                    </motion.h3>

                    <p className="text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="py-24  max-w-7xl bg-gradient-to-br mx-auto from-gray-900 to-teal-900 rounded-3xl text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Need Expert Assistance with UAE AML Compliance?
        </h2>
        <p className="mt-3 opacity-90 text-lg">
          Protect your business against financial risk and regulatory penalties.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block px-10 py-3 bg-white text-teal-700 font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Schedule a Compliance Review
        </a>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
