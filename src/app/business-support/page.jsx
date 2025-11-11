"use client";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building,
  FileCheck,
  XCircle,
  FileText,
  Users, // changed for PRO Service icon
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    icon: Building,
    title: "Mainland Company Formation",
    description:
      "Full assistance with licensing and registration for conducting business across the local market.",
  },
  {
    id: 2,
    icon: Building,
    title: "Freezone Business Setup",
    description:
      "Streamlined processes for 100% foreign ownership and specialized free zone benefits.",
  },
  {
    id: 3,
    icon: FileCheck,
    title: "Company Secretarial Service",
    description:
      "Ensuring regulatory compliance, corporate governance, and maintenance of statutory records.",
  },
  {
    id: 4,
    icon: XCircle,
    title: "Liquidation / De-registration",
    description:
      "Managing the complex official process for closing down or de-registering a business entity.",
  },
  {
    id: 5,
    icon: FileText,
    title: "ICV Consultancy",
    description:
      "Support for increasing your In-Country Value (ICV) score to qualify for government and semi-government contracts.",
  },
  {
    id: 6,
    icon: Users,
    title: "PRO Service",
    description:
      "Public Relations Officer (PRO) services for government liaison, visa processing, and document clearance.",
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

function page() {
  return (
    <>
      <Navbar />

      {/* hero section (unchanged) */}
      <section className="relative overflow-hidden text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] hover:scale-110"
            style={{ backgroundImage: `url('/images/img3.jpg')` }}
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
                Business Support Service
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
              Support Service
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Simplified Setup. Seamless Operations. Continuous Compliance.
          </motion.p>
        </div>
      </section>

     

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                Your Partner in
                <br />
                <span className="text-teal-500">
                  Business Growth & Compliance
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                From setting up your company to managing regulatory obligations
                and maintaining day-to-day documentation — we handle the
                complexity so you can focus on growth.
              </p>

              <p className="text-lg text-gray-600 mb-10">
                Our advisory team ensures that your business is structured
                efficiently, remains compliant, and benefits from UAE's economic
                advantages while following legal frameworks.
              </p>

              <div className="grid grid-cols-2 gap-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">&#x2692; </span>
                  <p className="text-base font-medium text-gray-700">
                   Expert guidance on entity setup & structuring
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">&#x2705;</span>
                  <p className="text-base font-medium text-gray-700">
                 Freezone, Mainland & Offshore company formation
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">&#x26A1;</span>
                  <p className="text-base font-medium text-gray-700">
                     End-to-end PRO & visa processing support
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">&#x1F4AD;</span>
                  <p className="text-base font-medium text-gray-700">
                    Compliance, secretarial & business governance
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className=" w-full overflow-hidden rounded-xl ">
                <Image
                  width={600}
                  height={500}
                  src="/images/business-support.jpg"
                  alt="Business support UAE"
                  className=" w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Business Support Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Essential services for company setup, maintenance, and compliance.
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

      <ContactSection />
      <Footer />
    </>
  );
}

export default page;
