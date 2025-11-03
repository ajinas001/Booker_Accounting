"use client";

import { motion } from "framer-motion";

const industries = [
  {
    id: "01",
    title: "SMEs & Startups",
    description:
      "We support emerging businesses with tailored accounting, compliance, and advisory services that help establish strong financial foundations and sustainable growth.",
  },
  {
    id: "02",
    title: "Real Estate & Construction",
    description:
      "From project audits to tax structuring, we assist developers and contractors in maintaining transparency, compliance, and profitability across every project.",
  },
  {
    id: "03",
    title: "Retail & Trading",
    description:
      "We offer bookkeeping, VAT compliance, and financial planning services for trading and retail firms to improve cash flow and business performance.",
  },
  {
    id: "04",
    title: "Manufacturing",
    description:
      "Our team provides cost control, budgeting, and compliance support to help manufacturers enhance efficiency and profitability.",
  },
  {
    id: "05",
    title: "Professional Services",
    description:
      "We help consultants, agencies, and service-based businesses streamline financial operations and maintain compliance with UAE regulations.",
  },
  {
    id: "06",
    title: "Free Zone Entities",
    description:
      "We provide accounting, audit, and tax support to UAE free zone companies, ensuring compliance while maximizing the benefits of your business setup.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-primary text-black">
      <div className="mx-20  px-6 md:px-12 py-20">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block bg-white text-black text-sm font-medium px-3 py-1 rounded uppercase tracking-widest mb-8"
        >
          Industries
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light leading-tight mb-12 border-b border-white/20 pb-8"
        >
          Tailored expertise for <br /> every business sector.
        </motion.h2>

        {/* Industry Rows */}
        <div className="divide-y divide-white/20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 gap-8"
            >
              {/* Left side: Number + Title */}
              <div className="flex items-start md:items-center gap-6 md:w-1/3">
                <h3 className="text-5xl md:text-6xl font-bold text-black">
                  {industry.id}
                </h3>
                <div>
                  <h4 className="text-xl md:text-2xl font-light">
                    {industry.title}
                  </h4>
                </div>
              </div>

              {/* Right side: Description */}
              <p className="md:w-2/3 text-gray-900 text-base leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
