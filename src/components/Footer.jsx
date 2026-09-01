import { socials } from '../data/socials'

export function Footer() {
  return (
    <footer className='footer'>
      <div>
        <strong>JOSÉ MATERA</strong>
        <p>Músico · Barranquilla, Colombia</p>
      </div>

      <div className='footer-socials'>
        {socials.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>

      <span>© 2026 José Matera</span>
    </footer>
  )
}
