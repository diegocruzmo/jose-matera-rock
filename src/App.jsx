import { useLayoutEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Events } from './sections/Events'
import { Releases } from './sections/Releases'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { VideosPage } from './pages/VideosPage'
import { SinglesPage } from './pages/SinglesPage'

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'

  useLayoutEffect(() => {
    if (pathname !== '/' || !window.location.hash) return

    const section = document.querySelector(window.location.hash)
    section?.scrollIntoView()
  }, [pathname])

  if (pathname === '/singles') return <SinglesPage />

  if (pathname === '/videos') {
    return <VideosPage />
  }

  return (
    <>
      <Header pathname='/' />
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

