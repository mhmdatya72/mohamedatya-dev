/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { globalNotFound: true },
  async rewrites() {
    const markdown = [{ type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' }]
    return {
      beforeFiles: [
        { source: '/', has: markdown, destination: '/md/ar' },
        { source: '/en', has: markdown, destination: '/md/en' },
      ],
    }
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        source: '/',
        headers: [
          { key: 'Link', value: '</sitemap.xml>; rel="sitemap"; type="application/xml", </en>; rel="alternate"; hreflang="en", </>; rel="alternate"; hreflang="ar"' },
          { key: 'Vary', value: 'Accept' },
        ],
      },
      {
        source: '/en',
        headers: [
          { key: 'Link', value: '</sitemap.xml>; rel="sitemap"; type="application/xml", </>; rel="alternate"; hreflang="ar", </en>; rel="alternate"; hreflang="en"' },
          { key: 'Vary', value: 'Accept' },
        ],
      },
      {
        source: '/:file*.(webp|png|svg|pdf)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ]
  },
}

export default nextConfig
