import { Link } from 'react-router-dom'
import { Scissors, Wind, Sprout, Plus, AlignJustify } from 'lucide-react'
import backImg from '../assets/back.png'
import mowingmImg from '../assets/mowingm.png'
import trimminggImg from '../assets/trimmingg.png'
import edgImg from '../assets/edg.png'

const MowerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="20" x2="22" y2="20" />
    <line x1="5" y1="20" x2="5" y2="12" />
    <line x1="8" y1="20" x2="8" y2="9" />
    <line x1="11" y1="20" x2="11" y2="11" />
    <line x1="14" y1="20" x2="14" y2="8" />
    <line x1="17" y1="20" x2="17" y2="11" />
    <line x1="20" y1="20" x2="20" y2="13" />
  </svg>
)
import './Services.css'

const services = [
  {
    icon: <img src={mowingmImg} alt="Mowing" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
    title: 'Mowing',
    description:
      'Clean, consistent cuts for a well-maintained lawn every visit. We adjust cut height seasonally to promote healthy turf.',
    price: 'Starting at $45',
    tag: 'Most Popular',
  },
  {
    icon: <Sprout size={28} strokeWidth={1.5} />,
    title: 'Weed Control',
    description:
      'Pre- and post-emergent weed treatments that eliminate existing weeds and create a barrier against new ones taking over your lawn.',
    price: 'Starting at $55',
    tag: null,
  },
  {
    icon: <img src={trimminggImg} alt="Trimming" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
    title: 'Trimming',
    description:
      'Neat trimming around trees, fences, and landscaping beds to keep every edge of your property looking sharp and tidy.',
    price: 'Starting at $35',
    tag: null,
  },
  {
    icon: <Wind size={28} strokeWidth={1.5} />,
    title: 'Blowing',
    description:
      'Thorough cleanup of clippings and debris from all hard surfaces including driveways, walkways, and patios after every visit.',
    price: 'Included with service',
    tag: null,
  },
  {
    icon: <img src={edgImg} alt="Edging" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />,
    title: 'Edging',
    description:
      'Crisp, defined edges along driveways, sidewalks, and curbs for a clean, professional finish that makes your lawn stand out.',
    price: 'Starting at $30',
    tag: null,
  },
  {
    icon: <Plus size={28} strokeWidth={1.5} />,
    title: 'And More',
    description:
      'We offer a range of additional services to keep your property looking its best year-round. Contact us to find out what else we can do for you.',
    price: 'Contact for pricing',
    tag: null,
  },
]

export default function Services() {
  return (
    <main className="services-page">

      {/* Hero */}
      <section className="services-hero" style={{ backgroundImage: `url(${backImg})` }}>
        <div className="sh-content">
          <p className="sh-eyebrow">&#8594; What We Do</p>
          <h1>Professional Lawn Care <span>Services</span></h1>
          <p>Everything your property needs — handled by a team you can count on.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="svc-list">
        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc-card" key={s.title}>
              {s.tag && <span className="svc-tag">{s.tag}</span>}
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="areas-section">
        <div className="section-label">&#8594; Service Areas</div>
        <h2>Proudly Serving Your Community</h2>
        <div className="areas-list">
          <span className="area-tag">Riverton</span>
          <span className="area-divider">·</span>
          <span className="area-tag">Herriman</span>
          <span className="area-divider">·</span>
          <span className="area-tag">Bluffdale</span>
          <span className="area-divider">·</span>
          <span className="area-tag">Daybreak</span>
          <span className="area-divider">·</span>
          <span className="area-tag">South Jordan</span>
          <span className="area-divider">·</span>
          <span className="area-tag">& More</span>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <h2>Not Sure What You Need?</h2>
        <p>We'll walk your property and build a custom plan — completely free.</p>
        <Link to="/contact" className="btn-gold">Request a Free Estimate</Link>
      </section>

    </main>
  )
}
