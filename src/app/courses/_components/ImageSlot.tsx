import Image from "next/image";
import type { Img } from "../config";

type Props = {
  img: Img;
  /** Texto exibido no espaço reservado enquanto a imagem não existir */
  label: string;
  /** Proporção usada no espaço reservado. Ex.: "16 / 10" */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export default function ImageSlot({
  img,
  label,
  ratio = "4 / 3",
  sizes = "(max-width: 768px) 92vw, 720px",
  priority = false,
  className = "",
}: Props) {
  if (img) {
    return (
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes={sizes}
        priority={priority}
        className={`cnc-img ${className}`}
      />
    );
  }

  return (
    <div
      className={`cnc-img-placeholder ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m21 16-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

