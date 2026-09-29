import { ExternalLink, Instagram, Youtube } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

const youtubeUrl = 'https://youtu.be/6wbsK4dw9Ks?si=r6rDDCT3wFLEOWVg'
const instagramUrl = 'https://www.instagram.com/p/DdwdjrTB_on/'

export function LatestNews() {
  return (
    <section className='section latest-news-section' id='novedades'>
      <SectionTitle
        eyebrow='LO MÁS RECIENTE'
        title='ÚLTIMAS NOVEDADES'
        text='Nuevos lanzamientos, momentos y contenido de José Matera.'
      />

      <div className='latest-news-grid'>
        <article className='latest-news-card latest-news-card--youtube'>
          <div className='latest-news-embed latest-news-embed--youtube'>
            <iframe
              src='https://www.youtube-nocookie.com/embed/6wbsK4dw9Ks'
              title='Último video de José Matera en YouTube'
              loading='lazy'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          </div>
          <div className='latest-news-meta'>
            <span><Youtube size={16} /> YouTube</span>
            <a href={youtubeUrl} target='_blank' rel='noreferrer'>
              Ver en YouTube <ExternalLink size={14} />
            </a>
          </div>
        </article>

        <article className='latest-news-card latest-news-card--instagram'>
          <div className='latest-news-embed latest-news-embed--instagram'>
            <iframe
              src='https://www.instagram.com/p/DdwdjrTB_on/embed/captioned/'
              title='Última publicación de José Matera en Instagram'
              loading='lazy'
              allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
          <div className='latest-news-meta'>
            <span><Instagram size={16} /> Instagram</span>
            <a href={instagramUrl} target='_blank' rel='noreferrer'>
              Ver en Instagram <ExternalLink size={14} />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
