import type { Metadata } from "next";

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
    <div className="teatod-layout">
      {children}
    </div>
  );
}
