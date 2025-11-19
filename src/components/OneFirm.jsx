"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- ICONS (same as your version) ---
const BuildingIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M10 20v-6h4v6h5V9h4L12 3 1 9h4v11h5z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const DollarSignIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const BookOpenIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 22.5A2.5 2.5 0 014 20M6.5 17C4.5 17 3 15.5 3 13.5V4.5C3 3.395 3.895 2.5 5 2.5H19c1.105 0 2 .895 2 2v9c0 2-1.5 3.5-3.5 3.5h-11z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const CheckShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const SearchIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const TrendingUpIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="1.8" />
    <path d="M17 6h6v6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const TrashIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

// --- MAIN ---
export default function OneFirm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  const steps = [
    {
      title: "Company Formation ",
      desc: "Entity selection, paperwork, registration.",
      icon: BuildingIcon,
    },
    {
      title: "Tax Registration",
      desc: "VAT, corporate tax, payroll tax & statutory setup.",
      icon: DollarSignIcon,
    },
    {
      title: "Accounting & Bookkeeping",
      desc: "Chart of accounts, cycles & reporting setup.",
      icon: BookOpenIcon,
    },
    {
      title: "Taxation & Compliance",
      desc: "Ongoing filings and proactive reviews.",
      icon: CheckShieldIcon,
    },
    {
      title: "Audit & Financial Reviews",
      desc: "Audit preparation & assurance.",
      icon: SearchIcon,
    },
    {
      title: "Advice & Restructuring ",
      desc: "Strategic restructuring and optimization.",
      icon: TrendingUpIcon,
    },
    {
      title: "Liquidation / De-Registration",
      desc: "Orderly winding-down support.",
      icon: TrashIcon,
    },
  ];

  const fadeSlide = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: i * 0.15 },
    }),
  };

  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* ---- HEADER ---- */}
         <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeSlide}
          custom={0}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            One Firm. Every Step.
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
            With a Strategic Edge
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From start to finish, we guide your business through every stage of its lifecycle—whether 
            you're starting up, scaling, restructuring, or winding down. With deep expertise in UAE 
            and international markets, we ensure your journey is smooth, compliant, and strategically sound.
          </p>
        </motion.div>

        {/* ---- TIMELINE ---- */}
        <div className="relative mt-12">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300/70 -translate-x-1/2"></div>

          <div className="space-y-20 md:space-y-28">
            {steps.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={fadeSlide}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={index + 1}
                  className={`relative flex flex-col md:flex-row items-center md:items-start ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* ---- CENTER ICON BUBBLE ---- */}
                  <div
                    className="
                      hidden md:flex absolute left-1/2 -translate-x-1/2 
                      w-16 h-16 rounded-full 
                      bg-secondary backdrop-blur-md
                      flex items-center justify-center
                      text-white z-10
                    "
                  >
                    <item.icon className="w-7 h-7" />
                  </div>

                  {/* ---- CARD ---- */}
                  <div
                    className={`
                      bg-gray-200 backdrop-blur-xl 
                      rounded-2xl p-7 md:p-9 max-w-lg 
                      transition duration-300 
                      hover:scale-[1.02] hover:bg-gray-300
                      ${isLeft ? " md:pr-20" : " md:pl-20"}
                    `}
                  >
                    {/* mobile icon */}
                    <div className="flex items-center gap-3 md:hidden mb-4">
                      <div className="w-12 h-12 bg-white/70 backdrop-blur-xl rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-gray-800" />
                      </div>
                      <span className="text-lg font-semibold text-gray-800">
                        STEP {index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>

                    <p className="mt-4 text-sm text-gray-500 italic">
                      Typical Completion Time:{" "}
                      <span className="font-medium text-gray-700">
                        1–3 weeks
                      </span>
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
