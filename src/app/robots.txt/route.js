import { SITE_URL } from '../../data/site'

export const dynamic = 'force-static'

// Plain-text robots so the Content-Signal line (not supported by the metadata robots API) can be declared.
export function GET() {
  const body = [
    'User-Agent: *',
    'Content-Signal: ai-train=no, search=yes, ai-input=yes',
    'Allow: /',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=0, s-maxage=3600' } })
}
