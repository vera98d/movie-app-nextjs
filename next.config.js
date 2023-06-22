/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
    unoptimized: true,
    imageQuality: 60,
  },
  compiler: {
    styledComponents: true
  },

}
