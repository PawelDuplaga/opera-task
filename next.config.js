/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/slides',
        destination: `http://localhost:8080/slides`,
      },
    ]
  },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8080',
            pathname: '/images/**',
          },
        ],
      },
}

module.exports = nextConfig
