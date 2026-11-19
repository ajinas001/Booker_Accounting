import TransferPricingGuideArClient from './TransferPricingGuideArClient';

export const metadata = {
  title: "دليل تسعير المعاملات للملكية الفكرية 2026 · الإمارات | بوكر للمحاسبة",
  description: "كيف تحدد إتاوة وفق مبدأ السعر المحايد للعلامات التجارية والبرمجيات والمعرفة الفنية بين الشركات المرتبطة، ومتطلبات ضريبة الشركات في الإمارات.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/transfer-pricing-guide-2026-ar",
  },
  openGraph: {
    title: "دليل تسعير المعاملات للملكية الفكرية 2026 · الإمارات | بوكر للمحاسبة",
    description: "تسعير المعاملات للملكية الفكرية: نسب الإتاوات وقواعد الإمارات. دليل شامل لتحليل DEMPE ومبدأ السعر المحايد.",
    url: "https://www.bookeraccounting.com/blog/transfer-pricing-guide-2026-ar",
    locale: "ar_AE",
    images: [
      {
        url: "/images/uaecorporatetax.webp",
        width: 1200,
        height: 675,
        alt: "دليل تسعير المعاملات للملكية الفكرية 2026 - بوكر للمحاسبة والاستشارات",
      },
    ],
  },
  twitter: {
    title: "دليل تسعير المعاملات للملكية الفكرية 2026 · الإمارات | بوكر للمحاسبة",
    description: "تسعير المعاملات للملكية الفكرية: نسب الإتاوات وقواعد الإمارات. دليل شامل لتحليل DEMPE ومبدأ السعر المحايد.",
    images: ["/images/uaecorporatetax.webp"],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "تسعير المعاملات للملكية الفكرية: نسب الإتاوات وقواعد الإمارات (دليل 2026)",
    "description": "كيف تحدد إتاوة وفق مبدأ السعر المحايد للعلامات التجارية والبرمجيات والمعرفة الفنية بين الشركات المرتبطة، وما الذي تطلبه ضريبة الشركات في الإمارات منك الاحتفاظ به.",
    "inLanguage": "ar",
    "datePublished": "2026-11-18T08:00:00Z",
    "dateModified": "2026-11-18T08:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "بوكر للمحاسبة والاستشارات"
    },
    "publisher": {
      "@type": "Organization",
      "name": "بوكر للمحاسبة والاستشارات",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.bookeraccounting.com/icon-512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.bookeraccounting.com/blog/transfer-pricing-guide-2026-ar"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <TransferPricingGuideArClient />
    </>
  );
}

