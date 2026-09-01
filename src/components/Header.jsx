import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Fechas", "#fechas"],
  ["Música", "#musica"],
  ["Bio", "#bio"],
  ["Contacto", "#contacto"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="José Matera, inicio">
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
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
