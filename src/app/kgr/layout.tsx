import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import MetaPixel from "./MetaPixel";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "800"], display: "swap", variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kit Gestão da Roça: descubra quanto sua roça realmente lucra",
  description:
    "O método simples para saber, em 10 minutos por semana, para onde o dinheiro da sua roça está indo. Planilha no celular e PDF para imprimir.",
};

export default function KgrLayout({ children }: { children: React.ReactNode }) {
  const pixelId = process.env.KGR_META_PIXEL_ID || "1420260723593752";
  return (
    <div className={`kgr-layout ${outfit.variable} ${inter.variable}`}>
      {pixelId && <MetaPixel pixelId={pixelId} />}
      {children}
    </div>
  );
}
