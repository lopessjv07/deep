'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './PreviewCarousel.module.css';

import Image from 'next/image';

export default function PreviewCarousel({
  imagePrefix = 'material',
  imageExtension = 'webp',
  altPrefix = 'Página',
  aspectRatio = '1 / 1.414',
  count = 4,
  captions = []
}: {
  imagePrefix?: string;
  imageExtension?: string;
  altPrefix?: string;
  aspectRatio?: string;
  count?: number;
  captions?: { title: string; text: string }[];
} = {}) {
  const cards = Array.from({ length: count }, (_, i) => i + 1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      setIsDragging(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsDragging(false);
  };

  // Mouse drag handlers for desktop/devtools simulation
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX.current === null) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      setIsDragging(false);
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    touchStartX.current = null;
    touchEndX.current = null;
    setIsDragging(false);
  };

  const blurPlaceholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjU2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjFFRkU4Ii8+PC9zdmc+";

  return (
    <div className={styles.container}>
      {/* Grid visible on desktop */}
      <div className={styles.desktopGrid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.cardWrapper}>
            <div className={styles.previewSlot} style={{ aspectRatio }}>
              <Image
                src={`/${imagePrefix}${card}.${imageExtension}`}
                alt={`${altPrefix} ${card}`}
                width={500}
                height={707}
                className={styles.previewImg}
                quality={70}
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 33vw, 280px"
                loading="lazy"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
                decoding="async"
              />
            </div>
            {captions && captions[idx] && (
              <div className={styles.captionContainer}>
                <h3 className={styles.captionTitle}>{captions[idx].title}</h3>
                <p className={styles.captionText}>{captions[idx].text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Carousel visible on mobile */}
      <div className={styles.mobileCarousel}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide} aria-label="Imagem anterior">
          <ChevronLeft size={20} />
        </button>
        
        <div 
          className={styles.carouselTrackWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, idx) => (
              <div key={idx} className={styles.carouselSlide}>
                <div className={styles.cardWrapper}>
                  <div className={styles.previewSlot} style={{ aspectRatio }}>
                    <Image
                      src={`/${imagePrefix}${card}.${imageExtension}`}
                      alt={`${altPrefix} ${card}`}
                      width={500}
                      height={707}
                      className={styles.previewImg}
                      quality={70}
                      sizes="(max-width: 768px) 90vw, 360px"
                      loading={idx === currentIndex ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL={blurPlaceholder}
                      decoding="async"
                    />
                  </div>
                  {captions && captions[idx] && (
                    <div className={styles.captionContainer} style={{ padding: '0 16px 16px 16px' }}>
                      <h3 className={styles.captionTitle}>{captions[idx].title}</h3>
                      <p className={styles.captionText}>{captions[idx].text}</p>
                    </div>
                  )}
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
          {cards.map((_, idx) => (
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
