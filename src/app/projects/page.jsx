import AllProjects from '../../components/AllProjects'
import JsonLd from '../../components/JsonLd'
import { projectsJsonLd } from '../../data/seo'
import { projects, additionalProjects, clientProjects } from '../../data/projects'
import { OG_IMAGE } from '../../data/site'

const TITLE = 'All Projects | Mohamed Atya Hawash — Laravel & Vue.js Developer'
const DESCRIPTION = 'Browse every live project by Mohamed Atya Hawash: ERP systems, SaaS platforms, B2B marketplaces, e-commerce stores and SEO-ready company websites.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/projects' },
  openGraph: { type: 'website', url: '/projects', title: TITLE, description: DESCRIPTION, siteName: 'Mohamed Atya Hawash', images: [{ url: OG_IMAGE, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsJsonLd([...projects, ...additionalProjects, ...clientProjects])} />
      <AllProjects />
    </>
  )
}
