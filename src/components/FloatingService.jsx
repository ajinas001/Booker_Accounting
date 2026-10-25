"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
    HiOutlineClipboardDocumentCheck, 
    HiOutlineDocumentText, 
    HiOutlineCalculator, 
    HiOutlineBriefcase, 
    HiOutlineBuildingOffice, 
    HiOutlineShieldCheck 
} from "react-icons/hi2";

const services = [
  {
    title: "Audit & Assurance",
    href: "/audit-assurance",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: "Taxation",
    href: "/taxation",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Accounting & Bookkeeping", // Slightly shortened for UI balance
    href: "/accounting-bookkeeping",
    icon: HiOutlineCalculator,
  },
  {
    title: "Business Advisory",
    href: "/business-advisory",
    icon: HiOutlineBriefcase,
  },
  {
    title: "Business Support",
    href: "/business-support",
    icon: HiOutlineBuildingOffice,
  },
  {
    title: "Anti Money Laundering",
    href: "/aml",
    icon: HiOutlineShieldCheck,
  },
];

export default function FloatingService() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25, // Smoothed out bouncing slightly
          }}
          className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto z-40 lg:hidden"
        >
          <div className="rounded-2xl border border-stone-100 bg-white/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-6 items-start w-full gap-1 px-1 sm:px-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex flex-col items-center gap-1 w-full group cursor-pointer text-center"
                  >
                    {/* Balanced icon container padding and sizing */}
                    <div className="rounded-xl bg-[#f4f7f6] p-1.5 sm:p-2 transition-all duration-200 group-hover:bg-[#1a3c34]/10 group-active:scale-95">
                      <Icon className="h-5 w-5 text-[#1a3c34] sm:h-6 sm:w-6 transition-colors" />
                    </div>

                    {/* Drastically improved text styling: shifted from uppercase to normal tracking-normal */}
                    <span
                      className="
                        text-center
                        text-[8px]
                        sm:text-[9px]
                        md:text-[10px]
                        font-medium
                        leading-tight
                        text-[#1a3c34]
                        group-hover:text-black
                        transition-colors
                        break-words
                        w-full
                        px-0.5
                      "
                    >
                      {service.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}