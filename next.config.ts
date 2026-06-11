import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um servidor standalone mínimo para deploy Docker
  output: "standalone",

  // Permite proxy reverso (Traefik/Coolify) no modo dev
  allowedDevOrigins: ["neurosoma.online", "*.neurosoma.online"],

  // Desabilita otimização de imagem para self-hosting simples
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
