import { Plus_Jakarta_Sans, Cairo, Aref_Ruqaa } from 'next/font/google'
import '../app/globals.css'
import { ThemeProvider } from './ThemeProvider'
import { LangProvider } from '../i18n/LangProvider'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import ScrollProgress from './ScrollProgress'

const latin = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap', variable: '--font-jakarta' })
const arabic = Cairo({ subsets: ['arabic', 'latin'], weight: ['400', '500', '600', '700', '800'], display: 'swap', variable: '--font-cairo' })
// Calligraphic Arabic face, used only for the navbar logo.
const calligraphy = Aref_Ruqaa({ subsets: ['arabic'], weight: ['700'], display: 'swap', variable: '--font-ruqaa' })

// Runs before first paint so the saved theme never flashes.
const themeScript = "try{if(localStorage.getItem('portfolio-theme-v3')!=='light'){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}"

// Shared <html> shell for both languages: sets lang/dir, fonts, theme and the persistent chrome.
const RootShell = ({ dict, children }) => (
  <html lang={dict.lang} dir={dict.dir} className={`${latin.variable} ${arabic.variable} ${calligraphy.variable}`} suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
    </head>
    <body>
      <ThemeProvider>
        <LangProvider dict={dict}>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="backdrop" aria-hidden="true"><div className="backdrop-grid" /></div>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </div>
        </LangProvider>
      </ThemeProvider>
    </body>
  </html>
)

export default RootShell
