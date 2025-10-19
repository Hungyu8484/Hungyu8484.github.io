/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/aes-research': { page: '/aes-research' },
      '/linguistic-research': { page: '/linguistic-research' },
      '/tedx-speech': { page: '/tedx-speech' },
      '/physics-club': { page: '/physics-club' },
      '/congruence': { page: '/congruence' },
      '/physics-math-school': { page: '/physics-math-school' }
    }
  }
}

module.exports = nextConfig


