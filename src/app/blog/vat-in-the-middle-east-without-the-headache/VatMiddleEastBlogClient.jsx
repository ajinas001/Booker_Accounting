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
  Download,
  Check,
  X
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const FAQS = [
  {
    q: "How long does UAE VAT registration take?",
    a: "Typically around 20 business days from a complete EmaraTax application. Missing or unclear turnover evidence is the most common cause of delays.",
  },
  {
    q: "Can I register before I have any revenue?",
    a: "Yes. Voluntary registration is available once your taxable expenses go over AED 187,500, which is common for new companies with significant setup costs. It allows you to recover VAT on that spending.",
  },
  {
    q: "Does the FTA charge a fee to register?",
    a: "No. The FTA doesn't charge for VAT registration itself. Costs come from advisory support, document preparation and ongoing filing.",
  },
  {
    q: "Do I need to register in every GCC country I sell to?",
    a: "If you're a non-resident making taxable sales there, generally yes, and usually with no threshold. There's no single registration that covers the whole Gulf.",
  },
  {
    q: "Which countries in the region don't have VAT?",
    a: "Qatar and Kuwait, as of October 2026. Qatar has approved a draft e-invoicing law, widely seen as a step towards VAT.",
  },
  {
    q: "Does registering for VAT also register me for Corporate Tax?",
    a: "No. They're separate registrations on the same EmaraTax portal, with separate returns and deadlines.",
  },
  {
    q: "I'm already registered but think a past return was wrong. What now?",
    a: "File a voluntary disclosure before you receive any audit notice. Since 14 April 2026, the penalty is 1% per month on the underpaid amount, which is much lower than the penalty on an FTA audit finding.",
  },
];

const VatMiddleEastBlogClient = () => {
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
            alt="VAT in the Middle East"
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
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
                VAT in the Middle East, Without the Headache
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            VAT in the Middle East: <br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              Without the Headache
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl"
          >
            A plain-English guide for founders and business owners: who needs to
            register, what changed in 2026, and how to stay on the right side of the
            tax authority.
          </motion.p>
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
          {/* Stats Grid */}
          <Section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">5%</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                STANDARD VAT RATE IN THE UAE &amp; OMAN
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">AED 375K</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                MANDATORY REGISTRATION THRESHOLD
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">AED 10K</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                PENALTY FOR LATE REGISTRATION
              </p>
            </div>
          </Section>

          {/* Intro Content */}
          <Section className="mb-14">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Let&apos;s be honest: nobody started a business because they love VAT. But in the Gulf, getting VAT wrong is one of the quickest ways to turn a good year into an expensive one.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The good news? Once you understand a handful of rules, it&apos;s very manageable. This guide gives you exactly that, minus the jargon.
            </p>
            <blockquote className="pl-6 py-3 italic text-gray-700 mb-8 bg-purpletint border-l-4 border-textsecondary rounded-r-xl">
              Registration is back-dated to when you should have registered. Register late and you owe VAT on every sale since that date — even though you never charged it to your customers.
            </blockquote>
          </Section>

          {/* Section 1: The Quick Version */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The quick version (if you only read one section)
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "Four GCC countries have VAT today:",
                  body: "the UAE, Saudi Arabia, Bahrain and Oman. Qatar and Kuwait don't, yet. In all four VAT countries, mandatory registration kicks in at roughly the same level: about USD 100,000 of taxable sales in a rolling 12 months.",
                },
                {
                  num: "2",
                  title: "Selling into the Gulf from abroad?",
                  body: "There's usually no threshold at all. Non-resident businesses generally need to register from their very first taxable sale.",
                },
                {
                  num: "3",
                  title: "The UAE's penalty rules changed on 14 April 2026.",
                  body: "Late payment is now charged at a flat 14% a year, and owning up to mistakes yourself (a voluntary disclosure) is now much cheaper than being caught.",
                },
                {
                  num: "4",
                  title: "E-invoicing is coming, and fast.",
                  body: "UAE businesses with revenue of AED 50 million or more must appoint an e-invoicing provider by 30 October 2026 and go live on 1 January 2027. Everyone else follows in 2027.",
                },
                {
                  num: "5",
                  title: "The real danger isn't the fine, it's the back-dated VAT.",
                  body: "Register late and you owe VAT on every sale since you should have registered, even though you never charged it to your customers.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 p-5 rounded-xl bg-purpletint border border-purpletint"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-textsecondary text-white font-bold text-sm flex items-center justify-center mt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      <strong className="text-gray-900 font-semibold">{item.title}</strong>{" "}
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Deadline Alert Box */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-8 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-500 text-white flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-amber-900 uppercase block mb-1">
                  DEADLINE ALERT
                </span>
                <p className="text-amber-900 font-semibold text-base leading-relaxed">
                  If your UAE revenue is around AED 50 million or more, the deadline to appoint an Accredited Service Provider for e-invoicing is{" "}
                  <span className="underline decoration-amber-500 underline-offset-4">30 October 2026</span>. That&apos;s weeks away, not months.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 2: What Getting It Wrong Actually Costs */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What getting it wrong actually costs
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most VAT guides start with the rules. We&apos;d rather start with the bill, because that&apos;s what tells you whether this belongs on this month&apos;s to-do list or next quarter&apos;s.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-2/5">What happened</th>
                      <th className="py-4 px-6 md:w-3/5">What it can cost you (UAE)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-base">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Registered late
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        <strong className="text-rose-600 font-semibold">AED 10,000 fixed penalty</strong>, plus VAT owed on every taxable sale since the date you should have registered.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Sold into the GCC from abroad without registering
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        VAT due from the first sale. In Saudi Arabia, that&apos;s <strong className="text-rose-600 font-semibold">15% of revenue</strong> you&apos;ve already collected and likely spent.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Paid VAT late
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        <strong className="text-gray-900 font-semibold">14% per year</strong>, calculated monthly on the unpaid amount (from 14 April 2026).
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Found a mistake in a past return and disclosed it yourself
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        <strong className="text-teal-700 font-semibold">1% per month</strong> on the underpaid tax. Far cheaper than an audit finding.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Assumed your free zone licence means no VAT
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        <strong className="text-rose-600 font-semibold">Full VAT liability.</strong> Free zone companies follow the same registration rules as mainland companies.
                      </td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Left an input VAT credit sitting for years
                      </td>
                      <td className="py-4 px-6 text-gray-700">
                        From 1 January 2026, there&apos;s a <strong className="text-gray-900 font-semibold">five-year limit</strong> for claiming excess input VAT. Older credits can be lost.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purpletint px-6 py-3 border-t border-slate-200 text-xs text-gray-500 italic">
                Figures based on UAE rules in force as of October 2026.
              </div>
            </div>
          </Section>

          {/* Section 3: The Region at a Glance */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The region at a glance
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              One table, seven markets. Worth a look before any expansion plan gets signed off.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white font-semibold uppercase tracking-wider text-xs">
                      <th className="py-4 px-5">Country</th>
                      <th className="py-4 px-4 text-center">VAT rate</th>
                      <th className="py-4 px-5">Must register above</th>
                      <th className="py-4 px-5">Can register from</th>
                      <th className="py-4 px-5">Non-residents</th>
                      <th className="py-4 px-5">Authority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-gray-900">UAE</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 font-bold text-xs">5%</span>
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-800">AED 375,000</td>
                      <td className="py-3.5 px-5 text-gray-600">AED 187,500</td>
                      <td className="py-3.5 px-5 text-rose-600 font-semibold">No threshold</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">FTA (EmaraTax)</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-3.5 px-5 font-bold text-gray-900">Saudi Arabia</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 font-bold text-xs">15%</span>
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-800">SAR 375,000</td>
                      <td className="py-3.5 px-5 text-gray-600">SAR 187,500</td>
                      <td className="py-3.5 px-5 text-rose-600 font-semibold">No threshold</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">ZATCA</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-gray-900">Bahrain</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 font-bold text-xs">10%</span>
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-800">BHD 37,500</td>
                      <td className="py-3.5 px-5 text-gray-600">BHD 18,750</td>
                      <td className="py-3.5 px-5 text-rose-600 font-semibold">No threshold</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">NBR</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-3.5 px-5 font-bold text-gray-900">Oman</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 font-bold text-xs">5%</span>
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-800">OMR 38,500</td>
                      <td className="py-3.5 px-5 text-gray-600">OMR 19,250</td>
                      <td className="py-3.5 px-5 text-rose-600 font-semibold">No threshold</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">Tax Authority</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-gray-900">Qatar</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 font-medium text-xs">No VAT yet</span>
                      </td>
                      <td className="py-3.5 px-5 text-gray-400">n/a</td>
                      <td className="py-3.5 px-5 text-gray-400">n/a</td>
                      <td className="py-3.5 px-5 text-gray-400">n/a</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">GTA</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-3.5 px-5 font-bold text-gray-900">Kuwait</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 font-medium text-xs">No VAT yet</span>
                      </td>
                      <td className="py-3.5 px-5 text-gray-400">n/a</td>
                      <td className="py-3.5 px-5 text-gray-400">n/a</td>
                      <td className="py-3.5 px-5 text-gray-400">n/a</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">Ministry of Finance</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-gray-900">Egypt</td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-orange-100 text-orange-800 font-bold text-xs">14%</span>
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-800">EGP 250,000</td>
                      <td className="py-3.5 px-5 text-gray-400">n/a</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">Simplified regime</td>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">ETA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purpletint px-6 py-3 border-t border-slate-200 text-xs text-gray-500">
                Thresholds refer to taxable supplies over the previous 12 months (or expected in the next 30 days).
              </div>
            </div>

            {/* In practice callout */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 my-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-textsecondary mb-2">
                Why the Gulf numbers look so similar
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                The GCC countries agreed on a shared VAT framework, with a common registration threshold of <strong className="text-gray-900">SAR 375,000</strong>. Each country simply converted it into its own currency.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                <span className="text-textsecondary font-bold">Practical result:</span> you can plan the whole Gulf around one trigger, roughly USD 100,000 per country. The rate changes; the trigger doesn&apos;t.
              </p>
            </div>
          </Section>

          {/* Section 4: UAE Essentials */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              UAE: the essentials
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Who needs to register?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-purpletint rounded-xl border border-purpletint text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
                    MANDATORY
                  </div>
                  <div className="text-3xl font-bold text-textsecondary mb-2">
                    &gt; AED 375K
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    If your taxable sales and imports went over AED 375,000 in the last 12 months, or you expect them to in the next 30 days.
                  </p>
                </div>

                <div className="p-6 bg-purpletint rounded-xl border border-purpletint text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
                    VOLUNTARY
                  </div>
                  <div className="text-3xl font-bold text-textsecondary mb-2">
                    &gt; AED 187.5K
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    If your sales, imports or taxable expenses are over AED 187,500. Highly useful for new businesses with big setup costs to recover input VAT.
                  </p>
                </div>

                <div className="p-6 bg-purpletint rounded-xl border border-purpletint text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                    NON-RESIDENTS
                  </div>
                  <div className="text-3xl font-bold text-textsecondary mb-2">
                    No Threshold
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    If you make a taxable supply in the UAE and nobody else in the UAE is responsible for the tax, you register from the very first dirham.
                  </p>
                </div>
              </div>
            </div>

            {/* The 30-day window */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                The 30-day window (and why it matters)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Once you cross the threshold, you have <strong>30 days to apply on EmaraTax</strong>. Miss it, and two things happen: a fixed AED 10,000 penalty, and VAT becomes payable on every taxable sale from the date you should have registered.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-6">
                <p className="text-amber-900 font-semibold leading-relaxed">
                  ⚠️ That second consequence is the painful part. Imagine AED 2 million of sales made while unregistered: at 5%, that&apos;s <strong>AED 100,000 of VAT you now owe</strong> out of company funds that have already been spent on salaries, rent and operations.
                </p>
              </div>
            </div>

            {/* What you'll need to apply */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What you&apos;ll need to apply
              </h3>
              <div className="bg-white p-8 rounded-xl border border-slate-200 mb-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span>Trade licence, certificate of incorporation &amp; MOA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span>Emirates ID &amp; passport copies for owners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span>Authorised signatory documents with proof of authority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span>Bank details with IBAN and official bank letter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span>Registered physical business address in the UAE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span>Customs registration details (if you import goods)</span>
                  </li>
                  <li className="flex items-start gap-3 md:col-span-2">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <span>Evidence of turnover for the last 12 months (financial statements, invoices, bank statements or a signed declaration)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Booker Tip */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 my-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-textsecondary mb-2">
                Booker Tip
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Approval usually takes around <strong>20 business days</strong> from a complete application. The clock resets each time the FTA asks for more information, and weak turnover evidence is the number one reason for delays. Get it right the first time and you&apos;ll save weeks.
              </p>
            </div>

            {/* Free Zones Myth Buster */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-textsecondary" />
                <h3 className="font-bold text-xl text-teal-900">
                  Free zones: clearing up the biggest myth
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>A free zone licence does not mean you&apos;re exempt from VAT.</strong> Free zone companies register on exactly the same basis as mainland companies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The only real difference involves <strong>&quot;Designated Zones&quot;</strong> (such as JAFZA, DAFZA, and others), where certain movements of goods can be treated as outside the UAE for VAT purposes. <span className="text-textsecondary font-semibold">Services supplied in a Designated Zone are still subject to VAT.</span> This mix-up comes up repeatedly in FTA audits.
              </p>
            </div>
          </Section>

          {/* Section 5: VAT Myths We Hear Every Week */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              VAT myths we hear every week
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Myth 1 */}
              <div className="bg-purpletint p-6 rounded-xl border border-purpletint">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <X className="w-4 h-4" />
                  <span>Myth</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 italic mb-4">
                  &quot;We&apos;re under AED 375,000, so we&apos;re fine.&quot;
                </h4>
                <div className="border-t border-gray-200/60 pt-3">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <Check className="w-4 h-4" />
                    <span>Reality</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    That threshold only applies to UAE residents. Non-resident businesses get no threshold at all.
                  </p>
                </div>
              </div>

              {/* Myth 2 */}
              <div className="bg-purpletint p-6 rounded-xl border border-purpletint">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <X className="w-4 h-4" />
                  <span>Myth</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 italic mb-4">
                  &quot;We don&apos;t have an office there, so it doesn&apos;t apply to us.&quot;
                </h4>
                <div className="border-t border-gray-200/60 pt-3">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <Check className="w-4 h-4" />
                    <span>Reality</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Every GCC country with VAT expects non-residents to register from their first taxable sale.
                  </p>
                </div>
              </div>

              {/* Myth 3 */}
              <div className="bg-purpletint p-6 rounded-xl border border-purpletint">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <X className="w-4 h-4" />
                  <span>Myth</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 italic mb-4">
                  &quot;The marketplace takes care of VAT for us.&quot;
                </h4>
                <div className="border-t border-gray-200/60 pt-3">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <Check className="w-4 h-4" />
                    <span>Reality</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Sometimes, but not always. It depends on who the law treats as the principal supplier. Check your contracts before you assume.
                  </p>
                </div>
              </div>

              {/* Myth 4 */}
              <div className="bg-purpletint p-6 rounded-xl border border-purpletint">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <X className="w-4 h-4" />
                  <span>Myth</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 italic mb-4">
                  &quot;We&apos;ll sort out VAT once we&apos;re bigger.&quot;
                </h4>
                <div className="border-t border-gray-200/60 pt-3">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <Check className="w-4 h-4" />
                    <span>Reality</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Registration is back-dated to when you should have registered. The VAT bill grows with every sale you make in the meantime.
                  </p>
                </div>
              </div>

              {/* Myth 5 */}
              <div className="bg-purpletint p-6 rounded-xl border border-purpletint md:col-span-2">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <X className="w-4 h-4" />
                  <span>Myth</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 italic mb-4">
                  &quot;One GCC registration covers the whole region.&quot;
                </h4>
                <div className="border-t border-gray-200/60 pt-3">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <Check className="w-4 h-4" />
                    <span>Reality</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    There is no GCC-wide VAT registration. Each member state operates its own independent tax system requiring local registration and periodic filings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purpletint p-6 rounded-xl border border-purpletint">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-textsecondary">Who is at highest risk?</strong> This matters most for e-commerce sellers, SaaS and digital businesses, consultants billing Gulf clients, and anyone shipping goods across borders without a local company setup.
              </p>
            </div>
          </Section>

          {/* Section 6: Saudi Arabia, Bahrain and Oman */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Saudi Arabia, Bahrain and Oman
            </h2>

            <div className="space-y-6 mb-8">
              {/* Saudi Arabia */}
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-md bg-amber-100 text-amber-900 font-bold text-xs">15% VAT</span>
                  <h3 className="font-bold text-xl text-teal-900">
                    Saudi Arabia: the most demanding market
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At 15%, Saudi Arabia has the highest VAT rate in the GCC and the most advanced compliance systems. Registration is mandatory at SAR 375,000, voluntary from SAR 187,500, and non-residents register from the first sale, usually through a local tax representative.
                </p>
                <div className="bg-purpletint p-4 rounded-lg">
                  <p className="text-gray-800 font-medium text-sm leading-relaxed">
                    <strong className="text-textsecondary">Our take:</strong> In Saudi Arabia, VAT isn&apos;t just a quarterly filing — it&apos;s a systems project. Plan and budget for e-invoicing (Fatoora) integration before you send your first invoice.
                  </p>
                </div>
              </div>

              {/* Bahrain */}
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-md bg-purple-100 text-purple-900 font-bold text-xs">10% VAT</span>
                  <h3 className="font-bold text-xl text-teal-900">Bahrain</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  10% VAT, administered by the National Bureau for Revenue (NBR). Mandatory registration at BHD 37,500, voluntary at BHD 18,750, and non-residents must register before their first taxable supply. Build realistic processing time into your launch plan rather than expecting same-week approval.
                </p>
              </div>

              {/* Oman */}
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-md bg-teal-100 text-teal-900 font-bold text-xs">5% VAT</span>
                  <h3 className="font-bold text-xl text-teal-900">Oman</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  5% VAT, the joint-lowest rate in the region alongside the UAE. Mandatory at OMR 38,500, voluntary at OMR 19,250. Non-residents register from the first taxable supply and generally require an approved local tax representative in Oman.
                </p>
              </div>
            </div>
          </Section>

          {/* Section 7: Qatar, Kuwait and Egypt */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Qatar, Kuwait and Egypt
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Qatar: getting ready
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Qatar has no VAT yet. However, on 6 May 2026, its Council of Ministers approved a draft e-invoicing law and regulations. Across the region, e-invoicing has tended to precede VAT, indicating groundwork for an eventual 5% GCC standard VAT regime.
                </p>
              </div>

              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Kuwait: still on hold
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kuwait has not introduced VAT and no formal rollout timeline has been confirmed. Monitor developments, but do not budget for VAT in your near-term Kuwait financial projections.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-orange-100 text-orange-900 font-bold text-xs">14% VAT</span>
                <h3 className="font-bold text-xl text-teal-900">
                  Egypt: the threshold people miss
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Expanding into North Africa? Egypt levies 14% VAT with a significantly lower registration threshold. Under Resolution No. 281 of 2025, mandatory registration and e-invoicing threshold was lowered from EGP 500,000 to <strong>EGP 250,000</strong>.
              </p>
              <blockquote className="pl-6 py-2 italic text-gray-700 bg-purpletint border-l-4 border-textsecondary rounded-r-xl">
                A business comfortably under the threshold in Dubai may already be mandatory registrable in Cairo. Ensure cross-border compliance before signing contracts.
              </blockquote>
            </div>
          </Section>

          {/* Section 8: E-Invoicing 2026-2027 */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              E-invoicing: the 2026–2027 story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registering for VAT is the first step; ongoing compliance is where systems matter. The UAE is transforming invoice transmission with mandatory structured e-invoicing.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs font-semibold">
                      <th className="py-4 px-6 md:w-2/5">Milestone</th>
                      <th className="py-4 px-6 md:w-1/4">Date</th>
                      <th className="py-4 px-6 md:w-1/3">Who it applies to</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Pilot phase opens</td>
                      <td className="py-4 px-6 text-gray-700 font-medium">1 July 2026</td>
                      <td className="py-4 px-6 text-gray-600">Selected and voluntary participants</td>
                    </tr>
                    <tr className="hover:bg-amber-50/70 transition-colors bg-amber-50/30">
                      <td className="py-4 px-6 font-semibold text-amber-950">Appoint an Accredited Service Provider</td>
                      <td className="py-4 px-6 text-amber-900 font-bold">30 October 2026</td>
                      <td className="py-4 px-6 text-amber-900 font-semibold">Businesses with revenue ≥ AED 50M</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Mandatory go-live</td>
                      <td className="py-4 px-6 text-gray-700 font-medium">1 January 2027</td>
                      <td className="py-4 px-6 text-gray-600">Revenue ≥ AED 50M</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Appoint an Accredited Service Provider</td>
                      <td className="py-4 px-6 text-gray-700 font-medium">31 March 2027</td>
                      <td className="py-4 px-6 text-gray-600">Businesses &lt; AED 50M and government entities</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Mandatory go-live</td>
                      <td className="py-4 px-6 text-gray-700 font-medium">1 July 2027</td>
                      <td className="py-4 px-6 text-gray-600">All remaining UAE businesses</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Mandatory go-live</td>
                      <td className="py-4 px-6 text-gray-700 font-medium">1 October 2027</td>
                      <td className="py-4 px-6 text-gray-600">Government entities</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purpletint px-6 py-3 border-t border-slate-200 text-xs text-gray-600 font-medium">
                E-invoices are structured digital files (PINT AE format, transmitted over the Peppol network) via accredited providers. PDFs sent by email do not qualify.
              </div>
            </div>
          </Section>

          {/* Section 9: UAE New Penalty Rules */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The UAE&apos;s new penalty rules (Cabinet Decision No. 129 of 2025)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Effective 14 April 2026, the UAE updated its tax penalty framework across Tax Procedures, VAT, and Excise Tax laws.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs font-semibold">
                      <th className="py-4 px-6 md:w-1/3">Item</th>
                      <th className="py-4 px-6 md:w-1/3">Before April 2026</th>
                      <th className="py-4 px-6 md:w-1/3 bg-teal-800">From 14 April 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Late payment of tax</td>
                      <td className="py-4 px-6 text-gray-500">2% immediately, then 4% monthly (capped at 300%)</td>
                      <td className="py-4 px-6 font-bold text-textsecondary">14% per year, calculated monthly</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Voluntary disclosure (before audit notice)</td>
                      <td className="py-4 px-6 text-gray-500">Tiered percentage penalties</td>
                      <td className="py-4 px-6 font-bold text-teal-700">1% per month on the underpaid amount</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Late registration</td>
                      <td className="py-4 px-6 text-gray-500">AED 10,000</td>
                      <td className="py-4 px-6 font-semibold text-gray-800">AED 10,000 (unchanged)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-purpletint p-6 rounded-xl border border-purpletint">
              <h3 className="text-base font-bold text-gray-900 mb-2">Why it matters:</h3>
              <p className="text-gray-700 leading-relaxed">
                Voluntary disclosure is now substantially cheaper than being flagged during an FTA tax audit. If you identify an error in a past return, proactively submitting a voluntary disclosure saves significant financial penalties.
              </p>
            </div>
          </Section>

          {/* Section 10: VAT vs Corporate Tax */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              VAT and Corporate Tax are not the same thing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Two different taxes, two separate registrations, and separate return deadlines — all managed under your EmaraTax portal account.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-textsecondary text-white uppercase tracking-wider text-xs font-semibold">
                      <th className="py-4 px-6 md:w-1/4">Feature</th>
                      <th className="py-4 px-6 md:w-3/8 text-teal-200">VAT</th>
                      <th className="py-4 px-6 md:w-3/8 text-cyan-200">UAE Corporate Tax</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Rate</td>
                      <td className="py-4 px-6 font-bold text-gray-800">5%</td>
                      <td className="py-4 px-6 font-bold text-gray-800">9% on taxable profit &gt; AED 375,000</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Based on</td>
                      <td className="py-4 px-6 text-gray-700">Gross taxable revenue / supplies</td>
                      <td className="py-4 px-6 text-gray-700">Net accounting profit (with tax adjustments)</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Who registers</td>
                      <td className="py-4 px-6 text-gray-700">Businesses above AED 375K turnover (or non-residents from first sale)</td>
                      <td className="py-4 px-6 text-gray-700">All taxable entities, including Free Zone companies</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900">Filing frequency</td>
                      <td className="py-4 px-6 text-gray-700">Quarterly (or monthly for large enterprises)</td>
                      <td className="py-4 px-6 text-gray-700">Annual (within 9 months of financial year end)</td>
                    </tr>
                    <tr className="hover:bg-purpletint/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">Portal</td>
                      <td className="py-4 px-6 font-medium text-textsecondary">FTA EmaraTax</td>
                      <td className="py-4 px-6 font-medium text-textsecondary">FTA EmaraTax</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* Section 11: 90-Day Action Plan */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your 90-day VAT game plan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Actionable milestones for your executive team and finance department:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Days 1–30 — Assess &amp; Audit
                </h3>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  Pull your rolling 12-month taxable turnover for every jurisdiction you sell into. Compare figures against threshold requirements.
                </p>
                <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">
                  Owner: Finance Team
                </p>
              </div>

              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Days 31–60 — Remediate &amp; Prepare
                </h3>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  File any delayed registrations immediately. Submit voluntary disclosures for known past errors. Shortlist e-invoicing providers if turnover approaches AED 50M.
                </p>
                <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">
                  Owner: CFO / Tax Adviser
                </p>
              </div>

              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Days 61–90 — Modernize &amp; Reconcile
                </h3>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  Map invoicing data fields to PINT AE e-invoice requirements. Reconcile input VAT credits approaching the 5-year expiration threshold.
                </p>
                <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">
                  Owner: IT &amp; Accounting
                </p>
              </div>
            </div>
          </Section>

          {/* Section 12: Frequently Asked Questions */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-colors bg-white hover:border-teal-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-gray-900 text-base md:text-lg focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-textsecondary flex-shrink-0 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""
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

          {/* Section 13: Call To Action Card */}
          <Section className="mt-16 p-10 bg-teal-900 text-white rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Need help with your VAT in the UAE &amp; Middle East?
            </h2>
            <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">
              Our tax specialists make VAT registration, quarterly returns, voluntary disclosures, and e-invoicing compliance simple, accurate, and stress-free.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition shadow-md"
              >
                Book a free consultation →
              </Link>
              <a
                href="/pdf/BookerAccounting_VAT_Guide_Middle_East_2026_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Guide</span>
              </a>
            </div>
          </Section>

          {/* Legal Disclaimer */}
          <Section className="mt-12">
            <div className="p-6 rounded-xl bg-purpletint border border-purpletint text-xs md:text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> This guide is general information based on rules in force as of October 2026. It is not tax or legal advice. Tax rules change, and the right answer depends on your specific situation, so please speak to a qualified adviser before acting. © 2026 Booker Accounting &amp; Consulting.
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

export default VatMiddleEastBlogClient;
