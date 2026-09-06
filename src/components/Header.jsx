import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Fechas", "/#fechas"],
  ["Música", "/#musica"],
  ["Singles", "/singles"],
  ["Videos & Podcast", "/videos"],
  ["Bio", "/#bio"],
  ["Contacto", "/#contacto"],
];

export function Header({ pathname = '/' }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/#inicio" aria-label="José Matera, inicio">
        JM<span>.</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav nav--open" : "nav"} aria-label="Principal">
        {links.map(([label, href]) => (
          <a
            className={pathname === href ? 'nav-active' : ''}
            key={href}
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

