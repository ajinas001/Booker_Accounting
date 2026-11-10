"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#185561]";

const steps = [
  "A tax consultant reviews your request.",
  "We call you to understand your business and the service you need.",
  "We share the next steps, required documents and pricing.",
];

export default function ThankYouClient() {
  const [leadInfo, setLeadInfo] = useState(null);

  useEffect(() => {
    // 1. Retrieve stored lead details to personalize the message
    try {
      const stored = sessionStorage.getItem("last_tax_lead");
      if (stored) {
        setLeadInfo(JSON.parse(stored));
      }
    } catch {
      // ignore storage access issues
    }

    // 2. Fire Google Ads & Google Analytics conversion events
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Tax Campaign",
          event_label: "Google Ads Lead",
          value: 1.0,
          currency: "AED",
        });

        const googleAdsConversionId =
          process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
        if (googleAdsConversionId) {
          window.gtag("event", "conversion", {
            send_to: googleAdsConversionId,
            value: 1.0,
            currency: "AED",
          });
        }
      }

      // GTM dataLayer event
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "tax_form_conversion",
          formName: "Google Ads Tax Consultation",
        });
      }
    }
  }, []);

  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#0E2F36] font-inter-body leading-normal antialiased">
      {/* HEADER (logo only) */}
      <Navbar/>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-4 py-10 sm:py-16 lg:py-20">
        <div className="w-full max-w-[800px] bg-white border border-[#E2E8F0] rounded-[18px] p-7 sm:p-10 lg:p-12 flex flex-col items-center gap-5 text-center">
          <div className="w-[72px] h-[72px] rounded-full bg-[#E3F2F5] text-[#185561] flex items-center justify-center">
            <Check className="w-9 h-9" strokeWidth={2.4} aria-hidden="true" />
          </div>

          <h1 className="font-jakarta font-extrabold text-[26px] lg:text-4xl leading-[1.2]">
            Thank You, Your Request Has Been Received
          </h1>

          <p className="text-[#4A5568] text-[17px]">
            {leadInfo?.fullName ? (
              <>
                Thank you, <strong>{leadInfo.fullName}</strong>. Our tax team
                is reviewing your request for{" "}
                <strong>{leadInfo.service || "Tax Services"}</strong> and will
                contact you shortly.
              </>
            ) : (
              "Our tax team will review your details and contact you within 30 minutes during business hours to discuss your requirements."
            )}
          </p>

          {/* What happens next */}
          <div className="w-full text-left bg-[#F5F7FA] rounded-xl px-6 py-5 flex flex-col gap-3">
            <span className="font-bold text-[15px]">What happens next</span>
            {steps.map((text, i) => (
              <div key={text} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="flex-none w-7 h-7 rounded-full bg-[#0E2F36] text-white flex items-center justify-center text-sm font-bold"
                >
                  {i + 1}
                </span>
                <span className="text-[#2D3748]">{text}</span>
              </div>
            ))}
          </div>

          <p className="font-semibold">
            Need help sooner? Call or WhatsApp us on +971 56 767 8156.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+971567678156"
              className={`inline-flex items-center min-h-[48px] px-[22px] rounded-[10px] bg-[#185561] text-white font-bold hover:bg-[#0E2F36] transition-colors ${FOCUS}`}
            >
              Call Us
            </a>
            <a
              href="https://wa.me/971567678156"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center min-h-[48px] px-[22px] rounded-[10px] bg-[#1F8F4E] text-white font-bold hover:bg-[#197741] transition-colors ${FOCUS}`}
            >
              WhatsApp Us
            </a>
            <Link
              href="/"
              className={`inline-flex items-center min-h-[48px] px-[22px] rounded-[10px] border border-[#C9D1DC] text-[#0E2F36] font-semibold hover:bg-[#F5F7FA] transition-colors ${FOCUS}`}
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
  <Footer/>
    </div>
</>  
);
}