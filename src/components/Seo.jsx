import { useEffect } from 'react'
import { SITE_URL, SITE_NAME, OG_IMAGE } from '../data/site'

const upsert = (selector, create, value, attr = 'content') => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

const meta = (key, value, by = 'name') =>
  upsert(`meta[${by}="${key}"]`, () => {
    const el = document.createElement('meta')
    el.setAttribute(by, key)
    return el
  }, value)

// Per-route head management: title, description, canonical, social tags and JSON-LD.
const Seo = ({ title, description, path = '/', noindex = false, jsonLd = [] }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    document.title = title
    meta('description', description)
    meta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1')
    meta('og:type', 'website', 'property')
    meta('og:site_name', SITE_NAME, 'property')
    meta('og:title', title, 'property')
    meta('og:description', description, 'property')
    meta('og:url', url, 'property')
    meta('og:image', OG_IMAGE, 'property')
    meta('twitter:card', 'summary_large_image')
    meta('twitter:title', title)
    meta('twitter:description', description)
    meta('twitter:image', OG_IMAGE)
    upsert('link[rel="canonical"]', () => {
      const el = document.createElement('link')
      el.setAttribute('rel', 'canonical')
      return el
    }, url, 'href')

    const scripts = jsonLd.map((data) => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.dataset.seo = 'route'
      el.text = JSON.stringify(data)
      document.head.appendChild(el)
      return el
    })
    return () => scripts.forEach((el) => el.remove())
  }, [title, description, path, noindex, jsonLd])

  return null
}

export default Seo
