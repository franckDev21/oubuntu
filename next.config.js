/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
		// domains: ['*'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: '**.placeholder.com',
			},
			{
				protocol: 'https',
				hostname: '**.imagecdn.app',
			},
			{
				protocol: 'https',
				hostname: '**.ui-avatars.com',
			},
      {
        protocol: 'https',
        hostname: 'randomuser.me'
      },
			{
        protocol: 'http',
        hostname: 'localhost'
      },
		],
	},

}

module.exports = nextConfig
