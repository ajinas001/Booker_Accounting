import TransferPricingGuide2026Client from './TransferPricingGuide2026Client';

export const metadata = {
  title: "Transfer Pricing for IP: Royalty Rates & UAE Rules | Guide 2026 | Booker Accounting",
  description: "How to set an arm's length royalty for brands, software and know-how between related companies, DEMPE analysis, and what UAE Corporate Tax requires you to keep on file.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/transfer-pricing-guide-2026",
  },
  openGraph: {
    title: "Transfer Pricing for IP: Royalty Rates & UAE Rules | Guide 2026 | Booker Accounting",
    description: "How to set an arm's length royalty for brands, software and know-how between related companies, DEMPE analysis, and what UAE Corporate Tax requires you to keep on file.",
    url: "https://www.bookeraccounting.com/blog/transfer-pricing-guide-2026",
    images: [
      {
        url: "/images/uaecorporatetax.webp",
        width: 1200,
        height: 675,
        alt: "UAE Transfer Pricing for IP Guide 2026 - Booker Accounting",
      },
    ],
  },
  twitter: {
    title: "Transfer Pricing for IP: Royalty Rates & UAE Rules | Guide 2026 | Booker Accounting",
    description: "How to set an arm's length royalty for brands, software and know-how between related companies, DEMPE analysis, and what UAE Corporate Tax requires you to keep on file.",
    images: ["/images/uaecorporatetax.webp"],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Transfer Pricing for IP: Royalty Rates and UAE Rules (Guide 2026)",
    "description": "How to set an arm's length royalty for brands, software and know-how between related companies, and what UAE Corporate Tax requires you to keep on file.",
    "datePublished": "2026-11-18T08:00:00Z",
    "dateModified": "2026-11-18T08:00:00Z",
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
      "@id": "https://www.bookeraccounting.com/blog/transfer-pricing-guide-2026"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <TransferPricingGuide2026Client />
    </>
  );
}

