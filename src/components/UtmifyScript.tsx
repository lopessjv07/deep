'use client';

import Script from 'next/script';

/**
 * Utmify UTM tracking script.
 * Captures UTM parameters from the URL and appends them to outbound links
 * (e.g. Kirvano checkout), enabling accurate attribution in the Utmify dashboard.
 *
 * Docs: https://utmify.gitbook.io/central-de-ajuda/configuracoes-de-scripts/configurando-o-script-de-utms-em-minhas-paginas
 */
export default function UtmifyScript() {
  return (
    <Script
      id="utmify-script"
      src="https://cdn.utmify.com.br/scripts/utms/latest.js"
      data-utmify-prevent-xcod-sck
      data-utmify-prevent-subids
      strategy="afterInteractive"
    />
  );
}
