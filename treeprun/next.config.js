const { ROOTPAGE_URL } = process.env;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: "/treeprun",
    async redirects() {
      return [
        {
          source: "/",
          destination: `${ROOTPAGE_URL}`,
          basePath: false,
          permanent: false,
        },
      ]
    },
  }
  
module.exports = nextConfig
