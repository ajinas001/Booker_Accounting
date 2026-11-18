/**
 * Single source of truth for Booker Accounting & Consulting company information,
 * verified statistics, corporate credentials, licensing, and contact details.
 */

export const COMPANY_STATS = {
  clientsServed: "500+",
  clientsServedCount: 500,
  yearsExperience: "10+",
  yearsExperienceCount: 10,
  complianceRate: "99.8%",
  complianceRateLabel: "Compliance Rate",
  support: "24/7",
};

export const COMPANY_CREDENTIALS = {
  legalName: "Booker Accounting & Consulting L.L.C",
  tradeName: "Booker Accounting & Consulting",
  tradeLicenceNumber: "1407736",
  issuingAuthority: "Dubai Department of Economy and Tourism (DET)",
  legalForm: "Limited Liability Company (LLC)",
  commercialRegisterNumber: "2711386",
  dcciMembershipNumber: "558492", // Dubai Chamber (DCCI) membership number
  licensedActivities: [
    "Tax Consultant",
    "Accounting & Bookkeeping",
    "Management Consultancies",
  ],
  registeredAddress: "Office 1801, Business Bay, Dubai",
  officeAddress: {
    line1: "Office 1801, 18th Floor",
    building: "The Prism Tower",
    area: "Business Bay, Dubai",
    country: "United Arab Emirates",
    full: "Office 1801, 18th Floor, The Prism Tower, Business Bay, Dubai, United Arab Emirates",
  },
  googleMapsUrl: "https://www.google.com/maps?q=The+Prism+Tower,+Business+Bay,+Dubai",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=The+Prism+Tower,+Business+Bay,+Dubai&output=embed",
  phone: "+971 56 767 8156",
  email: "info@bookeraccounting.com",
  whatsappUrl: "https://wa.me/971567678156?text=Hello%20Booker%20Accounting%2C%20I%20would%20like%20assistance%20in%20making%20my%20business%20compliant%20and%20supporting%20its%20growth.",
  // Status note as required by brief: audit registration on hold for now
  auditRegistrationStatus: "On Hold",
  auditRegistrationNote: "Statutory audits are coordinated through approved registered UAE audit partners.",
  professionalMemberships: [
    {
      code: "ACCA",
      name: "Association of Chartered Certified Accountants",
      scope: "Global standard in accounting, auditing & corporate governance",
    },
    {
      code: "CPA",
      name: "Certified Public Accountant",
      scope: "Premier certification in financial accounting & strategic advisory",
    },
    {
      code: "ICAI",
      name: "Institute of Chartered Accountants of India",
      scope: "Rigorous standards in financial reporting, corporate tax & compliance",
    },
  ],
};

