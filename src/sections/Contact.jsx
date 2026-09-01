import { ArrowUpRight } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

function WhatsAppIcon(props) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.79 14.13c-.24.68-1.42 1.3-1.96 1.35-.5.05-1.05.24-3.55-.74-2.97-1.17-4.87-4.15-5.02-4.34-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.29.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.24.6.83 2.08.9 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.3-.13.6.17.29.75 1.24 1.62 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.15.27.1 1.73.82 2.02.97.3.15.49.22.56.35.08.13.08.75-.16 1.43Z' />
    </svg>
  )
}

export function Contact() {
  return (
    <section className='section contact-section' id='contacto'>
      <SectionTitle eyebrow='BOOKING / PRENSA' title='HABLEMOS' />

      <div className='contact-card'>
        <div>
          <p>
            Conciertos, festivales, entrevistas, colaboraciones y propuestas.
          </p>
        </div>
        <div>
          <a
            href='https://wa.me/573154247200'
            target='_blank'
            rel='noopener noreferrer'
          >
            <WhatsAppIcon className='contact-icon' width={42} height={42} />
            Contácto <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
