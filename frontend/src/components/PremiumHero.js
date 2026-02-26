import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from 'lucide-react';
import './PremiumHero.css';

const PremiumHero = () => {
  return (
    <section className="premium-hero">
      <div className="hero-animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content-premium">
          <div className="hero-badge-premium animate-fadeIn">
            <Sparkles size={16} className="badge-icon" />
            <span>The Unified Skill Training & On-Job Support Platform</span>
            <div className="badge-glow"></div>
          </div>

          <h1 className="hero-title-premium animate-fadeInUp">
            We have got <span className="text-gradient">Courses</span> to create
            <br />
            career-changing opportunities for you
          </h1>

          <p className="hero-subtitle-premium animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Empower your career with industry-leading online training. Explore 550+ IT & professional 
            courses, gain in-demand skills, and accelerate your success with expert instructors.
          </p>

          <div className="hero-cta-premium animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <button className="btn-primary btn-hero-primary">
              Explore Courses
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary btn-hero-secondary">
              <Play size={18} />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="hero-stats-premium animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="stat-pill">
              <Zap size={18} />
              <span><strong>550+</strong> Courses</span>
            </div>
            <div className="stat-pill">
              <TrendingUp size={18} />
              <span><strong>510K+</strong> Students</span>
            </div>
            <div className="stat-pill">
              <Sparkles size={18} />
              <span><strong>95%</strong> Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-elements">
        <div className="float-icon float-1"><Zap size={24} /></div>
        <div className="float-icon float-2"><Sparkles size={20} /></div>
        <div className="float-icon float-3"><TrendingUp size={22} /></div>
      </div>
    </section>
  );
};

export default PremiumHero;
