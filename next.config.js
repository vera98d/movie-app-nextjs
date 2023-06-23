/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
    imageQuality: 60,
  },
  compiler: {
    styledComponents: true
  },

}
