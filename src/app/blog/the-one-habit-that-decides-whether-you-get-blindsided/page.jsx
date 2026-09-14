import OneHabitClient from './OneHabitClient';

export const metadata = {
  title: "The One Habit That Decides Whether You Get Blindsided | Booker Accounting",
  description: "Bookkeeping never feels urgent — right up until the year it needed to be right. Learn how clean books protect your business infrastructure.",
  alternates: {
    canonical: "https://www.bookeraccounting.com/blog/the-one-habit-that-decides-whether-you-get-blindsided",
  },
  openGraph: {
    title: "The One Habit That Decides Whether You Get Blindsided | Booker Accounting",
    description: "Bookkeeping never feels urgent — right up until the year it needed to be right. Learn how clean books protect your business infrastructure.",
    url: "https://www.bookeraccounting.com/blog/the-one-habit-that-decides-whether-you-get-blindsided",
  },
  twitter: {
    title: "The One Habit That Decides Whether You Get Blindsided | Booker Accounting",
    description: "Bookkeeping never feels urgent — right up until the year it needed to be right. Learn how clean books protect your business infrastructure.",
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The One Habit That Decides Whether You Get Blindsided",
    "datePublished": "2025-06-01T08:00:00Z",
    "dateModified": "2025-06-01T08:00:00Z",
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
      "@id": "https://www.bookeraccounting.com/blog/the-one-habit-that-decides-whether-you-get-blindsided"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <OneHabitClient />
    </>
  );
}
