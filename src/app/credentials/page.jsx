import CredentialsClient from "./CredentialsClient";
import { COMPANY_CREDENTIALS } from "@/data/companyInfo";

export const metadata = {
  title: "Credentials & Licences | Booker Accounting & Consulting L.L.C",
  description:
    "Official trade licence, legal registration, and professional qualifications for Booker Accounting & Consulting L.L.C. Licensed by Dubai DET (Licence No. 1407736).",
  alternates: {
    canonical: "https://www.bookeraccounting.com/credentials",
  },
  openGraph: {
    title: "Credentials & Licences | Booker Accounting & Consulting L.L.C",
    description:
      "Verified corporate registration and credentials for Booker Accounting & Consulting L.L.C in Dubai, UAE. Trade Licence No. 1407736 issued by Dubai DET.",
    url: "https://www.bookeraccounting.com/credentials",
    type: "website",
  },
  twitter: {
    title: "Credentials & Licences | Booker Accounting & Consulting L.L.C",
    description:
      "Verified corporate registration and credentials for Booker Accounting & Consulting L.L.C in Dubai, UAE. Trade Licence No. 1407736 issued by Dubai DET.",
  },
};

export default function CredentialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: COMPANY_CREDENTIALS.legalName,
    alternateName: COMPANY_CREDENTIALS.tradeName,
    url: "https://www.bookeraccounting.com/credentials",
    identifier: COMPANY_CREDENTIALS.tradeLicenceNumber,
    taxID: COMPANY_CREDENTIALS.commercialRegisterNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_CREDENTIALS.officeAddress.full,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1874,
      longitude: 55.2611,
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Government Trade Licence",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: COMPANY_CREDENTIALS.issuingAuthority,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CredentialsClient />
    </>
  );
}

