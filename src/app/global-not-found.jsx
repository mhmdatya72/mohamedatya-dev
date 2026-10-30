import RootShell from '../components/RootShell'
import NotFoundView from '../components/NotFoundView'
import ar from '../i18n/ar'

// Used for URLs that match no route at all (multiple root layouts need an explicit global 404).
export const metadata = { title: ar.meta.notFoundTitle, robots: { index: false, follow: false } }

export default function GlobalNotFound() {
  return (
    <RootShell dict={ar}>
      <NotFoundView t={ar} />
    </RootShell>
  )
}
