'use client';

import dynamic from 'next/dynamic';

const CoursesLiveViewersToast = dynamic(() => import('./CoursesLiveViewersToast'), { ssr: false });
const CoursesSalesToast = dynamic(() => import('./CoursesSalesToast'), { ssr: false });

export default function CoursesToastsWrapper() {
  return (
    <>
      <CoursesLiveViewersToast />
      <CoursesSalesToast />
    </>
  );
}

