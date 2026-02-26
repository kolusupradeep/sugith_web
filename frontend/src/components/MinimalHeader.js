import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './MinimalHeader.css';

const MinimalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Corporate Training', href: '#corporate' },
    { name: 'Resources', href: '#resources' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className={`minimal-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="minimal-header-container">
        <div className="minimal-logo">
          <div className="logo-mark"></div>
          <span className="logo-text-minimal">
            MIND<span className="logo-accent-minimal">MAJIX</span>
          </span>
        </div>

        <nav className="minimal-nav desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="minimal-nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="minimal-actions desktop-actions">
          <a href="tel:+1234567890" className="phone-link-minimal">
            <Phone size={16} />
            <span>+1 (234) 567-890</span>
          </a>
          <button className="btn-primary">Get Started</button>
        </div>

        <button 
          className="mobile-menu-toggle-minimal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="minimal-mobile-menu">
          <nav className="mobile-nav-minimal">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link-minimal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default MinimalHeader;
