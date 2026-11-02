'use client';

import Script from 'next/script';

/**
 * Utmify UTM tracking script.
 * Captures UTM parameters from the URL and appends them to outbound links.
 */
export default function UtmifyScript() {
  return (
    <Script
      id="utmify-script"
      src="https://cdn.utmify.com.br/scripts/utms/latest.js"
      data-utmify-prevent-xcod-sck=""
      data-utmify-prevent-subids=""
      async
      defer
      strategy="lazyOnload"
    />
  );
}
