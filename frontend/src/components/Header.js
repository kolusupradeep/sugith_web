import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
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
    { name: 'Categories', href: '#categories' },
    { name: 'Corporate', href: '#corporate' },
    { name: 'Placements', href: '#placements' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-text">TECH<span className="logo-accent">ELITE</span></span>
        </div>

        <nav className="header-nav desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions desktop-actions">
          <button className="btn-secondary" style={{ minHeight: '48px', padding: '10px 20px' }}>
            Request Demo
          </button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
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
            <button className="btn-secondary" style={{ width: '100%' }}>
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
