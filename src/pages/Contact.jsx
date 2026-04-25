import { Phone, MessageSquare, Mail, Clock, MapPin, Zap } from 'lucide-react'
import backkImg from '../assets/backk.png'
import './Contact.css'

export default function Contact() {
  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero" style={{ backgroundImage: `url(${backkImg})` }}>
        <p className="ch-eyebrow">&#8594; Contact Us</p>
        <h1>Get In <span>Touch</span></h1>
        <p>We'd love to hear from you — reach out and we'll get back to you fast.</p>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards">
        <a href="tel:3855806111" className="contact-card">
          <div className="contact-card-icon"><Phone size={32} strokeWidth={1.5} /></div>
          <h3>Call Us</h3>
          <p className="contact-card-action">385-580-6111</p>
          <p className="contact-card-note">Give us a call anytime during business hours and we'll be happy to chat about your lawn.</p>
        </a>

        <a href="mailto:sunridgelawnservices@gmail.com" className="contact-card">
          <div className="contact-card-icon"><Mail size={32} strokeWidth={1.5} /></div>
          <h3>Email Us</h3>
          <p className="contact-card-action">sunridgelawnservices@gmail.com</p>
          <p className="contact-card-note">Send us an email with your questions or details about your property and we'll follow up promptly.</p>
        </a>

        <a href="sms:3855806111" className="contact-card">
          <div className="contact-card-icon"><MessageSquare size={32} strokeWidth={1.5} /></div>
          <h3>Text Us</h3>
          <p className="contact-card-action">385-580-6111</p>
          <p className="contact-card-note">Prefer to text? Send us a message and we'll respond quickly with answers or a free estimate.</p>
        </a>
      </section>

      {/* Info Strip */}
      <section className="contact-info-strip">
        <div className="info-strip-item">
          <span className="info-strip-icon"><Clock size={28} strokeWidth={1.5} /></span>
          <div>
            <strong>Business Hours</strong>
            <p>Monday – Saturday: 7am – 6pm</p>
          </div>
        </div>
        <div className="info-strip-divider" />
        <div className="info-strip-item">
          <span className="info-strip-icon"><MapPin size={28} strokeWidth={1.5} /></span>
          <div>
            <strong>Service Areas</strong>
            <p>Riverton · Herriman · Bluffdale · Daybreak · South Jordan</p>
          </div>
        </div>
        <div className="info-strip-divider" />
        <div className="info-strip-item">
          <span className="info-strip-icon"><Zap size={28} strokeWidth={1.5} /></span>
          <div>
            <strong>Fast Response</strong>
            <p>We typically respond within a few hours</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-section">
        <div className="section-label-dark">&#8594; How It Works</div>
        <h2>Flawless Execution, Step by Step</h2>
        <div className="steps">
          <div className="step">
            <span className="step-num">01</span>
            <h4>Free Consultation</h4>
            <p>We visit your property, assess your lawn's needs, and provide a no-obligation estimate.</p>
          </div>
          <div className="step-arrow">&#8594;</div>
          <div className="step">
            <span className="step-num">02</span>
            <h4>Custom Plan</h4>
            <p>We build a service plan tailored to your lawn's specific conditions and your budget.</p>
          </div>
          <div className="step-arrow">&#8594;</div>
          <div className="step">
            <span className="step-num">03</span>
            <h4>We Get to Work</h4>
            <p>Our crew shows up on schedule and delivers quality results — every single time.</p>
          </div>
          <div className="step-arrow">&#8594;</div>
          <div className="step">
            <span className="step-num">04</span>
            <h4>Enjoy Your Lawn</h4>
            <p>Sit back and enjoy a beautiful yard. We handle the rest, season after season.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Ready for a Free Estimate?</h2>
        <p>No obligation, no hassle — just an honest quote for your lawn care needs.</p>
        <div className="contact-cta-btns">
          <a href="tel:3855806111" className="btn-cta-gold">Call Now</a>
          <a href="sms:3855806111" className="btn-cta-outline">Text Us</a>
        </div>
      </section>

    </main>
  )
}
