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
  Scale,
  Sparkles,
  Layers,
  Lightbulb,
  FileCheck2,
  FolderGit2,
  Check,
  HelpCircle,
  AlertCircle,
  Database,
  Building,
  DollarSign,
  Globe
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

export default function TransferPricingGuide2026Client() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const quickPoints = [
    {
      num: "1",
      title: "Arm's length is the rule.",
      body: "A royalty between related parties must match what independent parties would agree in similar circumstances.",
    },
    {
      num: "2",
      title: "Owning the IP isn't enough.",
      body: "DEMPE analysis looks at who actually creates and controls the IP's value, not just whose name is on the registration.",
    },
    {
      num: "3",
      title: "Pick the right method.",
      body: "CUT is the most direct when good comparable licences exist; profit split suits unique or jointly-developed IP.",
    },
    {
      num: "4",
      title: "Know your UAE thresholds.",
      body: "Depending on your size, you may need a Master File, a Local File and a transfer pricing disclosure form.",
    },
    {
      num: "5",
      title: "Paperwork is your defence.",
      body: "A written licence agreement, a benchmarking study and regular reviews are what protect your rate under FTA audit.",
    },
  ];

  const ipTypes = [
    {
      type: "Patents",
      examples: "Rights to inventions, technological designs, formulations, products or proprietary processes",
      icon: Lightbulb,
    },
    {
      type: "Trademarks & Brand Names",
      examples: "Logos, brand names, trade dress, restaurant or retail concepts, merchandising marks",
      icon: Sparkles,
    },
    {
      type: "Copyrights & Software",
      examples: "Proprietary software apps, digital platforms, internal databases, algorithms, creative content",
      icon: Layers,
    },
    {
      type: "Know-How & Trade Secrets",
      examples: "Secret recipes, chemical formulas, manufacturing techniques, operating manuals, SOPs",
      icon: FolderGit2,
    },
    {
      type: "Customer Lists & Relationships",
      examples: "Proprietary client databases built up over years of trading, recurring vendor contracts",
      icon: Database,
    },
  ];

  const dempeFunctions = [
    {
      letter: "D",
      name: "Development",
      desc: "Creating the IP from scratch: designing, engineering, testing, or funding initial research.",
    },
    {
      letter: "E",
      name: "Enhancement",
      desc: "Improving, adapting, and upgrading the IP over time to sustain market competitiveness.",
    },
    {
      letter: "M",
      name: "Maintenance",
      desc: "Keeping the IP up to date, ensuring operational continuity, system updates and QA.",
    },
    {
      letter: "P",
      name: "Protection",
      desc: "Registering trademarks, maintaining patents, policing infringement, and legal defence.",
    },
    {
      letter: "E",
      name: "Exploitation",
      desc: "Commercializing the IP: marketing, licensing, selling, or using it to generate revenue.",
    },
  ];

  const methods = [
    {
      name: "Comparable Uncontrolled Transaction (CUT)",
      how: "Compares your royalty rate directly with royalty rates agreed in licence contracts between independent, unrelated companies.",
      bestFor: "When reliable comparable licence agreements exist. Widely considered the most direct and preferred method.",
      highlight: true,
    },
    {
      name: "Profit Split Method",
      how: "Splits the combined operating profit from the IP based on the relative economic value and risks each related company contributes.",
      bestFor: "Unique, highly specialized IP, or where both entities make significant non-routine contributions to its value.",
      highlight: false,
    },
    {
      name: "Transactional Net Margin Method (TNMM)",
      how: "Examines the net profit margin earned by the licensee to test whether it still earns a normal, routine market profit after paying the royalty.",
      bestFor: "Secondary testing: ensuring the royalty does not leave the licensee with an uncommercial, loss-making margin.",
      highlight: false,
    },
  ];

  const benchmarkingFactors = [
    {
      factor: "Type and strength of IP",
      effect: "A strong registered patent or household brand supports a substantially higher rate than a routine, lesser-known trademark.",
    },
    {
      factor: "Exclusivity",
      effect: "Exclusive licence rights carry higher royalties because the licensee has protected market share and no intra-brand competition.",
    },
    {
      factor: "Territory and term",
      effect: "Wider geographical territories (e.g. GCC-wide vs UAE-only) and longer contract terms carry higher economic value.",
    },
    {
      factor: "Industry margins",
      effect: "High-margin industries (software, luxury goods) can sustain higher royalty percentages than thin-margin sectors (food distribution).",
    },
    {
      factor: "Stage of development",
      effect: "Proven, cash-generating IP with market traction is worth far more than early-stage, unproven or pre-revenue assets.",
    },
    {
      factor: "Legal protection",
      effect: "Robust, enforceable registrations in all operating jurisdictions reduce risk for the licensee, supporting higher rates.",
    },
    {
      factor: "Licensee's own contribution",
      effect: "If the licensee invests heavily in local marketing, brand building or localization, that justifies a lower royalty rate.",
    },
  ];

  const benchmarkingSteps = [
    { step: "1", text: "Define the IP and the rights: what exactly is licensed, in which territory, for how long, and whether it's exclusive." },
    { step: "2", text: "Map both companies: the functions they perform, the assets they use, and the economic risks they assume." },
    { step: "3", text: "Run a DEMPE analysis: verify who truly controls the value-creating functions and carries the key financial risks." },
    { step: "4", text: "Search for comparable licences using recognized international licensing databases, public filings, and agreements." },
    { step: "5", text: "Screen the comparables by industry, IP type, exclusivity, geographical region, contract term, and maturity stage." },
    { step: "6", text: "Adjust for differences that affect the rate, where those economic differences can be measured reliably." },
    { step: "7", text: "Establish the arm's length range, typically the interquartile range (25th to 75th percentile) of market evidence." },
    { step: "8", text: "Choose and document your rate within that range, stating the precise commercial reasons for your selection." },
    { step: "9", text: "Review the rate whenever the business model, the IP's commercial value, or prevailing market conditions change." },
  ];

  const thresholds = [
    {
      requirement: "Master File",
      when: "Group consolidated revenue is AED 3.15 billion or more, OR individual taxable person revenue is AED 200 million or more.",
      what: "A comprehensive group-level overview, including global IP ownership, intangibles strategy, and group transfer pricing policies.",
    },
    {
      requirement: "Local File",
      when: "Same thresholds as the Master File (AED 200M standalone or part of AED 3.15B multinational group).",
      what: "Detailed documentation of local related-party transactions, functional analysis (FAR), DEMPE mapping, and benchmarking studies.",
    },
    {
      requirement: "Transfer Pricing Disclosure Form",
      when: "Total related-party transactions exceed AED 40 million (each category, including IP royalties, disclosed if > AED 4 million).",
      what: "A statutory schedule submitted alongside the annual UAE Corporate Tax return detailing intercompany transaction values and methods.",
    },
    {
      requirement: "Connected Persons Schedule",
      when: "Payments to a connected person (e.g. owners, directors, officers) exceed AED 500,000 in the tax period.",
      what: "Schedule filed with the Corporate Tax return proving market value justification for payments to owners and key executives.",
    },
  ];

  const defenceDocuments = [
    "A formal written licence agreement: defining IP scope, territory, exclusivity, term, royalty base, and payment terms.",
    "A functional analysis (FAR): detailing what each company does, which physical and intangible assets it uses, and which risks it bears.",
    "DEMPE mapping documentation: proving who performs, oversees, and financially funds each value-creating function.",
    "A formal benchmarking study: using recognized databases and transparent screening criteria to establish the arm's length range.",
    "Financial modeling & profit tests: demonstrating that the royalty leaves the licensee with a sustainable, commercial net profit margin.",
    "Annual review records: minutes, board resolutions, and market updates documenting that the royalty rate remains defensible over time.",
  ];

  const redFlags = [
    {
      title: "No written licence agreement",
      desc: "Almost impossible to defend before the FTA. Verbal agreements or informal intercompany transfers invite immediate challenge.",
    },
    {
      title: "An IP owner with no economic substance",
      desc: "A brass-plate holding entity with no staff, no office, and no control over IP strategy or legal defence cannot claim full royalties.",
    },
    {
      title: "No benchmarking study",
      desc: "Setting a rate based on internal preference, gut feel, or rules of thumb rather than objective, third-party market evidence.",
    },
    {
      title: "A royalty that wipes out licensee profit",
      desc: "If the royalty fee leaves the local operating company in a persistent loss position, tax authorities will suspect profit stripping.",
    },
    {
      title: "Royalties paid year after year by loss-making entities",
      desc: "An independent company would terminate or renegotiate a licence if paying it resulted in chronic commercial insolvency.",
    },
    {
      title: "Double charging for the same benefit",
      desc: "Charging a separate IP royalty on top of an all-inclusive management fee or technical support fee that already covers the IP.",
    },
    {
      title: "A rate that hasn't been reviewed in years",
      desc: "Failing to adjust royalty percentages as the market matures, products become commoditized, or local subsidiaries take on brand marketing.",
    },
  ];

  const faqs = [
    {
      q: "What is an arm's length royalty rate?",
      a: "An arm's length royalty rate is the price that two independent, unrelated commercial parties would negotiate and agree upon for the licence of comparable intellectual property under similar economic conditions. It is the mandatory pricing benchmark required by Article 34 of UAE Corporate Tax Law and OECD Transfer Pricing Guidelines.",
    },
    {
      q: "Can a related company use our IP for free?",
      a: "Only in very limited scenarios—such as when the IP has nominal independent market value, or when the licensee entity itself creates almost all the commercial value through local development. For valuable brands, software, or patents, a zero-royalty arrangement between related parties is likely to be challenged by the FTA as an artificial profit shift.",
    },
    {
      q: "How often should we review our royalty rate?",
      a: "You should review the commercial performance and margin impact annually. A full benchmarking refresh with updated market database comparables is standard practice every 3 to 5 years, or immediately following any significant restructuring, major product pivot, or material change in financial margins.",
    },
    {
      q: "What happens if our rate isn't arm's length?",
      a: "If the FTA audits your related-party royalty and determines it falls outside the arm's length range, it has the statutory power under Article 34 to adjust your taxable income. This can result in additional Corporate Tax assessments, late payment penalties, transfer pricing penalties, and extended audits across prior tax periods.",
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
            src="/images/uaecorporatetax.webp"
            alt="UAE Transfer Pricing for IP Guide 2026 - Booker Accounting"
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/90 pointer-events-none" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Breadcrumb + Language Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center justify-between gap-4"
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
                Transfer Pricing Guide 2026 · UAE
              </span>
            </div>

            {/* Arabic Language Toggle */}
            <Link
              href="/blog/transfer-pricing-guide-2026-ar"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-arabic text-gray-200 hover:text-white transition-all backdrop-blur-sm"
              title="اقرأ باللغة العربية"
            >
              <Globe className="w-3.5 h-3.5 text-textprimary" />
              <span>النسخة العربية (Arabic)</span>
            </Link>
          </motion.div>

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-textprimary border border-textprimary/40 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
              TRANSFER PRICING GUIDE 2026 &nbsp;·&nbsp; UAE
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Transfer pricing for IP:<br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              royalty rates and UAE rules.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed"
          >
            How to set an arm&apos;s length royalty for brands, software and know-how between related companies, and what UAE Corporate Tax requires you to keep on file.
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
          {/* Quick Highlight Stats */}
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">Art. 34</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                ARM&apos;S LENGTH STATUTE
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">DEMPE</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                5 ECONOMIC VALUE PILLARS
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">3 Methods</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                CUT, PROFIT SPLIT &amp; TNMM
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">7 Years</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                MANDATORY RECORD RETENTION
              </p>
            </div>
          </Section>

          {/* Narrative Introduction */}
          <Section className="mb-14">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              When one company in a corporate group lets another use its brand, proprietary software, or know-how, it usually charges a royalty. Between related companies, that royalty cannot be any arbitrary figure chosen for tax convenience. Under UAE Corporate Tax, it must strictly reflect what two independent businesses would have negotiated and agreed. Get it wrong, and the Federal Tax Authority (FTA) has the statutory authority to adjust your taxable income.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              This guide explains transfer pricing for intellectual property (IP) in plain, practical language: how arm&apos;s length royalty rates are determined, what the OECD DEMPE framework requires, which transfer pricing methods apply, and the exact documentation UAE businesses must keep on file.
            </p>
          </Section>

          {/* The Quick Version Card Grid */}
          <Section className="mb-20">
            <div className="p-8 md:p-12 bg-slate-900 rounded-3xl text-white shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  EXECUTIVE SUMMARY
                </span>
                <h2 className="text-2xl md:text-4xl font-bold">
                  The quick version <span className="text-textprimary">(if you only read one section)</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickPoints.map((p) => (
                  <div
                    key={p.num}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-textprimary/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-textprimary/20 text-textprimary font-extrabold flex items-center justify-center text-lg mb-4">
                        {p.num}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-white">{p.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}

                {/* Direct takeaway box */}
                <div className="p-6 rounded-2xl bg-textsecondary/30 border border-textprimary/40 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-textprimary font-bold text-sm uppercase tracking-wide mb-2">
                    <ShieldCheck className="w-5 h-5" /> Key Rule
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Under Article 34 of Decree-Law No. 47, your intercompany agreements must be established on commercial terms before year-end, not reverse-engineered during an audit.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Section: What is transfer pricing for intellectual property? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                01 · CORE DEFINITION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What is transfer pricing for intellectual property?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Transfer pricing for IP is how related companies price the use, licensing, or commercial transfer of intangible assets between them. Think of a UAE parent company licensing its hospitality brand to a sister company operating in Saudi Arabia, or a free zone tech company licensing proprietary enterprise software to its mainland Dubai affiliate.
                </p>
                <p>
                  IP receives heightened scrutiny from international tax authorities because it has no physical form, its true economic value is difficult to quantify, and it can be reassigned across jurisdictions with the stroke of a pen. A minor adjustment of even 1% or 2% in an intercompany royalty rate can shift millions of dirhams in taxable profit from one entity—or one country—to another.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-purpletint border border-gray-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-textsecondary" /> Why the FTA Pays Close Attention
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span><strong>High Mobility:</strong> Intangibles can easily be housed in 0% or low-tax entities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span><strong>Subjective Valuation:</strong> Without third-party transactions, pricing is vulnerable to artificial inflation or deflation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span><strong>Profit-Shifting Risk:</strong> Deductible royalties reduce mainland operating profits, making them a primary audit target.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Section: What counts as IP for transfer pricing? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                02 · CLASSIFICATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What counts as IP for transfer pricing?
              </h2>
              <p className="text-gray-600">
                For transfer pricing purposes, &quot;intangibles&quot; encompass far more than formally registered patents. Any commercial asset that generates economic value can be subject to royalty rules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {ipTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.type}
                    className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-textsecondary/10 text-textsecondary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.type}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.examples}</p>
                  </div>
                );
              })}

              {/* The Key Takeaway Box */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-textprimary block mb-2">
                    THE GOLDEN PRINCIPLE
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">Value Over Registration</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    The defining test isn&apos;t whether the IP has an official certificate of registration. It is whether the intangible creates demonstrable economic value that an independent, third-party business would willingly pay to license.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-textprimary font-semibold">
                  Article 34 Compliance Test
                </div>
              </div>
            </div>
          </Section>

          {/* Section: How IP royalties are usually structured */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                03 · PRICING MECHANISMS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How IP royalties are usually structured
              </h2>
              <p className="text-gray-600">
                A royalty is the consideration that the user of the IP (the licensee) remits to the legal owner (the licensor). In corporate transactions, several structures are commonly observed:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    %
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Percentage of Revenue</h3>
                    <p className="text-sm text-gray-600">The most common market standard. Calculated on gross or net revenues generated from products or services utilizing the licensed IP.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    📈
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Percentage of Operating Profit</h3>
                    <p className="text-sm text-gray-600">Ties payments directly to bottom-line performance. Common when the licensee assumes significant market launch risk.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    🏷️
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Fixed Unit Fee</h3>
                    <p className="text-sm text-gray-600">A predetermined dollar or dirham amount per unit manufactured, sold, or active subscriber seat.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    💼
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Lump-Sum Upfront Fee or Hybrid Model</h3>
                    <p className="text-sm text-gray-600">An initial milestone licensing fee combined with ongoing performance-based trailing royalties.</p>
                  </div>
                </div>
              </div>

              {/* Callout Box: Why the base matters */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white shadow-xl">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  STRATEGIC CONSIDERATION
                </span>
                <h3 className="text-2xl font-bold mb-4">Why the Base Matters</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A <strong>revenue-based royalty</strong> is administratively simple and predictable, but if the licensee operates in a competitive sector with razor-thin net margins (e.g. 3–5%), a 5% revenue royalty will entirely wipe out its operating profit.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  A <strong>profit-based royalty</strong> tracks commercial reality much more closely, but independent benchmarking databases contain fewer profit-based comparable agreements, making market justification more technically demanding.
                </p>
              </div>
            </div>
          </Section>

          {/* Section: The arm's length principle, in plain words */}
          <Section className="mb-20">
            <div className="p-8 md:p-12 bg-purpletint rounded-3xl border border-gray-200">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                  04 · STATUTORY BENCHMARK
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  The arm&apos;s length principle, in plain words
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Under <strong>Article 34 of Federal Decree-Law No. 47 of 2022 on Corporate Tax</strong>, all transactions between related parties and connected persons must adhere to the arm&apos;s length principle, aligned with the OECD Transfer Pricing Guidelines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-textsecondary text-white font-bold flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Identifiable Intangible</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    What specific IP is being licensed, and how much measurable commercial value does it genuinely contribute to the user&apos;s operations?
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-textsecondary text-white font-bold flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Independent Market Rate</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    What would an independent licensor demand, and what would an unrelated licensee pay, for identical or comparable rights on similar terms?
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-textsecondary text-white font-bold flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Empirical Justification</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Does your chosen transfer pricing method produce an empirical financial outcome that aligns with credible market benchmark data?
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-sm text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>The FTA Enforcement Power:</strong> If your intercompany royalty fails to satisfy this test and you cannot present contemporaneous benchmarking documentation, the FTA has full authority to disallow the deduction and adjust your taxable income accordingly.
                </p>
              </div>
            </div>
          </Section>

          {/* Section: DEMPE: who really creates the value? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                05 · VALUE ATTRIBUTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                DEMPE: Who really creates the value?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Legal ownership alone gives an entity the contractual right to receive royalties. However, under the OECD Guidelines and UAE Corporate Tax rules, <strong>DEMPE analysis</strong> dictates whether that entity has economically earned them.
              </p>
            </div>

            {/* DEMPE 5 Pillars Visual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {dempeFunctions.map((item) => (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between hover:border-textsecondary transition-all"
                >
                  <div>
                    <div className="text-3xl font-extrabold text-textsecondary mb-2">
                      {item.letter}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DEMPE Real-World Rules Comparison */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-textprimary" /> Legal Title vs. Economic Substance
              </h3>

              <div className="space-y-4 text-sm leading-relaxed">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-bold flex items-center justify-center shrink-0">✕</span>
                  <p>
                    <strong>The &quot;Paper Box&quot; Owner:</strong> A company that legally owns a registered trademark but outsources all marketing, development, product updates, and brand protection to subsidiaries does <em>not</em> deserve the full residual royalty.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">✓</span>
                  <p>
                    <strong>The Decision-Making Hub:</strong> A company that funds the IP, bears financial downside risks, and controls key strategic decisions (e.g. brand guidelines, R&amp;D roadmaps, legal defence) has valid economic grounds to capture the IP returns, even if execution is outsourced.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center shrink-0">i</span>
                  <p>
                    <strong>The Routine Service Provider:</strong> An affiliate that merely conducts day-to-day coding or local graphic design without decision-making authority is entitled only to an arm&apos;s length cost-plus service fee, not a share of the IP&apos;s upside profits.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Section: Which transfer pricing method fits IP royalties? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                06 · METHODOLOGY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Which transfer pricing method fits IP royalties?
              </h2>
              <p className="text-gray-600">
                Article 34 of the Corporate Tax Law specifies five approved transfer pricing methods. For intellectual property and royalty arrangements, three methods are primarily utilized:
              </p>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Method</th>
                    <th className="py-4 px-6 font-semibold">How It Works</th>
                    <th className="py-4 px-6 font-semibold">Best Applied For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                  {methods.map((m) => (
                    <tr
                      key={m.name}
                      className={`hover:bg-gray-50 transition-colors ${m.highlight ? "bg-teal-50/50" : ""}`}
                    >
                      <td className="py-5 px-6 font-bold text-slate-900">
                        {m.name}
                        {m.highlight && (
                          <span className="ml-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-textsecondary text-white">
                            Preferred
                          </span>
                        )}
                      </td>
                      <td className="py-5 px-6 text-gray-700 leading-relaxed">{m.how}</td>
                      <td className="py-5 px-6 text-gray-700 leading-relaxed font-medium">{m.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 italic">
              Note: There is no single universal &quot;correct&quot; method. The appropriate selection depends strictly on factual functional profiles and the availability of reliable market comparables.
            </p>
          </Section>

          {/* Section: How to benchmark an arm's length royalty rate */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                07 · BENCHMARKING
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How to benchmark an arm&apos;s length royalty rate
              </h2>
              <p className="text-gray-600">
                A common misconception is that standard &quot;rule-of-thumb&quot; royalty rates (such as a flat 5%) are acceptable. Tax authorities reject rules of thumb; your rate must be justified with demonstrable market data.
              </p>
            </div>

            {/* Factors influencing royalty rates */}
            <div className="mb-12">
              <h3 className="font-bold text-xl text-slate-900 mb-4">
                Key Factors That Push Royalty Rates Higher or Lower
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benchmarkingFactors.map((bf) => (
                  <div key={bf.factor} className="p-5 rounded-xl border border-gray-200 bg-white">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{bf.factor}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{bf.effect}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout box: No Magic Number */}
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 mb-12">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase tracking-wide mb-2">
                <AlertCircle className="w-5 h-5 text-amber-700" /> No Magic Number
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                There is no default &quot;market standard&quot; percentage in UAE transfer pricing. Claiming that &quot;5% is what everyone charges&quot; will immediately trigger audit penalties. Your rate must be defended by verifiable third-party licensing contracts in comparable sectors.
              </p>
            </div>

            {/* 9-Step Benchmarking Roadmap */}
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-6">
                The 9-Step Arm&apos;s Length Benchmarking Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {benchmarkingSteps.map((s) => (
                  <div
                    key={s.step}
                    className="p-5 rounded-2xl bg-purpletint border border-gray-200 flex flex-col justify-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-textsecondary text-white font-bold flex items-center justify-center text-sm mb-3">
                      {s.step}
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Section: UAE transfer pricing rules for IP and royalties */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                08 · UAE STATUTORY THRESHOLDS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                UAE transfer pricing rules for IP and royalties
              </h2>
              <p className="text-gray-600">
                Related parties are defined in <strong>Article 35</strong> of the Corporate Tax Law, and connected persons in <strong>Article 36</strong>. The formal documentation you must submit depends on your business revenue and transaction values:
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Requirement</th>
                    <th className="py-4 px-6 font-semibold">When It Applies</th>
                    <th className="py-4 px-6 font-semibold">What It Entails</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                  {thresholds.map((t) => (
                    <tr key={t.requirement} className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-bold text-slate-900 whitespace-nowrap">{t.requirement}</td>
                      <td className="py-5 px-6 text-gray-700 leading-relaxed font-medium">{t.when}</td>
                      <td className="py-5 px-6 text-gray-600 leading-relaxed">{t.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-purpletint border border-gray-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">Below the Documentation Thresholds?</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  The arm&apos;s length principle applies to <strong>every related-party transaction</strong>, regardless of business size. Even if you are exempt from filing a Master or Local File, you are legally required to maintain contemporaneous accounting records proving your royalty is fair.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purpletint border border-gray-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">30-Day FTA Production Deadline</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Under UAE Corporate Tax procedures, if the FTA requests your transfer pricing documentation, you typically have only <strong>30 days</strong> to produce it. Preparing benchmarking studies post-audit is practically impossible within that timeframe.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic">
              <strong>Withholding Tax Note:</strong> Under current domestic rules, the UAE applies a 0% withholding tax on outbound royalty payments. However, you must always evaluate the tax and withholding position in the overseas licensee&apos;s jurisdiction under bilateral Double Taxation Treaties.
            </p>
          </Section>

          {/* Section: The documents that defend your royalty rate */}
          <Section className="mb-20">
            <div className="p-8 md:p-12 bg-slate-900 rounded-3xl text-white shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  AUDIT READINESS CHECKLIST
                </span>
                <h2 className="text-2xl md:text-4xl font-bold">
                  The documents that defend your royalty rate
                </h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Prepare these records when the royalty agreement is executed, not after an audit query arrives. Corporate Tax documentation must be retained for at least <strong>seven (7) years</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {defenceDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-textprimary/50 transition-colors"
                  >
                    <Check className="w-5 h-5 text-textprimary mt-0.5 shrink-0" strokeWidth={2.5} />
                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Section: Red flags & Practical Example */}
          <Section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: Red flags */}
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-2">
                  09 · FTA RISK AUDIT
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Red flags the FTA looks for
                </h2>

                <div className="space-y-3">
                  {redFlags.map((rf) => (
                    <div
                      key={rf.title}
                      className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-3"
                    >
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-red-950 text-sm">{rf.title}</h3>
                        <p className="text-xs text-red-900/80 mt-1 leading-relaxed">{rf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: How It Works In Practice Case Study Box */}
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                  CASE IN POINT
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Example: A Dubai restaurant brand
                </h2>

                <div className="p-7 rounded-3xl bg-purpletint border border-gray-200 space-y-4 text-sm text-gray-700 leading-relaxed shadow-sm">
                  <div className="flex items-center gap-2 text-textsecondary font-bold uppercase text-xs tracking-wider">
                    <Building className="w-4 h-4" /> The Business Setup
                  </div>
                  <p>
                    A Dubai F&amp;B company develops a wildly successful restaurant brand, signature proprietary recipes, and comprehensive franchise operating manuals. It licenses the brand concept to a sister entity launching branches across Saudi Arabia.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2 text-xs">
                    <p><strong>Dubai Licensor:</strong> Develops ongoing menus, establishes strict brand standards, registers regional trademarks, and carries overall IP risk.</p>
                    <p><strong>Saudi Licensee:</strong> Operates outlets, employs staff, manages daily operations, and incurs substantial local marketing expenditures.</p>
                  </div>

                  <div className="flex items-center gap-2 text-textsecondary font-bold uppercase text-xs tracking-wider pt-2">
                    <Scale className="w-4 h-4" /> The Benchmarking Solution
                  </div>
                  <p>
                    A CUT benchmarking study reviews third-party franchise agreements in the regional casual-dining sector, establishing an interquartile arm&apos;s length range of 4.5% to 7.0% of revenue.
                  </p>
                  <p>
                    Because the Saudi licensee funds major local promotional campaigns that bolster brand equity, Booker documents a final rate of <strong>5.0%</strong> (towards the lower quartile), reflecting the licensee&apos;s local commercial contributions.
                  </p>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium">
                    ✓ Defensible documentation placed in the Local File, reported on the Disclosure Form, and scheduled for biennial review.
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* FAQ Accordion Section */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                10 · COMMON QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-base md:text-lg">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
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

          {/* Strategic Closing Callout */}
          <Section className="mb-16">
            <div className="p-8 md:p-14 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 rounded-3xl text-white shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  EXPERT ADVISORY
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Let&apos;s make your royalty rate defensible.
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  At Booker Accounting &amp; Consulting, we review your intercompany IP arrangements, prepare functional and DEMPE analyses, run empirical benchmarking studies, and assist with your statutory transfer pricing disclosures.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/taxation"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-textprimary hover:bg-teal-400 text-slate-950 font-bold transition-all shadow-lg shadow-textprimary/20 text-sm md:text-base"
                >
                  <span>Talk to our tax team</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <p className="mt-8 text-xs text-gray-500 leading-relaxed text-center max-w-4xl mx-auto">
              This guide provides general commercial information based on Federal Decree-Law No. 47 of 2022 on Corporate Tax, relevant Ministerial Decisions, and OECD Transfer Pricing Guidelines as of November 2026. It does not constitute formal tax or legal advice. Transfer pricing positions are highly fact-dependent; always consult qualified corporate tax specialists before establishing or altering intercompany royalty structures. © 2026 Booker Accounting &amp; Consulting.
            </p>
          </Section>
        </main>
      </div>

      <ContactSection />
      <Footer />
      <FloatingActions />
      <FloatingService />
    </>
  );
}

