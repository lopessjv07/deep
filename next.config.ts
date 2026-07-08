import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita o compilador do React para otimização automática de renderização
  reactCompiler: true,

  // Gera um servidor standalone mínimo para deploy Docker
  output: "standalone",

  // Permite proxy reverso (Traefik/Coolify) no modo dev
  allowedDevOrigins: ["neurosoma.online", "*.neurosoma.online"],

  // Otimização de imagem ativa — redimensiona, converte formato e gera srcset automático
  images: {
    // Formatos de saída: AVIF (menor) com fallback WebP
    formats: ["image/avif", "image/webp"],
    // Breakpoints de dispositivo alinhados com o layout do site
    deviceSizes: [640, 750, 828, 1080, 1200],
    // Tamanhos menores para imagens que não ocupam tela cheia
    imageSizes: [128, 256, 384],
    // Cache longo — imagens de marketing são estáticas
    minimumCacheTTL: 2678400, // 31 dias
  },
};

export default nextConfig;
