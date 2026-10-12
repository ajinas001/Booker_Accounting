"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Download,
  Instagram,
  FileText,
  Check,
  ExternalLink,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/booker_consulting";

const guides = [
  {
    id: "corporate-tax",
    title: "UAE Corporate Tax Guide",
    subtitle: "Federal Decree-Law & GCC Regulations",
    edition: "2026 Edition",
    fileSize: "941 KB",
    fileName: "Booker_Corporate_Tax_Guide_GCC_2026.pdf",
    fileUrl: "/pdf/Booker_Corporate_Tax_Guide_GCC_2026.pdf",
    description:
      "The UAE 9% Corporate Tax framework, registration, Free Zone rules, and compliance requirements.",
    highlights: [
      "9% Corporate Tax & AED 375,000 threshold",
      "EmaraTax registration & filing deadlines",
      "Free Zone Qualifying Income (0% vs 9%)",
      "Deductible expenses & compliance checklist",
    ],
    ctaText: "Download Tax Guide",
  },
  {
    id: "vat-guide",
    title: "Middle East & UAE VAT Guide",
    subtitle: "Value Added Tax & FTA Guidelines",
    edition: "2026 Edition",
    fileSize: "157 KB",
    fileName: "BookerAccounting_VAT_Guide_Middle_East_2026_1.pdf",
    fileUrl: "/pdf/BookerAccounting_VAT_Guide_Middle_East_2026_1.pdf",
    description:
      "UAE & Middle East VAT rules, return filing, input tax recovery, and common audit pitfalls.",
    highlights: [
      "5% UAE & GCC VAT rates & taxable supplies",
      "Mandatory (AED 375k) & voluntary (AED 187.5k) limits",
      "Input tax recovery & quarterly deadlines",
      "Compliant invoicing & voluntary disclosure",
    ],
    ctaText: "Download VAT Guide",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function GuideCard({ guide }) {
  const [followed, setFollowed] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleDownload = () => {
    setDownloaded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDownloaded(false), 3500);
  };

  return (
    <article className=" bg-textsecondary text-white rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Meta */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <FileText size={16} aria-hidden="true" />
          </span>
          <span className="text-xs text-white/75 truncate">{guide.subtitle}</span>
        </div>
        <span className="text-[11px] text-white/70 shrink-0">
          {guide.edition} · PDF {guide.fileSize}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold tracking-tight mb-1.5">{guide.title}</h3>
      <p className="text-sm text-white/75 leading-relaxed mb-5">{guide.description}</p>

      {/* Highlights */}
      <ul className="space-y-2 mb-6 pt-5 border-t border-white/10">
        {guide.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13px] text-white/85">
            <Check
              size={14}
              className="text-teal-300 shrink-0 mt-[3px]"
              strokeWidth={3}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-auto space-y-2.5">
        {!followed && (
          <p className="text-[13px] text-white/80 leading-relaxed pb-0.5">
            Please follow us on Instagram to unlock your free download.
          </p>
        )}
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setFollowed(true)}
          className={`group/follow relative flex items-center gap-3.5 w-full overflow-hidden rounded-xl bg-white/10 border border-white/25 hover:border-white/60 hover:bg-white/15 p-2.5 pr-4 transition duration-300 ${focusRing}`}
        >
          <span
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md ${followed ? "bg-teal-300 text-[#0d1a20]" : "text-white"
              }`}
          
          >
            {followed ? (
              <Check size={20} strokeWidth={3} aria-hidden="true" />
            ) : (
              <Instagram size={20} aria-hidden="true" />
            )}
          </span>

          <span className="flex-1 text-left leading-tight">
            <span className="block text-sm font-semibold">
              {followed ? "Thanks for following" : "Follow on Instagram"}
            </span>
            <span className="block text-xs text-white/65 mt-1">
              @booker_consulting &middot; Step 1
            </span>
          </span>

          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="shrink-0 text-white/70 transition duration-300 group-hover/follow:text-white group-hover/follow:translate-x-0.5 group-hover/follow:-translate-y-0.5 motion-reduce:transition-none"
          />

          {/* hover shine */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover/follow:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 motion-reduce:hidden"
          />
        </Link>

        {followed ? (
          <a
            href={guide.fileUrl}
            download={guide.fileName}
            onClick={handleDownload}
            className={`flex items-center justify-center gap-2 w-full bg-white text-[#0d1a20] rounded-xl py-3 px-4 text-sm font-semibold hover:bg-neutral-100 transition active:scale-[0.99] ${focusRing}`}
          >
            <span aria-live="polite" className="flex items-center gap-2">
              {downloaded ? (
                <>
                  <Check size={15} className="text-emerald-600" />
                  <span className="text-emerald-700">Downloaded</span>
                </>
              ) : (
                <>
                  <span>Step 2: {guide.ctaText}</span>
                  <Download size={15} aria-hidden="true" />
                </>
              )}
            </span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-2 w-full bg-white/10 text-white/50 rounded-xl py-3 px-4 text-sm font-semibold cursor-not-allowed"
          >
            <Lock size={14} aria-hidden="true" />
            <span>Step 2: {guide.ctaText}</span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 mt-3.5 text-xs text-white/65">
        {!followed ? (
          <button
            type="button"
            onClick={() => setFollowed(true)}
            className={`hover:text-white underline-offset-4 hover:underline rounded ${focusRing}`}
          >
            Already following? Unlock
          </button>
        ) : (
          <span />
        )}
        <a
          href={guide.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 hover:text-white underline-offset-4 hover:underline rounded ${focusRing}`}
        >
          <ExternalLink size={12} aria-hidden="true" />
          Preview PDF
        </a>
      </div>
    </article>
  );
}

export default function LeadMagnet() {
  return (
    <section className="px-4 sm:px-6 py-10 lg:py-14" aria-labelledby="lead-magnet-heading">
      <div className="max-w-7xl mx-auto bg-purpletint rounded-[1.75rem] p-6 sm:p-8 lg:p-10 border border-black/5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-textsecondary mb-2">
              Free resources &amp; guides
            </p>
            <h2
              id="lead-magnet-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-tight tracking-tight mb-3"
            >
              Free UAE tax &amp; compliance guides
            </h2>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              Plain-language PDFs on corporate tax and VAT for UAE business
              owners. Follow us, then download.
            </p>
          </div>

          <p className="text-sm text-black/60 md:text-right shrink-0">
            2 guides · 2026 edition · UAE focused
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
}