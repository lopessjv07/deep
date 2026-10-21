import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"], display: "swap", variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Protocolo de Diferenciação: Manejo de Comportamento",
  description: "O método para saber se a crise é sensorial (TEA) ou oposição (TOD) e o que fazer em cada uma.",
};

export default function TeatodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`teatod-layout ${inter.variable} ${nunito.variable}`}>
      {children}
    </div>
  );
}
