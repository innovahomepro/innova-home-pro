import './App.css';
import { Phone, Mail, Building2, Paintbrush, Sparkles, CheckCircle, MapPin, Clock } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_web-builder-577/artifacts/7a49pvjn_IMG_20250316_200850_363.webp";
const PHONE = "8134455156";
const EMAIL = "info@innovahomepro.com";

const Hero = () => (
  <section className="hero">
    <div className="hero-bg"></div>
    <div className="hero-content">
      <img src={LOGO_URL} alt="Innova Home Pro Logo" className="logo" />
      <h1>Professional Cleaning<span>& Maintenance</span></h1>
      <p>High-quality commercial cleaning and painting services for commercial properties, offices, and residential complexes.</p>
      <div className="cta-buttons">
        <a href={`tel:${PHONE}`} className="btn btn-yellow">
          <Phone size={24} /> Call Us Now
        </a>
        <a href={`mailto:${EMAIL}`} className="btn btn-white">
          <Mail size={24} /> Send Email
        </a>
      </div>
      <p className="phone-display">
        <Phone size={20} /> <a href={`tel:${PHONE}`}>(813) 445-5156</a>
      </p>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <Building2 size={48} />, title: "Commercial Cleaning", description: "Professional cleaning for offices, retail spaces, and workplaces.", features: ["Offices", "Retail spaces", "Apartment complexes", "Corporate spaces"] },
    { icon: <Paintbrush size={48} />, title: "Painting Services", description: "High-quality interior and exterior painting with professional finishes.", features: ["Interior painting", "Exterior painting", "Special finishes", "Wall repairs"] },
    { icon: <Sparkles size={48} />, title: "General Maintenance", description: "Complete maintenance services for your property.", features: ["Preventive maintenance", "Minor repairs", "Deep cleaning", "Scheduled services"] }
  ];
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>{service.features.map((f, i) => <li key={i}><CheckCircle size={20} /> {f}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyUs = () => (
  <section className="why-us">
    <h2>Why Choose Us?</h2>
    <div className="reasons-grid">
      {[
        { icon: <CheckCircle size={32} />, title: "Quality Guaranteed" },
        { icon: <Clock size={32} />, title: "Punctual" },
        { icon: <Sparkles size={32} />, title: "Professional Team" },
        { icon: <Building2 size={32} />, title: "Experience" }
      ].map((r, i) => (
        <div key={i} className="reason"><div className="reason-icon">{r.icon}</div><h3>{r.title}</h3></div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact Us</h2>
    <p>We're ready to help. Get in touch today!</p>
    <div className="contact-cards">
      <a href={`tel:${PHONE}`} className="contact-card blue">
        <Phone size={40} />
        <h3>Call Us</h3>
        <p className="big">(813) 445-5156</p>
      </a>
      <a href={`mailto:${EMAIL}`} className="contact-card yellow">
        <Mail size={40} />
        <h3>Email Us</h3>
        <p>{EMAIL}</p>
      </a>
    </div>
    <div className="service-area">
      <MapPin size={48} />
      <h3>Service Area</h3>
      <p>Tampa Bay Area, Florida</p>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <img src={LOGO_URL} alt="Innova Home Pro" className="footer-logo" />
    <div className="footer-links">
      <a href={`tel:${PHONE}`}><Phone size={20} /> (813) 445-5156</a>
      <a href={`mailto:${EMAIL}`}><Mail size={20} /> {EMAIL}</a>
    </div>
    <p>© {new Date().getFullYear()} Innova Home Pro. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <div className="App">
      <nav>
        <img src={LOGO_URL} alt="Innova Home Pro" className="nav-logo" />
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href={`tel:${PHONE}`} className="btn btn-yellow small"><Phone size={16} /> Call Now</a>
        </div>
      </nav>
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
