import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import { trustedCompanies } from '../mockData';
import './StunningHero.css';

const StunningHero = () => {
  const [currentCompany, setCurrentCompany] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % trustedCompanies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stunning-hero">
      <div className="stunning-hero-bg">
        <div className="hero-glow-orb hero-glow-1"></div>
        <div className="hero-glow-orb hero-glow-2"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="stunning-hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fadeIn">
            <Sparkles size={16} />
            <span>The Unified Skill Training & On-Job Support Platform</span>
          </div>

          <h1 className="hero-title animate-fadeInUp">
            We have got <span className="text-gradient">Courses</span> to create
            <br />
            <span className="text-glow">career-changing</span> opportunities for you
          </h1>

          <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Empower your career with industry-leading online training. Explore 550+ IT & professional 
            courses, gain in-demand skills, and accelerate your success with expert guidance.
          </p>

          <div className="hero-cta-group animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <button className="btn-primary btn-hero">
              Explore Courses
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary btn-hero">
              Get Free Demo
            </button>
          </div>

          <div className="hero-trust animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="trust-badge">
              <TrendingUp size={18} />
              <span>Trusted and appreciated by</span>
            </div>
            <div className="trust-companies">
              {trustedCompanies.slice(0, 4).map((company, index) => (
                <div 
                  key={index} 
                  className="company-badge"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-features animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="feature-item">
              <CheckCircle size={20} />
              <span>550+ Courses</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Expert Instructors</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Live Projects</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Certification</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <div className="visual-wrapper">
            <div className="visual-glow"></div>
            <img 
              src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg" 
              alt="Tech Training Platform" 
              className="visual-image"
            />
            <div className="visual-overlay"></div>
            <div className="visual-stats">
              <div className="stat-card">
                <div className="stat-number">510K+</div>
                <div className="stat-label">Happy Students</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.8★</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StunningHero;
