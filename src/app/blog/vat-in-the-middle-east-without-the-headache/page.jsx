import VatMiddleEastBlogClient from './VatMiddleEastBlogClient';

export const metadata = {
  title: "VAT in the Middle East, Without the Headache: UAE & GCC Guide 2026 | Booker Accounting",
  description: "A plain-English guide for founders and business owners on Middle East VAT: mandatory registration thresholds, 2026 penalty changes, e-invoicing mandates, and staying compliant.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/vat-in-the-middle-east-without-the-headache",
  },
  openGraph: {
    title: "VAT in the Middle East, Without the Headache: UAE & GCC Guide 2026 | Booker Accounting",
    description: "A plain-English guide for founders and business owners on Middle East VAT: mandatory registration thresholds, 2026 penalty changes, e-invoicing mandates, and staying compliant.",
    url: "https://www.bookeraccounting.com/blog/vat-in-the-middle-east-without-the-headache",
  },
  twitter: {
    title: "VAT in the Middle East, Without the Headache: UAE & GCC Guide 2026 | Booker Accounting",
    description: "A plain-English guide for founders and business owners on Middle East VAT: mandatory registration thresholds, 2026 penalty changes, e-invoicing mandates, and staying compliant.",
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "VAT in the Middle East, Without the Headache: UAE & GCC Guide 2026",
    "datePublished": "2026-10-01T08:00:00Z",
    "dateModified": "2026-10-02T08:00:00Z",
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
      "@id": "https://www.bookeraccounting.com/blog/vat-in-the-middle-east-without-the-headache"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <VatMiddleEastBlogClient />
    </>
  );
}
