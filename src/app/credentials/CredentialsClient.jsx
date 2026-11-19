"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Copy,
  ExternalLink,
  Clock,
  Phone,
  Mail,
  MapPin,
  FileText,
  Receipt,
  BookOpenCheck,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";
import { COMPANY_CREDENTIALS, COMPANY_STATS } from "@/data/companyInfo";

// Put your banner photos in /public/images/ and update these paths
const HERO_IMAGE_DESKTOP = "/images/cred-desk.png";
const HERO_IMAGE_MOBILE = "/images/cred.png";

const ACTIVITIES = [
  {
    icon: Receipt,
    title: "Tax consultant",
    text: "Corporate tax and VAT advice, impact assessments, filing readiness and ongoing compliance for UAE companies.",
  },
  {
    icon: BookOpenCheck,
    title: "Accounting and bookkeeping",
    text: "Bookkeeping, general ledger, management accounts, cloud setup (Zoho, QuickBooks, Xero) and financial statements.",
  },
  {
    icon: LineChart,
    title: "Management consultancy",
    text: "Fractional CFO services, financial modelling, business valuation, internal controls and growth feasibility studies.",
  },
];

const VERIFY_STEPS = [
  { title: "Copy the licence number", text: "Use the copy button in the registration record below." },
  { title: "Search it with the issuing authority", text: "Enter the number in the Dubai Department of Economy and Tourism licence verification service." },
  { title: "Match the details", text: "Legal name, status and licensed activities should be the same as on this page." },
  { title: "Ask for certified copies", text: "If your bank or auditor needs paper, we send certified documents on request." },
];

function SectionHead({ title, text }) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

function CopyButton({ value, label, dark }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 ${
        dark ? "text-teal-700 hover:bg-teal-50" : "text-teal-700 hover:bg-teal-50"
      }`}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function RecordRow({ label, value, note, mono, copy }) {
  return (
    <div className="grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
      <dt className="text-sm text-slate-500">{label}</dt>
      <dd>
        <div className="flex flex-wrap items-center gap-x-3">
          <span className={`text-lg ${mono ? "font-mono tracking-tight text-teal-800" : "font-medium text-slate-900"}`}>
            {value}
          </span>
          {copy && <CopyButton value={value} label={label} />}
        </div>
        {note && <p className="mt-1 text-sm text-slate-500">{note}</p>}
      </dd>
    </div>
  );
}

export default function CredentialsClient() {
  const reduce = useReducedMotion();
  const c = COMPANY_CREDENTIALS;

  // Single orchestrated entrance, hero only
  const enter = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.09 * i, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div className="min-h-screen bg-[#F3F7F6] text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex items-center overflow-hidden bg-teal-950 px-6 pb-24 pt-28 text-white md:px-12 md:pb-28 md:pt-32">
        {/* Desktop Banner Image */}
        <Image
          src={HERO_IMAGE_DESKTOP}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 hidden object-cover object-right md:block"
        />

        {/* Mobile Banner Image */}
        <Image
          src={HERO_IMAGE_MOBILE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 block object-cover object-center md:hidden"
        />

        {/* Overlays keep the text readable on any photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-950/75 via-teal-950/50 to-teal-950/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-teal-950/70 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.nav {...enter(0)} aria-label="Breadcrumb" className="mb-6 text-sm text-teal-100/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Credentials and licences</span>
          </motion.nav>

          <motion.h1
            {...enter(1)}
            className="max-w-4xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
          >
            Licensed in Dubai.
            <br />
            Verifiable by anyone.
          </motion.h1>

          <motion.p {...enter(2)} className="mt-5 max-w-xl text-base leading-relaxed text-teal-50/85 md:text-lg">
            Every registration on this page belongs to {c.legalName}. Confirm each one directly with the Dubai
            Department of Economy and Tourism and the Dubai Chamber.
          </motion.p>

          <motion.div {...enter(3)} className="mt-8 flex flex-wrap items-center gap-3">
            {/* <a
              href="#verify"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-300 px-6 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ShieldCheck className="h-4 w-4" />
              How to verify us
            </a> */}
            <Link
              href={c.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-textsecondary  border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              More info
              <ExternalLink className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credential bar overlapping the hero edge */}
      <div className="relative z-10 -mt-14 px-6 md:px-12">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(2,44,40,0.35)] ring-1 ring-slate-200 lg:grid-cols-4">
          {[
            { label: "Trade licence number", value: c.tradeLicenceNumber, mono: true, copy: true },
            { label: "Dubai Chamber no.", value: c.dcciMembershipNumber, mono: true },
            { label: "Status", value: "Active and valid", dot: true },
            { label: "Experience", value: `${COMPANY_STATS.yearsExperience} years` },
          ].map((item) => (
            <div
              key={item.label}
              className="border-slate-200 p-5 sm:p-7 [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+2)]:border-l lg:[&:nth-child(n+3)]:border-t-0"
            >
              <dt className="text-sm text-slate-500">{item.label}</dt>
              <dd className="mt-1 flex flex-wrap items-center gap-x-2">
                {item.dot && <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />}
                <span
                  className={`text-xl font-semibold tracking-tight sm:text-2xl ${
                    item.mono ? "font-mono text-teal-800" : "text-slate-900"
                  }`}
                >
                  {item.value}
                </span>
                {item.copy && <CopyButton value={item.value} label={item.label} />}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <main className="mx-auto max-w-7xl space-y-28 px-6 py-24 md:px-12 md:py-32">
        {/* HOW TO VERIFY (a real sequence, so it is numbered) */}
        <section id="verify" className="scroll-mt-28">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
            <SectionHead
              title="Verify us in four steps"
              text="It takes a few minutes and needs nothing from us."
            />
            <ol className="relative space-y-9 border-l border-teal-800/20 pl-10">
              {VERIFY_STEPS.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[3.4rem] flex h-9 w-9 items-center justify-center rounded-full bg-teal-900 text-sm font-semibold text-teal-50 ring-4 ring-[#F3F7F6]">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 max-w-xl leading-relaxed text-slate-600">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* REGISTRATION RECORD */}
        <section id="licence" className="scroll-mt-28">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
            <SectionHead
              title="Registration record"
              text="Use these details when you check us with the issuing authority or complete your own KYC."
            />
            <div>
              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                <RecordRow label="Registered entity" value={c.legalName} note={`Trading as ${c.tradeName}`} />
                <RecordRow
                  label="Trade licence number"
                  value={c.tradeLicenceNumber}
                  note={`Issued by ${c.issuingAuthority}`}
                  mono
                  copy
                />
                <RecordRow
                  label="Commercial register no."
                  value={c.commercialRegisterNumber}
                  note="Dubai DET Commercial Registry"
                  mono
                  copy
                />
                <RecordRow
                  label="Dubai Chamber membership"
                  value={c.dcciMembershipNumber}
                  note="Dubai Chamber of Commerce and Industry"
                  mono
                  copy
                />
                <RecordRow label="Legal form" value={c.legalForm} note="Incorporated in the Emirate of Dubai, UAE" />
                <RecordRow
                  label="Registered address"
                  value={c.registeredAddress}
                  note={`Office: ${c.officeAddress.full}`}
                />
              </dl>

              <div className="mt-6 flex flex-col gap-3 rounded-xl bg-teal-900/[0.06] px-5 py-4 text-sm text-teal-950 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                  Certified copies of the trade licence, certificate of incumbency and Chamber membership are
                  available for onboarding and KYC.
                </p>
                <Link
                  href={c.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-teal-800 hover:text-teal-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700"
                >
                  Request documents
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LICENSED ACTIVITIES */}
        <section>
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
            <SectionHead
              title="What the licence covers"
              text={`Under licence ${c.tradeLicenceNumber}, DET permits ${c.tradeName} to carry out these activities.`}
            />
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {ACTIVITIES.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-5 py-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-900 text-teal-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1.5 max-w-2xl leading-relaxed text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* QUALIFICATIONS */}
        <section>
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
            <SectionHead
              title="Qualifications of our team"
              text="Our leadership and senior consultants hold chartered accountancy credentials and work to their ethics and governance standards."
            />
            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {c.professionalMemberships.map((m) => (
                <li key={m.code} className="border-t-2 border-teal-700 pt-4">
                  <p className="text-3xl font-semibold tracking-tight text-teal-800">{m.code}</p>
                  <h3 className="mt-2 font-semibold text-slate-900">{m.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{m.scope}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFFICE */}
        <section className="overflow-hidden rounded-3xl bg-white ">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-teal-700">
                  <MapPin className="h-4 w-4" />
                  Dubai office
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">The Prism Tower, Business Bay</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{c.officeAddress.full}</p>
                <ul className="mt-7 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-slate-400" />
                    Monday to Saturday, 9:00 AM to 6:00 PM GST
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-slate-400" />
                    {c.phone}
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-slate-400" />
                    {c.email}
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={c.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-textsecondary px-5 py-3 text-sm font-semibold text-white hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href={c.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  Book an office visit
                </Link>
              </div>
            </div>
            <div className="min-h-[340px] bg-slate-100">
              <iframe
                title="Booker Accounting office location, The Prism Tower, Business Bay, Dubai"
                src={c.googleMapsEmbedUrl}
                className="h-full min-h-[340px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-gray-900 to-teal-900 px-8 py-14 text-white sm:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Need documents for your bank or auditor?
              </h2>
              <p className="mt-4 leading-relaxed text-teal-100/80">
                Tell us what your bank, auditor, legal counsel or procurement team needs. We send certified copies
                of our trade licence, tax certificates and corporate documents promptly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={c.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-teal-950  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request verification package
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href={`mailto:${c.email}?subject=Corporate%20Credentials%20Request%20-%20Booker%20Accounting`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-200/30 px-6 py-3.5 text-sm font-medium text-teal-50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Mail className="h-4 w-4" />
                Email compliance desk
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FloatingMenuButton />
      <ScrollToTop />
      <Footer />
    </div>
  );
}