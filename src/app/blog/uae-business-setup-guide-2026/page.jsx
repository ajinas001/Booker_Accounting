import BusinessSetupGuideClient from './BusinessSetupGuideClient';

export const metadata = {
  title: "Starting a Business in the UAE: Business Setup Guide 2026 | Booker Accounting",
  description: "A practical guide for founders and business owners: mainland vs free zone, step-by-step setup, bank accounts, Corporate Tax, VAT, accounting software, and first 90 days compliance.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/uae-business-setup-guide-2026",
  },
  openGraph: {
    title: "Starting a Business in the UAE: Business Setup Guide 2026 | Booker Accounting",
    description: "A practical guide for founders and business owners: mainland vs free zone, step-by-step setup, bank accounts, Corporate Tax, VAT, accounting software, and first 90 days compliance.",
    url: "https://www.bookeraccounting.com/blog/uae-business-setup-guide-2026",
    images: [
      {
        url: "/images/freezone.webp",
        width: 1200,
        height: 630,
        alt: "Business Setup Guide 2026 UAE - Booker Accounting",
      },
    ],
  },
  twitter: {
    title: "Starting a Business in the UAE: Business Setup Guide 2026 | Booker Accounting",
    description: "A practical guide for founders and business owners: mainland vs free zone, step-by-step setup, bank accounts, Corporate Tax, VAT, accounting software, and first 90 days compliance.",
    images: ["/images/freezone.webp"],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Starting a Business in the UAE, the Right Way From Day One: Business Setup Guide 2026",
    "description": "A practical guide for founders and new business owners: mainland or free zone, the setup steps, and the tax and compliance obligations that come after the licence.",
    "datePublished": "2026-10-20T08:00:00Z",
    "dateModified": "2026-10-20T08:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Booker Accounting & Consulting"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Booker Accounting & Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bookeraccounting.com/icon-512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookeraccounting.com/blog/uae-business-setup-guide-2026"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BusinessSetupGuideClient />
    </>
  );
}
