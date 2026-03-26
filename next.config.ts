import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Exportación estática para GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages no soporta optimización de imágenes
  },
  // Reemplaza 'My-Love' con el nombre exacto de tu repositorio en GitHub
  basePath: '/My-Love',
  assetPrefix: '/My-Love',
};

export default nextConfig;