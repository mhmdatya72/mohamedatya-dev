import ProjectsPage from '../../../../components/ProjectsPage'
import en from '../../../../i18n/en'
import { buildMetadata } from '../../../../i18n/metadata'

export const metadata = buildMetadata('en', 'projects')

export default function Page() {
  return <ProjectsPage t={en} />
}
