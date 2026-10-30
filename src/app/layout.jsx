import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import ScrollProgress from '../components/ScrollProgress'
import { SITE_URL, SITE_NAME, OG_IMAGE } from '../data/site'

const font = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap', variable: '--font-jakarta' })

const TITLE = 'Mohamed Atya Hawash | Laravel & Vue.js Developer for ERP, SaaS & SEO'
const DESCRIPTION = 'Laravel, Vue.js, React & Next.js engineer and team lead building ERP systems, SaaS platforms, WordPress and SEO-ready websites. See 7 live projects and start yours.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: ['Mohamed Atya Hawash', 'Laravel developer', 'Vue.js developer', 'React developer', 'Next.js developer', 'WordPress developer', 'PHP developer', 'ERP development', 'SaaS development', 'SEO-friendly websites', 'Egypt'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: '/',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Mohamed Atya Hawash — I build the software your business runs on' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
  verification: { google: 'BR9IDN6rvyYKR6TLWqXGSRe_OfWwROLKPhDG7dFngIA' },
  icons: { icon: '/favicon.svg' },
}

export const viewport = { themeColor: '#08080f' }

// Runs before first paint so the saved theme never flashes.
const themeScript = "try{if(localStorage.getItem('portfolio-theme-v3')!=='light'){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="backdrop" aria-hidden="true"><div className="backdrop-grid" /></div>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
