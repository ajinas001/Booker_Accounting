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
  ShieldAlert,
  ArrowRight,
  Info,
  Check,
  X,
  Server,
  Send,
  Inbox,
  Landmark,
  Layers,
  HelpCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const EInvoicingGuide2026Client = () => {
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

  const quickPoints = [
    {
      num: "1",
      title: "Revenue of AED 50 million or more?",
      body: "Appoint your ASP by 30 October 2026 and go live on 1 January 2027.",
    },
    {
      num: "2",
      title: "Under AED 50 million?",
      body: "Appoint by 31 March 2027 and go live on 1 July 2027.",
    },
    {
      num: "3",
      title: "One ASP does both jobs.",
      body: "It sends your sales invoices and receives your supplier invoices.",
    },
    {
      num: "4",
      title: "Your software is usually not your ASP.",
      body: "It connects to one, and you appoint the ASP yourself in EmaraTax.",
    },
    {
      num: "5",
      title: "Missing the deadline costs AED 5,000 a month",
      body: "once you're in your mandatory phase.",
    },
  ];

  const responsibilities = [
    {
      asp: "Checking your invoice data against UAE rules",
      you: "Getting every amount right, including VAT",
    },
    {
      asp: "Converting it into the standard digital format (PINT-AE)",
      you: "Sending complete, accurate data to your ASP",
    },
    {
      asp: "Delivering it securely over the Peppol network",
      you: "Collecting your customers' e-invoicing IDs",
    },
    {
      asp: "Reporting the tax data to the FTA",
      you: "Keeping your records for the legal period",
    },
    {
      asp: "Receiving e-invoices from your suppliers",
      you: "Overall compliance with the rules",
    },
  ];

  const timelineRows = [
    {
      who: "Revenue of AED 50M or more",
      appoint: "30 October 2026",
      golive: "1 January 2027",
      highlight: true,
    },
    {
      who: "Revenue below AED 50M",
      appoint: "31 March 2027",
      golive: "1 July 2027",
      highlight: false,
    },
    {
      who: "Government entities",
      appoint: "31 March 2027",
      golive: "1 October 2027",
      highlight: false,
    },
  ];

  const checklistItems = [
    {
      num: "1",
      name: "Full accreditation",
      why: "Since 1 October 2026, providers need full Ministry accreditation, not just pre-approval.",
      ask: "“Are you fully accredited today, and will you confirm it in our contract?”",
    },
    {
      num: "2",
      name: "Fits your software",
      why: "A ready connection is faster and cheaper than a custom build or manual uploads.",
      ask: "“Do you already integrate with our accounting software? Who maintains it?”",
    },
    {
      num: "3",
      name: "Sending and receiving",
      why: "You can only have one ASP, so it must handle incoming supplier invoices too.",
      ask: "“How will supplier e-invoices reach our team and our system?”",
    },
    {
      num: "4",
      name: "Clear pricing",
      why: "Some charge yearly, some per invoice, some both.",
      ask: "“What will we pay a year at our volume, including setup?”",
    },
    {
      num: "5",
      name: "Error handling",
      why: "Rejected invoices aren't delivered, and late e-invoices can be penalised.",
      ask: "“How fast are we alerted to a rejection, and who helps us fix it?”",
    },
    {
      num: "6",
      name: "Storage and access",
      why: "Your ASP can store invoices, but the legal duty to keep them stays with you.",
      ask: "“How long do you keep our records, and how do we export them?”",
    },
    {
      num: "7",
      name: "Outages and support",
      why: "System failures must be reported to the FTA, and delays can be penalised.",
      ask: "“What are your support hours, and who notifies the FTA during an outage?”",
    },
    {
      num: "8",
      name: "Onboarding plan",
      why: "Appointing on 30 October leaves about nine weeks to test and go live.",
      ask: "“Can you give us a written plan up to our go-live date?”",
    },
  ];

  const appointmentSteps = [
    {
      step: "1",
      title: "Update your EmaraTax profile",
      description: "Make sure your trade licence, address, and contact details are current.",
    },
    {
      step: "2",
      title: "Get your Tax Identification Number (TIN)",
      description: "It's the first 10 digits of your TRN. If you're in scope but not registered for any tax, you'll need to register to get one.",
    },
    {
      step: "3",
      title: "Sign with your chosen ASP",
      description: "Agree the contract and commercial pricing first before initiating system onboarding.",
    },
    {
      step: "4",
      title: "Onboard in EmaraTax",
      description: "Your account admin opens the E-Invoicing tile, selects the ASP, and completes onboarding on the provider's portal.",
    },
    {
      step: "5",
      title: "Receive your Peppol ID",
      description: "This unique digital address is how other businesses' ASPs find and route invoices to you.",
    },
    {
      step: "6",
      title: "Test, then go live",
      description: "Agree how data, confirmations, and errors will flow, and test everything end to end before your go-live date.",
    },
  ];

  const myths = [
    {
      myth: "“My accounting software is my ASP.”",
      reality: "Only if that software company is itself accredited. Usually your software connects to a separate ASP that you appoint.",
    },
    {
      myth: "“Emailing a PDF counts as an e-invoice.”",
      reality: "No. A UAE e-invoice is a structured digital file sent through ASPs. A PDF can go alongside it, not instead of it.",
    },
    {
      myth: "“My e-invoices will need a QR code.”",
      reality: "No. UAE e-invoices are digital files and don't carry a QR code or barcode.",
    },
    {
      myth: "“I'll sort out the ASP just before go-live.”",
      reality: "Risky. Setup, data clean-up, and testing all take time, and providers get busier as deadlines approach.",
    },
  ];

  const penalties = [
    {
      violation: "Not implementing e-invoicing or appointing an ASP on time",
      penalty: "AED 5,000 per month (or part of a month)",
    },
    {
      violation: "Not issuing an e-invoice or e-credit note",
      penalty: "AED 100 each, up to AED 5,000 a month",
    },
    {
      violation: "Not telling the FTA about a system failure",
      penalty: "AED 1,000 per day of delay",
    },
    {
      violation: "Not updating your ASP when your details change",
      penalty: "AED 1,000 per day of delay",
    },
  ];

  const faqs = [
    {
      q: "What is an ASP?",
      a: "An Accredited Service Provider (ASP) is a technology company accredited by the UAE Ministry of Finance to exchange electronic invoices securely over the Peppol network and report tax data to the Federal Tax Authority (FTA) on your behalf.",
    },
    {
      q: "Where can I find the list of accredited ASPs?",
      a: "On the UAE Ministry of Finance's official e-invoicing portal, and directly inside your EmaraTax portal under the E-Invoicing tile.",
    },
    {
      q: "Can I use more than one ASP?",
      a: "No. Each business entity operates with one ASP for both sending and receiving e-invoices. However, companies within a VAT group onboard separately under their own tax IDs and can choose different ASPs if desired.",
    },
    {
      q: "Does the FTA approve every e-invoice?",
      a: "No. Unlike clearance models in some jurisdictions, the UAE uses a decentralized exchange model. The ASPs check and exchange e-invoices; the FTA receives the tax data in near real time and confirms receipt.",
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
            alt="UAE E-Invoicing ASP Guide 2026 - Booker Accounting"
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
                E-Invoicing Guide 2026 · UAE
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
              E-INVOICING GUIDE 2026 &nbsp;·&nbsp; UAE
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Choosing your<br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              e‑invoicing ASP, made simple.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed"
          >
            What an Accredited Service Provider does, your deadlines, an 8-point checklist, and how to appoint one in EmaraTax, step by step.
          </motion.p>

          {/* Meta line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-sm text-gray-400"
          >
            Booker Accounting &amp; Consulting &nbsp;|&nbsp; October 2026 &nbsp;|&nbsp; bookeraccounting.com
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

          {/* Stats Grid */}
          <Section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">30 Oct 2026</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                ASP DEADLINE (AED 50M+ REVENUE)
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">1 Jan 2027</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                PHASE 1 MANDATORY GO-LIVE
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">AED 5,000 / mo</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                PENALTY FOR MISSING DEADLINE
              </p>
            </div>
          </Section>

          {/* Intro Narrative */}
          <Section className="mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              E-invoicing is coming to every UAE business, and the first step is choosing an
              Accredited Service Provider, or ASP. Think of it as the &ldquo;post office&rdquo; for your
              invoices: it checks them, delivers them to your customer, and reports the tax
              data to the FTA. Pick the right one and e-invoicing runs quietly in the
              background. Pick the wrong one and you&apos;ll feel it every month.
            </p>
          </Section>

          {/* Deadline Alert Callout */}
          <Section className="mb-14">
            <div className="bg-amber-50 border border-amber-300/80 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl bg-amber-500 text-white flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-amber-900 uppercase block mb-1">
                  DEADLINE ALERT
                </span>
                <p className="text-amber-950 font-semibold text-base md:text-lg leading-relaxed">
                  For businesses with revenue of AED 50 million or more, the ASP deadline is <strong>30 October 2026, this week</strong>. The go-live date of <strong>1 January 2027</strong> has not moved.
                </p>
              </div>
            </div>
          </Section>

          {/* The Quick Version */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The quick version (if you only read one section)
            </h2>
            <div className="space-y-4 mb-4">
              {quickPoints.map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-purpletint border border-slate-200/70 hover:border-textsecondary/40 transition-all shadow-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-textsecondary text-white font-bold text-sm flex items-center justify-center mt-0.5 shadow-sm">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                      <strong className="text-gray-950 font-semibold">{item.title}</strong>{" "}
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* What does an ASP actually do? */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What does an ASP actually do?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              You can&apos;t send an e-invoice straight to your customer or the FTA. Your accounting system
              passes the invoice data to your ASP, and the ASP handles the technical side. But the
              responsibility for getting it right stays with you.
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-1/2">
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4" />
                          <span>Your ASP handles</span>
                        </div>
                      </th>
                      <th className="py-4 px-6 md:w-1/2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>You stay responsible for</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-base">
                    {responsibilities.map((row, i) => (
                      <tr
                        key={i}
                        className={`hover:bg-purpletint/60 transition-colors ${i % 2 === 1 ? "bg-slate-50/60" : ""}`}
                      >
                        <td className="py-4 px-6 font-medium text-gray-900">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{row.asp}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-700">
                          <div className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0 mt-2.5"></span>
                            <span>{row.you}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* How an e-invoice travels: the 5-corner model */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              How an e-invoice travels: the 5-corner model
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every UAE e-invoice passes through five &ldquo;corners.&rdquo;
            </p>

            {/* Visual 5-Corner Architecture Layout */}
            <div className="p-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl text-white mb-8 shadow-md">
              <div className="text-center mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full">
                  Decentralized Peppol Network Architecture
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">The 5-Corner Exchange Flow</h3>
              </div>

              {/* Horizontal 4 Corners Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* C1 */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-5 rounded-2xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2 py-1 bg-textprimary text-slate-900 rounded-md">C1</span>
                    <Send className="w-5 h-5 text-textprimary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">You (Supplier)</h4>
                    <p className="text-xs text-gray-300 mt-1">Raise invoice in your accounting software</p>
                  </div>
                </div>

                {/* C2 */}
                <div className="bg-white/10 backdrop-blur-sm border border-textprimary/40 p-5 rounded-2xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2 py-1 bg-textsecondary text-white rounded-md">C2</span>
                    <Server className="w-5 h-5 text-textprimary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Your ASP</h4>
                    <p className="text-xs text-gray-300 mt-1">Converts to PINT-AE &amp; validates data</p>
                  </div>
                </div>

                {/* C3 */}
                <div className="bg-white/10 backdrop-blur-sm border border-textprimary/40 p-5 rounded-2xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2 py-1 bg-textsecondary text-white rounded-md">C3</span>
                    <Server className="w-5 h-5 text-textprimary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Customer&apos;s ASP</h4>
                    <p className="text-xs text-gray-300 mt-1">Checks &amp; routes via Peppol ID</p>
                  </div>
                </div>

                {/* C4 */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 p-5 rounded-2xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2 py-1 bg-textprimary text-slate-900 rounded-md">C4</span>
                    <Inbox className="w-5 h-5 text-textprimary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Your Customer</h4>
                    <p className="text-xs text-gray-300 mt-1">Receives invoice in their system</p>
                  </div>
                </div>
              </div>

              {/* Central C5: FTA */}
              <div className="max-w-xl mx-auto bg-gradient-to-r from-teal-900/90 to-emerald-900/90 border border-teal-500/50 p-6 rounded-2xl text-center shadow-lg">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Landmark className="w-6 h-6 text-textprimary" />
                  <span className="text-xs font-black px-2.5 py-1 bg-white text-slate-900 rounded-md">C5</span>
                  <span className="font-bold text-lg text-white">FTA (Federal Tax Authority)</span>
                </div>
                <p className="text-sm text-teal-100">
                  <strong>Receives Near Real-Time Tax Data:</strong> Both ASPs report transaction metadata to the FTA simultaneously without holding up delivery.
                </p>
              </div>
            </div>

            {/* 5-Step Process List */}
            <div className="space-y-4 mb-8">
              {[
                "You raise the invoice in your accounting system as usual, and the data goes to your ASP.",
                "Your ASP checks it, converts it to the standard format (PINT-AE) and gives it a unique ID.",
                "Your ASP sends it to your customer's ASP and reports the tax data to the FTA.",
                "Your customer's ASP checks it, confirms receipt and delivers it to your customer.",
                "The FTA confirms both reports, and you and your customer both see the final status.",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-textsecondary/10 text-textsecondary font-bold text-sm flex items-center justify-center mt-0.5 border border-textsecondary/30">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* Good to Know Alert */}
            <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl bg-textsecondary text-white flex-shrink-0 mt-0.5">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1">
                  GOOD TO KNOW
                </span>
                <p className="text-teal-950 font-semibold text-base leading-relaxed">
                  The FTA does not approve each invoice before your customer gets it. The ASPs check
                  and exchange it; the FTA simply receives the data. If an invoice fails a check, it isn&apos;t
                  delivered, and you fix it and resend. That&apos;s why fast, clear error alerts from your ASP
                  matter.
                </p>
              </div>
            </div>
          </Section>

          {/* Who needs an ASP, and by when? */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who needs an ASP, and by when?
            </h2>

            {/* Timeline Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-2/5">Who</th>
                      <th className="py-4 px-6 md:w-3/10">Appoint an ASP by</th>
                      <th className="py-4 px-6 md:w-3/10">Go live by</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-base">
                    {timelineRows.map((row, i) => (
                      <tr
                        key={i}
                        className={`transition-colors ${
                          row.highlight
                            ? "bg-amber-50/70 font-semibold text-amber-950 hover:bg-amber-100/70"
                            : "hover:bg-purpletint/60"
                        }`}
                      >
                        <td className="py-4 px-6 text-gray-900">{row.who}</td>
                        <td className="py-4 px-6 text-gray-800">
                          <span className={row.highlight ? "text-amber-900 font-bold" : ""}>
                            {row.appoint}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-800">
                          <span className={row.highlight ? "text-amber-900 font-bold" : ""}>
                            {row.golive}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3 Traps That Catch Businesses Out */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-purpletint mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Three things that catch businesses out:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-textsecondary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong className="text-gray-900 font-semibold">&ldquo;Revenue&rdquo; means your latest financial statements</strong>, not a forecast.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-textsecondary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong className="text-gray-900 font-semibold">One ASP for both directions.</strong> You can&apos;t use one provider for sales and another for purchases.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-textsecondary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong className="text-gray-900 font-semibold">Each group company onboards separately</strong>, with its own tax ID, and can choose a different ASP.
                  </p>
                </li>
              </ul>
            </div>

            {/* Smaller Business Alert */}
            <div className="bg-teal-50 border border-teal-200 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl bg-textsecondary text-white flex-shrink-0 mt-0.5">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1">
                  SMALLER BUSINESS? START EARLY ANYWAY
                </span>
                <p className="text-teal-950 font-semibold text-base leading-relaxed">
                  Your big customers and suppliers go live in January 2027. E-invoices will start reaching
                  you long before your own July 2027 deadline.
                </p>
              </div>
            </div>
          </Section>

          {/* How to choose: an 8-point checklist */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              How to choose: an 8-point checklist
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Ministry of Finance publishes the list of accredited providers, and the same list appears in
              EmaraTax. Use these questions to compare them.
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-1/4">What to check</th>
                      <th className="py-4 px-6 md:w-2/5">Why it matters</th>
                      <th className="py-4 px-6 md:w-1/3">Ask the provider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-base">
                    {checklistItems.map((item) => (
                      <tr
                        key={item.num}
                        className="hover:bg-purpletint/60 transition-colors"
                      >
                        <td className="py-4 px-6 font-semibold text-gray-900 align-top">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-textsecondary/10 text-textsecondary text-xs font-bold flex items-center justify-center flex-shrink-0">
                              {item.num}
                            </span>
                            <span>{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-700 align-top leading-relaxed text-sm md:text-base">
                          {item.why}
                        </td>
                        <td className="py-4 px-6 text-textsecondary font-medium italic align-top text-sm md:text-base bg-purpletint/30">
                          {item.ask}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Booker Tip Callout */}
            <div className="bg-teal-50 border border-teal-200 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl bg-textsecondary text-white flex-shrink-0 mt-0.5">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-teal-900 uppercase block mb-1">
                  BOOKER TIP
                </span>
                <p className="text-teal-950 font-semibold text-base leading-relaxed">
                  Using Zoho Books, QuickBooks or similar? Your software prepares the invoice data, but
                  you still need to appoint an ASP in EmaraTax. Check that your customer records already
                  hold the details e-invoices need, like tax IDs and trade licence information. Clean data
                  now means fewer rejected invoices later.
                </p>
              </div>
            </div>
          </Section>

          {/* How to appoint your ASP in EmaraTax */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              How to appoint your ASP in EmaraTax
            </h2>
            <p className="text-lg text-gray-500 mb-8 font-medium">
              Onboarding is started by you, not the ASP.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {appointmentSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-textsecondary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-textsecondary text-white font-bold text-base flex items-center justify-center mb-4 shadow-sm">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* E-invoicing myths we hear every week */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              E-invoicing myths we hear every week
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myths.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
                >
                  {/* Myth header */}
                  <div className="p-5 bg-rose-50 border-b border-rose-100 flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-black text-xs uppercase tracking-wider flex-shrink-0 mt-0.5">
                      MYTH
                    </span>
                    <p className="font-bold text-rose-950 text-base">{m.myth}</p>
                  </div>
                  {/* Reality body */}
                  <div className="p-5 bg-teal-50/50 flex items-start gap-3 flex-grow">
                    <span className="px-2 py-0.5 rounded bg-textsecondary text-white font-black text-xs uppercase tracking-wider flex-shrink-0 mt-0.5">
                      REALITY
                    </span>
                    <p className="text-gray-700 text-base leading-relaxed">{m.reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* What if you miss the deadline? */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What if you miss the deadline?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Under Cabinet Decision No. 106 of 2025, penalties apply once you&apos;re in your mandatory phase:
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-3/5">What went wrong</th>
                      <th className="py-4 px-6 md:w-2/5">Penalty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-base">
                    {penalties.map((p, i) => (
                      <tr
                        key={i}
                        className={`hover:bg-purpletint/60 transition-colors ${i % 2 === 1 ? "bg-slate-50/60" : ""}`}
                      >
                        <td className="py-4 px-6 font-medium text-gray-900">{p.violation}</td>
                        <td className="py-4 px-6 text-rose-600 font-bold">{p.penalty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Voluntary Adoption Note */}
            <div className="p-5 rounded-xl bg-purpletint border border-purpletint flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0" />
              <p className="text-gray-700 text-base font-medium">
                Voluntary adoption has been open since <strong>1 July 2026</strong>, so you can start early and test without penalty risk.
              </p>
            </div>
          </Section>

          {/* Frequently Asked Questions */}
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>

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
          <Section className="mt-16 p-10 md:p-12 bg-teal-900 text-white rounded-3xl text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not sure where to start?
              </h2>
              <p className="mb-8 opacity-90 text-lg md:text-xl leading-relaxed">
                At Booker Accounting &amp; Consulting, we confirm your deadline, shortlist ASPs that fit your software and budget, handle your EmaraTax onboarding, and clean up your customer and supplier data so your e-invoices pass the first time.
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
              This guide is general information based on Ministerial Decisions No. 243 and 244 of 2025, Cabinet Decision No. 106 of 2025 and the Ministry of Finance&apos;s UAE Electronic Invoicing Guidelines, as of October 2026. It is not tax or legal advice. Please speak to a qualified adviser about your situation. &copy; 2026 Booker Accounting &amp; Consulting.
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

export default EInvoicingGuide2026Client;
