/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'uploads-ssl.webflow.com',
            port: '',
            pathname: '/644aa1d7e1cf402db3aaaead/**',
          },
        ],
      },
}

module.exports = nextConfig
