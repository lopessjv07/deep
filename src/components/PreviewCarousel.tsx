'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, Sparkles, BookOpen, ShieldAlert } from 'lucide-react';
import styles from './PreviewCarousel.module.css';

import Image from 'next/image';

const CARDS = [1, 2, 3, 4];

export default function PreviewCarousel({
  imagePrefix = 'material',
  imageExtension = 'webp',
  altPrefix = 'Página',
  aspectRatio = '1 / 1.414',
  captions = []
}: {
  imagePrefix?: string;
  imageExtension?: string;
  altPrefix?: string;
  aspectRatio?: string;
  captions?: { title: string; text: string }[];
} = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Mouse drag handlers for desktop/devtools simulation
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStartX(e.clientX);
    setTouchEndX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX === null) return;
    setTouchEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleMouseLeave = () => {
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className={styles.container}>
      {/* Grid visible on desktop */}
      <div className={styles.desktopGrid}>
        {CARDS.map((card, idx) => (
          <div key={idx} className={styles.cardWrapper}>
            <div className={styles.previewSlot} style={{ aspectRatio }}>
              <Image src={`/${imagePrefix}${card}.${imageExtension}`} alt={`${altPrefix} ${card}`} width={400} height={566} className={styles.previewImg} />
            </div>
            {captions && captions[idx] && (
              <div className={styles.captionContainer}>
                <h4 className={styles.captionTitle}>{captions[idx].title}</h4>
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
          style={{ cursor: touchStartX !== null ? 'grabbing' : 'grab' }}
        >
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {CARDS.map((card, idx) => (
              <div key={idx} className={styles.carouselSlide}>
                <div className={styles.cardWrapper}>
                  <div className={styles.previewSlot} style={{ aspectRatio }}>
                    <Image src={`/${imagePrefix}${card}.${imageExtension}`} alt={`${altPrefix} ${card}`} width={400} height={566} className={styles.previewImg} />
                  </div>
                  {captions && captions[idx] && (
                    <div className={styles.captionContainer} style={{ padding: '0 16px 16px 16px' }}>
                      <h4 className={styles.captionTitle}>{captions[idx].title}</h4>
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
          {CARDS.map((_, idx) => (
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
