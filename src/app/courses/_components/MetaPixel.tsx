"use client";

import Script from "next/script";
import { useEffect } from "react";

type Fbq = (...args: unknown[]) => void;
declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export default function CoursesMetaPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    // Pequeno atraso para garantir que o script carregou
    const t = setTimeout(() => {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "PageView");
      }
    }, 500);

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest('a[href*="kirvano.com"], a[href*="kiwify.com"]');
      if (el && typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "InitiateCheckout");
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      clearTimeout(t);
      document.removeEventListener("click", onClick);
    };
  }, []);

  if (!pixelId) return null;

  return (
    <>
      <Script id="courses-meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');
fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

