import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./courses.css";

const heading = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--cnc-font-heading",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--cnc-font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "300 Pegadinhas Comentadas para Concursos | Guia de Revisão",
  description:
    "Um guia visual de Português, Matemática, Raciocínio Lógico e Informática para reconhecer armadilhas, compreender a regra correta e direcionar sua revisão para concursos públicos.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`cnc ${heading.variable} ${body.variable}`}>{children}</div>
  );
}
