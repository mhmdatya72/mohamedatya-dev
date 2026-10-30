import RootShell from '../../components/RootShell'
import en from '../../i18n/en'
import { buildMetadata, siteViewport } from '../../i18n/metadata'

export const metadata = buildMetadata('en', 'home')
export const viewport = siteViewport

export default function EnglishLayout({ children }) {
  return <RootShell dict={en}>{children}</RootShell>
}
