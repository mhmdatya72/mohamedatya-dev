import RootShell from '../../components/RootShell'
import ar from '../../i18n/ar'
import { buildMetadata, siteViewport } from '../../i18n/metadata'

export const metadata = buildMetadata('ar', 'home')
export const viewport = siteViewport

export default function ArabicLayout({ children }) {
  return <RootShell dict={ar}>{children}</RootShell>
}
