import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Leaf, CalendarCheck } from 'lucide-react'
import backgroundImg from '../assets/background.png'
import mowerImg from '../assets/mower.png'
import mowImg from '../assets/mow.png'
import mowingImg from '../assets/mowing.png'
import trimmingImg from '../assets/trimming.png'
import weedImg from '../assets/weed.png'
import blowImg from '../assets/blow.png'
import edgingImg from '../assets/edging.png'
import trailorImg from '../assets/trailor.png'
import trowelImg from '../assets/trowel.png'
import trimImg from '../assets/trim.png'
import edgeImg from '../assets/edge.png'
import './Home.css'

const flowers = ['🌸', '🌼', '🌺', '🌻', '🌸', '🌼', '🌺', '🌻', '🌸', '🌼', '🌺', '🌻', '🌸', '🌼', '🌺']

const services = [
  { icon: null, img: mowingImg, title: 'Mowing', desc: 'Clean, consistent cuts for a well-maintained lawn every visit.' },
  { icon: null, img: edgingImg, imgPosition: 'bottom', title: 'Edging', desc: 'Crisp, defined edges along driveways, sidewalks, and curbs.' },
  { icon: null, img: trimmingImg, title: 'Trimming', desc: 'Neat trimming around trees, fences, and landscaping beds.' },
  { icon: null, img: blowImg, title: 'Blowing', desc: 'Thorough cleanup of clippings from all hard surfaces.' },
  { icon: null, img: weedImg, title: 'Weed Control', desc: 'Pre & post-emergent treatments to keep weeds at bay.' },
  { icon: null, img: trailorImg, title: 'And More', desc: 'We offer a range of additional services to keep your property looking its best year-round.' },
]

export default function Home() {
  const flowerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          flowerRef.current?.classList.add('flowers-visible')
        }
      },
      { threshold: 0.2 }
    )
    if (flowerRef.current) observer.observe(flowerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="home">

      {/* ── Hero ── */}
      <section className="hero" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="hero-content">
          <p className="hero-eyebrow">Professional Lawn Care · Exceptional Results</p>
          <h1>Turn Your Yard Into a&nbsp;<em>Stunning Landscape</em></h1>
          <p className="hero-sub">
            Sun Ridge Lawn Services brings professional-grade care to every corner of your property, from weekly mowing to full seasonal maintenance.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Get a Free Estimate</Link>
            <Link to="/services" className="btn-outline-white">Explore Services</Link>
          </div>
        </div>

        <div className="hero-badge">
          <span className="badge-number">100%</span>
          <span className="badge-label">Quality Focused</span>
        </div>

      </section>

      {/* ── Stats ── */}
      <section className="stats-bar">
        <div className="stats-row">
          <div className="stat">
            <span className="stat-num">Reliable &amp; Professional</span>
            <span className="stat-label">Dependable lawn care you can count on</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">Attention to Detail</span>
            <span className="stat-label">Clean cuts, sharp edges, and tidy results</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">Locally Focused</span>
            <span className="stat-label">Proudly serving homeowners in your area</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">Easy Scheduling</span>
            <span className="stat-label">Simple booking and fast communication</span>
          </div>
        </div>

      </section>

      {/* ── Services Grid ── */}
      <section className="services-section">
        <div className="section-label">&#8594; Our Services</div>
        <h2>Everything Your Lawn Needs</h2>
        <p className="section-sub">From routine mowing to full property programs — we handle it all.</p>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-tile" key={s.title}>
              {s.img && <img src={s.img} alt={s.title} className="tile-img-full" style={{ objectPosition: s.imgPosition || 'center' }} />}
              {!s.img && <div className="tile-icon-wrap">{s.icon}</div>}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to="/services" className="tile-link">Learn more &#8594;</Link>
            </div>
          ))}
        </div>
        <Link to="/services" className="btn-green-outline">View All Services</Link>

      </section>

      {/* ── Reviews ── */}
      <section className="reviews-section">
        <div className="section-label">&#8594; Testimonials</div>
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Sun Ridge does an amazing job every single week. My lawn has never looked better — always on time and super professional."</p>
            <div className="review-author">
              <span className="review-name">Sarah M.</span>
              <span className="review-location">Sun Ridge, UT</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Hired them for a full cleanup and fertilizing program. The results were incredible. Highly recommend to anyone looking for reliable lawn care."</p>
            <div className="review-author">
              <span className="review-name">James T.</span>
              <span className="review-location">Sun Ridge, UT</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Great communication, fair pricing, and the yard always looks fantastic. They go above and beyond every visit."</p>
            <div className="review-author">
              <span className="review-name">Linda K.</span>
              <span className="review-location">Sun Ridge, UT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Trust ── */}
      <section className="about-section">
        <div className="flower-strip" ref={flowerRef}>
          {flowers.map((f, i) => (
            f === '🌸'
              ? <img key={i} src={mowImg} alt="" className="flower flower-img" style={{ animationDelay: `${i * 0.1}s` }} />
              : f === '🌼'
              ? <img key={i} src={trowelImg} alt="" className="flower flower-img" style={{ animationDelay: `${i * 0.1}s` }} />
              : f === '🌺'
              ? <img key={i} src={trimImg} alt="" className="flower flower-img" style={{ animationDelay: `${i * 0.1}s` }} />
              : f === '🌻'
              ? <img key={i} src={edgeImg} alt="" className="flower flower-img" style={{ animationDelay: `${i * 0.1}s` }} />
              : <span key={i} className="flower" style={{ animationDelay: `${i * 0.1}s` }}>{f}</span>
          ))}
        </div>
        <div className="about-text">
          <div className="section-label light">&#8594; About Us</div>
          <h2>Local Experts Who Care About Your Property</h2>
          <p>
            We're a locally-owned lawn care company built on reliability and craftsmanship.
            Every yard we maintain gets the same attention to detail as if it were our own.
            We believe a well-kept lawn improves your home's value, curb appeal, and your
            everyday enjoyment of your outdoor space.
          </p>
          <ul className="trust-list">
            <li>&#10003; Creating Beauty That Grows With Time</li>
            <li>&#10003; Bringing Harmony to Outdoor Living</li>
            <li>&#10003; Professional Results Without the Hassle</li>
          </ul>
          <Link to="/contact" className="btn-gold">Start Your Project</Link>
        </div>
        <div className="about-visual">
          <div className="visual-card top-card">
            <span className="vc-icon"><Leaf size={30} strokeWidth={1.5} color="#d4a017" /></span>
            <div>
              <strong>Precision Lawn Care</strong>
              <p>Clean edges, sharp lines, and a yard that looks professionally maintained every time.</p>
            </div>
          </div>
          <div className="visual-card bottom-card">
            <span className="vc-icon"><CalendarCheck size={30} strokeWidth={1.5} color="#d4a017" /></span>
            <div>
              <strong>On Your Schedule</strong>
              <p>Reliable service when you need it, with plans that fit your routine.</p>
            </div>
          </div>
          <div className="about-bg-circle" />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <h2>Ready for a Lawn You'll Love?</h2>
        <p>Get in touch today — your free estimate is just one click away.</p>
        <Link to="/contact" className="btn-gold">Contact Us Now</Link>
      </section>

    </main>
  )
}
