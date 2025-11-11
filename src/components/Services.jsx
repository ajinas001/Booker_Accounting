"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Accounting & Bookkeeping",
    description:
      "Accounts Regulation • Cloud Accounting Services • Audit Preparation & Support • Accounting & Financial Reporting • Inventory & Asset Verification",
    buttonText: "Learn More",
    link: "/accounting-bookkeeping",
    bgColor: "bg-secondary",
    textColor: "text-white",
    buttonBorder: "border-white",
    type: "content",
    span: "lg:col-span-2 lg:row-span-1",
    borderRadius: "rounded-tr-[60px]",
    height: "min-h-[380px]",
  },

  {
    id: 2,
    type: "icon",
    bgColor: "bg-neutral-300",
    iconType: "arrow",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-tl-[60px]",
    height: "min-h-[280px]",
  },

  {
    id: 3,
    title: "Audit & Assurance",
    description:
      "External Audit • Real Estate Audit • Internal Audit • Inventory Audit • Due Diligence Support • Forensic Audit",
    buttonText: "Explore",
    link: "/audit-assurance",
    bgColor: "bg-black",
    textColor: "text-white",
    buttonBorder: "border-white",
    type: "content",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[50px]",
    height: "min-h-[320px]",
  },

  {
    id: 4,
    type: "image",
    bgColor: "bg-neutral-300",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    span: "lg:col-span-1 lg:row-span-2",
    borderRadius: "rounded-[45px]",
    height: "min-h-[450px]",
  },

  {
    id: 5,
    title: "AML Consultancy",
    description:
      "AML Risk Assessment • Compliance Program Design • Transaction Monitoring • KYC & Customer Due Diligence • AML Training & Awareness • Regulatory Reporting",
    buttonText: "Discover",
    link: "/aml",
    bgColor: "bg-secondary",
    textColor: "text-white",
    buttonBorder: "border-white",
    type: "content",
    span: "lg:col-span-2 lg:row-span-1",
    borderRadius: "rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px]",
    height: "min-h-[400px]",
  },

  {
    id: 8,
    title: "Taxation & Compliance",
    description: "Corporate Tax • Value Added Tax (VAT) • Tax Agent Service",
    buttonText: "More About",
    link: "/taxation",
    bgColor: "bg-secondary",
    textColor: "text-white",
    buttonBorder: "border-white",
    type: "content",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[45px]",
    height: "min-h-[360px]",
  },

  {
    id: 6,
    type: "icon",
    bgColor: "bg-neutral-300",
    iconType: "starburst",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[35px]",
    height: "min-h-[260px]",
  },

  {
    id: 7,
    title: "Business Advisory Services",
    description:
      "CFO Service • Business Valuation • Business Consultation • Merger & Acquisition • Business Process Re-engineering • Financial Feasibilities • IFRS Advisory Service",
    buttonText: "Learn More",
    link: "/business-advisory",
    bgColor: "bg-primary",
    textColor: "text-black",
    buttonBorder: "border-black",
    type: "content",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[55px]",
    height: "min-h-[340px]",
  },

  {
    id: 9,
    title: "Business Support Services",
    description:
      "Mainland Company Formation • Freezone Business Setup • Company Secretarial Service • Liquidation / De-registration • ICV Consultancy • PRO Service",
    buttonText: "More Details",
    link: "/business-support",
    bgColor: "bg-black",
    textColor: "text-white",
    buttonBorder: "border-white",
    type: "content",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px]",
    height: "min-h-[300px]",
  },
];


const ArrowIcon = () => (
  <svg
    width="60"
    height="80"
    viewBox="0 0 60 80"
    fill="none"
    className="mx-auto"
  >
    <path
      d="M30 0 L30 60 M30 60 L15 45 M30 60 L45 45"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarburstIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    className="mx-auto"
  >
    <g transform="translate(50, 50)">
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x2 = Math.cos(angle) * 35;
        const y2 = Math.sin(angle) * 35;
        return (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </g>
  </svg>
);

export default function AccountingServices() {
  return (
    <>
      <div className="min-h-screen bg-[#f5f5f0] p-4 md:p-8">
        <section className="relative  py-12 px-6 md:px-16 overflow-hidden">
          {/* Decorative Green Glow / Shape */}

          {/* Heading Text */}
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight ">
            Business Consultants <br />
            for a <span className="font-semibold">Growth Mindset</span>
          </h1>
        </section>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-dense">
            {services.map((item) => {
              if (item.type === "icon") {
                return (
                  <div
                    key={item.id}
                    className={`${item.bgColor} ${item.borderRadius} ${item.span} ${item.height} p-8 flex items-center justify-center`}
                  >
                    <div
                      className={
                        item.iconType === "arrow" ? "text-black" : "text-black"
                      }
                    >
                      {item.iconType === "arrow" ? (
                        <ArrowIcon />
                      ) : (
                        <StarburstIcon />
                      )}
                    </div>
                  </div>
                );
              }

              if (item.type === "image") {
                return (
                  <div
                    key={item.id}
                    className={`${item.bgColor} ${item.borderRadius} ${item.span} ${item.height} overflow-hidden`}
                  >
                    <img
                      src={item.imageUrl}
                      alt="Business professionals"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                );
              }

              // Content card
              return (
                <div
                  key={item.id}
                  className={`${item.bgColor} ${item.borderRadius} ${item.span} ${item.height} overflow-hidden`}
                >
                  <div
                    className={`p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full ${item.textColor}`}
                  >
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 lg:mb-6 tracking-tight">
                        {item.title}
                      </h2>
                      <p className="text-sm md:text-base leading-relaxed mb-6 lg:mb-8 opacity-90">
                        {item.description}
                      </p>
                    </div>

                    <Link href={item.link}>
                      <button
                        className={`w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 ${item.buttonBorder} ${item.textColor} text-sm font-light hover:opacity-80 transition-opacity`}
                      >
                        {item.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
