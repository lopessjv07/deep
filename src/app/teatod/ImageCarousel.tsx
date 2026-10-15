'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const IMAGES = Array.from({ length: 9 }, (_, i) => `/teatod/${i + 2}.jpeg`);

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const total = Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth - 0.01));
    setPages(total);
    setPage(Math.round(track.scrollLeft / track.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const goTo = (p: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(p, pages - 1));
    track.scrollTo({ left: target * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <button
        id="carousel-prev"
        className="carousel-arrow carousel-arrow--prev"
        onClick={() => goTo(page - 1)}
        disabled={page === 0}
        aria-label="Imagens anteriores"
      >
        ‹
      </button>

      <div className="carousel-track" ref={trackRef} onScroll={measure}>
        {IMAGES.map((src, i) => (
          <div className="carousel-slide" key={src}>
            <img src={src} alt={`Página do material ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <button
        id="carousel-next"
        className="carousel-arrow carousel-arrow--next"
        onClick={() => goTo(page + 1)}
        disabled={page >= pages - 1}
        aria-label="Próximas imagens"
      >
        ›
      </button>

      <div className="carousel-dots">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            id={`carousel-dot-${i}`}
            className={`carousel-dot${i === page ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para o grupo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
