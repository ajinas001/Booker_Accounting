import EInvoicingGuide2026Client from './EInvoicingGuide2026Client';

export const metadata = {
  title: "Choosing Your E-Invoicing ASP, Made Simple | UAE E-Invoicing Guide 2026 | Booker Accounting",
  description: "What an Accredited Service Provider (ASP) does, your deadlines, an 8-point checklist, and how to appoint one in EmaraTax step by step. UAE E-Invoicing Guide 2026.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/e-invoicing-guide-2026",
  },
  openGraph: {
    title: "Choosing Your E-Invoicing ASP, Made Simple | UAE E-Invoicing Guide 2026 | Booker Accounting",
    description: "What an Accredited Service Provider (ASP) does, your deadlines, an 8-point checklist, and how to appoint one in EmaraTax step by step.",
    url: "https://www.bookeraccounting.com/blog/e-invoicing-guide-2026",
    images: [
      {
        url: "/images/einvoice-asp-guide.jpg",
        width: 1200,
        height: 675,
        alt: "UAE E-Invoicing ASP Guide 2026 - Booker Accounting",
      },
    ],
  },
  twitter: {
    title: "Choosing Your E-Invoicing ASP, Made Simple | UAE E-Invoicing Guide 2026 | Booker Accounting",
    description: "What an Accredited Service Provider (ASP) does, your deadlines, an 8-point checklist, and how to appoint one in EmaraTax step by step.",
    images: ["/images/einvoice-asp-guide.jpg"],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Choosing your e-invoicing ASP, made simple: UAE E-Invoicing Guide 2026",
    "description": "What an Accredited Service Provider does, your deadlines, an 8-point checklist, and how to appoint one in EmaraTax, step by step.",
    "datePublished": "2026-10-27T08:00:00Z",
    "dateModified": "2026-10-27T08:00:00Z",
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
      "@id": "https://www.bookeraccounting.com/blog/e-invoicing-guide-2026"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <EInvoicingGuide2026Client />
    </>
  );
}
