"use client";

import Script from "next/script";

/**
 * Google Ads & Google Tag Manager tracker
 * Reads NEXT_PUBLIC_GOOGLE_ADS_ID (e.g., AW-123456789) or NEXT_PUBLIC_GTM_ID from environment
 */
export default function GoogleAdsTag() {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  if (!googleAdsId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
      />
      <Script
        id="google-ads-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

