import { SITE_URL, OG_IMAGE } from '../data/site'

export default function sitemap() {
  const lastModified = new Date('2026-10-30')
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1, images: [OG_IMAGE] },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
