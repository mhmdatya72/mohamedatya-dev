import { SITE_URL } from '../../data/site'
import { allProjects, projectPath } from '../../data/projectIndex'

export const dynamic = 'force-static'

const LAST_MODIFIED = '2026-10-31T00:00:00+00:00'

const pages = [
  { path: '/', changefreq: 'monthly', priority: 1 },
  { path: '/projects', changefreq: 'monthly', priority: 0.8 },
  { path: '/en', changefreq: 'monthly', priority: 0.9 },
  { path: '/en/projects', changefreq: 'monthly', priority: 0.7 },
  ...allProjects.flatMap(({ slug }) => [
    { path: projectPath('ar', slug), changefreq: 'monthly', priority: 0.6 },
    { path: projectPath('en', slug), changefreq: 'monthly', priority: 0.5 },
  ]),
]

const entry = ({ path, changefreq, priority }) =>
  [
    '  <url>',
    `    <loc>${SITE_URL}${path}</loc>`,
    `    <lastmod>${LAST_MODIFIED}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n')

export function GET() {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    pages.map(entry).join('\n'),
    '</urlset>',
    '',
  ].join('\n')

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=0, s-maxage=3600' } })
}
