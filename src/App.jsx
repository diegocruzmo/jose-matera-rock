import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Events } from './sections/Events'
import { Releases } from './sections/Releases'
import { About } from './sections/About'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className='marquee' aria-hidden='true'>
          <div>
            JOSÉ MATERA — ROCK — JOSÉ MATERA — LIVE — JOSÉ MATERA — FECHAS —
            JOSÉ MATERA — BIO — JOSÉ MATERA — CONTACTO — JOSÉ MATERA — ROCK —
            JOSÉ MATERA — LIVE — JOSÉ MATERA — FECHAS — JOSÉ MATERA — BIO — JOSÉ
            MATERA — CONTACTO — JOSÉ MATERA
          </div>
        </div>
        <Events />
        <Releases />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
