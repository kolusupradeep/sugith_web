import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-about">
              <div className="footer-logo">
                <span className="logo-text">TECH<span className="logo-accent">ELITE</span></span>
              </div>
              <p className="footer-description">
                Transform your career with cutting-edge tech training. Expert instructors, 
                hands-on projects, and guaranteed placement assistance.
              </p>
              <div className="footer-social">
                <a href="#facebook" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#twitter" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="#linkedin" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="#instagram" className="social-link">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Popular Courses</h4>
              <ul className="footer-links">
                <li><a href="#cloud">Cloud Computing</a></li>
                <li><a href="#ai">Artificial Intelligence</a></li>
                <li><a href="#cyber">Cybersecurity</a></li>
                <li><a href="#devops">DevOps Engineering</a></li>
                <li><a href="#data">Data Science</a></li>
                <li><a href="#fullstack">Full Stack Development</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#corporate">Corporate Training</a></li>
                <li><a href="#placements">Placements</a></li>
                <li><a href="#instructors">Our Instructors</a></li>
                <li><a href="#blog">Blog & Resources</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact Info</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={18} />
                  <span>123 Tech Hub, Bangalore, Karnataka 560001</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>info@techelite.com</span>
                </li>
              </ul>

              <div className="footer-newsletter">
                <h5 className="newsletter-title">Subscribe to Newsletter</h5>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="newsletter-input"
                  />
                  <button className="newsletter-button">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} TechElite. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
