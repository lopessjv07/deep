import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MetaPixel from "../components/MetaPixel";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit de Protocolos Somáticos | NeuroSoma",
  description:
    "+90 Protocolos Somáticos para psicólogos, psiquiatras e terapeutas. Desbloqueie o corpo quando a fala chega no limite. Acesso imediato com garantia de 7 dias.",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={plusJakarta.className}>
      <head>
        {/* Resource Hints to speed up Meta Pixel loading and Kirvano checkout transition */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://pay.kirvano.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pay.kirvano.com" />
      </head>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
