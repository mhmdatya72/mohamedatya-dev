import Hero from './Hero'
import TechStrip from './TechStrip'
import Services from './Services'
import Projects from './Projects'
import Stats from './Stats'
import Process from './Process'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'
import PageEffects from './PageEffects'
import JsonLd from './JsonLd'
import { homeJsonLd } from '../data/seo'

const HomePage = ({ t }) => (
  <>
    <JsonLd data={homeJsonLd(t)} />
    <PageEffects />
    <main>
      <Hero />
      <TechStrip label={t.common.techAria} />
      <Services />
      <Projects />
      <Stats />
      <Process />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  </>
)

export default HomePage
