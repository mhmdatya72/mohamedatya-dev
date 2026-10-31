import ProjectDetail from './ProjectDetail'
import JsonLd from './JsonLd'
import { projectJsonLd } from '../data/seo'

const ProjectDetailPage = ({ t, project }) => (
  <>
    <JsonLd data={projectJsonLd(t, project)} />
    <ProjectDetail slug={project.slug} />
  </>
)

export default ProjectDetailPage
