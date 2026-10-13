import VatUpdate2026Client from './VatUpdate2026Client';

export const metadata = {
  title: "A VAT Invoice Is No Longer Enough: FTA Decision No. 13 of 2026 | Booker Accounting",
  description: "From 1 October 2026, UAE businesses must document supplier checks before claiming input VAT. Learn what FTA Decision No. 13 of 2026 requires and how to stay compliant.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/vat-update-2026",
  },
  openGraph: {
    title: "A VAT Invoice Is No Longer Enough: FTA Decision No. 13 of 2026 | Booker Accounting",
    description: "From 1 October 2026, UAE businesses must document supplier checks before claiming input VAT. Learn what FTA Decision No. 13 of 2026 requires and how to stay compliant.",
    url: "https://www.bookeraccounting.com/blog/vat-update-2026",
  },
  twitter: {
    title: "A VAT Invoice Is No Longer Enough: FTA Decision No. 13 of 2026 | Booker Accounting",
    description: "From 1 October 2026, UAE businesses must document supplier checks before claiming input VAT. Learn what FTA Decision No. 13 of 2026 requires and how to stay compliant.",
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "A VAT Invoice Is No Longer Enough: FTA Decision No. 13 of 2026",
    "datePublished": "2026-10-13T08:00:00Z",
    "dateModified": "2026-10-13T08:00:00Z",
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
      "@id": "https://www.bookeraccounting.com/blog/vat-update-2026"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <VatUpdate2026Client />
    </>
  );
}
