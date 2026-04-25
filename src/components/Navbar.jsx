import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      {/* Main nav */}
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">
          <img src={logo} alt="Sun Ridge Lawn Services" className="nav-logo" />
        </NavLink>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li>
            <a href="tel:3855806111" className="nav-cta">
              📞 385-580-6111
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
