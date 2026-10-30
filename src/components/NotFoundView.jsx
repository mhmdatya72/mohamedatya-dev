import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const NotFoundView = ({ t }) => (
  <main className="page-head" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
    <div className="wrap">
      <h1 className="grad-text">404</h1>
      <p style={{ margin: '1rem auto 2rem' }}>{t.notFound.text}</p>
      <Link href={t.lang === 'ar' ? '/' : '/en'} className="btn btn-primary"><FaArrowLeft size={13} className="rtl-flip" /> {t.notFound.button}</Link>
    </div>
  </main>
)

export default NotFoundView
