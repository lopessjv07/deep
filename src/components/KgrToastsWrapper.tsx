'use client';

import dynamic from 'next/dynamic';

const KgrLiveViewersToast = dynamic(() => import('./KgrLiveViewersToast'), { ssr: false });
const KgrSalesToast = dynamic(() => import('./KgrSalesToast'), { ssr: false });

export default function KgrToastsWrapper() {
  return (
    <>
      <KgrLiveViewersToast />
      <KgrSalesToast />
    </>
  );
}