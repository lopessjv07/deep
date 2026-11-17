"use client";

import { useRef, useState } from "react";
import type { Img } from "../config";
import ImageSlot from "./ImageSlot";

type Props = {
  images: Img[];
  labelPrefix: string;
  ratio?: string;
};

export default function Carousel({ images, labelPrefix, ratio = "1600 / 1131" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
      setIndex(clamped);
    }
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "16");
    const step = first.offsetWidth + gap;
    if (step > 0) {
      const idx = Math.round(track.scrollLeft / step);
      const clamped = Math.max(0, Math.min(images.length - 1, idx));
      setIndex(clamped);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.offsetLeft;
    startScrollLeft.current = track.scrollLeft;
    track.style.cursor = "grabbing";
    track.style.scrollSnapType = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX.current) * 1.3;
    track.scrollLeft = startScrollLeft.current - walk;
  };

  const onMouseUpOrLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const track = trackRef.current;
    if (!track) return;
    track.style.cursor = "grab";
    track.style.scrollSnapType = "x mandatory";

    // Smooth snap to closest slide
    const first = track.children[0] as HTMLElement | undefined;
    if (first) {
      const gap = parseFloat(getComputedStyle(track).columnGap || "16");
      const step = first.offsetWidth + gap;
      if (step > 0) {
        const closest = Math.max(0, Math.min(images.length - 1, Math.round(track.scrollLeft / step)));
        goTo(closest);
      }
    }
  };

  return (
    <div className="cnc-carousel" aria-roledescription="carrossel">
      <div
        className="cnc-carousel-track"
        ref={trackRef}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
        style={{ cursor: "grab" }}
      >
        {images.map((img, i) => (
          <div
            className="cnc-carousel-slide"
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${images.length}`}
          >
            <ImageSlot
              img={img}
              label={`${labelPrefix} ${i + 1}`}
              ratio={ratio}
              sizes="(max-width: 640px) 92vw, 580px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="cnc-carousel-controls">
        <button
          type="button"
          className="cnc-carousel-btn"
          onClick={() => goTo(index - 1)}
          disabled={index <= 0}
          aria-label="Página anterior"
        >
          ‹
        </button>
        <div className="cnc-carousel-dots">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`cnc-carousel-dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para a imagem ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button
          type="button"
          className="cnc-carousel-btn"
          onClick={() => goTo(index + 1)}
          disabled={index >= images.length - 1}
          aria-label="Próxima página"
        >
          ›
        </button>
      </div>
    </div>
  );
}

