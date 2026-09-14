"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const OneHabitClient = () => {
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
            src="/images/accounting.webp"
            alt="The One Habit That Decides Whether You Get Blindsided"
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/85 pointer-events-none" />
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
              <span className="text-textprimary font-medium">The One Habit That Decides Whether You Get Blindsided</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            The One Habit That Decides <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-textprimary">
              Whether You Get Blindsided
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light leading-relaxed"
          >
            Bookkeeping never feels urgent — right up until the year it needed to be right.
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
          {/* Introduction Paragraphs */}
          <Section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nobody starts a business because they love reconciling bank statements. People go into business because they're good at a craft, a service, or a product — and bookkeeping quietly slides to the bottom of the list, done in a rush every few months, or once a year when the tax deadline is close enough to force it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That's a costly habit. Bookkeeping isn't overhead you tolerate around the edges of the real work — it's the infrastructure the real work stands on. Here's what it actually protects, in practice, not in theory.
            </p>
          </Section>

          {/* Section 1: You Can't Manage What You Can't See */}
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              You Can't Manage What You Can't See
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every real decision in a business — hiring, raising prices, taking on a bigger client, cutting a service that isn't pulling its weight — depends on knowing where the business actually stands. Not where it feels like it stands. Without current books, that decision gets made on instinct, and instinct is often wrong in both directions: businesses that feel healthy can be quietly bleeding cash, and businesses that feel strapped are sometimes sitting on more room than the owner realizes.
            </p>
            
            {/* In practice callout 1 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 my-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-textsecondary mb-2">
                In practice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A two-person landscaping company assumed a slow month meant a slow season, and turned down a large seasonal contract to stay lean. Current books would have shown three invoices sitting unpaid for forty days — not a shortage of work, a shortage of collections.
              </p>
            </div>
          </Section>

          {/* Section 2: It Keeps Trouble From Finding You */}
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              It Keeps Trouble From Finding You
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tax season is when most owners suddenly care about their books, and by then it's the most expensive time to start. Reconstructing a year of transactions after the fact means missed deductions, misclassified expenses, and a far higher chance of the kind of error that draws attention. Bookkeeping done throughout the year means sales tax, payroll filings, and other obligations get tracked as they happen, instead of pieced together under deadline pressure.
            </p>

            {/* In practice callout 2 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 my-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-textsecondary mb-2">
                In practice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A boutique that collected sales tax all year but never separated it from regular revenue came up several thousand dollars short when the remittance was due — not because the business wasn't profitable, but because that tax money had already been spent on things that felt more immediate.
              </p>
            </div>
          </Section>

          {/* Section 3: It Catches the Small Things Before They Compound */}
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              It Catches the Small Things Before They Compound
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A duplicate charge. An invoice paid twice. A subscription nobody remembered to cancel. None of these announce themselves — they show up as small discrepancies that only get noticed by someone actually looking at the books on a regular basis. Businesses that reconcile monthly catch these within weeks. Businesses that check in once a year often don't catch them at all, or find them only after the cost has quietly compounded for months.
            </p>

            {/* In practice callout 3 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 my-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-textsecondary mb-2">
                In practice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A design studio discovered, nine months in, that a canceled software subscription had kept billing them anyway. Caught in month one, it's a quick email. Caught in month nine, it's several hundred dollars gone for nothing.
              </p>
            </div>
          </Section>

          {/* Section 4: It's What Makes a Bank or Investor Say Yes */}
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              It's What Makes a Bank or Investor Say Yes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The first thing anyone serious asks for — a lender, an investor, even a supplier considering better terms — is your financials. Clean, current books signal a business that's run competently. Incomplete or disorganized ones do the opposite, even when the business itself is healthy. The businesses that get approved quickly, and negotiate from strength, are almost always the ones that can produce accurate numbers the moment they're asked, without a scramble.
            </p>

            {/* In practice callout 4 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 my-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-textsecondary mb-2">
                In practice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Two nearly identical cafés applied for expansion loans the same month. One produced reconciled books within a day. The other took three weeks to assemble something usable — and lost the seasonal window the loan was meant to fund.
              </p>
            </div>
          </Section>

          {/* Section 5: It Sets the Price When You're Ready to Sell */}
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              It Sets the Price When You're Ready to Sell
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether an exit is a year away or twenty, the value of a business is only as credible as the numbers behind it. A buyer's accountant will dig into the financial history, and inconsistent records don't just slow that process down — they actively suppress the price a buyer is willing to pay, because uncertainty always gets discounted. Owners who keep clean books throughout the life of the business are protecting the value of an asset they may eventually want to cash in.
            </p>

            {/* In practice callout 5 */}
            <div className="bg-purpletint p-6 md:p-8 rounded-2xl border border-teal-100/60 my-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-textsecondary mb-2">
                In practice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                An acquirer offered a lower multiple for an otherwise profitable business simply because three years of records needed to be reconstructed before anyone could verify the numbers being claimed.
              </p>
            </div>
          </Section>

          {/* Section 6: It Gives You Back Your Attention */}
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              It Gives You Back Your Attention
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond audits and valuations, there's a simpler benefit: knowing your numbers changes how it feels to run the business day to day. Owners with solid bookkeeping habits spend less time anxious about cash flow, less time reconstructing what happened three months ago, and less time surprised by their own company. That's easy to underestimate until it's the alternative you're living.
            </p>
          </Section>

          {/* Section 7: Bookkeeping Isn't a Task. It's Infrastructure. */}
          <Section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bookkeeping Isn't a Task. It's Infrastructure.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              None of this requires an owner to become an accountant. It requires treating bookkeeping as a non-negotiable habit — reconciled regularly, reviewed monthly, taken seriously long before tax season forces the issue. The businesses that treat their books as infrastructure are consistently the ones making sharper decisions and building something worth more over time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If keeping up with the books isn't where you want to spend your time, that's exactly the work we do every day at Booker Accounting & Consulting.
            </p>
          </Section>

          {/* Call To Action Card */}
          <Section className="mt-16 p-10 bg-teal-900 text-white rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-3">
              Booker Accounting & Consulting
            </h2>
            <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">
              Ready to turn your bookkeeping into reliable infrastructure for your business?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition shadow-md"
            >
              Get in touch →
            </Link>
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

export default OneHabitClient;
