/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ]
  },
  images: {
    domains: ['revery-integration-tools.s3.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/index.html',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
