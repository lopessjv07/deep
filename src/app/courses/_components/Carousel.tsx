"use client";

import { useEffect, useRef, useState } from "react";
import type { Img } from "../config";
import ImageSlot from "./ImageSlot";

type Props = {
  images: Img[];
  labelPrefix: string;
  ratio?: string;
  /** Quantidade de imagens visíveis no desktop (>= 769px). No celular é sempre 1. */
  desktopPerView?: number;
  className?: string;
};

const GAP = 16;

export default function Carousel({
  images,
  labelPrefix,
  ratio = "1600 / 1131",
  desktopPerView = 1,
  className = "",
}: Props) {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const pointerId = useRef<number | null>(null);
  const lockedAxis = useRef<"x" | "y" | null>(null);

  // Responsivo: 1 por vez no celular, `desktopPerView` no desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const update = () => setPerView(mq.matches ? Math.min(desktopPerView, images.length) : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [desktopPerView, images.length]);

  const maxIndex = Math.max(0, images.length - perView);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(maxIndex, i)));

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointerId.current = e.pointerId;
    startX.current = e.clientX;
    startY.current = e.clientY;
    lockedAxis.current = e.pointerType === "mouse" ? "x" : null;
    setDragging(true);
    setDragX(0);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (pointerId.current !== e.pointerId) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    if (!lockedAxis.current) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      lockedAxis.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (lockedAxis.current === "x") {
        viewportRef.current?.setPointerCapture(e.pointerId);
      }
    }
    if (lockedAxis.current !== "x") return;

    // Resistência nas pontas
    const atEdge = (index === 0 && dx > 0) || (index === maxIndex && dx < 0);
    setDragX(atEdge ? dx * 0.3 : dx);
  };

  const endDrag = (e: React.PointerEvent) => {
    if (pointerId.current !== e.pointerId) return;
    pointerId.current = null;
    setDragging(false);

    if (lockedAxis.current === "x") {
      const width = viewportRef.current?.offsetWidth ?? 1;
      const slideWidth = (width + GAP) / perView;
      const threshold = Math.min(60, slideWidth * 0.2);
      if (Math.abs(dragX) > threshold) {
        const steps = Math.max(1, Math.round(Math.abs(dragX) / slideWidth));
        goTo(index + (dragX < 0 ? steps : -steps));
      }
    }
    lockedAxis.current = null;
    setDragX(0);
  };

  const slideBasis = `calc((100% - ${GAP * (perView - 1)}px) / ${perView})`;
  const translate = `calc(${-index} * (100% + ${GAP}px) / ${perView} + ${dragX}px)`;

  return (
    <div
      className={`cnc-carousel ${className}`}
      aria-roledescription="carrossel"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goTo(index + 1);
        if (e.key === "ArrowLeft") goTo(index - 1);
      }}
    >
      <div
        className="cnc-carousel-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{ cursor: dragging ? "grabbing" : "grab" }}
      >
        <div
          className="cnc-carousel-track"
          style={{
            gap: `${GAP}px`,
            transform: `translate3d(${translate}, 0, 0)`,
            transition: dragging ? "none" : "transform 0.4s ease",
          }}
        >
          {images.map((img, i) => (
            <div
              className="cnc-carousel-slide"
              key={i}
              style={{ flex: `0 0 ${slideBasis}` }}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${images.length}`}
            >
              <ImageSlot
                img={img}
                label={img?.alt || `${labelPrefix} ${i + 1}`}
                ratio={ratio}
                sizes="(max-width: 768px) 92vw, 300px"
                priority={i < perView}
              />
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="cnc-carousel-controls">
          <button
            type="button"
            className="cnc-carousel-btn"
            onClick={() => goTo(index - 1)}
            disabled={index <= 0}
            aria-label="Anterior"
          >
            ‹
          </button>
          <div className="cnc-carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                type="button"
                key={i}
                className={`cnc-carousel-dot${i === index ? " is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para a posição ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="cnc-carousel-btn"
            onClick={() => goTo(index + 1)}
            disabled={index >= maxIndex}
            aria-label="Próxima"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
