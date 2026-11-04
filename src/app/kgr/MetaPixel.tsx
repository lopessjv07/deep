"use client";

import Script from "next/script";
import { useEffect } from "react";

type Fbq = (...args: unknown[]) => void;
declare global {
  interface Window {
    fbq?: Fbq;
  }
}

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : undefined;
}

function newEventId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Dispara o evento no Pixel (browser) e na Conversions API (servidor) com o mesmo event_id. */
function track(eventName: string) {
  const eventId = newEventId();
  window.fbq?.("track", eventName, {}, { eventID: eventId });

  let fbc = getCookie("_fbc");
  const fbclid = new URLSearchParams(location.search).get("fbclid");
  if (!fbc && fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;

  const body = JSON.stringify({
    event_name: eventName,
    event_id: eventId,
    event_source_url: location.href,
    fbp: getCookie("_fbp"),
    fbc,
  });
  fetch("/api/kgr/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function MetaPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    // pequeno atraso para o fbevents criar o cookie _fbp antes do envio ao CAPI
    const t = setTimeout(() => track("PageView"), 800);

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest(".kgr-btn");
      if (el) track("InitiateCheckout");
    };
    document.addEventListener("click", onClick);
    return () => {
      clearTimeout(t);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <Script id="kgr-meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');`}
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
