"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Img } from "../config";
import ImageSlot from "./ImageSlot";

type Props = {
  img: Img;
  label: string;
  caption: string;
  ratio?: string;
};

/** Imagem que pode ser ampliada em tela cheia (usa <dialog> nativo). */
export default function Zoomable({ img, label, caption, ratio = "297 / 210" }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <figure className="cnc-zoom">
      <button
        type="button"
        className="cnc-zoom-trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Ampliar: ${caption}`}
      >
        <ImageSlot img={img} label={label} ratio={ratio} sizes="(max-width: 768px) 92vw, 360px" />
        <span className="cnc-zoom-badge" aria-hidden="true">
          🔍 Ampliar
        </span>
      </button>
      <figcaption>{caption}</figcaption>

      <dialog
        ref={dialogRef}
        className="cnc-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="cnc-dialog-inner">
          <button
            type="button"
            className="cnc-dialog-close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fechar"
          >
            ×
          </button>
          {img ? (
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="96vw"
              className="cnc-dialog-img"
            />
          ) : (
            <ImageSlot img={null} label={label} ratio={ratio} />
          )}
          <p className="cnc-dialog-caption">{caption}</p>
        </div>
      </dialog>
    </figure>
  );
}

