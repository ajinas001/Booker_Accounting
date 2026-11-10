import EcommerceGuide2026Client from './EcommerceGuide2026Client';

export const metadata = {
  title: "Selling Online in the UAE? Here's What Your Books Need | E-Commerce Guide 2026 | Booker Accounting",
  description: "Multiple channels, marketplace payouts, stock in three places and VAT across borders: a plain-English guide to e-commerce accounting in the UAE.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/ecommerce-guide-2026",
  },
  openGraph: {
    title: "Selling Online in the UAE? Here's What Your Books Need | E-Commerce Guide 2026 | Booker Accounting",
    description: "Multiple channels, marketplace payouts, stock in three places and VAT across borders: a plain-English guide to e-commerce accounting in the UAE.",
    url: "https://www.bookeraccounting.com/blog/ecommerce-guide-2026",
    images: [
      {
        url: "/images/trading.webp",
        width: 1200,
        height: 675,
        alt: "UAE E-Commerce Accounting Guide 2026 - Booker Accounting",
      },
    ],
  },
  twitter: {
    title: "Selling Online in the UAE? Here's What Your Books Need | E-Commerce Guide 2026 | Booker Accounting",
    description: "Multiple channels, marketplace payouts, stock in three places and VAT across borders: a plain-English guide to e-commerce accounting in the UAE.",
    images: ["/images/trading.webp"],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Selling online in the UAE? Here's what your books need: E-Commerce Guide 2026",
    "description": "Multiple channels, marketplace payouts, stock in three places and VAT across borders: a plain-English guide to e-commerce accounting.",
    "datePublished": "2026-11-10T08:00:00Z",
    "dateModified": "2026-11-10T08:00:00Z",
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
      "@id": "https://www.bookeraccounting.com/blog/ecommerce-guide-2026"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <EcommerceGuide2026Client />
    </>
  );
}

