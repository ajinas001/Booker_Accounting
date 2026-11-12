import TaxServicesLandingClient from "./TaxServicesLandingClient";

export const metadata = {
  title: "Corporate Tax & VAT Services in the UAE | Booker Accounting",
  description:
    "Expert Corporate Tax and VAT registration, filing, and deregistration services in Dubai & across the UAE. Avoid FTA penalties and ensure 100% compliance. Get a free consultation.",
  alternates: {
    canonical: "/tax-services",
  },
  openGraph: {
    title: "Corporate Tax & VAT Services in the UAE | Booker Accounting",
    description:
      "Expert Corporate Tax and VAT registration, filing, and deregistration services in Dubai & across the UAE. Avoid penalties with FTA certified tax advisors.",
    url: "https://www.bookeraccounting.com/tax-services",
    siteName: "Booker Accounting & Consulting",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bookeraccounting.com/images/taxationpage.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Tax and VAT Services in the UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Tax & VAT Services in the UAE | Booker Accounting",
    description:
      "Expert Corporate Tax and VAT registration, filing, and deregistration services in Dubai & across the UAE.",
  },
};

export default function TaxServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Tax & VAT Services in the UAE",
    serviceType: "Tax Consultation and Compliance",
    provider: {
      "@type": "AccountingService",
      name: "Booker Accounting and Consulting LLC",
      telephone: "+971567678156",
      email: "md@bookeraccounting.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office 1801, 18th Floor, The Prism Tower, Business Bay",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tax Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Tax Registration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Tax Filing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VAT Registration & Return Filing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VAT Deregistration",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TaxServicesLandingClient />
    </>
  );
}
