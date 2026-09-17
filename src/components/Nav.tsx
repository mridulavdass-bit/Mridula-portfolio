import { useEffect, useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#about', label: 'About' },
  { href: '#archive', label: 'Archive' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#top" className="nav-mark">MRIDULA</a>

      <ul className={`nav-links${open ? ' is-open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-status">
        <span className="dot"></span>
        Design / Systems / Creative
      </div>

      <button
        className={`nav-mobile-toggle${open ? ' is-open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
