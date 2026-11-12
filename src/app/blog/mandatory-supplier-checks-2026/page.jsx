import SupplierChecks2026Client from './SupplierChecks2026Client';

export const metadata = {
  title: "Mandatory Supplier Checks: What Changed on 1 October 2026 | FTA Decision No. 13 of 2026 | Booker Accounting",
  description: "FTA Decision No. 13 of 2026 explained: the before-and-after, the two levels of checks, the three thresholds, and what it means for claiming input VAT in the UAE.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/mandatory-supplier-checks-2026",
  },
  openGraph: {
    title: "Mandatory Supplier Checks: What Changed on 1 October 2026 | FTA Decision No. 13 of 2026 | Booker Accounting",
    description: "FTA Decision No. 13 of 2026 explained: the before-and-after, the two levels of checks, the three thresholds, and what it means for your business.",
    url: "https://www.bookeraccounting.com/blog/mandatory-supplier-checks-2026",
    images: [
      {
        url: "/images/taxationpage.webp",
        width: 1200,
        height: 675,
        alt: "Mandatory Supplier Checks UAE VAT 2026 - Booker Accounting",
      },
    ],
  },
  twitter: {
    title: "Mandatory Supplier Checks: What Changed on 1 October 2026 | FTA Decision No. 13 of 2026 | Booker Accounting",
    description: "FTA Decision No. 13 of 2026 explained: the before-and-after, the two levels of checks, the three thresholds, and what it means for your business.",
    images: ["/images/taxationpage.webp"],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mandatory supplier checks: what changed on 1 October 2026. FTA Decision No. 13 of 2026 explained",
    "description": "FTA Decision No. 13 of 2026 explained: the before-and-after, the two levels of checks, the three thresholds, and what it means for your business.",
    "datePublished": "2026-11-12T08:00:00Z",
    "dateModified": "2026-11-12T08:00:00Z",
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
      "@id": "https://www.bookeraccounting.com/blog/mandatory-supplier-checks-2026"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SupplierChecks2026Client />
    </>
  );
}

