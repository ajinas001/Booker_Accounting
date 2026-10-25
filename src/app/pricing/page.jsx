import PricingClient from './PricingClient';

export const metadata = {
  title: "Choose Your Plan | Booker Accounting & Consulting",
  description: "Accounting packages and pricing for UAE businesses. All prices in AED, exclusive of 5% VAT.",
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

export default function PricingPage() {
  return <PricingClient />;
}
