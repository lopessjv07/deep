"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export type CartilhaSlide = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type Props = {
  items: CartilhaSlide[];
};

export default function XabCarousel({ items }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "14");
    const step = first.offsetWidth + gap;
    if (step > 0) {
      setIndex(Math.round(track.scrollLeft / step));
    }
    setCanPrev(track.scrollLeft > 10);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 10);
  };

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.offsetLeft;
    startScrollLeft.current = track.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    track.scrollLeft = startScrollLeft.current - walk;
  };

  const onMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <div className="cnc-carousel" aria-roledescription="carrossel">
      <div
        className="cnc-carousel-track"
        ref={trackRef}
        onScroll={updateControls}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        {items.map((item, i) => (
          <div
            className="cnc-carousel-slide"
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${items.length}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width || 1100}
              height={item.height || 1514}
              sizes="(max-width: 640px) 100vw, (max-width: 880px) 50vw, (max-width: 1100px) 33vw, 280px"
              className="w-full h-auto block rounded-[12px]"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="cnc-carousel-controls">
        <button
          type="button"
          className="cnc-carousel-btn"
          onClick={() => goTo(index - 1)}
          disabled={!canPrev}
          aria-label="Página anterior"
        >
          ‹
        </button>
        <div className="cnc-carousel-dots">
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`cnc-carousel-dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para a página ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button
          type="button"
          className="cnc-carousel-btn"
          onClick={() => goTo(index + 1)}
          disabled={!canNext}
          aria-label="Próxima página"
        >
          ›
        </button>
      </div>
    </div>
  );
}

