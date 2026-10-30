import { safeStorage } from '../utils/storage'

export const PERSON = {
  name: 'Mohamed Atya Hawash',
  email: 'mohamedatya563@gmail.com',
  phone: '+20 109 838 6972',
  phoneHref: 'tel:+201098386972',
  location: 'Sidi-Ghazi, Kafr El-Dawar, Al-Buhayrah, Egypt',
  locationHref: 'https://maps.google.com/?q=Sidi-Ghazi,Kafr+El-Dawar,Al-Buhayrah,Egypt',
}

export const SOCIAL_URLS = {
  github: 'https://github.com/mhmdatya72',
  linkedin: 'https://www.linkedin.com/in/mohamed-atya-hawash-21853b344',
  facebook: 'https://www.facebook.com/share/1CVzc6uuKV/',
}

export const whatsappLink = (text) =>
  `https://wa.me/201098386972${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// Every section in page order; sections without a nav entry map to the nav item they belong under.
export const SECTION_IDS = ['home', 'services', 'work', 'results', 'process', 'about', 'skills', 'experience', 'faq', 'contact']
export const NAV_PARENT = { results: 'work', skills: 'about', faq: 'experience' }

// Scrolls to a section on the home page, or hops back home first when on another route.
export const goToSection = (id) => {
  if (window.location.pathname !== '/') {
    safeStorage.sSet('scrollToSection', `#${id}`)
    window.location.href = `/#${id}`
    return
  }
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
}
