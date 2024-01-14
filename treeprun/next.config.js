const { ROOTPAGE_URL } = process.env;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: "/treeprun",
    async redirects() {
      return [
        {
          source: "/home",
          destination: `${ROOTPAGE_URL}`,
          permanent: false,
        },
      ]
    },
  }
  
module.exports = nextConfig
