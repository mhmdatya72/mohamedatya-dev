import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export const metadata = {
  title: 'Page not found | Mohamed Atya Hawash',
  description: 'This page does not exist.',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <main className="page-head" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="wrap">
        <h1 className="grad-text">404</h1>
        <p style={{ margin: '1rem auto 2rem' }}>This page doesn&apos;t exist. Let&apos;s get you back to the portfolio.</p>
        <Link href="/" className="btn btn-primary"><FaArrowLeft size={13} /> Back home</Link>
      </div>
    </main>
  )
}
