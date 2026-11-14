import type { Metadata } from "next";

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
  return <>{children}</>;
}

