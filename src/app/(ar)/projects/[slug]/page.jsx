import { notFound } from 'next/navigation'
import ProjectDetailPage from '../../../../components/ProjectDetailPage'
import ar from '../../../../i18n/ar'
import { buildProjectMetadata } from '../../../../i18n/metadata'
import { allProjects, getProject } from '../../../../data/projectIndex'

export const dynamicParams = false

export const generateStaticParams = () => allProjects.map(({ slug }) => ({ slug }))

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug, 'ar')
  return project ? buildProjectMetadata('ar', project) : {}
}

export default async function Page({ params }) {
  const { slug } = await params
  const project = getProject(slug, 'ar')
  if (!project) notFound()
  return <ProjectDetailPage t={ar} project={project} />
}
