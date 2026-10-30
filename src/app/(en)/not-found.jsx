import NotFoundView from '../../components/NotFoundView'
import en from '../../i18n/en'

export const metadata = { title: en.meta.notFoundTitle, robots: { index: false, follow: false }, alternates: { canonical: null } }

export default function NotFound() {
  return <NotFoundView t={en} />
}
