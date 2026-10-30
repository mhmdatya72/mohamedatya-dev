import { SITE_URL } from '../../data/site'

export const dynamic = 'force-static'

const LAST_MODIFIED = '2026-10-30'

// Each page lists its alternate-language version so search engines connect Arabic and English.
const pages = [
  { path: '/', alt: '/en', priority: 1, image: '/og-image-ar.png' },
  { path: '/en', alt: '/', priority: 0.9, image: '/og-image.png' },
  { path: '/projects', alt: '/en/projects', priority: 0.8 },
  { path: '/en/projects', alt: '/projects', priority: 0.7 },
]

const entry = ({ path, alt, priority, image }) => {
  const isEnglish = path.startsWith('/en')
  const ar = isEnglish ? alt : path
  const en = isEnglish ? path : alt
  return [
    '  <url>',
    `    <loc>${SITE_URL}${path}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}${ar}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${en}" />`,
    image ? `    <image:image><image:loc>${SITE_URL}${image}</image:loc></image:image>` : null,
    `    <lastmod>${LAST_MODIFIED}</lastmod>`,
    '    <changefreq>monthly</changefreq>',
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].filter(Boolean).join('\n')
}

// Served as XML for crawlers; the xml-stylesheet line only affects how browsers display it.
export function GET() {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    pages.map(entry).join('\n'),
    '</urlset>',
    '',
  ].join('\n')

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=0, s-maxage=3600' } })
}
