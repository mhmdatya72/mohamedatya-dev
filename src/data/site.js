import { safeStorage } from '../utils/storage'

export const SITE_URL = 'https://mohamedatya-dev.vercel.app'
export const OG_IMAGES = { ar: `${SITE_URL}/og-image-ar.png`, en: `${SITE_URL}/og-image.png` }

export const PERSON = {
  email: 'mohamedatya563@gmail.com',
  phone: '+20 109 838 6972',
  phoneHref: 'tel:+201098386972',
  locationHref: 'https://maps.google.com/?q=Smouha,Alexandria,Egypt',
}

export const SOCIAL_URLS = {
  github: 'https://github.com/mhmdatya72',
  linkedin: 'https://www.linkedin.com/in/mohamedatya-dev/',
  facebook: 'https://www.facebook.com/share/1CVzc6uuKV/',
}

export const whatsappLink = (text) =>
  `https://wa.me/201098386972${text ? `?text=${encodeURIComponent(text)}` : ''}`

// Section ids used for navigation; labels live in the i18n dictionaries.
export const NAV_IDS = ['services', 'work', 'process', 'about', 'experience', 'contact']

// Every section in page order; sections without a nav entry map to the nav item they belong under.
export const SECTION_IDS = ['home', 'services', 'work', 'results', 'process', 'about', 'skills', 'experience', 'faq', 'contact']
export const NAV_PARENT = { results: 'work', skills: 'about', faq: 'experience' }

const trimSlash = (path) => (path.length > 1 ? path.replace(/\/$/, '') : path)

// Scrolls to a section on the home page, or hops back to the home page of the current language first.
export const goToSection = (id, homePath = '/') => {
  if (trimSlash(window.location.pathname) !== trimSlash(homePath)) {
    safeStorage.sSet('scrollToSection', `#${id}`)
    window.location.href = `${homePath}#${id}`
    return
  }
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
}
