import { SITE_URL, SITE_NAME, OG_IMAGE, PERSON, SOCIAL_URLS } from './site'
import { faqs } from './faqs'

const personId = `${SITE_URL}/#person`

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: SITE_NAME,
  jobTitle: 'Full Stack Laravel & Vue.js Developer, Software Engineering Team Lead',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: `mailto:${PERSON.email}`,
  telephone: PERSON.phone,
  address: { '@type': 'PostalAddress', addressRegion: 'Al-Buhayrah', addressCountry: 'EG' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Damanhour University' },
  worksFor: { '@type': 'Organization', name: 'Cord Digital', url: 'https://corddigital.com/' },
  knowsAbout: ['Laravel', 'PHP', 'Vue.js', 'React', 'Next.js', 'WordPress', 'MySQL', 'REST APIs', 'ERP systems', 'SaaS', 'Search engine optimization'],
  sameAs: [SOCIAL_URLS.github, SOCIAL_URLS.linkedin, SOCIAL_URLS.facebook],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: `${SITE_NAME} — Portfolio`,
  inLanguage: 'en',
  publisher: { '@id': personId },
}

const service = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#service`,
  name: `${SITE_NAME} — Web & Software Development`,
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  founder: { '@id': personId },
  areaServed: ['Egypt', 'Kuwait', 'Worldwide'],
  availableLanguage: ['English', 'Arabic'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      'Business platforms and ERP systems',
      'SaaS and full-stack products',
      'Backend systems and REST APIs',
      'SEO-ready websites and WordPress',
      'Performance optimization and team leadership',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
}

export const homeJsonLd = [person, website, service, faqPage]

export const projectsJsonLd = (projects) => [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'All projects', item: `${SITE_URL}/projects` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projects by Mohamed Atya Hawash',
    itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: p.demo })),
  },
]
