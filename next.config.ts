// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 habilita la exportación estática
  trailingSlash: true, // opcional: para rutas tipo /about/
};

module.exports = nextConfig;
