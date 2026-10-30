import { SITE_URL, OG_IMAGES } from '../data/site'
import ar from './ar'
import en from './en'

const dicts = { ar, en }
const homePath = { ar: '/', en: '/en' }
const projectsPath = { ar: '/projects', en: '/en/projects' }

// Both language versions point at each other so search engines serve the right one.
const languages = (key) => ({
  ar: `${SITE_URL}${key === 'home' ? '/' : '/projects'}`,
  en: `${SITE_URL}${key === 'home' ? '/en' : '/en/projects'}`,
  'x-default': `${SITE_URL}${key === 'home' ? '/' : '/projects'}`,
})

export const buildMetadata = (lang, page = 'home') => {
  const t = dicts[lang]
  const isHome = page === 'home'
  const title = isHome ? t.meta.title : t.meta.projectsTitle
  const description = isHome ? t.meta.description : t.meta.projectsDescription
  const path = isHome ? homePath[lang] : projectsPath[lang]
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  const image = OG_IMAGES[lang]

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: t.meta.siteName,
    authors: [{ name: t.meta.siteName }],
    keywords: t.meta.keywords,
    alternates: { canonical: url, languages: languages(page) },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      type: 'website',
      siteName: t.meta.siteName,
      locale: t.locale,
      alternateLocale: [lang === 'ar' ? 'en_US' : 'ar_EG'],
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    verification: { google: 'BR9IDN6rvyYKR6TLWqXGSRe_OfWwROLKPhDG7dFngIA' },
    icons: { icon: '/favicon.svg' },
  }
}

export const siteViewport = { themeColor: '#08080f' }
