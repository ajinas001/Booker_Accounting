"use client";

import React, { useCallback } from "react";
import { FileText, CalendarCheck, Trash2 } from "lucide-react";
import TaxHeroSection from "@/components/landing/TaxHeroSection";
import Footer from "@/components/Footer";

/* Design tokens (from the approved design)
   ink #0E2F36 · teal #185561 · aqua #5CB9CA · soft #F5F7FA · line #E2E8F0 · muted #4A5568 */

const FORM_ID = "tax-consultation-form";
const PHONE_HREF = "tel:+971567678156";
const WA_LINK = "https://wa.me/971567678156";

const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5CB9CA]";
const WRAP = "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12";
const SECTION_Y = "py-12 sm:py-16 lg:py-[88px]";
const H2 =
  "font-jakarta font-extrabold text-[#0E2F36] text-center text-[26px] sm:text-3xl lg:text-[40px] leading-tight";

const services = [
  {
    title: "Tax Registration",
    icon: FileText,
    description:
      "We register your business for Corporate Tax and VAT with the Federal Tax Authority, prepare the documents and handle the application from start to finish.",
  },
  {
    title: "Tax Filing",
    icon: CalendarCheck,
    description:
      "We prepare and submit your Corporate Tax and VAT returns accurately and on time, so you avoid late-filing penalties.",
  },
  {
    title: "VAT Deregistration",
    icon: Trash2,
    description:
      "Closing your business or no longer need VAT registration? We manage the full deregistration process with the FTA, including the final return.",
  },
];

const heroPoints = [
  "Corporate Tax & VAT registration",
  "Accurate, on-time tax filing",
  "Hassle-free VAT deregistration",
];

const benefits = [
  {
    title: "Licensed tax professionals",
    text: "10+ years helping UAE businesses with Corporate Tax and VAT.",
  },
  {
    title: "Penalty protection",
    text: "We track every FTA deadline so nothing is missed.",
  },
  {
    title: "Proactive tax planning",
    text: "We plan ahead to minimise your tax exposure.",
  },
  {
    title: "Free assessment",
    text: "Talk to a tax expert about your case before you commit.",
  },
  {
    title: "One point of contact",
    text: "Serving freelancers, startups, SMEs and multinationals.",
  },
];

const steps = [
  { title: "Submit the form", text: "Tell us which service you need." },
  {
    title: "Free consultation",
    text: "We call you to understand your business and requirements.",
  },
  {
    title: "We handle the rest",
    text: "We prepare, submit and follow up with the FTA for you.",
  },
];

const stats = [
  { value: "10+", label: "years of experience" },
  { value: "500+", label: "happy clients" },
  { value: "99.8%", label: "compliance rate" },
];

const testimonials = [
  {
    name: "Mohammed Fazal",
    place: "Dubai",
    text: "Had a great experience with the BAC team. Truly amazing with phenomenal expertise in Taxation, humble approach, attention to detail and always available for support 24/7. One of the best Tax Consultants in UAE.",
  },
  {
    name: "Abhilash Mettammal",
    place: "Abu Dhabi",
    text: "Among all the firms I've tried, Booker Accounting is the most responsive and reliable. Their attention to detail is excellent and their depth of knowledge is beyond expectations. Definitely a 5-star service!",
  },
  {
    name: "Mohammed Taha",
    place: "Sharjah",
    text: "It was great working with Booker Accounting Services! The team was professional, efficient, and got the work done without me having to follow up. Really appreciated the smooth experience — highly recommend!",
  },
];

const faqs = [
  {
    question: "Does my business need to register for Corporate Tax?",
    answer:
      "Most businesses operating in the UAE, including many free zone companies, are required to register. Contact us and we will confirm your obligations.",
  },
  {
    question: "When do I need to register for VAT?",
    answer:
      "Registration depends on your taxable turnover. We will check whether registration is mandatory or voluntary for your business.",
  },
  {
    question: "What happens if I register or file late?",
    answer:
      "The FTA can apply penalties for late registration and late filing. We help you meet every deadline.",
  },
  {
    question: "How long does VAT deregistration take?",
    answer:
      "Timelines depend on the FTA review. We prepare everything correctly so the process runs as quickly as possible.",
  },
];

export default function TaxServicesLandingClient() {
  const scrollToForm = useCallback(() => {
    const el = document.getElementById(FORM_ID);
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    const firstInput = el.querySelector("input");
    if (firstInput) {
      setTimeout(() => firstInput.focus({ preventScroll: true }), 400);
    }
  }, []);

  const primaryBtn = `inline-flex items-center justify-center min-h-[52px] px-7 rounded-[10px] bg-[#185561] text-white font-bold text-base cursor-pointer transition-colors hover:bg-[#0E2F36] ${FOCUS}`;

  return (
    <>
      <div className="min-h-screen bg-white text-[#0E2F36] font-inter-body leading-normal antialiased">
        {/* ───────── HEADER + HERO + FORM ───────── */}
        <TaxHeroSection
          phoneHref={PHONE_HREF}
          waLink={WA_LINK}
          wrapClassName={WRAP}
          heroPoints={heroPoints}
          formId={FORM_ID}
          bgImage="/images/booker-tax.PNG"
        >
          {/* ───────── SERVICES ───────── */}
          <section
            aria-labelledby="services-heading"
            className="bg-[#F5F7FA]"
          >
            <div className={`${WRAP} ${SECTION_Y} flex flex-col gap-10`}>
              <div className="flex flex-col items-center gap-2.5 text-center">
                <h2 id="services-heading" className={H2}>
                  Our Tax Services
                </h2>
                <p className="text-[#4A5568] max-w-[620px]">
                  Everything you need to stay compliant with the Federal Tax
                  Authority, handled by one team.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <article
                      key={s.title}
                      className="flex-1 basis-[280px] min-w-0 bg-white border border-[#E2E8F0] rounded-[14px] p-7 flex flex-col gap-3.5"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#E3F2F5] text-[#185561] flex items-center justify-center">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-jakarta font-bold text-[21px]">
                        {s.title}
                      </h3>
                      <p className="text-[#4A5568]">{s.description}</p>
                    </article>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={scrollToForm}
                className={`${primaryBtn} self-center`}
              >
                Get a Free Consultation
              </button>
            </div>
          </section>

          {/* ───────── WHY CHOOSE US ───────── */}
          <section aria-labelledby="why-heading" className="bg-white">
            <div className={`${WRAP} ${SECTION_Y} flex flex-col gap-10`}>
              <h2 id="why-heading" className={H2}>
                Why Businesses Choose Booker Accounting
              </h2>
              <ul className="flex flex-wrap gap-5">
                {benefits.map((b) => (
                  <li
                    key={b.title}
                    className="flex-1 basis-[200px] min-w-0 flex flex-col gap-2 p-5 rounded-xl bg-[#F5F7FA]"
                  >
                    <span className="font-jakarta font-bold text-[17px]">
                      {b.title}
                    </span>
                    <span className="text-[#4A5568] text-[15px]">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ───────── HOW IT WORKS ───────── */}
          <section aria-labelledby="how-heading" className="bg-[#F5F7FA]">
            <div className={`${WRAP} ${SECTION_Y} flex flex-col gap-10`}>
              <h2 id="how-heading" className={H2}>
                How It Works
              </h2>
              <ol className="flex flex-wrap gap-6">
                {steps.map((s, i) => (
                  <li
                    key={s.title}
                    className="flex-1 basis-[260px] min-w-0 flex flex-col gap-3"
                  >
                    <div
                      aria-hidden="true"
                      className="w-11 h-11 rounded-full bg-[#0E2F36] text-white flex items-center justify-center font-bold text-lg"
                    >
                      {i + 1}
                    </div>
                    <span className="font-jakarta font-bold text-[19px]">
                      {s.title}
                    </span>
                    <span className="text-[#4A5568]">{s.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ───────── TRUST ───────── */}
          <section aria-labelledby="trust-heading" className="bg-white">
            <div className={`${WRAP} ${SECTION_Y} flex flex-col gap-9`}>
              <h2 id="trust-heading" className={H2}>
                Trusted by Businesses Across the UAE
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex-1 basis-[200px] max-w-[260px] text-center p-5 border border-[#E2E8F0] rounded-xl"
                  >
                    <div className="font-jakarta font-extrabold text-[34px] text-[#185561]">
                      {s.value}
                    </div>
                    <div className="text-[#4A5568]">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 text-center">
                <span className="px-3.5 py-2 rounded-full bg-[#0E2F36] text-white text-sm font-semibold">
                  Zoho Authorized Partner
                </span>
                <span className="text-[#4A5568] text-sm">
                  Working with businesses in DMCC · Meydan · IFZA · RAKEZ ·
                  Hamriyah · SPC Free Zone · Sharjah Media City
                </span>
              </div>

              <div className="flex flex-wrap gap-5">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="flex-1 basis-[300px] min-w-0 m-0 p-6 rounded-[14px] bg-[#F5F7FA] flex flex-col gap-3.5"
                  >
                    <span
                      className="text-[#B7791F] text-lg tracking-[2px]"
                      role="img"
                      aria-label="5 out of 5 stars"
                    >
                      ★★★★★
                    </span>
                    <blockquote className="m-0 text-base">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <figcaption className="font-semibold text-sm text-[#4A5568]">
                      {t.name}, {t.place}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* ───────── FAQ ───────── */}
          <section aria-labelledby="faq-heading" className="bg-[#F5F7FA]">
            <div
              className={`max-w-[860px] mx-auto px-4 sm:px-6 lg:px-12 ${SECTION_Y} flex flex-col gap-7`}
            >
              <h2 id="faq-heading" className={H2}>
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map((f) => (
                  <div
                    key={f.question}
                    className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-5 flex flex-col gap-2"
                  >
                    <h3 className="m-0 text-[17px] font-semibold">
                      {f.question}
                    </h3>
                    <p className="m-0 text-[#4A5568]">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───────── FINAL CTA ───────── */}
          <section
            aria-labelledby="cta-heading"
            className="bg-white text-black"
          >
            <div
              className={`max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12 ${SECTION_Y} flex flex-col items-center gap-[18px] text-center`}
            >
              <h2
                id="cta-heading"
                className="font-jakarta font-extrabold text-[26px] sm:text-3xl lg:text-[44px] leading-tight"
              >
                Stay Tax Compliant Without the Stress
              </h2>
              <p className="text-gray-800 text-lg">
                Speak to our tax team today about registration, filing or VAT
                deregistration.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className={`${primaryBtn} border border-transparent`}
                >
                  Get a Free Consultation
                </button>
                <a
                  href={PHONE_HREF}
                  className={`inline-flex items-center min-h-[52px] px-[26px] rounded-[10px] border border-[#3D6870] text-black font-semibold hover:bg-white/10 transition-colors ${FOCUS}`}
                >
                  Call Us
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` text-white inline-flex items-center min-h-[52px] px-[26px] rounded-[10px] bg-textsecondary text-white font-semibold hover:bg-[#197741] transition-colors ${FOCUS}`}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </section>
        </TaxHeroSection>

        <Footer />
      </div>
    </>
  );
}