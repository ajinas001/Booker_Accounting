"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  ArrowUpRight,
  Loader2,
  AlertCircle,
  Check,
  ChevronDown,
} from "lucide-react";
import { FaPhone, FaWhatsapp, FaStar, FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

// ⚠️ Adjust this path to wherever your Navbar file lives.
import Navbar from "@/components/Navbar";

/* ============================================================
   TaxHeroSection — your existing Navbar (unchanged design) +
   RooFix-style rounded hero card + white underline lead form.

   Uses YOUR theme tokens only (no hard-coded brand hex):
     bg-secondary        → accent (arrow circles, button, bullets, strip)
     text-textsecondary  → strong text colour (form title, focus)
     text-textprimary    → hover/secondary text colour
     font-heading        → heading + UI font (same as Navbar)

   Usage:
     <TaxHeroSection
       phoneHref={PHONE_HREF} waLink={WA_LINK} wrapClassName={WRAP}
       heroPoints={heroPoints} formId={FORM_ID}
       bgImage="/images/middle east vat.PNG"
     >
       ...rest of the page sections
     </TaxHeroSection>
   ============================================================ */

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

const FIELD =
  "w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-[13px] text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-0 focus:border-secondary transition-colors disabled:opacity-60";

/* ---------- Pill-button arrow circle ---------- */
function ArrowCircle({ className = "" }) {
  return (
    <span
      className={`grid place-items-center rounded-full bg-secondary text-white shrink-0 ${className}`}
      aria-hidden="true"
    >
      <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
    </span>
  );
}

/* ============================================================
   LEAD FORM
   ============================================================ */
function TaxLeadForm({
  className = "",
  id = "tax-consultation-form",
  phoneHref,
  waLink,
}) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    service: "",
  });

  const [status, setStatus] = useState({ submitting: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.error) setStatus((prev) => ({ ...prev, error: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName.trim()) {
      setStatus({ submitting: false, error: "Please enter your full name." });
      return;
    }
    if (!formData.phone.trim()) {
      setStatus({ submitting: false, error: "Please enter a valid UAE phone number." });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus({ submitting: false, error: "Please enter a valid email address." });
      return;
    }
    if (!formData.companyName.trim()) {
      setStatus({ submitting: false, error: "Please enter your company name." });
      return;
    }
    if (!formData.service) {
      setStatus({ submitting: false, error: "Please select the service needed." });
      return;
    }

    setStatus({ submitting: true, error: null });

    try {
      // Normalize phone number with +971 prefix if not present
      let formattedPhone = formData.phone.trim();
      if (!formattedPhone.startsWith("+")) {
        const cleaned = formattedPhone.replace(/^0+/, "");
        if (cleaned.startsWith("971")) {
          formattedPhone = `+${cleaned}`;
        } else {
          formattedPhone = `+971 ${cleaned}`;
        }
      }

      const res = await fetch("/api/tax-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formattedPhone,
          email: formData.email.trim(),
          companyName: formData.companyName.trim(),
          service: formData.service,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            "Failed to submit consultation request. Please try again or reach us via WhatsApp."
        );
      }

      // Store lead data in sessionStorage for conversion tracking on thank-you page
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem(
            "last_tax_lead",
            JSON.stringify({
              fullName: formData.fullName,
              service: formData.service,
              companyName: formData.companyName,
              timestamp: Date.now(),
            })
          );
        } catch {
          // sessionStorage may fail in private mode
        }
      }

      router.push("/thank-you");
    } catch (err) {
      console.error("Form error:", err);
      setStatus({
        submitting: false,
        error:
          err.message ||
          "Could not submit form. Please check your connection or contact us via WhatsApp (+971 56 767 8156).",
      });
    }
  };

  return (
    /* Outer div = the coloured strip visible under the white card */
    <div
      id={id}
      className={`w-full rounded-2xl bg-secondary pb-[6px] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4)] scroll-mt-28 ${className}`}
    >
      <div className="rounded-2xl bg-white px-6 pt-6 pb-5 sm:px-7">
        <h3 className="font-heading text-center text-[17px] sm:text-lg font-extrabold leading-snug text-textsecondary">
          Get Your Free Tax
          <br />
          Consultation Today !
        </h3>

        {status.error && (
          <div
            role="alert"
            className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-red-700 animate-shake"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{status.error}</span>
          </div>
        )}

       

<form onSubmit={handleSubmit} className="mt-4 space-y-1.5" noValidate>
  {/* Row 1 - Full Name */}
  <div>
    <label htmlFor="fullName" className="sr-only">
      Full Name
    </label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      required
      autoComplete="name"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="Full Name"
      disabled={status.submitting}
      className={FIELD}
    />
  </div>

  {/* Row 2 - Phone */}
  <div>
    <label htmlFor="phone" className="sr-only">
      Phone number (UAE)
    </label>
    <div className="flex items-center border-b border-slate-300 focus-within:border-secondary transition-colors">
      <span className="flex items-center gap-1 pr-2 text-[13px] text-slate-700 select-none shrink-0">
        <span role="img" aria-label="UAE flag">🇦🇪</span>
        <span>+971</span>
      </span>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        autoComplete="tel-national"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        disabled={status.submitting}
        className="w-full min-w-0 bg-transparent border-0 px-0 py-2.5 text-[13px] text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-0 disabled:opacity-60"
      />
    </div>
  </div>

  {/* Row 3 - Email */}
  <div>
    <label htmlFor="email" className="sr-only">
      Email address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      autoComplete="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      disabled={status.submitting}
      className={FIELD}
    />
  </div>

  {/* Row 4 - Company & Service */}
  
  {/* Row 4 - Company Name */}
  <div>
    <label htmlFor="companyName" className="sr-only">
      Company name
    </label>
    <input
      type="text"
      id="companyName"
      name="companyName"
      required
      autoComplete="organization"
      value={formData.companyName}
      onChange={handleChange}
      placeholder="Company Name"
      disabled={status.submitting}
      className={FIELD}
    />
  </div>

  {/* Row 5 - Service Needed */}
  <div className="relative">
    <label htmlFor="service" className="sr-only">
      Service needed
    </label>
    <select
      id="service"
      name="service"
      required
      value={formData.service}
      onChange={handleChange}
      disabled={status.submitting}
      className={`${FIELD} appearance-none cursor-pointer pr-6 truncate ${
        formData.service ? "" : "text-slate-500"
      }`}
    >
      <option value="" disabled>
        Service Needed
      </option>
      <option value="Tax Registration">Tax Registration</option>
      <option value="Tax Filing">Tax Filing</option>
      <option value="VAT Deregistration">VAT Deregistration</option>
    </select>

    <ChevronDown
      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
      aria-hidden="true"
    />
  </div>


  {/* Submit */}
  <div className="pt-4">
    <button
      type="submit"
      disabled={status.submitting}
      className={`w-full h-11 rounded-full bg-secondary text-white font-heading font-bold text-[13px] flex items-center justify-center gap-2 cursor-pointer border-2 border-secondary hover:bg-white hover:text-secondary transition duration-300 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed ${FOCUS}`}
    >
      {status.submitting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        <span>Get Our Free Consultation</span>
      )}
    </button>
  </div>

  {/* Privacy Note */}
  <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-slate-500">
    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
    <span>100% Confidential. No obligation. Fast 30-min callback.</span>
  </div>

  {/* Direct Contact */}
  <div className="flex items-center justify-center gap-4 pt-2 text-[12px] font-semibold text-textsecondary">
    <a
      href={phoneHref}
      aria-label="Call +971 56 767 8156"
      className="inline-flex items-center gap-1.5 hover:text-textprimary transition-colors"
    >
      <FaPhone className="w-3 h-3" aria-hidden="true" />
      056 767 8156
    </a>

    <span className="h-3 w-px bg-slate-300" aria-hidden="true" />

    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="inline-flex items-center gap-1.5 text-[#1F8F4E] hover:opacity-80 transition-opacity"
    >
      <FaWhatsapp className="w-3.5 h-3.5" aria-hidden="true" />
      WhatsApp
    </a>
  </div>
</form>


      </div>
    </div>
  );
}

/* ============================================================
   HERO — rounded image card, big heading, reviews, form
   ============================================================ */
function TaxHero({
  heroPoints = [],
  formId,
  bgImage = "/images/middle east vat.PNG",
  wrapClassName = "",
  phoneHref,
  waLink,
  rating = "5.0",
  reviewsLabel = "Reviews",
}) {
  const resolvedBg =
    !bgImage || bgImage === "/images/hero-bg.jpg"
      ? "/images/middle east vat.PNG"
      : bgImage;
  const [currentBg, setCurrentBg] = useState(resolvedBg);

  return (
    <section
      aria-labelledby="hero-heading"
      className="font-heading bg-white px-3 sm:px-5 pt-[76px] sm:pt-[84px] pb-4 sm:pb-6"
    >
      <div
        className={`${wrapClassName} relative max-w-[1400px] mx-auto overflow-hidden rounded-[22px] sm:rounded-[28px] text-white min-h-[640px] bg-gradient-to-br from-gray-900 to-teal-900`}
      >

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-8 lg:gap-10 items-center lg:items-end px-5 sm:px-10 lg:px-12 py-10 sm:py-14 min-h-[640px]">
          {/* Left column — bottom-aligned on desktop */}
          <div className="flex flex-col gap-6 lg:self-end">
            <h1
              id="hero-heading"
              className="font-heading font-medium text-[38px] sm:text-6xl lg:text-[64px] leading-[1.06] tracking-tight max-w-[640px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
            >
              Corporate Tax &amp; VAT Services in the UAE
            </h1>

            <p className="text-sm sm:text-base text-white/90 max-w-[520px] leading-relaxed">
              Registration, filing and VAT deregistration handled by tax
              specialists, so you stay compliant with the FTA and avoid
              penalties.
            </p>

            {heroPoints.length > 0 && (
              <ul className="flex flex-col gap-2.5">
                {heroPoints.map((p) => {
                  const text = typeof p === "string" ? p : p.title || p.text;
                  return (
                    <li
                      key={text}
                      className="flex items-center gap-3 text-sm sm:text-[15px] font-medium"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary">
                        <Check
                          className="w-3.5 h-3.5 text-white"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </span>
                      {text}
                    </li>
                  );
                })}
              </ul>
            )}

            {/* CTA + reviews row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-1">
              <a
                href={`#${formId}`}
                className={`inline-flex items-center gap-4 rounded-full bg-white pl-6 pr-1.5 py-1.5 text-[13px] font-bold text-textsecondary shadow-lg shadow-black/20 hover:bg-slate-50 transition-colors ${FOCUS}`}
              >
                Contact Us
                <ArrowCircle className="w-9 h-9" />
              </a>

              <div className="flex items-center gap-3">
                {/* Overlapping platform badges */}
                <div className="flex items-center -space-x-2.5" aria-hidden="true">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#00B67A] ring-2 ring-white/90">
                    <FaStar className="w-5 h-5 text-white" />
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white ring-2 ring-white/90">
                    <FcGoogle className="w-6 h-6" />
                  </span>
                  
                </div>

                <div className="leading-tight">
                  <div className="flex items-center gap-2">
                    <span className="flex gap-0.5 text-[#FFC21A]" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <FaStar key={i} className="w-3 h-3" />
                      ))}
                    </span>
                    <span className="text-sm font-bold">{rating}</span>
                  </div>
                  <span className="text-[12px] text-white/85">{reviewsLabel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form card */}
          <div className="w-full max-w-[420px] lg:max-w-none justify-self-center lg:justify-self-end lg:self-center">
            <TaxLeadForm id={formId} phoneHref={phoneHref} waLink={waLink} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EXPORT
   ============================================================ */
export default function TaxHeroSection({
  phoneHref,
  waLink,
  wrapClassName = "",
  heroPoints = [],
  formId = "tax-consultation-form",
  bgImage = "/images/middle east vat.PNG",
  rating = "5.0",
  reviewsLabel = " Review",
  children,
}) {
  return (
    <>
      <Navbar />
      <main>
        <TaxHero
          heroPoints={heroPoints}
          formId={formId}
          bgImage={bgImage}
          wrapClassName={wrapClassName}
          phoneHref={phoneHref}
          waLink={waLink}
          rating={rating}
          reviewsLabel={reviewsLabel}
        />
        {children}
      </main>
    </>
  );
}