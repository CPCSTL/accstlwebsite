/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  basePath: '',
  images: {
    remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
},
  images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
            {
              protocol: "http",
              hostname: "**",
            },
          ],
    },
  

}

module.exports = nextConfig
