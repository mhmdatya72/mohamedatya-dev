import ProjectsPage from '../../../components/ProjectsPage'
import ar from '../../../i18n/ar'
import { buildMetadata } from '../../../i18n/metadata'

export const metadata = buildMetadata('ar', 'projects')

export default function Page() {
  return <ProjectsPage t={ar} />
}
