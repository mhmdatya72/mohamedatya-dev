import { SITE_URL, OG_IMAGES, PERSON, SOCIAL_URLS } from './site'

const homeUrl = (lang) => (lang === 'ar' ? `${SITE_URL}/` : `${SITE_URL}/en`)
const projectsUrl = (lang) => (lang === 'ar' ? `${SITE_URL}/projects` : `${SITE_URL}/en/projects`)

export const homeJsonLd = (t) => {
  const lang = t.lang
  const personId = `${SITE_URL}/#person`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': personId,
      name: t.seo.personName,
      alternateName: ['Mohamed Atya Hawash', 'محمد عطية حواش'],
      jobTitle: t.seo.jobTitle,
      url: homeUrl(lang),
      image: OG_IMAGES[lang],
      email: `mailto:${PERSON.email}`,
      telephone: PERSON.phone,
      address: { '@type': 'PostalAddress', addressRegion: 'Al-Buhayrah', addressCountry: 'EG' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Damanhour University' },
      worksFor: { '@type': 'Organization', name: 'Cord Digital', url: 'https://corddigital.com/' },
      knowsAbout: ['Laravel', 'PHP', 'Vue.js', 'React', 'Next.js', 'WordPress', 'MySQL', 'REST APIs', 'ERP systems', 'SaaS', 'Search engine optimization'],
      knowsLanguage: ['ar', 'en'],
      sameAs: [SOCIAL_URLS.github, SOCIAL_URLS.linkedin, SOCIAL_URLS.facebook],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: homeUrl(lang),
      name: t.seo.websiteName,
      inLanguage: lang,
      publisher: { '@id': personId },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: t.seo.serviceName,
      url: homeUrl(lang),
      image: OG_IMAGES[lang],
      founder: { '@id': personId },
      areaServed: ['Egypt', 'Kuwait', 'Saudi Arabia', 'Worldwide'],
      availableLanguage: ['Arabic', 'English'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t.services.eyebrow,
        itemListElement: t.seo.offers.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: t.faq.items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
    },
  ]
}

export const projectJsonLd = (t, project) => {
  const lang = t.lang
  const url = `${projectsUrl(lang)}/${project.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.seo.breadcrumbHome, item: homeUrl(lang) },
        { '@type': 'ListItem', position: 2, name: t.seo.breadcrumbProjects, item: projectsUrl(lang) },
        { '@type': 'ListItem', position: 3, name: project.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': `${url}#project`,
      name: project.title,
      description: project.description,
      url,
      inLanguage: lang,
      image: project.image.startsWith('/') ? `${SITE_URL}${project.image}` : project.image,
      keywords: project.technologies.join(', '),
      creator: { '@id': `${SITE_URL}/#person` },
      ...(project.demo !== '#' ? { sameAs: [project.demo] } : {}),
    },
  ]
}

export const projectsJsonLd = (t, projects) => [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.seo.breadcrumbHome, item: homeUrl(t.lang) },
      { '@type': 'ListItem', position: 2, name: t.seo.breadcrumbProjects, item: projectsUrl(t.lang) },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.seo.listName,
    itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: p.demo })),
  },
]
