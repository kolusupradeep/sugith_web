import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award, Building2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animateCount = (setter, target, suffix = '') => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, interval);
    };

    animateCount(setCount1, 50000);
    animateCount(setCount2, 95);
    animateCount(setCount3, 500);
    animateCount(setCount4, 150);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-grid-pattern"></div>
        <div className="hero-glow"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fadeIn">
            <TrendingUp size={16} />
            <span>#1 Tech Training Platform in India</span>
          </div>

          <h1 className="hero-title animate-fadeInUp">
            Transform Your Career with
            <span className="text-gradient"> Elite Tech Training</span>
          </h1>

          <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Master cutting-edge technologies with industry experts. Get certified, 
            get hired, and accelerate your tech career with hands-on training in 
            Cloud, AI, Cybersecurity, DevOps, and more.
          </p>

          <div className="hero-cta animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary">
              Enroll Now
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="stat-item">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{count1.toLocaleString()}+</div>
                <div className="stat-label">Students Trained</div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon">
                <Award size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{count2}%</div>
                <div className="stat-label">Placement Rate</div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon">
                <Building2 size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{count3}+</div>
                <div className="stat-label">Corporate Clients</div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon">
                <TrendingUp size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{count4}+</div>
                <div className="stat-label">Expert Instructors</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg" 
              alt="Tech Training" 
              className="hero-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
