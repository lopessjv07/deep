'use client';

import dynamic from 'next/dynamic';

const LiveViewersToast = dynamic(() => import('./LiveViewersToast'), { ssr: false });
const DinamicSalesToast = dynamic(() => import('./DinamicSalesToast'), { ssr: false });

export default function DinamicToastsWrapper() {
  return (
    <>
      <LiveViewersToast />
      <DinamicSalesToast />
    </>
  );
}

