import { SITE_URL } from '../data/site'

const lastModified = new Date('2026-10-30')

// Each page lists its alternate-language version so search engines connect Arabic and English.
const entry = (path, altPath, priority, images) => ({
  url: `${SITE_URL}${path}`,
  lastModified,
  changeFrequency: 'monthly',
  priority,
  ...(images ? { images } : {}),
  alternates: { languages: { ar: `${SITE_URL}${path.startsWith('/en') ? altPath : path}`, en: `${SITE_URL}${path.startsWith('/en') ? path : altPath}` } },
})

export default function sitemap() {
  return [
    entry('/', '/en', 1, [`${SITE_URL}/og-image-ar.png`]),
    entry('/en', '/', 0.9, [`${SITE_URL}/og-image.png`]),
    entry('/projects', '/en/projects', 0.8),
    entry('/en/projects', '/projects', 0.7),
  ]
}
