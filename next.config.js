/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "rickandmortyapi.com",
				pathname: "/api/character/avatar/*",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
