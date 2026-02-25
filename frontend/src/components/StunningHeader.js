import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './StunningHeader.css';

const StunningHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Corporate Training', href: '#corporate' },
    { name: 'On-Job Support', href: '#support' },
    { name: 'Resources', href: '#resources' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className={`stunning-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="stunning-header-glow"></div>
      <div className="stunning-header-container">
        <div className="stunning-logo">
          <div className="logo-icon"></div>
          <span className="logo-text">
            MIND<span className="logo-accent">MAJIX</span>
          </span>
        </div>

        <nav className="stunning-nav desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="stunning-nav-link">
              <span>{link.name}</span>
              <div className="nav-link-glow"></div>
            </a>
          ))}
        </nav>

        <div className="stunning-actions desktop-actions">
          <a href="tel:+1234567890" className="phone-link">
            <Phone size={18} />
            <span>+1 (234) 567-890</span>
          </a>
          <button className="btn-primary">Get Demo</button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="stunning-mobile-menu">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mobile-actions">
            <button className="btn-primary" style={{ width: '100%' }}>Get Demo</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default StunningHeader;
