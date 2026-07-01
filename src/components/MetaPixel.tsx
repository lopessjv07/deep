'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '2313907359416805';

export default function MetaPixel() {
  useEffect(() => {
    // 1. Initial PageView client + server
    const pageViewEventId = 'pageview_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
    
    // Track PageView on client side
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView', {}, { eventID: pageViewEventId });
    }

    // Track PageView on server side (CAPI)
    fetch('/api/pixel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName: 'PageView',
        eventId: pageViewEventId,
        eventSourceUrl: window.location.href,
      }),
    }).catch((err) => console.error('Failed to send PageView to CAPI:', err));

    // 2. Global listener for outbound links to Kirvano checkout
    const handleOutboundLinkClick = async (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href') || '';
        if (href.includes('pay.kirvano.com')) {
          const checkoutEventId = 'init_checkout_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
          
          const customData = {
            value: 29.00,
            currency: 'BRL',
            content_name: 'Kit de Protocolos Somáticos',
            content_category: 'Ebook / Course',
            content_ids: ['kit-protocolos-somaticos'],
            content_type: 'product',
            num_items: 1
          };

          // Client-side tracking
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', customData, { eventID: checkoutEventId });
          }
          
          // Server-side CAPI tracking
          try {
            await fetch('/api/pixel', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                eventName: 'InitiateCheckout',
                eventId: checkoutEventId,
                eventSourceUrl: window.location.href,
                customData,
              }),
            });
          } catch (err) {
            console.error('Failed to send InitiateCheckout to CAPI:', err);
          }
        }
      }
    };

    document.addEventListener('click', handleOutboundLinkClick);
    return () => {
      document.removeEventListener('click', handleOutboundLinkClick);
    };
  }, []);

  return (
    <>
      {/* Facebook Pixel Code */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
