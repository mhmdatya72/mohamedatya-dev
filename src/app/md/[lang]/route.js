import ar from '../../../i18n/ar'
import en from '../../../i18n/en'
import { SITE_URL, PERSON, SOCIAL_URLS, whatsappLink } from '../../../data/site'

export const dynamic = 'force-static'
export const dynamicParams = false

const dicts = { ar, en }
const paths = { ar: '/', en: '/en' }

export function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }]
}

const plain = (s) => String(s).replace(/\*\*/g, '')
const heading = (h) => `${h.pre}${h.accent}${h.post}`.trim()

// Markdown twin of the home page, served when an agent sends "Accept: text/markdown" (see next.config.mjs rewrites).
export async function GET(_req, { params }) {
  const { lang } = await params
  const d = dicts[lang]
  const md = [
    `# ${d.meta.siteName}`,
    '',
    `> ${d.meta.description}`,
    '',
    plain(d.hero.sub),
    '',
    `## ${heading(d.services.title)}`,
    '',
    ...d.services.items.map((s) => `- **${s.title}** — ${s.description}`),
    '',
    `## ${heading(d.about.title)}`,
    '',
    ...d.about.copy.flatMap((p) => [plain(p), '']),
    `## ${heading(d.faq.title)}`,
    '',
    ...d.faq.items.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    `## ${heading(d.contact.title)}`,
    '',
    `- WhatsApp: ${whatsappLink(d.common.whatsappMsg)}`,
    `- Email: ${PERSON.email}`,
    `- Phone: ${PERSON.phone}`,
    `- GitHub: ${SOCIAL_URLS.github}`,
    `- LinkedIn: ${SOCIAL_URLS.linkedin}`,
    '',
    `Canonical: ${SITE_URL}${paths[lang] === '/' ? '' : paths[lang]}`,
    '',
  ].join('\n')

  return new Response(md, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(Math.ceil(md.length / 4)),
      Vary: 'Accept',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  })
}
