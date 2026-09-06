import { useEffect } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { singles } from '../data/singles'

export function SinglesPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Singles | José Matera'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <Header pathname='/singles' />
      <main className='media-page singles-page'>
        <section className='media-hero singles-hero'>
          <div className='media-hero__copy'>
            <span className='eyebrow'>JOSÉ MATERA</span>
            <h1>SINGLES</h1>
            <p>
              <br />
              Explora los lanzamientos.
            </p>
            <a className='btn btn-primary singles-explore' href='#catalogo'>
              Explorar canciones <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <section
          className='media-library singles-library'
          id='catalogo'
          aria-labelledby='singles-title'
        >
          <div className='media-toolbar'>
            <div>
              <span className='eyebrow'>DALE PLAY</span>
              <h2 id='singles-title'>Canciones</h2>
            </div>
            <span className='singles-count'>LANZAMIENTOS / SPOTIFY</span>
          </div>
          <div className='singles-grid'>
            {singles.map((single) => (
              <article className='single-card' key={single.id}>
                <a
                  className='single-cover'
                  href={single.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`Escuchar ${single.title} en Spotify`}
                >
                  <img
                    src={single.cover}
                    alt={`Portada de ${single.title}`}
                    loading='lazy'
                    width='300'
                    height='300'
                  />
                </a>
                <div className='single-meta'>
                  <span className='single-number'>SINGLE</span>
                  <h3>{single.title}</h3>
                  <a href={single.href} target='_blank' rel='noreferrer'>
                    Escuchar en Spotify <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
