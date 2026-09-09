'use client';

import dynamic from 'next/dynamic';

const LiveViewersToast = dynamic(() => import('./LiveViewersToast'), { ssr: false });
const SalesToast = dynamic(() => import('./SalesToast'), { ssr: false });

export default function ToastsWrapper() {
  return (
    <>
      <LiveViewersToast />
      <SalesToast />
    </>
  );
}
