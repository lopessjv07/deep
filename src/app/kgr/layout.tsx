import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kit Gestão da Roça: descubra quanto sua roça realmente lucra",
  description:
    "O método simples para saber, em 10 minutos por semana, para onde o dinheiro da sua roça está indo. Planilha no celular e PDF para imprimir.",
};

export default function KgrLayout({ children }: { children: React.ReactNode }) {
  return <div className="kgr-layout">{children}</div>;
}
