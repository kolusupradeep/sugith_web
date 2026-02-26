import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import './PremiumHeader.css';

const PremiumHeader = () => {
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
    { name: 'Success Stories', href: '#reviews' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <header className={`premium-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-glow-line"></div>
      <div className="premium-header-container">
        <div className="premium-logo">
          <div className="logo-hexagon">
            <Sparkles size={20} />
          </div>
          <span className="logo-text-premium">
            MIND<span className="logo-accent-premium">MAJIX</span>
          </span>
        </div>

        <nav className="premium-nav desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="premium-nav-link">
              {link.name}
              <span className="nav-glow"></span>
            </a>
          ))}
        </nav>

        <div className="premium-actions desktop-actions">
          <button className="btn-secondary">
            <span>Sign In</span>
          </button>
          <button className="btn-primary">Get Started</button>
        </div>

        <button 
          className="mobile-menu-toggle-premium"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="premium-mobile-menu glass">
          <nav className="mobile-nav-premium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link-premium"
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

export default PremiumHeader;
