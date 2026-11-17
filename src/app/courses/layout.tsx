import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import CoursesMetaPixel from "./_components/MetaPixel";
import CoursesCountdownBar from "./_components/CoursesCountdownBar";
import CoursesToastsWrapper from "./_components/CoursesToastsWrapper";
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
  const pixel = process.env.COURSES_META_PIXEL || "";

  return (
    <div className={`cnc ${heading.variable} ${body.variable}`}>
      <CoursesCountdownBar />
      <CoursesToastsWrapper />
      <Script
        id="cashflow-tracking"
        src="https://site.packpronto.com.br/t/p.js?w=5d8e9518-19c6-4853-bac0-da5892a0a2e4&o=630a8c8d-d419-4d58-8b45-08188b4088c3"
        data-offer="630a8c8d-d419-4d58-8b45-08188b4088c3"
        data-nowprocket="true"
        data-no-minify="1"
        data-no-optimize="1"
        data-cfasync="false"
        strategy="afterInteractive"
      />
      {pixel && <CoursesMetaPixel pixelId={pixel} />}
      {children}
    </div>
  );
}
