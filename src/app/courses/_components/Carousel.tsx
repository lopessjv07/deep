"use client";

import { useRef, useState } from "react";
import type { Img } from "../config";
import ImageSlot from "./ImageSlot";

type Props = {
  images: Img[];
  labelPrefix: string;
};

export default function Carousel({ images, labelPrefix }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    const slide = track.children[clamped] as HTMLElement | undefined;
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
    setIndex(Math.round(track.scrollLeft / step));
  };

  return (
    <div className="cnc-carousel" aria-roledescription="carrossel">
      <div className="cnc-carousel-track" ref={trackRef} onScroll={onScroll}>
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
              ratio="297 / 210"
              sizes="(max-width: 768px) 86vw, 520px"
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
              aria-label={`Ir para a página ${i + 1}`}
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

