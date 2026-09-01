import { Instagram, Youtube, Music2 } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'

export function About() {
  return (
    <section className='section about-section' id='bio'>
      <div className='about-card'>
        <div className='about-visual'>
          <img src='/images/hero/jose-matera.jpeg' alt='José Matera' />
        </div>

        <div className='about-copy'>
          <SectionTitle eyebrow='BIO' title='JOSÉ MATERA' />
          <p>
            Músico, compositor e intérprete colombiano. Es vocalista y
            cofundador de la banda Los De Adentro, con la cual grabó bajo el
            sello Sony Music Colombia los álbumes Los De Adentro (1998), Como un
            Niño (2000) y Volver Amar (2004). Años más tarde, la agrupación
            continuó su camino de manera independiente y lanzó Entropía (2018),
            un trabajo especial compuesto por siete canciones que reafirma la
            evolución musical y la esencia rock de la banda.
          </p>
          <p>
            En su carrera como solista, ha lanzado varios sencillos y
            colaboraciones, incluyendo: <strong>Suave,</strong> es una de sus
            canciones más personales. La escribió hace más de 20 años y la
            relanzó junto a Jaime Alzate y el productor Ed Keziah. Curiosamente,
            empezó como una canción de amor para una novia, pero evolucionó
            hacia temas de espiritualidad, reencarnación y vida después de la
            muerte. Musicalmente mezcla rock alternativo y electro pop, con
            influencias que Matera compara a Zoé, Gustavo Cerati y Pearl Jam. El
            video está dedicado a su hijo Salvador, con imágenes de Minecraft
            porque es el juego favorito del niño.
          </p>
          <p>
            José empezó a trabajar con la banda barranquillera Porvenir Paradise
            lanzando<strong> Mar Negro</strong> en 2021,
            <strong> Brindo X</strong> en 2022,
            <strong> Punkvenir Me Aterra</strong> en 2023 y Luna D' Nueva York
            en 2024. Sencillos posteriores dentro de esta etapa solista, que
            muestran su exploración continua entre rock, punk y sonidos más
            experimentales.
          </p>

          <div className='social-icons'>
            <a
              href='https://www.instagram.com/josemateraoficial'
              aria-label='Instagram'
            >
              <Instagram />
            </a>
            <a
              href='https://www.youtube.com/@JoseMateraOficial'
              aria-label='YouTube'
            >
              <Youtube />
            </a>
            <a
              href='https://open.spotify.com/artist/1Spv1yWtjWlurw08YofT3R'
              aria-label='Spotify'
            >
              <Music2 />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
