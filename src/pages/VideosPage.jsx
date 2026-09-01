import { useState } from 'react'
import {
  ExternalLink,
  Guitar,
  Headphones,
  Mic2,
  Music2,
  Play,
  Radio,
  Users,
} from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { mediaItems } from '../data/media'

const filters = [
  { value: 'all', label: 'Todo' },
  { value: 'music', label: 'Videos musicales' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'cover', label: 'Covers' },
  { value: 'interview', label: 'Entrevistas' },
  { value: 'live', label: 'Live Sessions' },
  { value: 'acoustic', label: 'Acústicos' },
  { value: 'collaboration', label: 'Colaboraciones' },
]

const typeIcons = {
  music: Music2,
  podcast: Headphones,
  cover: Guitar,
  interview: Mic2,
  live: Radio,
  acoustic: Guitar,
  collaboration: Users,
}

export function VideosPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const visibleItems = mediaItems.filter(
    (item) => activeFilter === 'all' || item.type === activeFilter,
  )

  return (
    <>
      <Header pathname='/videos' />
      <main className='media-page'>
        <section className='media-hero'>
          <div className='media-hero__copy'>
            <span className='eyebrow'>ARCHIVO AUDIOVISUAL</span>
            <h1>VIDEOS<br /><span>&amp; PODCAST</span></h1>
            <p>
              Música, sesiones, conversaciones y las historias que suceden
              detrás del escenario.
            </p>
          </div>
          <div className='media-hero__mark' aria-hidden='true'>PLAY</div>
        </section>

        <section className='media-library' aria-labelledby='media-title'>
          <div className='media-toolbar'>
            <div>
              <span className='eyebrow'>EXPLORA</span>
              <h2 id='media-title'>TODOS LOS EPISODIOS</h2>
            </div>
            <div className='media-filters' aria-label='Filtrar contenido'>
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter.value ? 'is-active' : ''}
                  key={filter.value}
                  type='button'
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={activeFilter === filter.value}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className='media-grid'>
            {visibleItems.map((item) => {
              const TypeIcon = typeIcons[item.type] || Music2

              return (
                <article className='media-card' key={item.id}>
                <div className='video-frame'>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    title={item.title}
                    loading='lazy'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </div>
                <div className='media-card__body'>
                  <span className='media-card__type'>
                    <TypeIcon size={15} />
                    {item.series}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Play size={15} /> Ver en YouTube <ExternalLink size={14} />
                  </a>
                </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
