import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Phone, Mail } from 'lucide-react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className="page-wrapper" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <span className="footer-heading">Quick Links</span>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <span className="footer-heading">Contact Us</span>
            <a href="tel:3855806111" className="footer-contact-link"><Phone size={14} strokeWidth={1.5} /> 385-580-6111</a>
            <a href="mailto:sunridgelawnservices@gmail.com" className="footer-contact-link"><Mail size={14} strokeWidth={1.5} /> sunridgelawnservices@gmail.com</a>
          </div>
          <div className="footer-col">
            <span className="footer-heading">Service Areas</span>
            <span>Riverton · Herriman · Bluffdale</span>
            <span>Daybreak · South Jordan · &amp; More</span>
          </div>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Sun Ridge Lawn Services. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
