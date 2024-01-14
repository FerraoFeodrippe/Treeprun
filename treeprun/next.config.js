const { ROOTPAGE_URL } = process.env;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: "/treeprun",
    async rewrites() {
      return [
        {
          source: "/treeprun/home",
          destination: `${ROOTPAGE_URL}`,
        },
      ]
    },
  }
  
module.exports = nextConfig
