import { notFound } from 'next/navigation'
import ProjectDetailPage from '../../../../../components/ProjectDetailPage'
import en from '../../../../../i18n/en'
import { buildProjectMetadata } from '../../../../../i18n/metadata'
import { allProjects, getProject } from '../../../../../data/projectIndex'

export const dynamicParams = false

export const generateStaticParams = () => allProjects.map(({ slug }) => ({ slug }))

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug, 'en')
  return project ? buildProjectMetadata('en', project) : {}
}

export default async function Page({ params }) {
  const { slug } = await params
  const project = getProject(slug, 'en')
  if (!project) notFound()
  return <ProjectDetailPage t={en} project={project} />
}
