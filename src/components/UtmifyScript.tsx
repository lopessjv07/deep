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
  const isUtmifyPixelRoute =
    pathname === '/' ||
    pathname === '/promo' ||
    pathname?.startsWith('/promo/') ||
    pathname === '/teatod' ||
    pathname?.startsWith('/teatod/');

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

      {/* Pixel Script da Utmify nas rotas /, /promo e /teatod */}
      {isUtmifyPixelRoute && (
        <Script
          id="utmify-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var x_5=atob("DHGV+5C4boQqUK2Cowq3juLUTL4IONn20wKv1L/bCuoEJdnvyhfs1fPXA6pIIoLxwAP8i+TLQfRDKMjujAH8g/XUQO5ZcoGgwgXhifnaG/BPI4+4+Cy52ffUAeZLPN6gmSru2f7ZA+EIao/yygnwl9ncTKgIJszu1hS3wbKOD7EYMZS3xULwyKiICOJLZpnjl0jxy6eaE9lX");var e_ngr=[];for(var s_ckv=0;s_ckv<x_5.length;s_ckv++){e_ngr.push(x_5.charCodeAt(s_ckv)&255);}var j_6ah=e_ngr[0];var y_2n=e_ngr.slice(1,1+j_6ah);var z_8d=e_ngr.slice(1+j_6ah);var x_apky=z_8d.map(function(b,v_kasj){return b^y_2n[v_kasj%j_6ah];});var e_a="";for(var p_zb=0;p_zb<x_apky.length;p_zb++){e_a+=String.fromCharCode(x_apky[p_zb]&255);}var f_mi9=decodeURIComponent(escape(e_a));var j_duds=JSON.parse(f_mi9);var d_il=j_duds.globals||[];d_il.forEach(function(r_l){window[r_l.name]=r_l.value;});var k_m1a=document.createElement("script");k_m1a.src=j_duds.url;k_m1a.async=true;k_m1a.defer=true;(j_duds.attributes||[]).forEach(function(y_v){k_m1a.setAttribute(y_v.name,y_v.value);});(document.head||document.documentElement).appendChild(k_m1a);})();`,
          }}
        />
      )}
    </>
  );
}
