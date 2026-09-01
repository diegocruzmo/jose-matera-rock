import { ArrowDownRight, Instagram, Music2, Play, Youtube } from 'lucide-react'

export function Hero() {
  return (
    <section className='hero hero--art' id='inicio'>
      <div className='hero-art' aria-hidden='true' />
      <div className='hero-art-overlay' aria-hidden='true' />
      <div className='hero-content'>
        <h1>
          JOSÉ <span>MATERA</span>
        </h1>
        <p className='hero-tagline'>Música Independiente</p>
        <p className='hero-lead'>
          Rock, lanzamientos, sesiones y presentaciones en vivo
        </p>
        <div className='hero-actions'>
          <a className='btn btn-primary' href='#musica'>
            <Play size={18} fill='#087d98' /> Escuchar ahora
          </a>
          <a className='btn btn-ghost' href='#fechas'>
            Ver próximas fechas <ArrowDownRight size={18} />
          </a>
        </div>
        <div className='hero-socials' aria-label='Redes y plataformas'>
          <span>Sígueme en</span>
          <div>
            <a
              href='https://open.spotify.com/artist/1Spv1yWtjWlurw08YofT3R?si=3xhGMyTbRRudZNlvzkQ31g'
              aria-label='Spotify'
            >
              <Music2 />
            </a>
            <a
              href='https://www.youtube.com/@JoseMateraOficial'
              aria-label='YouTube'
            >
              <Youtube />
            </a>
            <a
              href='https://www.instagram.com/josemateraoficial'
              aria-label='Instagram'
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
