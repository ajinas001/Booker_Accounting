"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  AlertTriangle,
  FileText,
  ChevronDown,
  Building2,
  Calendar,
  ArrowRight,
  Info,
  ShieldCheck,
  ShieldAlert,
  Users,
  CreditCard,
  CheckSquare,
  Landmark,
  Scale,
  Receipt,
  FileSearch,
  AlertCircle,
  FileCheck2,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SupplierChecks2026Client = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const timelineDates = [
    {
      date: "23 June 2026",
      title: "Approved by Board",
      desc: "FTA Board approves new verification mechanism",
    },
    {
      date: "22 July 2026",
      title: "Decision Issued",
      desc: "FTA Decision No. 13 of 2026 officially issued",
    },
    {
      date: "20 August 2026",
      title: "Published by FTA",
      desc: "Detailed guidelines and check rules published",
    },
    {
      date: "1 October 2026",
      title: "In Full Force",
      desc: "Mandatory compliance for all VAT-registered entities",
      active: true,
    },
  ];

  const comparisonRows = [
    {
      area: "Claiming input VAT",
      before: "A valid tax invoice was usually enough.",
      since: "Invoice plus proof you checked the supplier and the supply.",
      highlight: true,
    },
    {
      area: "Checking suppliers",
      before: "No formal requirement.",
      since: "Verify identity, authorised representative and real place of business.",
    },
    {
      area: "Repeat checks",
      before: "Not required.",
      since: "At least every 12 months, or sooner if something looks off.",
    },
    {
      area: "Large suppliers",
      before: "No extra steps.",
      since: "Above AED 375,000 a year: bank confirmation and a reputation check.",
      highlight: true,
    },
    {
      area: "Each purchase",
      before: "Rarely looked at one by one.",
      since: "Must make commercial sense, at a reasonable price, within the supplier's licence.",
    },
    {
      area: "Cash payments",
      before: "No specific rule.",
      since: "Pay electronically; any cash payment needs a documented reason.",
    },
    {
      area: "Internal policy",
      before: "Not required.",
      since: "A written policy naming who does, reviews and supervises the checks.",
      highlight: true,
    },
  ];

  const level1Items = [
    "Identity and company documents match official government records",
    "You know who is authorised to act and sign for them",
    "They genuinely operate from the registered physical address provided",
    "Watch for red flags: address or key officers changing more than twice in 12 months, or deals exceeding their scale",
  ];

  const level2Items = [
    "There is a genuine, defensible commercial business reason for the purchase",
    "The pricing and transaction margins look fair and reasonable",
    "The supply fits what the supplier is officially licensed to sell",
    "The provenance and physical origin of goods are sound and verifiable",
    "Any intermediary or middleman's role makes clear commercial sense",
    "Settled electronically via bank transfer; any cash payment is fully documented",
  ];

  const thresholdCards = [
    {
      amount: "AED 10,000",
      scope: "Per purchase, excluding VAT",
      text: "Below this amount, a purchase is generally exempt from detailed verification, provided the supplier has not crossed the annual cumulative threshold.",
      badge: "Small Purchase Rule",
      badgeColor: "bg-slate-100 text-slate-800",
      borderColor: "border-slate-200",
    },
    {
      amount: "AED 100,000",
      scope: "Per supplier, rolling 12 months",
      text: "Once your cumulative purchases from a supplier cross AED 100,000 in a rolling 12 months, the small-invoice exemption stops. Every future purchase, even under AED 10,000, needs full supplier and supply checks.",
      badge: "Cumulative Threshold",
      badgeColor: "bg-teal-100 text-teal-900",
      borderColor: "border-teal-300",
    },
    {
      amount: "AED 375,000",
      scope: "Per supplier, rolling 12 months",
      text: "Above AED 375,000 a year, enhanced due diligence applies: you must obtain written confirmation from a UAE bank that the supplier holds an active account, plus conduct a formal public reputation check.",
      badge: "Enhanced Due Diligence",
      badgeColor: "bg-amber-100 text-amber-900",
      borderColor: "border-amber-300",
    },
  ];

  const attentionScenarios = [
    "Work with many vendors or frequently change suppliers",
    "Buy through commercial agents, distributors or third-party middlemen",
    "Pay in cash, through third-party intermediaries, or to overseas accounts",
    "Have large, recurring supply agreements with the same vendors",
    "Approve accounts payable mainly on the visual strength of a tax invoice",
  ];

  const actionChecklist = [
    "List your active suppliers and flag anyone near or above AED 100,000 or AED 375,000 a year",
    "Collect or refresh their trade licence, representative ID, and corporate documentation",
    "Confirm their operating business address matches the address billed on invoices",
    "Get UAE bank confirmation and run a public reputation check for suppliers above AED 375,000",
    "Review cash payments and compile a written business justification for each one",
    "Draft a formal verification policy naming who executes, reviews, and supervises checks",
    "Brief your procurement, commercial, and accounts payable teams on the new rules",
    "Securely store every verification record where it can be produced immediately upon FTA audit",
  ];

  const faqs = [
    {
      q: "Does this apply to my business?",
      a: "Yes. FTA Decision No. 13 of 2026 applies to every business that is registered, or should be registered, for VAT in the UAE and claims input VAT on its tax returns, regardless of turnover, legal structure, free zone or mainland status.",
    },
    {
      q: "I've worked with a supplier for years. Do I still need to check them?",
      a: "Yes. Long-standing relationships are not automatically protected. Any supplier you have not formally verified in the last 12 months requires fresh checks under the Decision. The FTA expects an ongoing 12-month re-verification cycle.",
    },
    {
      q: "Can I still pay suppliers in cash?",
      a: "Cash is not outright banned, but it faces far greater scrutiny. The FTA expects electronic bank-to-bank settlements for verifiable audit trails. If you make a cash payment, you must keep a documented business explanation of why cash was necessary.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/middle east vat.png"
            alt="Mandatory Supplier Checks UAE VAT 2026 - Booker Accounting"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center transform-gpu select-none"
            style={{
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/85 pointer-events-none" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex flex-wrap text-gray-300 gap-x-2">
              <Link href="/" className="text-white hover:text-textprimary transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/blog" className="text-white hover:text-textprimary transition-colors">
                Blog
              </Link>
              <span>›</span>
              <span className="text-textprimary font-medium">
                VAT Update 2026 · UAE
              </span>
            </div>
          </motion.div>

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-textprimary border border-textprimary/40 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
              VAT UPDATE 2026 &nbsp;·&nbsp; UAE
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Mandatory supplier checks:<br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              what changed on 1 October 2026.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed"
          >
            FTA Decision No. 13 of 2026 explained: the before-and-after, the two levels of checks, the three thresholds, and what it means for your business.
          </motion.p>

          {/* Meta line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-sm text-gray-400"
          >
            Booker Accounting &amp; Consulting &nbsp;|&nbsp; November 2026 &nbsp;|&nbsp; bookeraccounting.com
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-white">
        {/* Reading Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-textsecondary origin-left z-50"
          style={{ scaleX }}
        />

        <main className="max-w-7xl mx-auto px-6 py-16">

          {/* Quick Highlight Stats Grid */}
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">1 Oct 2026</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                DATE RULES TOOK EFFECT
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">2 Levels</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                SUPPLIER &amp; SUPPLY CHECKS
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">3 Numbers</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                AED 10K, 100K &amp; 375K
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">12 Months</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                SUPPLIER RE-CHECK CYCLE
              </p>
            </div>
          </Section>

          {/* Intro Narrative */}
          <Section className="mb-14">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Since 1 October 2026, a valid tax invoice is no longer the whole story when you claim input VAT in the UAE. Under FTA Decision No. 13 of 2026, VAT-registered businesses must check who they buy from, and what they&apos;re buying, before claiming that VAT back. Without proof of those checks, the FTA can refuse the claim.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              This guide explains what changed, how the checks work in practice, and the simple steps to get your business in line.
            </p>
          </Section>

          {/* Where this rule came from */}
          <Section className="mb-20">
            <div className="p-8 md:p-10 bg-slate-900 rounded-3xl text-white shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  LEGAL FOUNDATION
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Where this rule came from
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Federal Decree-Law No. 16 of 2025 added Article 54(bis) to the UAE VAT Law. It lets the FTA reject input VAT on supplies linked to tax evasion if you knew, and it may also reject it if you <strong className="text-white">should have known</strong>. Whether you &ldquo;should have known&rdquo; depends on whether you carried out the checks the FTA prescribes. Decision No. 13 of 2026 is where those checks are spelled out.
                </p>
              </div>

              {/* Timeline Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {timelineDates.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border backdrop-blur-sm transition-all ${
                      item.active
                        ? "bg-textsecondary/60 border-textprimary shadow-lg"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-textprimary">
                        {item.date}
                      </span>
                      {item.active && (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-base text-white">{item.title}</h3>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Before and after: what actually changed */}
          <Section className="mb-20">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                REGULATORY SHIFT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Before and after: what actually changed
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                A side-by-side comparison of supplier compliance requirements before and after 1 October 2026.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-1/4">Area</th>
                      <th className="py-4 px-6 md:w-1/3">Before 1 October 2026</th>
                      <th className="py-4 px-6 md:w-5/12">Since 1 October 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm md:text-base">
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={i}
                        className={`transition-colors ${
                          row.highlight
                            ? "bg-purpletint/70 hover:bg-purpletint"
                            : "hover:bg-slate-50/70"
                        }`}
                      >
                        <td className="py-4 px-6 font-bold text-gray-900 align-top">
                          {row.area}
                        </td>
                        <td className="py-4 px-6 text-gray-500 align-top leading-relaxed">
                          {row.before}
                        </td>
                        <td className="py-4 px-6 font-semibold text-textsecondary align-top leading-relaxed">
                          {row.since}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* The two levels of checks */}
          <Section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                VERIFICATION FRAMEWORK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                The two levels of checks
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-medium">
                The easiest way to think about it: first you check the person, then you check the deal.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEVEL 1: Supplier checks */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-sm hover:border-textsecondary/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <span className="px-3 py-1 rounded-lg bg-textsecondary text-white font-black text-xs uppercase tracking-wider">
                      LEVEL 1
                    </span>
                    <Users className="w-6 h-6 text-textsecondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Supplier checks
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 font-medium">
                    When you start with a new supplier, then at least once every 12 months:
                  </p>

                  <ul className="space-y-4">
                    {level1Items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-purpletint rounded-xl border border-purpletint text-xs text-gray-600">
                  <strong>Key Rule:</strong> Any vendor not re-verified within the last 12 months is treated as unverified during an FTA audit.
                </div>
              </div>

              {/* LEVEL 2: Supply checks */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-sm hover:border-textsecondary/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <span className="px-3 py-1 rounded-lg bg-textsecondary text-white font-black text-xs uppercase tracking-wider">
                      LEVEL 2
                    </span>
                    <FileSearch className="w-6 h-6 text-textsecondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Supply checks
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 font-medium">
                    For every single purchase you claim input VAT on:
                  </p>

                  <ul className="space-y-4">
                    {level2Items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900">
                  <strong>Key Rule:</strong> Every individual claim must be grounded in real commercial rationale and verifiable documentation.
                </div>
              </div>
            </div>
          </Section>

          {/* The three numbers that decide how much checking you need */}
          <Section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                SPEND THRESHOLDS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                The three numbers that decide how much checking you need
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Purchase size and cumulative supplier spend determine your required checking rigor.
              </p>
            </div>

            {/* Example: The Catering Company */}
            <div className="bg-purpletint p-6 md:p-8 rounded-3xl border border-purpletint mb-8">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-textsecondary" />
                <span className="text-xs font-bold tracking-wider text-textsecondary uppercase">
                  PRACTICAL EXAMPLE &nbsp;·&nbsp; THE CATERING COMPANY
                </span>
              </div>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Your office uses a catering company for team lunches. Each order is around AED 2,500, comfortably under AED 10,000. But with two orders a month plus a few company events, your yearly total quietly passes <strong className="text-slate-900">AED 100,000</strong>. From that point, every order, even the small ones, needs full supplier and supply checks. If you later add their services for client events and the total passes <strong className="text-slate-900">AED 375,000</strong>, you also need their bank confirmation and a reputation check.
              </p>
            </div>

            {/* 3 Threshold Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {thresholdCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-6 rounded-2xl border-2 ${card.borderColor} shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1">
                      {card.amount}
                    </div>
                    <p className="text-xs font-bold text-textsecondary uppercase tracking-wide mb-4">
                      {card.scope}
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Booker Tip */}
            <div className="bg-teal-50 border-2 border-teal-200 p-6 md:p-8 rounded-2xl flex items-start gap-4 shadow-sm">
              <div className="p-3 rounded-2xl bg-textsecondary text-white flex-shrink-0 mt-0.5">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1">
                  BOOKER TIP
                </span>
                <p className="text-teal-950 font-bold text-lg leading-relaxed">
                  AED 100,000 a year is only about AED 8,300 a month.
                </p>
                <p className="text-teal-900 text-sm md:text-base mt-2 leading-relaxed">
                  Most regular suppliers, like cleaning, logistics, IT or stock, will cross it. Rather than juggling two standards, it&apos;s simpler and safer to check all your active suppliers the same way.
                </p>
              </div>
            </div>
          </Section>

          {/* Who should pay the most attention? */}
          <Section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                HIGH EXPOSURE SECTORS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Who should pay the most attention?
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                The rule applies to every business that&apos;s registered, or should be registered, for VAT and claims input VAT. The impact is biggest if you:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {attentionScenarios.map((scenario, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 hover:border-textsecondary/30 transition-all"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-textsecondary flex-shrink-0 mt-2" />
                  <p className="text-gray-800 text-base leading-relaxed font-medium">
                    {scenario}
                  </p>
                </div>
              ))}
            </div>

            {/* Department alignment callout */}
            <div className="p-6 bg-purpletint rounded-2xl border border-purpletint flex items-center gap-4">
              <div className="p-3 rounded-xl bg-textsecondary text-white flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                <strong>This isn&apos;t just a finance job.</strong> Procurement, accounts payable and finance need one shared process for collecting documents, tracking thresholds and keeping the evidence.
              </p>
            </div>
          </Section>

          {/* A written policy is now required */}
          <Section className="mb-20">
            <div className="p-8 md:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-sm">
              <div className="max-w-3xl mb-6">
                <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                  ARTICLE 5 REQUIREMENT
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  A written policy is now required
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Article 5 of the Decision requires a documented verification policy. It must name the people who carry out, review and supervise the checks, and explain their responsibilities. A good policy covers how new suppliers are onboarded, how the 12-month refresh is tracked, who monitors the AED 100,000 and AED 375,000 thresholds, how red flags are handled and where records are kept.
                </p>
              </div>

              {/* Good to know alert */}
              <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="p-2.5 rounded-xl bg-textsecondary text-white flex-shrink-0 mt-0.5">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1">
                    GOOD TO KNOW
                  </span>
                  <p className="text-teal-950 font-semibold text-base leading-relaxed">
                    The policy applies to your business as a whole, even if most of your purchases are small and exempt from the detailed checks.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* What if you don't comply? */}
          <Section className="mb-20">
            <div className="bg-rose-50/70 border-2 border-rose-200 p-8 md:p-10 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-8 h-8 text-rose-600 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-rose-950">
                  What if you don&apos;t comply?
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                The Decision doesn&apos;t add a new fine of its own. The real risk is bigger: if a purchase turns out to be linked to tax evasion and you can&apos;t show you did the checks, you&apos;re treated as someone who <strong className="text-rose-950 font-bold">&ldquo;should have known,&rdquo;</strong> and the FTA can refuse your input VAT on it.
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                If you actually knew, the refusal is mandatory. For businesses with high-value purchases, that can cost far more than a penalty.
              </p>
            </div>
          </Section>

          {/* Your action checklist */}
          <Section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                READINESS ROADMAP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Your action checklist
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Eight practical steps to bring your procurement and tax accounting into compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {actionChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-textsecondary/40 transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-300 text-textsecondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-textsecondary group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Frequently asked questions */}
          <Section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                COMMONLY ASKED
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Frequently asked questions
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Straight answers to key questions about FTA Decision No. 13 of 2026.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-textsecondary transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-700 text-base leading-relaxed border-t border-slate-100 bg-slate-50/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA Banner Section */}
          <Section className="mt-16 p-10 md:p-14 bg-teal-900 text-white rounded-3xl text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full mb-4">
                BOOKER TAX ADVISORY
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Let&apos;s get your supplier files ready.
              </h2>
              <p className="mb-8 opacity-90 text-lg md:text-xl leading-relaxed">
                At Booker Accounting &amp; Consulting, we review your supplier base, set up a clear verification policy, track your thresholds and make sure every input VAT claim is backed by the right records.
              </p>
              <Link
                href="/taxation"
                className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition shadow-lg group"
              >
                <span>Talk to our tax team</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="mt-4 text-teal-200 text-sm">
                www.bookeraccounting.com/taxation
              </p>
            </div>
          </Section>

          {/* Legal Disclaimer */}
          <Section className="mt-12">
            <p className="text-xs text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
              This guide is general information based on FTA Decision No. 13 of 2026 and Article 54(bis) of the UAE VAT Law, as of November 2026. It is not tax or legal advice. Please speak to a qualified adviser about your specific situation. &copy; 2026 Booker Accounting &amp; Consulting.
            </p>
          </Section>

        </main>

        <ContactSection />
        <FloatingActions />
        <FloatingService />
        <Footer />
      </div>
    </>
  );
};

export default SupplierChecks2026Client;

