import NotFoundView from '../../components/NotFoundView'
import ar from '../../i18n/ar'

export const metadata = { title: ar.meta.notFoundTitle, robots: { index: false, follow: false }, alternates: { canonical: null } }

export default function NotFound() {
  return <NotFoundView t={ar} />
}
