'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './PreviewCarousel.module.css';

const IMAGES = [
  { src: '/1.webp', alt: 'Protocolo Somático - Página de exemplo 01', width: 500, height: 707 },
  { src: '/2.webp', alt: 'Protocolo Somático - Página de exemplo 02', width: 500, height: 708 },
  { src: '/3.webp', alt: 'Protocolo Somático - Página de exemplo 03', width: 500, height: 750 },
  { src: '/4.webp', alt: 'Protocolo Somático - Página de exemplo 04', width: 500, height: 707 },
];

export default function PreviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      {/* Grid visible on desktop */}
      <div className={styles.desktopGrid}>
        {IMAGES.map((img, idx) => (
          <div key={idx} className={styles.previewSlot}>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className={styles.previewImg}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Carousel visible on mobile */}
      <div className={styles.mobileCarousel}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide} aria-label="Imagem anterior">
          <ChevronLeft size={20} />
        </button>
        
        <div className={styles.carouselTrackWrapper}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {IMAGES.map((img, idx) => (
              <div key={idx} className={styles.carouselSlide}>
                <div className={styles.previewSlot}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className={styles.previewImg}
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextSlide} aria-label="Próxima imagem">
          <ChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className={styles.indicators}>
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${currentIndex === idx ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
