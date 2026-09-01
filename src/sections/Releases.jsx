import { ExternalLink } from 'lucide-react'
import { releases } from '../data/releases'
import { SectionTitle } from '../components/SectionTitle'

export function Releases() {
  return (
    <section className='section releases-section' id='musica'>
      <SectionTitle
        eyebrow='NUEVA MÚSICA'
        title='ULTIMOS LANZAMIENTOS'
        text='Videos'
      />

      <h3>Último sencillo</h3>

      <div className='spotify-player'>
        <iframe
          src='https://open.spotify.com/embed/track/3nFUYifL8DNYp9WGqfC8GM?utm_source=generator'
          width='100%'
          height='152'
          frameBorder='0'
          allowFullScreen
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
          title='Spotify player'
        />
      </div>

      <div className='release-layout'>
        {releases.map((release, index) => (
          <article
            className={index === 0 ? 'release release--main' : 'release'}
            key={release.id}
          >
            <div className='video-frame'>
              <iframe
                src={`https://www.youtube.com/embed/${release.youtubeId}`}
                title={release.title}
                loading='lazy'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
            <div className='release-meta'>
              <span>{release.subtitle}</span>
              <h3>{release.title}</h3>
              <a
                href={`https://www.youtube.com/watch?v=${release.youtubeId}`}
                target='_blank'
                rel='noreferrer'
              >
                YouTube <ExternalLink size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
