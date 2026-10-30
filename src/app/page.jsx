import Hero from '../components/Hero'
import TechStrip from '../components/TechStrip'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Stats from '../components/Stats'
import Process from '../components/Process'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import PageEffects from '../components/PageEffects'
import JsonLd from '../components/JsonLd'
import { homeJsonLd } from '../data/seo'

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <PageEffects />
      <main>
        <Hero />
        <TechStrip />
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
}
