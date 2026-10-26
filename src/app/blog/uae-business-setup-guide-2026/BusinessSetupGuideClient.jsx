"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Building2,
  Check,
  X,
  FileText,
  DollarSign,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calculator,
  Laptop
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const FAQS = [
  {
    q: "Can I own 100% of a mainland company as a foreigner?",
    a: "For most commercial and professional activities, yes. Since the 2021 changes to the Commercial Companies Law, foreign investors can fully own most mainland companies. A small number of strategic activities still have restrictions.",
  },
  {
    q: "Do I need a physical office?",
    a: "Every company needs a registered address. Mainland companies usually need a physical office with a registered lease (Ejari in Dubai, Tawtheeq in Abu Dhabi). Free zones often offer flexi-desk options.",
  },
  {
    q: "How long does it take to open a bank account?",
    a: "Often several weeks. Prepare a clear business plan, source-of-funds documents and complete shareholder information to speed it up.",
  },
  {
    q: "Can a free zone company work with mainland clients?",
    a: "It can, but usually with conditions, and it may affect the 0% Corporate Tax rate. Selling directly into the mainland usually needs a distributor, a mainland branch or extra licensing. Get advice before you rely on mainland customers.",
  },
  {
    q: "Do I need an accountant from day one?",
    a: "You need proper books from day one. With Corporate Tax, VAT and e-invoicing coming in 2027, many new businesses outsource bookkeeping and tax compliance so they can focus on growing.",
  },
  {
    q: "What happens if I register for Corporate Tax late?",
    a: "A fixed penalty of AED 10,000 applies. New companies generally have three months from incorporation to register on EmaraTax. Some waivers have been offered, but don't plan on one.",
  },
];

const BusinessSetupGuideClient = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background Image Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/middle east vat.png"
            alt="Starting a Business in the UAE Setup Guide 2026"
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-base flex flex-wrap text-gray-300 gap-x-2 items-center">
              <Link
                href="/"
                className="text-white hover:text-textprimary transition-colors"
              >
                Home
              </Link>
              <span>›</span>
              <Link
                href="/blog"
                className="text-white hover:text-textprimary transition-colors"
              >
                Blog
              </Link>
              <span>›</span>
              <span className="text-textprimary font-medium">
                Business Setup Guide 2026 · UAE
              </span>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-textprimary/20 text-textprimary border border-textprimary/30 text-xs md:text-sm font-semibold tracking-wider uppercase">
              B U S I N E S S &nbsp;S E T U P &nbsp;G U I D E &nbsp;2 0 2 6 &nbsp;· &nbsp;U A E
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Starting a Business in the UAE, <br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              the Right Way From Day One.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-2xl text-gray-300 max-w-4xl font-light leading-relaxed mb-6"
          >
            A practical guide for founders and new business owners: mainland or free zone, the setup steps, and the tax and compliance obligations that come after the licence.
          </motion.p>

          {/* Author & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="flex flex-wrap items-center gap-3 text-sm text-gray-300 border-t border-white/15 pt-5"
          >
            <span className="font-semibold text-white">Booker Accounting &amp; Consulting</span>
            <span className="text-gray-500">•</span>
            <span>October 2026</span>
            <span className="text-gray-500">•</span>
            <span className="text-textprimary">bookeraccounting.com</span>
            <span className="text-gray-500">•</span>
            <span>12 Min Read</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="min-h-screen bg-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-textsecondary origin-left z-50"
          style={{ scaleX }}
        />

        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Key Stats Bar */}
          <Section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 text-center">
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint">
              <div className="text-3xl md:text-4xl font-bold text-textsecondary mb-1">100%</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                FOREIGN OWNERSHIP ON MOST ACTIVITIES
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint">
              <div className="text-3xl md:text-4xl font-bold text-textsecondary mb-1">3 Months</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                CORPORATE TAX REGISTRATION WINDOW
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint">
              <div className="text-3xl md:text-4xl font-bold text-textsecondary mb-1">AED 10K</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                FIXED LATE REGISTRATION PENALTY
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint">
              <div className="text-3xl md:text-4xl font-bold text-textsecondary mb-1">AED 375K</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                0% CT CAP &amp; VAT MANDATORY THRESHOLD
              </p>
            </div>
          </Section>

          {/* Intro Paragraphs */}
          <Section className="mb-14">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              The UAE is one of the best places in the world to start a business. Full foreign ownership in most activities, world-class infrastructure, and a market that connects the Middle East, Africa and Asia.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              But getting the trade licence is only the first step. What you decide before you register, and what you set up in the first 90 days after, decides how smoothly your business runs for years.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              This guide walks you through the whole journey: from the trade licence to Corporate Tax, bookkeeping software, VAT and understanding your costs, plus the compliance most new owners don't hear about until it's too late.
            </p>
            <blockquote className="pl-6 py-4 italic text-gray-800 bg-purpletint border-l-4 border-textsecondary rounded-r-2xl text-base md:text-lg">
              &ldquo;The licence is the start, not the finish. What you decide before you register, and what you set up in the first 90 days after, decides how smoothly your business runs for years.&rdquo;
            </blockquote>
          </Section>

          {/* Quick Version Section */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Executive Summary
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The quick version (if you only read one section)
            </h2>
            <h3 className="text-xl font-semibold text-textsecondary mb-4">
              Your journey at a glance
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every new business in the UAE goes through the same stages. This guide follows them in order.
            </p>

            {/* Stages Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 w-20 text-center">#</th>
                      <th className="py-4 px-6 md:w-1/3">Stage</th>
                      <th className="py-4 px-6 md:w-2/3">What happens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 text-center font-bold text-textsecondary">1</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">Trade licence</td>
                      <td className="py-4 px-6 text-gray-700">Choose your activity, jurisdiction and legal form, then get licensed.</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 text-center font-bold text-textsecondary">2</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">Bank account and visas</td>
                      <td className="py-4 px-6 text-gray-700">Open the corporate account and get visas for owners and staff.</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 text-center font-bold text-textsecondary">3</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">Corporate Tax</td>
                      <td className="py-4 px-6 text-gray-700">Register within three months, then file a return every year.</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 text-center font-bold text-textsecondary">4</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">Bookkeeping system</td>
                      <td className="py-4 px-6 text-gray-700">Set up proper accounting software, not Excel, from the first transaction.</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 text-center font-bold text-textsecondary">5</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">VAT</td>
                      <td className="py-4 px-6 text-gray-700">Register once you reach the threshold, then charge, collect and file correctly.</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 text-center font-bold text-textsecondary">6</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">Know your costs</td>
                      <td className="py-4 px-6 text-gray-700">Understand your fixed and variable costs and your break-even point.</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 text-center font-bold text-textsecondary">7</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">Stay compliant</td>
                      <td className="py-4 px-6 text-gray-700">Returns, e-invoicing, audits and licence renewal, every year.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5 Core Takeaways */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              5 Core Takeaways to Remember
            </h3>
            <div className="space-y-4 mb-6">
              {[
                {
                  num: "1",
                  title: "Decide your activity and jurisdiction first.",
                  body: "Mainland or free zone isn't just about cost. It decides who you can sell to, where you can operate and how you're taxed.",
                },
                {
                  num: "2",
                  title: "Most activities allow 100% foreign ownership.",
                  body: "Since the 2021 changes to the Commercial Companies Law, foreign investors can fully own most mainland companies.",
                },
                {
                  num: "3",
                  title: "The licence is the start, not the finish.",
                  body: "Corporate Tax registration, a bank account, UBO records and proper accounting all follow, each with its own rules.",
                },
                {
                  num: "4",
                  title: "Register for Corporate Tax within three months.",
                  body: "New companies generally have three months from incorporation. Missing it costs a fixed AED 10,000.",
                },
                {
                  num: "5",
                  title: "Build proper books from day one.",
                  body: "With e-invoicing arriving in 2027, there's no longer room for \"we'll sort out the accounting later.\"",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-purpletint border border-teal-100/60"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-textsecondary text-white font-bold text-sm flex items-center justify-center mt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                      <strong className="text-gray-900 font-bold">{item.title}</strong>{" "}
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Stage 1: Before you register, five decisions */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Stage 1
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Before you register, five decisions to make first
            </h2>

            {/* Decisions Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/3">Decision</th>
                      <th className="py-4 px-6 md:w-2/3">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Your business activity</td>
                      <td className="py-4 px-6 text-gray-700">
                        Your licence lists exactly what you're allowed to do. Some activities need extra approvals from regulators. Choose carefully, because adding or changing activities later takes time and cost.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Mainland or free zone</td>
                      <td className="py-4 px-6 text-gray-700">
                        Decides who you can trade with, where your office can be, and whether you can qualify for 0% Corporate Tax on certain income.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Legal form</td>
                      <td className="py-4 px-6 text-gray-700">
                        LLC, sole establishment, branch, free zone company. Each has different ownership, liability and setup rules.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Visas you'll need</td>
                      <td className="py-4 px-6 text-gray-700">
                        For yourself, partners and staff. Your office size and licence type often limit how many visas you can get.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Your real budget</td>
                      <td className="py-4 px-6 text-gray-700">
                        Not just the licence fee. Office rent, visas, bank requirements, accounting, insurance and the first months of running costs.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mainland vs Free zone */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mainland vs free zone
            </h3>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/4">Feature</th>
                      <th className="py-4 px-6 md:w-3/8 bg-teal-800">Mainland</th>
                      <th className="py-4 px-6 md:w-3/8 bg-slate-800">Free zone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Who you can sell to</td>
                      <td className="py-4 px-6 text-gray-700">Anyone in the UAE, including government entities</td>
                      <td className="py-4 px-6 text-gray-700">
                        Mainly other free zone businesses and international customers. Selling directly into the mainland usually needs a distributor, a mainland branch or extra licensing
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Ownership</td>
                      <td className="py-4 px-6 text-gray-700 font-medium">100% foreign ownership for most activities</td>
                      <td className="py-4 px-6 text-gray-700 font-medium">100% foreign ownership</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Licensing authority</td>
                      <td className="py-4 px-6 text-gray-700">The economic department of each emirate (for example DET in Dubai)</td>
                      <td className="py-4 px-6 text-gray-700">The free zone authority (for example DMCC, JAFZA, IFZA, RAKEZ)</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Office</td>
                      <td className="py-4 px-6 text-gray-700">
                        Physical office with a registered tenancy contract (Ejari in Dubai, Tawtheeq in Abu Dhabi)
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        Flexi-desk, serviced office, office or warehouse, depending on the zone and activity
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Corporate Tax</td>
                      <td className="py-4 px-6 text-gray-700">0% up to AED 375,000 of taxable profit, 9% above</td>
                      <td className="py-4 px-6 text-gray-700">
                        Same, unless the company is a Qualifying Free Zone Person earning qualifying income (0%), with strict conditions
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Typical setup time</td>
                      <td className="py-4 px-6 text-gray-700">Around 2–4 weeks</td>
                      <td className="py-4 px-6 text-gray-700">Often days to a couple of weeks once documents are ready</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purpletint px-6 py-3 border-t border-slate-200 text-xs text-gray-500 italic">
                Timelines are typical ranges and vary by emirate, free zone and activity.
              </div>
            </div>

            {/* Booker Tip 1 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-200/60 my-8 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-textsecondary" />
                <span className="text-xs uppercase tracking-widest font-bold text-textsecondary">
                  B O O K E R &nbsp;T I P
                </span>
              </div>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                Don't choose a free zone just because the package is cheaper. If most of your customers will be UAE mainland businesses or government, a free zone licence can limit you, and selling into the mainland can affect your Corporate Tax position. Decide based on where your customers are.
              </p>
            </div>

            {/* The main legal forms */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The main legal forms
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/3">Form</th>
                      <th className="py-4 px-6 md:w-2/3">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Mainland LLC</td>
                      <td className="py-4 px-6 text-gray-700">
                        Most trading and service businesses operating across the UAE. One or more shareholders, liability limited to capital.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Sole establishment</td>
                      <td className="py-4 px-6 text-gray-700">
                        One owner running a business in their own name. Simple, but the owner is personally liable for the business's debts.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Branch of a foreign company</td>
                      <td className="py-4 px-6 text-gray-700">
                        Existing overseas companies that want a UAE presence without forming a new company.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Free zone company (FZE / FZ-LLC / FZCO)</td>
                      <td className="py-4 px-6 text-gray-700">
                        International trading, holding, consulting and businesses whose customers are mainly outside the UAE mainland.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Freelance or professional licence</td>
                      <td className="py-4 px-6 text-gray-700">
                        Individuals offering professional services. <span className="font-semibold text-gray-900">Note:</span> individuals' business income can fall under Corporate Tax once turnover exceeds AED 1 million in a year.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* Stages 1 and 2: Licence, bank account and visas */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Stages 1 &amp; 2
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Licence, bank account and visas, step by step
            </h2>

            {/* 10 Steps */}
            <div className="space-y-4 mb-10">
              {[
                {
                  step: 1,
                  title: "Choose your activity and jurisdiction.",
                  desc: "Confirm your activity is allowed in your chosen mainland emirate or free zone, and whether it needs extra approvals.",
                },
                {
                  step: 2,
                  title: "Reserve your trade name.",
                  desc: "It must follow naming rules. Names that reference religion, the government or other brands are usually rejected.",
                },
                {
                  step: 3,
                  title: "Get initial approval.",
                  desc: "The authority confirms it has no objection to you starting this business.",
                },
                {
                  step: 4,
                  title: "Prepare legal documents.",
                  desc: "Memorandum of association or company charter, shareholder details, and any resolutions.",
                },
                {
                  step: 5,
                  title: "Secure your office.",
                  desc: "Sign a lease and register the tenancy contract, or take a free zone office package.",
                },
                {
                  step: 6,
                  title: "Submit the application and pay the fees.",
                  desc: "With passport copies, approvals, the lease and legal documents.",
                },
                {
                  step: 7,
                  title: "Receive your trade licence.",
                  desc: "Your business now legally exists.",
                },
                {
                  step: 8,
                  title: "Get your establishment card and visas.",
                  desc: "For yourself, partners and staff.",
                },
                {
                  step: 9,
                  title: "Open a corporate bank account.",
                  desc: "Often the slowest step. Banks may take several weeks and will ask about your business plan and source of funds.",
                },
                {
                  step: 10,
                  title: "Register for tax and complete compliance.",
                  desc: "Corporate Tax, VAT if required, and beneficial ownership records. See the next section.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 transition-colors shadow-sm"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-textsecondary text-white font-bold text-base flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Documents checklist */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-purpletint mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-textsecondary" />
                Documents you'll typically need
              </h3>
              <div className="space-y-3">
                {[
                  "Passport copies of all shareholders and managers",
                  "Emirates ID or entry stamp/visa copy, for UAE residents",
                  "Passport-size photos",
                  "Proof of address",
                  "A business plan (often requested by free zones and banks)",
                  "For corporate shareholders: certificate of incorporation, articles, board resolution and good standing, usually legalised and attested",
                  "No-objection letter from your current sponsor, if applicable",
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-base">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* After the licence: what most new owners miss */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wide">
                Critical Compliance
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              After the licence: what most new owners miss
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This is where we see new businesses run into trouble. The licence is issued, everyone celebrates, and the obligations that follow are forgotten until a penalty arrives.
            </p>

            {/* Obligations Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/3">Obligation</th>
                      <th className="py-4 px-6 md:w-2/3">What you need to know</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Corporate Tax registration</td>
                      <td className="py-4 px-6 text-gray-700">
                        Required for almost every company, even if no tax will be due. New companies generally have three months from incorporation to register on EmaraTax. Late registration costs a fixed AED 10,000.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">VAT registration</td>
                      <td className="py-4 px-6 text-gray-700">
                        Mandatory once taxable supplies exceed AED 375,000 in the past 12 months, or are expected to in the next 30 days. Voluntary registration is possible from AED 187,500.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Beneficial ownership (UBO)</td>
                      <td className="py-4 px-6 text-gray-700">
                        Companies must keep a register of their ultimate beneficial owners, file it with the licensing authority, and update it when ownership changes.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Accounting records</td>
                      <td className="py-4 px-6 text-gray-700">
                        Proper books are required under the Commercial Companies Law, VAT Law and Corporate Tax Law. Keep records for at least seven years.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">E-invoicing</td>
                      <td className="py-4 px-6 text-gray-700">
                        From 2027, invoices between businesses must be issued as structured e-invoices through an Accredited Service Provider. Choose accounting software that's ready for it.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Audit</td>
                      <td className="py-4 px-6 text-gray-700">
                        Mainland LLCs and most free zone companies need audited financial statements, as do companies with revenue over AED 50 million.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Hiring staff</td>
                      <td className="py-4 px-6 text-gray-700">
                        Employment contracts, salaries paid through the Wage Protection System (WPS) where required, health insurance (mandatory for private-sector employees across the UAE since 1 January 2025), and end-of-service gratuity.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Licence renewal</td>
                      <td className="py-4 px-6 text-gray-700">
                        Licences are renewed every year. Renewal may require an updated lease, audited accounts (in many free zones) and up-to-date UBO records.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DON'T MISS THIS Alert */}
            <div className="bg-amber-50 border border-amber-200 p-6 md:p-8 rounded-2xl flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl bg-amber-500 text-white flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-amber-900 uppercase block mb-1">
                  D O N ' T &nbsp;M I S S &nbsp;T H I S
                </span>
                <p className="text-amber-950 font-medium text-base md:text-lg leading-relaxed">
                  Small Business Relief can mean no Corporate Tax for businesses with revenue of AED 3 million or less, and it's available until the end of 2029. But it's not automatic. You still need to register, file a return every year, and elect for it in the return.
                </p>
              </div>
            </div>
          </Section>

          {/* Stage 3: Corporate Tax */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Stage 3
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Corporate Tax, from registration to your first return
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Registering is only the first part. Here's the full Corporate Tax cycle for a new company:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                {
                  step: 1,
                  title: "Register on EmaraTax",
                  body: "Register within three months of incorporation and receive your Tax Registration Number for Corporate Tax.",
                },
                {
                  step: 2,
                  title: "Know your first tax period",
                  body: "It usually follows your financial year. Your first period may be shorter or longer than 12 months depending on when you were incorporated.",
                },
                {
                  step: 3,
                  title: "Keep proper books all year",
                  body: "Because your tax return is built on your financial statements.",
                },
                {
                  step: 4,
                  title: "Adjust accounting profit for tax",
                  body: "For example, only 50% of client entertainment is deductible, and fines and personal expenses aren't deductible at all.",
                },
                {
                  step: 5,
                  title: "Decide on Small Business Relief",
                  body: "Available if your revenue is AED 3 million or less.",
                },
                {
                  step: 6,
                  title: "File and pay on time",
                  body: "File and pay within nine months of the end of your tax period, even if no tax is due.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-teal-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-textsecondary text-white font-bold text-sm flex items-center justify-center mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Stage 4: Bookkeeping */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Stage 4
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bookkeeping, why software beats Excel
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Most new businesses start their accounting in Excel. It feels simple and free. But as soon as transactions grow, Excel becomes one of the most expensive tools in the business.
            </p>

            {/* Comparison Cards: Excel vs Software */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Excel Side */}
              <div className="bg-red-50/50 border border-red-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider">
                    E X C E L
                  </span>
                </div>
                <h3 className="text-xl font-bold text-red-950 mb-4">
                  The hidden costs of spreadsheets
                </h3>
                <ul className="space-y-3">
                  {[
                    "Easy to make errors, hard to find them",
                    "No proper audit trail of who changed what",
                    "No automatic VAT reports",
                    "No bank feeds: everything typed by hand",
                    "Can't connect to an e-invoicing provider",
                    "One deleted row can break the whole file",
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-red-950 text-sm md:text-base">
                      <div className="w-5 h-5 rounded-full bg-red-200 text-red-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accounting Software Side */}
              <div className="bg-teal-50/60 border border-teal-200 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider">
                    A C C O U N T I N G &nbsp;S O F T W A R E
                  </span>
                </div>
                <h3 className="text-xl font-bold text-teal-950 mb-4">
                  Infrastructure built to scale
                </h3>
                <ul className="space-y-3">
                  {[
                    "Double-entry built in, so the books always balance",
                    "Full record of every change",
                    "UAE VAT reports ready for your return",
                    "Bank transactions imported automatically",
                    "Ready to connect to e-invoicing for 2027",
                    "Your accountant can review in real time",
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-teal-950 text-sm md:text-base">
                      <div className="w-5 h-5 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Popular options for UAE businesses include <strong>Zoho Books</strong>, <strong>TallyPrime</strong>, <strong>Xero</strong>, <strong>QuickBooks</strong> and <strong>Odoo</strong>. There's no single best choice. The right one depends on your size, your industry and how you work.
            </p>

            {/* What to check table */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What to check before you choose
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/3">Feature</th>
                      <th className="py-4 px-6 md:w-2/3">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">UAE VAT ready</td>
                      <td className="py-4 px-6 text-gray-700">Correct tax invoices and VAT return reports out of the box</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">E-invoicing ready</td>
                      <td className="py-4 px-6 text-gray-700">Can connect to an Accredited Service Provider before your 2027 go-live date</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Bank feeds</td>
                      <td className="py-4 px-6 text-gray-700">Imports bank transactions automatically, saving hours every month</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Inventory, if you sell products</td>
                      <td className="py-4 px-6 text-gray-700">Tracks stock and cost of goods sold properly</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Multi-currency</td>
                      <td className="py-4 px-6 text-gray-700">Essential if you buy or sell internationally</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Accountant access</td>
                      <td className="py-4 px-6 text-gray-700">So your accountant can review without emailing files back and forth</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Room to grow</td>
                      <td className="py-4 px-6 text-gray-700">More users, more entities and more features as the business grows</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Booker Tip 2 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-200/60 my-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-textsecondary" />
                <span className="text-xs uppercase tracking-widest font-bold text-textsecondary">
                  B O O K E R &nbsp;T I P
                </span>
              </div>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                Software records your transactions. It doesn't classify, reconcile or review them for you. The best setup is good software plus a monthly bookkeeping routine, whether done in-house or by an accountant.
              </p>
            </div>
          </Section>

          {/* Stage 5: VAT, when and how */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Stage 5
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              VAT, when and how
            </h2>

            {/* Q&A Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/3">Question</th>
                      <th className="py-4 px-6 md:w-2/3">Answer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">When must I register?</td>
                      <td className="py-4 px-6 text-gray-700">
                        When taxable supplies exceed AED 375,000 in the past 12 months, or are expected to exceed it in the next 30 days.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Can I register earlier?</td>
                      <td className="py-4 px-6 text-gray-700">
                        Yes, voluntarily, once supplies or expenses exceed AED 187,500. This can help recover VAT on setup costs.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">What rate do I charge?</td>
                      <td className="py-4 px-6 text-gray-700">
                        5% standard rate. Some supplies are zero-rated (such as most exports) and some are exempt.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">How often do I file?</td>
                      <td className="py-4 px-6 text-gray-700">
                        Usually quarterly, within 28 days of the end of each VAT period.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Can I recover VAT I pay?</td>
                      <td className="py-4 px-6 text-gray-700">
                        Generally yes, on business costs, with valid tax invoices and, for larger suppliers, records of supplier verification.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">What changes in 2027?</td>
                      <td className="py-4 px-6 text-gray-700">
                        Invoices between businesses must be issued as e-invoices through an Accredited Service Provider.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-purpletint p-6 rounded-2xl border border-purpletint text-gray-800 text-base leading-relaxed">
              <strong>Key Compliance Note:</strong> Once registered, every sales invoice must be a proper tax invoice, prices shown to consumers must include VAT, and your VAT returns must agree with your books.
            </div>
          </Section>

          {/* Stage 6: Understand your costs */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Stage 6
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understand your costs before you set your prices
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Many new businesses price their products by looking at competitors, without knowing what it actually costs them to stay open. That's how busy businesses end up losing money.
            </p>

            {/* Cost Types Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/4">Type of cost</th>
                      <th className="py-4 px-6 md:w-3/8">What it means</th>
                      <th className="py-4 px-6 md:w-3/8">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Setup costs</td>
                      <td className="py-4 px-6 text-gray-700">One-off costs to get started</td>
                      <td className="py-4 px-6 text-gray-700">Licence, initial approvals, office fit-out, deposits, equipment, first visas</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Fixed costs</td>
                      <td className="py-4 px-6 text-gray-700">Paid every month, whether you sell or not</td>
                      <td className="py-4 px-6 text-gray-700">
                        Rent, salaries, visas and insurance, software, accounting, licence renewal (spread monthly)
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Variable costs</td>
                      <td className="py-4 px-6 text-gray-700">Rise and fall with your sales</td>
                      <td className="py-4 px-6 text-gray-700">
                        Materials, stock, sales commissions, delivery, payment fees, packaging
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Break-even calculation card */}
            <div className="bg-white rounded-2xl border border-teal-200/80 p-6 md:p-8 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-5 h-5 text-textsecondary" />
                <h3 className="text-xl font-bold text-gray-900">
                  Your break-even point
                </h3>
              </div>
              <div className="bg-purpletint px-5 py-4 rounded-xl border border-teal-100 font-mono text-base md:text-lg text-textsecondary font-semibold mb-6">
                Break-even sales = Monthly fixed costs ÷ Gross margin %
              </div>

              <h4 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide text-xs">
                Example: a small service business
              </h4>
              <div className="overflow-hidden rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-6 text-gray-700">Rent</td>
                      <td className="py-3 px-6 text-right font-medium text-gray-900">AED 8,000</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="py-3 px-6 text-gray-700">Salaries, visas and insurance</td>
                      <td className="py-3 px-6 text-right font-medium text-gray-900">AED 30,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 text-gray-700">Software, accounting, telecoms and other fixed costs</td>
                      <td className="py-3 px-6 text-right font-medium text-gray-900">AED 4,000</td>
                    </tr>
                    <tr className="bg-teal-50/70 font-semibold text-teal-950">
                      <td className="py-3.5 px-6">Monthly fixed costs</td>
                      <td className="py-3.5 px-6 text-right text-textsecondary font-bold">AED 42,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 text-gray-700">Gross margin (what's left after variable costs)</td>
                      <td className="py-3 px-6 text-right font-medium text-gray-900">60%</td>
                    </tr>
                    <tr className="bg-textsecondary text-white font-bold text-base md:text-lg">
                      <td className="py-4 px-6">Break-even sales per month (42,000 ÷ 0.60)</td>
                      <td className="py-4 px-6 text-right text-textprimary">AED 70,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed text-base">
                Below <strong>AED 70,000</strong> a month, this business loses money. Above it, it makes profit. Knowing this number before you open tells you how many clients you need, what prices make sense, and how much cash you need to survive until you get there.
              </p>
            </div>

            {/* Booker Tip 3 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-200/60 my-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-textsecondary" />
                <span className="text-xs uppercase tracking-widest font-bold text-textsecondary">
                  B O O K E R &nbsp;T I P
                </span>
              </div>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                Keep enough cash to cover your fixed costs for the first several months. Most new businesses take longer to reach break-even than their owners expect.
              </p>
            </div>
          </Section>

          {/* Stage 7: Staying compliant */}
          <Section className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs uppercase tracking-wide">
                Stage 7
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Staying compliant, every month and every year
            </h2>

            {/* Compliance Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/4">How often</th>
                      <th className="py-4 px-6 md:w-3/4">What to do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-textsecondary">Monthly</td>
                      <td className="py-4 px-6 text-gray-700">
                        Record all transactions, reconcile bank accounts, review your profit, cash and overdue invoices, and pay salaries through WPS where required.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-textsecondary">Quarterly</td>
                      <td className="py-4 px-6 text-gray-700">
                        File your VAT return and pay any VAT due within 28 days of the period end.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-textsecondary">Yearly</td>
                      <td className="py-4 px-6 text-gray-700">
                        Close the books, prepare financial statements, complete the audit if required, file your Corporate Tax return, renew your licence, and check your UBO records are up to date.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-amber-700">From 2027</td>
                      <td className="py-4 px-6 text-gray-700">
                        Issue and receive business-to-business invoices as e-invoices through your Accredited Service Provider.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tax at a glance table */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tax at a glance for a new UAE business
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs md:text-sm font-semibold">
                      <th className="py-4 px-6 md:w-1/3">Tax</th>
                      <th className="py-4 px-6 md:w-2/3">Headline rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Corporate Tax</td>
                      <td className="py-4 px-6 text-gray-700">
                        0% on taxable profit up to AED 375,000, 9% above. Return and payment due nine months after your financial year ends.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Small Business Relief</td>
                      <td className="py-4 px-6 text-gray-700">
                        Revenue of AED 3 million or less can elect to pay no Corporate Tax, for tax periods ending on or before 31 December 2029.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">VAT</td>
                      <td className="py-4 px-6 text-gray-700">5% standard rate. Returns usually quarterly.</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-gray-900">Free zone 0%</td>
                      <td className="py-4 px-6 text-gray-700">
                        Only for Qualifying Free Zone Persons on qualifying income, with substance, audit and other conditions.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">Personal income tax</td>
                      <td className="py-4 px-6 text-gray-700">None on salaries in the UAE.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* Common Mistakes We See New Businesses Make */}
          <Section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Common mistakes we see new businesses make
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  mistake: "Choosing the cheapest licence package without checking who it lets you sell to.",
                  reality: "The wrong jurisdiction can block your main customers or cost you a second licence later.",
                },
                {
                  mistake: "\"We haven't made any money yet, so we don't need to register for tax.\"",
                  reality: "Corporate Tax registration depends on being a business, not on making a profit.",
                },
                {
                  mistake: "Using a personal bank account while the business account is being opened.",
                  reality: "Mixed money is hard to untangle later, and can create tax and audit problems.",
                },
                {
                  mistake: "Picking a vague or overly broad business activity.",
                  reality: "Your licence must match what you actually do, or banks, clients and authorities will ask questions.",
                },
                {
                  mistake: "Leaving accounting until the end of the first year.",
                  reality: "Year one sets up everything else. Clean books from day one cost far less than a rescue.",
                },
                {
                  mistake: "Forgetting the licence renewal date.",
                  reality: "An expired licence can freeze visas, banking and contracts. Put it in the calendar.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between bg-white"
                >
                  <div className="p-6 bg-red-50/40 border-b border-red-100">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                      <X className="w-4 h-4" />
                      <span>Mistake</span>
                    </div>
                    <p className="text-gray-900 font-semibold text-base">
                      {item.mistake}
                    </p>
                  </div>
                  <div className="p-6 bg-teal-50/40">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-textsecondary mb-2">
                      <Check className="w-4 h-4" />
                      <span>Reality</span>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.reality}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Your first 90 days after the licence */}
          <Section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your first 90 days after the licence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
                    Phase 1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Days 1–30
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Apply for your establishment card and visas. Start the bank account application. Set up your UBO register. Choose accounting software that supports UAE VAT and e-invoicing.
                  </p>
                </div>
              </div>

              <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
                    Phase 2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Days 31–60
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Register for Corporate Tax. Set up your chart of accounts and a monthly bookkeeping routine. Prepare standard contracts and invoice templates. Register for VAT if you'll pass the threshold.
                  </p>
                </div>
              </div>

              <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
                    Phase 3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Days 61–90
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Hold your first monthly financial review. Put tax deadlines and your licence renewal date in the calendar. Set up payroll, WPS and health insurance if you're hiring. Plan your first-year budget and cash flow.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Frequently Asked Questions */}
          <Section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-white hover:border-teal-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-gray-900 text-base md:text-lg focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-textsecondary flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 pt-1 text-gray-700 text-base leading-relaxed border-t border-slate-100 bg-purpletint/40">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Call To Action Card */}
          <Section className="mt-16 p-8 md:p-12 bg-teal-900 text-white rounded-3xl text-center shadow-xl">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-textprimary text-xs font-bold uppercase tracking-wider mb-4">
              Booker Accounting &amp; Consulting
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Start right. Grow with confidence.
            </h2>
            <p className="mb-8 opacity-90 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              At Booker Accounting &amp; Consulting, we help new businesses across the UAE get the foundations right: Corporate Tax and VAT registration, bookkeeping from day one, e-invoicing readiness and the compliance most owners don't hear about until it's too late. Tell us what you're building, and we'll tell you exactly what you need to set up, and when.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition shadow-lg text-base md:text-lg"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-sm text-teal-200 font-medium">
              www.bookeraccounting.com
            </div>
          </Section>

          {/* Legal Disclaimer */}
          <Section className="mt-12">
            <div className="p-6 rounded-2xl bg-purpletint border border-purpletint text-xs md:text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> This guide is general information based on rules in force as of October 2026. It is not legal, tax or business setup advice. Requirements vary by emirate, free zone, legal form and activity, and setup procedures are handled by the relevant licensing authorities. Please confirm your specific requirements with the authority and a qualified adviser before acting. © 2026 Booker Accounting &amp; Consulting.
              </p>
            </div>
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

export default BusinessSetupGuideClient;
