import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home', current: true },
  { label: 'Products', href: '#new-launch' },
  { label: 'Hair Care Blog', href: '#blog' },
  { label: 'Curly Girl Method', href: '#curly-girl-method' },
]

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar" data-node-id="1:1000">
      <div className="navbar-inner">
        <a className="navbar-logo" href="#home" aria-label="Hydra Curls home">
          <img src="/assets/hydra-curls-logo.png" alt="Hydra Curls" />
        </a>

        <button
          className="navbar-menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`navbar-links${isMenuOpen ? ' navbar-links-open' : ''}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.label}
              className={link.current ? 'navbar-link navbar-link-current' : 'navbar-link'}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <img className="navbar-divider" src="/assets/navbar-divider.svg" alt="" aria-hidden="true" />
    </header>
  )
}

export default SiteHeader
