import type { Metadata } from "next";
import Script from "next/script";
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
      {/* Microsoft Clarity — projeto "TEA E TOD" (id único para não duplicar) */}
      <Script id="microsoft-clarity-teatod" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "z27p2xc0b3");`}
      </Script>
      {children}
    </div>
  );
}
