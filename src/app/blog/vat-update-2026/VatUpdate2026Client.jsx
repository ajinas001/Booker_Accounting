"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const VatUpdate2026Client = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
      title: "Check your supplier.",
      body: "Verify every new supplier, and re-check anyone you haven't verified in the last 12 months.",
    },
    {
      num: "2",
      title: "Check every purchase.",
      body: "Make sure what you bought fits the supplier's business and makes commercial sense.",
    },
    {
      num: "3",
      title: "Know your 3 numbers.",
      body: "AED 10,000, AED 100,000 and AED 375,000 decide how much checking a supplier needs.",
    },
    {
      num: "4",
      title: "Write it down.",
      body: "You need a written verification policy and a record of every check.",
    },
    {
      num: "5",
      title: "Skip the checks, lose the VAT.",
      body: "Without proof, the FTA can deny your input VAT claim.",
    },
  ];

  const checklist = [
    "Write a verification policy with named responsibilities",
    "Build a file for every active supplier (licence, representative ID, address)",
    "Re-check any supplier you haven't verified in the last 12 months",
    "Track total spend per supplier against AED 100,000 over 12 months",
    "Confirm bank details for suppliers above AED 375,000",
    "Pay suppliers electronically and keep proof",
    "Record what was checked, when and by whom, before claiming input VAT",
  ];

  const thresholds = [
    {
      amount: "AED 10,000",
      description:
        "Below this, checks are generally not required. Supplies under AED 10,000 (excluding VAT) are usually exempt from verification…",
    },
    {
      amount: "AED 100,000",
      description:
        "…unless your total with that supplier goes above this. If your purchases from the same supplier exceed, or are expected to exceed, AED 100,000 over 12 months, the small-invoice exemption no longer applies.",
    },
    {
      amount: "AED 375,000",
      description:
        "Above this, extra checks apply. These include confirming the supplier's bank account and screening their reputation through publicly available information.",
    },
  ];

  const documentationRows = [
    {
      show: "What was checked, when, and by whom",
      practice:
        "A dated record of every supplier and purchase check, with the name of the person who did it",
    },
    {
      show: "The evidence behind each check",
      practice:
        "Copies of licences, ID of the authorised representative, address checks, and bank confirmations where needed",
    },
    {
      show: "A written verification policy",
      practice:
        "How your business verifies suppliers and purchases, with named responsibilities. The Decision requires one.",
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
            alt="VAT Update 2026 UAE"
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/80 pointer-events-none" />
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
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-textprimary border border-textprimary/40 px-3 py-1 rounded-full">
              VAT UPDATE 2026 &nbsp;·&nbsp; UAE
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            A VAT invoice is<br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              no longer enough.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl"
          >
            What FTA Decision No. 13 of 2026 means for your business: the
            supplier checks you now need before claiming input VAT, and what to
            keep on file.
          </motion.p>

          {/* Meta line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-sm text-gray-400"
          >
            Booker Accounting &amp; Consulting &nbsp;|&nbsp; October 2026
            &nbsp;|&nbsp; bookeraccounting.com
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
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">1 Oct</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                DATE NEW RULES TOOK EFFECT
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">AED 375K</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                THRESHOLD FOR ENHANCED SUPPLIER CHECKS
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">12 Mo</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                SUPPLIER RE-VERIFICATION CYCLE
              </p>
            </div>
          </Section>

          {/* Intro */}
          <Section className="mb-14">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From 1 October 2026, a valid tax invoice is no longer enough to claim back the
              VAT you pay on purchases in the UAE. Under FTA Decision No. 13 of 2026, you
              now also need documented proof that you checked your supplier and the
              purchase before claiming input VAT. The good news: once you understand
              what the FTA expects, it&apos;s very manageable.
            </p>
          </Section>

          {/* Already in Force Alert */}
          <Section className="mb-14">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-8 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-500 text-white flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-amber-900 uppercase block mb-1">
                  ALREADY IN FORCE
                </span>
                <p className="text-amber-900 font-semibold text-base leading-relaxed">
                  These rules have applied since 1 October 2026. Any input VAT you claim from now on
                  should be backed by supplier and purchase checks.
                </p>
              </div>
            </div>
          </Section>

          {/* The Quick Version */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The quick version (if you only read one section)
            </h2>
            <div className="space-y-4 mb-8">
              {quickPoints.map((item) => (
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
          </Section>

          {/* What Changed and Why */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What changed, and why
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The FTA can now deny your input VAT if a purchase is linked to tax evasion anywhere in the
              supply chain, and you knew, or should have known, about it. This power comes from Article
              54(bis) of the VAT Law, added by Federal Decree-Law No. 16 of 2025.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Decision No. 13 of 2026 spells out exactly which checks count as doing your homework. The
              key point: if you skip these checks, the FTA doesn&apos;t need to prove you knew about any fraud.
              Not checking is treated as &ldquo;should have known,&rdquo; and your input VAT can be refused.
            </p>
            <blockquote className="pl-6 py-3 italic text-gray-700 mb-8 bg-purpletint border-l-4 border-textsecondary rounded-r-xl">
              VAT compliance has moved from &ldquo;Do I have a tax invoice?&rdquo; to &ldquo;Can I prove I knew who I
              was dealing with?&rdquo;
            </blockquote>
          </Section>

          {/* Step 1: Check Supplier */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step 1: Check who your supplier is
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Verify a supplier the first time you deal with them, and again if you haven&apos;t verified them in the
              last 12 months. In practice, that means confirming:
            </p>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6 overflow-hidden">
              <ul className="divide-y divide-slate-100">
                {[
                  {
                    label: "They're a real, licensed business",
                    detail:
                      "A valid trade licence or incorporation documents, with matching company details.",
                  },
                  {
                    label: "Who represents them",
                    detail:
                      "The identity of the person authorised to act for the supplier.",
                  },
                  {
                    label: "They have a real place of business",
                    detail:
                      "An address you can confirm, not just a name on an invoice.",
                  },
                ].map((row, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 hover:bg-purpletint/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-base">{row.label}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{row.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Also watch for red flags, such as a supplier who keeps changing address or key staff, or whose
              deals don&apos;t fit their size and history.
            </p>
          </Section>

          {/* Step 2: Check Purchase */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step 2: Check each purchase makes sense
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is the more demanding step, because it applies to every purchase you claim VAT on, not
              just once per supplier. Before claiming, ask yourself:
            </p>
            <div className="grid gap-4 mb-8">
              {[
                "Does what you bought fit what this supplier is licensed to sell?",
                "Does the deal make commercial sense for your business?",
                "Was it paid electronically, through a bank, rather than in cash?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-purpletint rounded-xl border border-purpletint">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-textsecondary/10 text-textsecondary font-bold text-xs flex items-center justify-center mt-0.5 border border-textsecondary/20">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              If something feels off, check it before you claim, not after.
            </p>
          </Section>

          {/* 3 Numbers to Know */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3 numbers to know
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              How much checking you need depends on the size of the purchase, and on how much you
              buy from that supplier over the year.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {thresholds.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3"
                >
                  <div className="text-3xl font-extrabold text-textsecondary">{t.amount}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>

            {/* Small invoice reminder */}
            <div className="bg-rose-50 border border-rose-200 p-5 rounded-xl flex items-start gap-4">
              <div className="p-2 rounded-lg bg-rose-500 text-white flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-rose-800 uppercase block mb-1">
                  REMEMBER
                </span>
                <p className="text-rose-900 font-semibold text-base leading-relaxed">
                  Small invoice ≠ small risk. Lots of small invoices from one supplier can add up past
                  AED 100,000, and then every one of them needs checking.
                </p>
              </div>
            </div>
          </Section>

          {/* Documentation Section */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              If it&apos;s not documented, it didn&apos;t happen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Doing the checks isn&apos;t enough on its own. If the FTA asks, you need to be ready to show:
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-textsecondary text-white text-sm uppercase tracking-wider font-semibold">
                      <th className="py-4 px-6 md:w-2/5">Be ready to show</th>
                      <th className="py-4 px-6 md:w-3/5">What it means in practice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-base">
                    {documentationRows.map((row, i) => (
                      <tr key={i} className={`hover:bg-purpletint/50 transition-colors ${i % 2 === 1 ? "bg-slate-50/50" : ""}`}>
                        <td className="py-4 px-6 font-semibold text-gray-900">{row.show}</td>
                        <td className="py-4 px-6 text-gray-700">{row.practice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <blockquote className="pl-6 py-3 italic text-gray-700 mb-4 bg-purpletint border-l-4 border-textsecondary rounded-r-xl">
              Compliance is now a process, not just a filing. Your checks need to run every time you
              buy, not only when the VAT return is due.
            </blockquote>
          </Section>

          {/* What Happens If You Don't */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What happens if you don&apos;t
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The main risk is simple: the FTA can deny your input VAT. That means VAT you expected to
              claim back becomes a real cost, coming straight out of your profit. For a business with regular
              purchases, that adds up quickly over a year.
            </p>

            {/* Booker Tip */}
            <div className="bg-teal-50 border border-teal-200 p-6 rounded-xl flex items-start gap-4">
              <div className="p-2 rounded-lg bg-textsecondary text-white flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-teal-800 uppercase block mb-1">
                  BOOKER TIP
                </span>
                <p className="text-teal-900 font-semibold text-base leading-relaxed">
                  Start with your top 20 suppliers by spend. They usually cover most of your input VAT, so
                  getting their files right first protects the biggest share of your claims.
                </p>
              </div>
            </div>
          </Section>

          {/* Quick Checklist */}
          <Section className="mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Your quick checklist
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Not sure your supplier files are ready?
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <ul className="divide-y divide-slate-100">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 px-6 py-4 hover:bg-purpletint/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-textsecondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* CTA Section */}
          <Section className="mt-16 p-10 bg-teal-900 text-white rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to get your supplier files in order?
            </h2>
            <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">
              At Booker Accounting &amp; Consulting, we review your supplier files, set up a simple
              verification policy, and make sure every input VAT claim is backed by the right records.
              Talk to our team today.
            </p>
            <Link
              href="/taxation"
              className="inline-block bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition"
            >
              Talk to our tax team →
            </Link>
            <p className="mt-4 text-teal-200 text-sm">
              www.bookeraccounting.com/taxation
            </p>
          </Section>

          {/* Disclaimer */}
          <Section className="mt-10">
            <p className="text-xs text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
              This guide is general information based on rules in force as of October 2026. It is not tax or
              legal advice. Requirements depend on your specific situation, so please speak to a qualified
              adviser before acting. Source: FTA Decision No. 13 of 2026. © 2026 Booker Accounting &amp; Consulting.
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

export default VatUpdate2026Client;
