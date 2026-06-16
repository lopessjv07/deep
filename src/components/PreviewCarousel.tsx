'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, Sparkles, BookOpen, ShieldAlert } from 'lucide-react';
import styles from './PreviewCarousel.module.css';

const CONTENT_CARDS = [
  { 
    icon: <Brain className={styles.cardIcon} />,
    title: 'Regulação do Sistema Nervoso', 
    desc: 'Mapeie o estado autonômico do paciente e aplique a intervenção correta para tirá-lo de estados de luta, fuga ou congelamento.' 
  },
  { 
    icon: <Sparkles className={styles.cardIcon} />,
    title: 'Desbloqueio Somático', 
    desc: 'Técnicas precisas para acessar e processar memórias traumáticas que ficaram presas no corpo, muito além do alcance da fala.' 
  },
  { 
    icon: <BookOpen className={styles.cardIcon} />,
    title: 'Scripts Clínicos Prontos', 
    desc: 'Mais de 90 protocolos com falas roteirizadas, indicando exatamente o que dizer e como conduzir o paciente com segurança.' 
  },
  { 
    icon: <ShieldAlert className={styles.cardIcon} />,
    title: 'Manejo de Dissociação', 
    desc: 'Como identificar sinais sutis de dissociação e trazer o paciente de volta ao momento presente sem causar retraumatização.' 
  },
];

export default function PreviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CONTENT_CARDS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CONTENT_CARDS.length - 1 ? 0 : prev + 1));
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
        {CONTENT_CARDS.map((card, idx) => (
          <div key={idx} className={styles.previewSlot}>
            {card.icon}
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
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
            {CONTENT_CARDS.map((card, idx) => (
              <div key={idx} className={styles.carouselSlide}>
                <div className={styles.previewSlot}>
                  {card.icon}
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
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
          {CONTENT_CARDS.map((_, idx) => (
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
