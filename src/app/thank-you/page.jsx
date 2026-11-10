import ThankYouClient from "./ThankYouClient";

export const metadata = {
  title: "Thank You | Booker Accounting & Consulting",
  description:
    "Thank you for contacting Booker Accounting. One of our certified tax advisors will be in touch shortly.",
  // Strict noindex and nofollow as required for Google Ads thank-you pages
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
