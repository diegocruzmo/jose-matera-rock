import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { events } from '../data/events'
import { SectionTitle } from '../components/SectionTitle'

export function Events() {
  return (
    <section className='section events-section' id='fechas'>
      <SectionTitle
        eyebrow='EN VIVO'
        title='PRÓXIMOS EVENTOS'
        text='Fechas y lugares'
      />

      <div className='events-grid'>
        {events.map((event) => (
          <article className='event-card' key={event.id}>
            <div className='event-poster'>
              <img
                src={event.flyer}
                alt={`Flyer ${event.city} ${event.date}`}
              />
              <div className='event-date'>
                <strong>{event.date}</strong>
                <span>{event.year}</span>
              </div>
            </div>

            <div className='event-info'>
              <div>
                <span>
                  <MapPin size={15} /> {event.city}
                </span>
                <h3>{event.venue}</h3>
              </div>
              <a
                href={event.ticketUrl}
                className='icon-button'
                aria-label={`Entradas ${event.city}`}
              >
                <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
