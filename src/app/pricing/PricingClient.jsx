"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  FileText,
  Cloud,
  UserCheck,
  Check,
  X,
  Sparkles,
  Copy,
  CheckCheck,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Layers,
  Table as TableIcon,
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Plan Data
const plans = [
  {
    id: "essential",
    name: "Booker Essential",
    icon: BookOpen,
    m: 499,
    y: 5499,
    desc: "For businesses that need reliable bookkeeping and essential financial records.",
    feat: [
      "Up to 50 transactions per month",
      "Transaction recording and bookkeeping",
      "General ledger maintenance",
      "Monthly bank reconciliation",
      "VAT return preparation and filing",
      "Financial statement preparation",
      "Quarterly management reporting"
    ]
  },
  {
    id: "elevate",
    name: "Booker Elevate",
    icon: FileText,
    m: 799,
    y: 8789,
    desc: "For growing businesses seeking accounting support, tax compliance and financial visibility.",
    feat: [
      "Up to 200 transactions per month",
      "All Essential services",
      "Accounts receivable and accounts payable tracking",
      "VAT return preparation and filing",
      "Small Business Relief (SBR) eligibility assessment and Corporate Tax filing support for SBR-eligible businesses",
      "Monthly management reporting",
      "Document tracking",
      "Dedicated accountant"
    ],
    addons: [
      { name: "Cash flow report", price: "AED 150 / mo" },
      { name: "Priority support", price: "AED 150 / mo" },
      { name: "On-site visit, Dubai", price: "AED 200 + travel" }
    ]
  },
  {
    id: "prime",
    name: "Booker Prime",
    icon: Cloud,
    m: 1499,
    y: 16489,
    premium: true,
    desc: "For businesses requiring comprehensive accounting support and enhanced reporting.",
    feat: [
      "Up to 500 transactions per month, plus up to 100 extra transactions free",
      "All Elevate services",
      "Cloud-based accounting software included, subject to the agreed software and licence terms",
      "VAT return preparation and filing",
      "Corporate Tax filing support and SBR eligibility assessment, where applicable",
      "Monthly management reporting & virtual review meeting",
      "Document tracking",
      "Dedicated accountant",
      "Monthly cash flow report",
      "Priority support, replies within 1 business day",
      "Quarterly virtual business review",
      "1 on-site visit per month, within Dubai",
      "Additional visits: AED 200 per visit plus travel costs"
    ],
    bundleAdditions: [
      "Cloud accounting software",
      "Monthly cash flow report",
      "Priority support",
      "Quarterly virtual business review",
      "1 on-site visit per month in Dubai"
    ]
  },
  {
    id: "signature",
    name: "Booker Signature",
    icon: UserCheck,
    custom: true,
    desc: "A tailored accounting solution for businesses with specialised requirements.",
    feat: [
      "Unlimited transaction recording, subject to agreed scope and fair-use terms",
      "All Prime services",
      "Dedicated accountant",
      "Customised on-site visits & customised management reports",
      "Tailored financial dashboards and KPIs",
      "Flexible reporting formats",
      "Additional reporting and advisory support based on business requirements",
      "Year-end audit-ready records",
      "Audit support and audit report coordination",
      "Budgeting and forecasting: a yearly budget with quarterly updates",
      "Tax advisory",
      "Corporate Tax assessment",
      "E-invoicing assessment",
      "CFO services",
      "Scope, deliverables and pricing agreed individually"
    ]
  }
];

// Comparison Matrix Rows
const rows = [
  ["g", "Volume"],
  ["Transactions per month", ["50", "200", "500 + 100 free", "Unlimited*"]],
  ["g", "Bookkeeping"],
  ["Transaction recording and bookkeeping", [1, 1, 1, 1]],
  ["General ledger maintenance", [1, 1, 1, 1]],
  ["Monthly bank reconciliation", [1, 1, 1, 1]],
  ["Accounts receivable and payable tracking", [0, 1, 1, 1]],
  ["Financial statement preparation", [1, 1, 1, 1]],
  ["g", "Tax and compliance"],
  ["VAT return preparation and filing", [1, 1, 1, 1]],
  ["SBR eligibility assessment and Corporate Tax filing support", [0, "SBR-eligible businesses", 1, 1]],
  ["Year-end audit-ready records", [0, 0, 0, 1]],
  ["Audit support and audit report coordination", [0, 0, 0, 1]],
  ["Tax advisory", [0, 0, 0, 1]],
  ["Corporate Tax assessment", [0, 0, 0, 1]],
  ["E-invoicing assessment", [0, 0, 0, 1]],
  ["Budgeting and forecasting (yearly budget, quarterly updates)", [0, 0, 0, 1]],
  ["CFO services", [0, 0, 0, 1]],
  ["g", "Reporting and support"],
  ["Management reporting", ["Quarterly", "Monthly", "Monthly", "Customised"]],
  ["Document tracking", [0, 1, 1, 1]],
  ["Dedicated accountant", [0, 1, 1, 1]],
  ["Monthly cash flow report", [0, "Add-on", 1, 1]],
  ["Priority support", [0, "Add-on", 1, 1]],
  ["Quarterly virtual business review", [0, 0, 1, 1]],
  ["Virtual review meeting", [0, 0, "Monthly", 1]],
  ["On-site visit (Dubai)", [0, "Add-on", "1 / month", "Customised"]],
  ["Additional visits", [0, "AED 200 + travel", "AED 200 + travel", "Agreed"]],
  ["Tailored dashboards and KPIs", [0, 0, 0, 1]],
  ["Flexible reporting formats", [0, 0, 0, 1]],
  ["Advisory support based on business needs", [0, 0, 0, 1]],
  ["g", "Software"],
  ["Cloud-based accounting software", [0, 0, 1, 1]]
];

const faqs = [
  {
    q: "What counts as a transaction?",
    a: "Each purchase, sale, payment or receipt we record in your books during the month."
  },
  {
    q: "How do I pay?",
    a: "Monthly plans are paid in advance on a quarterly basis. Yearly plans are paid in one payment, and you get about one month free."
  },
  {
    q: "Is VAT included in the prices?",
    a: "No. All prices are in AED and exclusive of 5% UAE VAT, which is added to your invoice."
  },
  {
    q: "What if I go over my transaction limit?",
    a: "Prime includes up to 100 extra transactions free. Beyond that, or on any other plan, our consultant will recommend the right plan or a custom quote for you."
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Speak to our consultant and we will move you to the plan that fits your business."
  },
  {
    q: "Where do the on-site visits happen?",
    a: "Within Dubai. Additional visits cost AED 200 per visit plus travel costs."
  }
];

export default function PricingClient() {
  const [yearly, setYearly] = useState(false);
  const [view, setView] = useState("plans");
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#compare") {
      setView("compare");
    }
  }, []);

  const formatNumber = (num) => (num ? num.toLocaleString("en-US") : "0");

  const getPlanSummary = (plan) => {
    if (!plan) return null;
    if (plan.custom) {
      return {
        name: plan.name,
        priceText: "Custom pricing, agreed individually",
        fullText: "I would like to discuss Booker Signature (custom pricing agreed individually)."
      };
    }
    const base = yearly ? plan.y : plan.m;
    const vat = Math.round(base * 0.05 * 100) / 100;
    const total = base + vat;
    const period = yearly ? "year" : "month";
    return {
      name: plan.name,
      priceText: `AED ${formatNumber(base)} / ${period} + 5% VAT = AED ${formatNumber(total)}`,
      fullText: `I would like to go with ${plan.name} (${yearly ? "yearly" : "monthly"} AED ${formatNumber(base)} / ${period} + 5% VAT = AED ${formatNumber(total)}).`
    };
  };

  const selectedPlan = plans.find((p) => p.id === selectedPlanId);
  const summary = selectedPlan ? getPlanSummary(selectedPlan) : null;

  const handleCopy = () => {
    if (!summary) return;
    navigator.clipboard.writeText(summary.fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleSelect = (id) => {
    setSelectedPlanId((prev) => (prev === id ? null : id));
  };

  const handleSeePrime = () => {
    setSelectedPlanId("prime");
    const primeCard = document.getElementById("plan-prime");
    if (primeCard) {
      primeCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans antialiased selection:bg-[#26c6da]/20 selection:text-[#1c5e6a]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-28 md:pt-36 pb-32">
        {/* Header / Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c5e6a]/10 text-[#1c5e6a] text-xs font-bold tracking-wider uppercase mb-4"
          >
           
            Booker Accounting &amp; Consulting LLC
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0d1a20] tracking-tight leading-tight mb-4"
          >
            Choose Your Plan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Accounting packages for UAE businesses. All prices in AED, exclusive of 5% VAT.
          </motion.p>

          {/* Controls: Billing toggle + View mode toggle */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Monthly / Yearly Switch */}
            <div className="inline-flex items-center p-1.5 bg-gray-200/80 rounded-full shadow-inner border border-gray-300/60">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  !yearly
                    ? "bg-white text-[#0d1a20] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  yearly
                    ? "bg-[#1c5e6a] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>Yearly</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    yearly
                      ? "bg-emerald-400 text-emerald-950"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  One payment, save more
                </span>
              </button>
            </div>

            {/* View Switch: Plans vs Compare */}
            <div className="inline-flex items-center p-1.5 bg-gray-200/80 rounded-full shadow-inner border border-gray-300/60">
              <button
                type="button"
                onClick={() => setView("plans")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  view === "plans"
                    ? "bg-white text-[#0d1a20] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Layers className="w-4 h-4" />
                Plans
              </button>
              <button
                type="button"
                onClick={() => setView("compare")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  view === "compare"
                    ? "bg-white text-[#0d1a20] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <TableIcon className="w-4 h-4" />
                Compare plans
              </button>
            </div>
          </motion.div>
        </section>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB 1: Plans Grid */}
          <div className={view === "plans" ? "block" : "hidden"}>
            <section
              aria-label="Plans"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            >
              {plans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                const isPrime = plan.premium;
                const IconComponent = plan.icon;
                const savings = plan.m && plan.y ? plan.m * 12 - plan.y : 0;

                return (
                  <article
                    key={plan.id}
                    id={`plan-${plan.id}`}
                    className={`relative rounded-2xl flex flex-col p-6 transition-all duration-300 ${
                      isPrime
                        ? isSelected
                          ? "bg-[#fffdfa] border-2 border-[#b8892b] shadow-xl ring-4 ring-[#b8892b]/20"
                          : "bg-white border-2 border-[#b8892b] shadow-md hover:shadow-xl hover:-translate-y-1"
                        : isSelected
                        ? "bg-white border-2 border-[#1c5e6a] shadow-xl ring-4 ring-[#1c5e6a]/15"
                        : "bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-1"
                    }`}
                  >
                    {/* Badge */}
                    {isPrime && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#b8892b] text-white text-[10px] font-black tracking-widest uppercase px-3.5 py-1 rounded-full shadow-md">
                        Recommended
                      </div>
                    )}

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isPrime
                            ? "bg-[#b8892b] text-white shadow-md shadow-[#b8892b]/30"
                            : "bg-[#1c5e6a]/10 text-[#1c5e6a]"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#0d1a20]">
                          {plan.name}
                        </h2>
                      </div>
                    </div>

                    {/* Pricing Block */}
                    <div className="min-h-[82px] flex flex-col justify-end mb-4 pb-3 border-b border-gray-100">
                      {plan.custom ? (
                        <>
                          <div className="text-2xl font-extrabold text-[#0d1a20] flex items-baseline gap-1">
                            Custom <span className="text-xs font-semibold text-gray-500">pricing</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Agreed individually for your business
                          </p>
                        </>
                      ) : !yearly ? (
                        <>
                          <div className="text-3xl font-extrabold text-[#0d1a20] tracking-tight flex items-baseline gap-1.5">
                            <span className="text-sm font-semibold text-gray-500">AED</span>
                            <span>{formatNumber(plan.m)}</span>
                            <span className="text-xs font-medium text-gray-500">/ month</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            or AED {formatNumber(plan.y)} once a year{" "}
                            <b className="text-emerald-700 font-semibold">(save AED {formatNumber(savings)})</b>
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="text-3xl font-extrabold text-[#0d1a20] tracking-tight flex items-baseline gap-1.5">
                            <span className="text-sm font-semibold text-gray-500">AED</span>
                            <span>{formatNumber(plan.y)}</span>
                            <span className="text-xs font-medium text-gray-500">/ year</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            One payment · <s className="opacity-70">AED {formatNumber(plan.m * 12)}</s>{" "}
                            <b className="text-emerald-700 font-semibold">save AED {formatNumber(savings)}</b>
                          </p>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed">
                      {plan.desc}
                    </p>

                    {/* Pick / Select Button */}
                    <button
                      type="button"
                      onClick={() => handleSelect(plan.id)}
                      className={`w-full py-2.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mb-5 ${
                        isSelected
                          ? isPrime
                            ? "bg-[#b8892b] text-white shadow-md shadow-[#b8892b]/30"
                            : "bg-[#1c5e6a] text-white shadow-md"
                          : isPrime
                          ? "border-2 border-[#b8892b] text-[#b8892b] bg-[#fffaf0] hover:bg-[#b8892b] hover:text-white"
                          : "border border-[#1c5e6a] text-[#1c5e6a] bg-white hover:bg-[#1c5e6a]/10"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Selected</span>
                        </>
                      ) : plan.custom ? (
                        "Request custom quote"
                      ) : (
                        "Choose this plan"
                      )}
                    </button>

                    {/* Bundle Callouts */}
                    {plan.id === "prime" && (
                      <div className="mb-5 p-3.5 rounded-xl bg-white border border-[#b8892b]/40 text-xs shadow-sm">
                        <b className="block text-[11px] font-extrabold tracking-wider uppercase text-[#b8892b] mb-2">
                          What Prime adds to Elevate:
                        </b>
                        <ul className="space-y-1.5 text-gray-700 mb-3">
                          {plan.bundleAdditions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#b8892b] font-black">+</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="font-semibold text-gray-900 border-t border-gray-100 pt-2 text-[11.5px]">
                          All of this for only AED{" "}
                          {formatNumber(
                            yearly
                              ? (plan.y || 0) - (plans[1].y || 0)
                              : (plan.m || 0) - (plans[1].m || 0)
                          )}{" "}
                          more {yearly ? "per year" : "per month"}.
                        </p>
                      </div>
                    )}

                    {/* Elevate Add-ons Callout */}
                    {plan.id === "elevate" && (
                      <div className="mb-5 p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                        <b className="block text-[11px] font-extrabold tracking-wider uppercase text-gray-600 mb-2">
                          Optional add-ons:
                        </b>
                        <ul className="space-y-1.5 text-gray-700 mb-3">
                          {plan.addons.map((addon, idx) => (
                            <li key={idx} className="flex items-center justify-between gap-2">
                              <span>{addon.name}</span>
                              <span className="font-semibold text-gray-900">{addon.price}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={handleSeePrime}
                          className="text-[#1c5e6a] hover:text-[#0d1a20] font-bold text-xs underline cursor-pointer text-left flex items-center gap-1 group"
                        >
                          <span>Need these and more? See Prime</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    )}

                    {/* Included Services - Positioned directly below the above content */}
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3">
                        Included Services
                      </p>
                      <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-700">
                        {plan.feat.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span className="leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </section>
          </div>

          {/* TAB 2: Compare Matrix */}
          <div className={view === "compare" ? "block" : "hidden"}>
            <section aria-label="Compare plans" className="space-y-4">
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/70">
                      <th className="py-5 px-6 font-bold text-gray-600 sticky left-0 bg-gray-50 z-10 w-[240px]">
                        <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">
                          Features
                        </span>
                        <span>{yearly ? "Billed yearly" : "Billed monthly"}</span>
                      </th>
                      {plans.map((p) => {
                        const price = p.custom
                          ? "Custom"
                          : `AED ${formatNumber(yearly ? p.y : p.m)} ${yearly ? "/ yr" : "/ mo"}`;
                        return (
                          <th
                            key={p.id}
                            className={`py-5 px-4 text-center ${
                              p.premium ? "bg-[#fffaf0] border-x border-[#b8892b]/30" : ""
                            }`}
                          >
                            <span className="block text-base font-extrabold text-[#0d1a20]">
                              {p.name.replace("Booker ", "")}
                            </span>
                            <span className="block text-sm font-semibold text-[#1c5e6a] mt-1">
                              {price}
                            </span>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {rows.map((row, idx) => {
                      if (row[0] === "g") {
                        return (
                          <tr key={idx} className="bg-gray-100/70">
                            <td
                              colSpan={5}
                              className="py-2.5 px-6 font-extrabold text-[11px] tracking-wider uppercase text-gray-500"
                            >
                              {row[1]}
                            </td>
                          </tr>
                        );
                      }

                      const [label, vals] = row;
                      return (
                        <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                          <td className="py-3.5 px-6 font-medium text-gray-800 sticky left-0 bg-white z-10 text-xs sm:text-sm border-r border-gray-100">
                            {label}
                          </td>
                          {vals.map((v, colIdx) => {
                            const isPrimeCol = plans[colIdx].premium;
                            return (
                              <td
                                key={colIdx}
                                className={`py-3.5 px-4 text-center align-middle ${
                                  isPrimeCol ? "bg-[#fffdf8] border-x border-[#b8892b]/20" : ""
                                }`}
                              >
                                {v === 1 ? (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                  </span>
                                ) : v === 0 ? (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 mx-auto">
                                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                                  </span>
                                ) : (
                                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-800">
                                    {v}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-xs text-gray-500 pt-2">
                *Unlimited transactions are subject to agreed scope and fair-use terms. Scroll sideways on small screens to view every plan.
              </p>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="mt-20 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1c5e6a] bg-[#1c5e6a]/10 px-3 py-1 rounded-full">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1a20] mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-gray-900 hover:text-[#1c5e6a] transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#1c5e6a]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Clarifications / Fine Print Section */}
          <section className="mt-16 pt-8 border-t border-gray-200 max-w-3xl mx-auto text-center space-y-2 text-xs text-gray-500 leading-relaxed">
            <p>On-site visits are within Dubai. Additional visits cost AED 200 per visit plus travel costs.</p>
            <p>Going over your plan&apos;s transaction limit? Prime includes up to 100 extra transactions free. Beyond that, our consultant will recommend the right plan or a custom quote for you.</p>
            <p>Yearly plans are paid in one payment. Monthly plans are paid in advance on a quarterly basis.</p>
            <p className="font-semibold text-gray-700 pt-2">Booker Accounting &amp; Consulting LLC</p>
          </section>
        </div>
      </main>

      {/* Floating Sticky Summary Bar */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d1a20]/95 backdrop-blur-md border-t border-white/10 text-white py-3.5 px-4 sm:px-8 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-bold text-base text-white">{summary?.name}</span>
                  {selectedPlan.premium && (
                    <span className="text-[10px] bg-[#b8892b] text-white font-bold px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-300 mt-0.5 font-medium">{summary?.priceText}</p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlanId(null)}
                  className="px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0d1a20] bg-white hover:bg-gray-100 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy selection</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean & Premium WhatsApp Inquiry Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-[#0d1a20]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0d1a20]">Inquire on WhatsApp</h3>
                    <p className="text-xs text-gray-500">Booker Accounting &amp; Consulting</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Selected Package:
                </p>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="font-bold text-sm text-[#0d1a20]">{summary?.name}</div>
                  <div className="text-xs text-[#1c5e6a] font-medium mt-0.5">{summary?.priceText}</div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                  Message Preview:
                </p>
                <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl text-xs text-gray-700 leading-relaxed font-sans">
                  {summary?.fullText}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`https://wa.me/971567678156?text=${encodeURIComponent(
                    summary?.fullText || "Hello Booker Accounting, I would like to inquire about your accounting plans."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp Chat</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full py-2 text-xs font-semibold text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}