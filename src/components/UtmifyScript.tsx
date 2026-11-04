'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

/**
 * Utmify UTM tracking script and Pixel.
 * Captures UTM parameters from the URL and appends them to outbound links,
 * and tracks events with the Utmify Pixel on pages without a dedicated MetaPixel.
 */
export default function UtmifyScript() {
  const pathname = usePathname();
  const hasOwnPixel =
    pathname === '/kgr' ||
    pathname?.startsWith('/kgr/') ||
    pathname === '/dinamic' ||
    pathname?.startsWith('/dinamic/');

  return (
    <>
      {/* UTM Script para repassar os parâmetros pros links */}
      <Script
        id="utmify-script"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        async
        defer
        strategy="lazyOnload"
      />

      {/* Pixel da Utmify nas páginas que não possuem MetaPixel próprio (/kgr e /dinamic) */}
      {!hasOwnPixel && (
        <Script
          id="utmify-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "6a52a95f3e380ffa64a49d07";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
      )}
    </>
  );
}
