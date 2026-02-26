import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import './MinimalHero.css';

const MinimalHero = () => {
  return (
    <section className="minimal-hero">
      <div className="container">
        <div className="hero-content-minimal">
          <div className="hero-badge-minimal animate-fadeIn">
            <Sparkles size={14} />
            <span>The Unified Skill Training & On-Job Support Platform</span>
          </div>

          <h1 className="hero-title-minimal animate-fadeInUp">
            We have got <span className="text-gradient">Courses</span> to create
            <br />
            career-changing opportunities for you
          </h1>

          <p className="hero-subtitle-minimal animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Empower your career with industry-leading online training. Explore 550+ IT & professional 
            courses, gain in-demand skills, and accelerate your success.
          </p>

          <div className="hero-cta-minimal animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <button className="btn-primary">
              Explore Courses
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Get Free Demo
            </button>
          </div>

          <div className="hero-features-minimal animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="feature-pill">
              <CheckCircle size={16} />
              <span>550+ Courses</span>
            </div>
            <div className="feature-pill">
              <CheckCircle size={16} />
              <span>Live Projects</span>
            </div>
            <div className="feature-pill">
              <CheckCircle size={16} />
              <span>Certification</span>
            </div>
            <div className="feature-pill">
              <CheckCircle size={16} />
              <span>Job Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;
