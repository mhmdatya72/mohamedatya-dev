import AllProjects from './AllProjects'
import JsonLd from './JsonLd'
import { projectsJsonLd } from '../data/seo'
import { projects, additionalProjects, clientProjects } from '../data/projects'
import projectsAr from '../i18n/projects-ar'

const ProjectsPage = ({ t }) => {
  const all = [...projects, ...additionalProjects, ...clientProjects].map((p) => (t.lang === 'ar' ? { ...p, ...(projectsAr[p.title] || {}) } : p))
  return (
    <>
      <JsonLd data={projectsJsonLd(t, all)} />
      <AllProjects />
    </>
  )
}

export default ProjectsPage
