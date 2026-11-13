import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CARTILHAS VISUAIS DE VENTILAÇÃO MECÂNICA + PLANTÃO SEM MEDO",
  description:
    "Entenda os modos, leia as curvas e saiba o que fazer quando o ventilador apitar com cartilhas visuais e checklists práticos.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function XabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

