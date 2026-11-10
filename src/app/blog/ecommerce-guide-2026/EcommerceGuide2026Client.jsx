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
  CreditCard,
  Banknote,
  BookOpen,
  Calculator,
  Send,
  Boxes,
  Truck,
  Warehouse,
  ShieldCheck,
  Package,
  Layers,
  HelpCircle,
  ExternalLink,
  Store,
  DollarSign,
  Receipt,
  Scale
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

const EcommerceGuide2026Client = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const cycleSteps = [
    {
      num: "1",
      title: "Customer pays",
      desc: "Card, COD or wallet",
      icon: CreditCard,
    },
    {
      num: "2",
      title: "Platform pays out",
      desc: "Minus fees & commissions",
      icon: Banknote,
    },
    {
      num: "3",
      title: "Books updated",
      desc: "Sales, fees & stock",
      icon: BookOpen,
    },
    {
      num: "4",
      title: "Tax calculated",
      desc: "VAT and Corporate Tax",
      icon: Calculator,
    },
    {
      num: "5",
      title: "Return filed",
      desc: "With the FTA on EmaraTax",
      icon: Send,
    },
  ];

  const stuckPoints = [
    {
      id: "01",
      title: "Sales scattered across too many channels",
      looksLike:
        "Shopify payouts, Noon payouts and cash-on-delivery all land in one spreadsheet column. A month later, nobody knows which channel actually makes money.",
      howWeHelp:
        "We bring every channel into one clean set of books, with each platform's sales, fees and payouts reconciled separately.",
      icon: Layers,
    },
    {
      id: "02",
      title: "Stock and costs that don't add up",
      looksLike:
        "Stock is split between home, a fulfilment centre and a marketplace warehouse. Your \u201Cbestseller\u201D looks profitable, until fulfilment and storage fees are counted.",
      howWeHelp:
        "We track inventory and cost of goods sold by location and channel, so the margin in your books is the margin you really make.",
      icon: Boxes,
    },
    {
      id: "03",
      title: "Missing the VAT registration point",
      looksLike:
        "AED 260,000 on Shopify and AED 150,000 on Noon. Neither crosses AED 375,000 alone, but together they hit AED 410,000, and registration became mandatory.",
      howWeHelp:
        "We monitor your combined turnover across all channels, warn you before you cross the line, and handle your registration on EmaraTax.",
      icon: Scale,
    },
    {
      id: "04",
      title: "Not knowing where VAT is due",
      looksLike:
        "A sale to Sharjah carries 5% VAT. A sale shipped to London can be zero-rated, but only if you keep proof the goods actually left the UAE.",
      howWeHelp:
        "We classify each sale correctly (standard-rated, zero-rated or exempt) and set up the export paperwork you need for an audit.",
      icon: Receipt,
    },
    {
      id: "05",
      title: "Marketplaces that may handle VAT for you",
      looksLike:
        "In some cases, the marketplace is treated as the supplier for VAT. A seller who also reports that VAT ends up counting the same tax twice.",
      howWeHelp:
        "We check how each platform treats your sales and make sure your own VAT return shows the right position, with no double counting.",
      icon: Store,
    },
    {
      id: "06",
      title: "Claiming VAT back without checking suppliers",
      looksLike:
        "A seller buys packaging from a new supplier and claims the VAT back. The supplier turns out to be dodgy, and with no record of checks, the FTA refuses the claim.",
      howWeHelp:
        "We set up the supplier checks and records FTA Decision No. 13 of 2026 now expects, so your input VAT claims stay safe.",
      icon: ShieldCheck,
    },
    {
      id: "07",
      title: "Free zone status and Corporate Tax colliding",
      looksLike:
        "A free zone seller starts shipping to mainland customers. Part of their income may no longer qualify for the free zone tax benefit, even though the licence hasn't changed.",
      howWeHelp:
        "We review your structure and manage VAT and Corporate Tax together, so one doesn't create a surprise in the other.",
      icon: Building2,
    },
  ];

  const stockCostStages = [
    {
      stage: "1",
      title: "Supplier",
      cost: "Purchase price + shipping + customs",
      icon: Warehouse,
    },
    {
      stage: "2",
      title: "Your stockroom",
      cost: "Storage and packaging",
      icon: Package,
    },
    {
      stage: "3",
      title: "Fulfilment centre",
      cost: "Pick, pack and storage fees",
      icon: Boxes,
    },
    {
      stage: "4",
      title: "Customer",
      cost: "Delivery, returns & platform commission",
      icon: Truck,
    },
  ];

  const figuresTable = [
    {
      item: "Mandatory VAT registration",
      figure: "AED 375,000 taxable sales in 12 months",
      highlight: true,
    },
    {
      item: "Voluntary VAT registration",
      figure: "AED 187,500 in 12 months",
      highlight: false,
    },
    {
      item: "Standard VAT rate",
      figure: "5%",
      highlight: false,
    },
    {
      item: "VAT return filing and payment",
      figure: "Within 28 days of the end of each tax period",
      highlight: false,
    },
    {
      item: "Corporate Tax",
      figure: "9% on taxable income above AED 375,000",
      highlight: true,
    },
    {
      item: "Supplier checks before claiming input VAT (FTA Decision No. 13 of 2026)",
      figure: "In force since 1 October 2026",
      highlight: false,
    },
    {
      item: "VAT record keeping",
      figure: "At least 5 years",
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "Do I need a licence to sell online in the UAE?",
      a: "Yes. You need a trade licence that covers e-commerce activity, from the mainland or a free zone, even if you only sell through social media like Instagram or WhatsApp.",
    },
    {
      q: "I only sell on Instagram or WhatsApp. Do I still need to charge VAT?",
      a: "The channel doesn't matter. What counts is your total taxable sales across every channel. Once that crosses AED 375,000 in a trailing 12-month period, registration is mandatory.",
    },
    {
      q: "What happens if I register for VAT late?",
      a: "You can face late registration penalties, and you may owe VAT on sales from the date you should have registered, even though you never charged it to your customers. The earlier it's fixed, the better.",
    },
    {
      q: "Is Corporate Tax different for a free zone e-commerce business?",
      a: "Free zone businesses can qualify for a 0% rate, but only on qualifying income. Selling directly to mainland consumers or non-free-zone businesses can affect that status, so it's essential to review your setup rather than assuming it's 0%.",
    },
    {
      q: "What records should I keep?",
      a: "You must keep tax invoices, credit notes, import and export customs documents, and detailed records of your sales for at least five years. This includes transactional payout reports from every sales channel (Shopify, Amazon, Noon) and payment gateway (Stripe, Tabby, Tamara).",
    },
    {
      q: "Which accounting software is best for online sellers?",
      a: "There's no single best one. Zoho Books, QuickBooks, Xero, and Tally are all popular in the UAE and connect differently to Shopify, Amazon, and Noon. The right choice depends on your sales volume, multi-currency needs, and fulfilment setup.",
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
            alt="Selling online in the UAE - E-Commerce Guide 2026 Booker Accounting"
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
                E-Commerce Guide 2026 · UAE
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
              E-COMMERCE GUIDE 2026 &nbsp;·&nbsp; UAE
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Selling online in the UAE?<br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              Here&apos;s what your books need.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed"
          >
            Multiple channels, marketplace payouts, stock in three places and VAT across borders: a plain-English guide to e-commerce accounting.
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

      {/* Main Content Area */}
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
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">AED 375k</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                MANDATORY VAT THRESHOLD
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">5% VAT</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                STANDARD UAE SALES RATE
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">9% CT</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                CORPORATE TAX ABOVE AED 375K
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">5 Years</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                LEGAL RECORD RETENTION
              </p>
            </div>
          </Section>

          {/* Intro Narrative */}
          <Section className="mb-14">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Instagram shops, Amazon.ae storefronts, Noon listings, Shopify sites shipping across the Gulf: e-commerce in the UAE has grown from a side hustle into a serious business. And behind every sale, the same cycle runs quietly in the background.
            </p>
          </Section>

          {/* The 5-Step E-Commerce Cycle */}
          <Section className="mb-16">
            <div className="p-8 md:p-10 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl text-white shadow-xl">
              <div className="text-center mb-10">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3.5 py-1.5 bg-white/10 rounded-full border border-white/10">
                  Transaction Architecture
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mt-3">
                  The Quiet Cycle Behind Every UAE Online Sale
                </h2>
                <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mt-2">
                  From checkout to your tax filing with the FTA, every transaction follows five continuous steps.
                </p>
              </div>

              {/* 5 Connected Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                {cycleSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="bg-white/10 backdrop-blur-sm border border-white/15 p-5 rounded-2xl flex flex-col justify-between hover:border-textprimary/50 transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-7 h-7 rounded-lg bg-textprimary text-slate-900 font-bold text-xs flex items-center justify-center shadow">
                            0{step.num}
                          </span>
                          <Icon className="w-5 h-5 text-textprimary group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="font-bold text-base text-white leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {idx < cycleSteps.length - 1 && (
                        <div className="hidden lg:block text-right text-textprimary/60 text-xs font-bold mt-4">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Transition callout banner */}
              <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-textsecondary/60 text-white flex-shrink-0">
                  <Info className="w-5 h-5 text-textprimary" />
                </div>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  When you sell on one channel from one stockroom, this cycle is easy. Add a second marketplace, a fulfilment partner or a customer in Riyadh, and small gaps quickly turn into real problems: <span className="text-textprimary font-semibold">numbers that don&apos;t match</span>, <span className="text-textprimary font-semibold">profit you can&apos;t explain</span>, and <span className="text-textprimary font-semibold">VAT you didn&apos;t know you owed</span>.
                </p>
              </div>
            </div>
          </Section>

          {/* 7 Places Online Sellers Get Stuck */}
          <Section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                COMMON E-COMMERCE FRICTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                7 places online sellers get stuck
              </h2>
              <p className="text-base md:text-lg text-gray-600 mt-2 max-w-3xl">
                Here are the seven most common blind spots UAE online retailers face — and exactly how we solve each one in your books.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {stuckPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-textsecondary/40 transition-all p-6 md:p-8"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                      <div className="w-12 h-12 rounded-2xl bg-textsecondary/10 text-textsecondary flex items-center justify-center font-black text-lg flex-shrink-0 border border-textsecondary/20">
                        {item.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <div className="hidden sm:flex p-2.5 rounded-xl bg-slate-100 text-gray-500">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Dual Cards: What It Looks Like vs How We Help */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* What it looks like */}
                      <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] tracking-wider uppercase">
                              WHAT IT LOOKS LIKE
                            </span>
                          </div>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {item.looksLike}
                          </p>
                        </div>
                      </div>

                      {/* How we help */}
                      <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded bg-textsecondary text-white font-bold text-[10px] tracking-wider uppercase">
                              HOW WE HELP
                            </span>
                          </div>
                          <p className="text-sm md:text-base text-teal-950 font-medium leading-relaxed">
                            {item.howWeHelp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Do You Need to Register for VAT Yet? */}
          <Section className="mb-20">
            <div className="p-8 md:p-12 bg-purpletint rounded-3xl border border-purpletint shadow-sm">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                  VAT COMPLIANCE CHECKPOINT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Do you need to register for VAT yet?
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The question isn&apos;t how much you sell on one platform. It&apos;s how much you sell in total, across every channel, over the last 12 months.
                </p>
                <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
                  <Calculator className="w-5 h-5 text-textsecondary flex-shrink-0" />
                  <p className="text-sm md:text-base font-semibold text-gray-800">
                    Add up your taxable sales from every channel (website, marketplaces, Instagram, WhatsApp) over the last 12 months:
                  </p>
                </div>
              </div>

              {/* 3 Threshold Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Over 375k */}
                <div className="bg-white p-6 rounded-2xl border-2 border-rose-300 shadow-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                    MANDATORY
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
                      Threshold 1
                    </span>
                    <h3 className="text-2xl font-black text-rose-950 mb-3">
                      OVER AED 375,000?
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      <strong>Registration is mandatory.</strong> You must apply within 30 days on EmaraTax to avoid late registration penalties.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-rose-100 flex items-center gap-2 text-xs font-bold text-rose-700">
                    <AlertTriangle className="w-4 h-4" />
                    <span>30-Day filing window applies</span>
                  </div>
                </div>

                {/* 187.5k to 375k */}
                <div className="bg-white p-6 rounded-2xl border-2 border-teal-300 shadow-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-textsecondary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                    VOLUNTARY
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-textsecondary block mb-1">
                      Threshold 2
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">
                      AED 187,500 TO 375,000?
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      <strong>You can register voluntarily.</strong> This allows you to recover input VAT paid on imported stock, marketing and local overheads.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-teal-100 flex items-center gap-2 text-xs font-bold text-textsecondary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Recover VAT on your costs</span>
                  </div>
                </div>

                {/* Under 187.5k */}
                <div className="bg-white p-6 rounded-2xl border border-slate-300 shadow-sm flex flex-col justify-between relative">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      Threshold 3
                    </span>
                    <h3 className="text-2xl font-black text-gray-800 mb-3">
                      UNDER AED 187,500?
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      <strong>Not yet required.</strong> Keep monitoring your monthly trailing totals so you spot growth before it crosses the line.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Track 12-month rolling sum</span>
                  </div>
                </div>
              </div>

              {/* 30-Day Forward Look Alert */}
              <div className="bg-amber-50 border border-amber-300 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="p-2.5 rounded-xl bg-amber-500 text-white flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-amber-900 uppercase block mb-1">
                    FORWARD-LOOKING RULE
                  </span>
                  <p className="text-amber-950 font-semibold text-base md:text-lg leading-relaxed">
                    Also expect to cross AED 375,000 in the next 30 days? <strong>Registration is mandatory then too.</strong> Don&apos;t wait for the historic numbers to catch up if you have high seasonal orders locked in.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Where Does Your Stock Go, and What Does It Really Cost? */}
          <Section className="mb-20">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                INVENTORY &amp; MARGIN REALITY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Where does your stock go, and what does it really cost?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mt-2 max-w-3xl">
                For online sellers, the true cost of a product is much more than the price you paid the supplier.
              </p>
            </div>

            {/* Visual 4-Stage True Cost Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stockCostStages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={stage.stage}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-textsecondary/40 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-full bg-textsecondary text-white font-bold text-sm flex items-center justify-center">
                          {stage.stage}
                        </span>
                        <Icon className="w-6 h-6 text-textsecondary" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        {stage.cost}
                      </p>
                    </div>

                    {idx < stockCostStages.length - 1 && (
                      <div className="hidden lg:block text-right text-textsecondary/50 font-bold text-lg mt-4">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Booker Tip Callout */}
            <div className="bg-teal-50 border-2 border-teal-200 p-6 md:p-8 rounded-2xl flex items-start gap-4 shadow-sm">
              <div className="p-3 rounded-2xl bg-textsecondary text-white flex-shrink-0 mt-0.5">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1">
                  BOOKER TIP
                </span>
                <p className="text-teal-950 font-bold text-lg md:text-xl leading-relaxed">
                  Work out your profit per product per channel.
                </p>
                <p className="text-teal-900 text-sm md:text-base mt-2 leading-relaxed">
                  A product that makes money on your own website can lose money on a marketplace once commission, fulfilment, payment gateway fees, and return logistics are counted.
                </p>
              </div>
            </div>
          </Section>

          {/* Key Figures Table */}
          <Section className="mb-20">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                QUICK REFERENCE CHEATSHEET
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                The numbers worth keeping on hand
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Core thresholds, rates, and deadlines for e-commerce accounting in the UAE.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-3/5">Item</th>
                      <th className="py-4 px-6 md:w-2/5">Figure to remember</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-base">
                    {figuresTable.map((row, i) => (
                      <tr
                        key={i}
                        className={`transition-colors ${
                          row.highlight
                            ? "bg-purpletint/60 font-semibold hover:bg-purpletint"
                            : "hover:bg-slate-50/80"
                        }`}
                      >
                        <td className="py-4 px-6 text-gray-900 font-medium">
                          {row.item}
                        </td>
                        <td className="py-4 px-6 text-textsecondary font-bold">
                          {row.figure}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* Frequently Asked Questions */}
          <Section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-textsecondary block mb-2">
                CLEAR ANSWERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Frequently asked questions
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Common questions UAE online sellers ask our accounting and tax advisory team.
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
                BOOKER ACCOUNTING &amp; CONSULTING
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Focus on the store. We&apos;ll handle the numbers.
              </h2>
              <p className="mb-8 opacity-90 text-lg md:text-xl leading-relaxed">
                At Booker Accounting &amp; Consulting, we bring every sales channel, payout and stock movement into one clean set of books, and handle your VAT and Corporate Tax along the way. If any of the problems above sound familiar, now is the right time to talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition shadow-lg group"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="mt-4 text-teal-200 text-sm">
                www.bookeraccounting.com
              </p>
            </div>
          </Section>

          {/* Legal Disclaimer */}
          <Section className="mt-12">
            <p className="text-xs text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
              This guide is general information based on UAE rules as of November 2026. It is not tax or legal advice. Please speak to a qualified adviser about your specific situation. &copy; 2026 Booker Accounting &amp; Consulting.
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

export default EcommerceGuide2026Client;

