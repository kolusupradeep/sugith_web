import React, { useState, useEffect, useRef } from 'react';
import { keyFeatures, platformStats } from '../mockData';
import { BookOpen, Briefcase, Clock, Award } from 'lucide-react';
import './KeyFeaturesStats.css';

const iconMap = {
  BookOpen, Briefcase, Clock, Award
};

const KeyFeaturesStats = () => {
  const [counts, setCounts] = useState(platformStats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    platformStats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }
      }, duration / steps);
    });
  };

  return (
    <>
      <section className="key-features section section-alt">
        <div className="container">
          <div className="section-header-stunning">
            <h2 className="section-title-stunning">
              <span className="text-gradient">Key Features</span>
            </h2>
            <p className="section-subtitle-stunning">
              We believe in providing the best technology training loaded with essential features to deliver outstanding learning experience
            </p>
          </div>

          <div className="features-grid">
            {keyFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div 
                  key={feature.id} 
                  className="feature-card glass-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-glow"></div>
                    {IconComponent && <IconComponent size={40} className="feature-icon" />}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-shine"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="platform-stats section" ref={statsRef}>
        <div className="stats-bg">
          <div className="stats-glow"></div>
        </div>
        <div className="container">
          <div className="stats-grid">
            {platformStats.map((stat, index) => (
              <div key={stat.id} className="stat-card-premium">
                <div className="stat-number-premium">
                  {stat.prefix}{counts[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="stat-label-premium">{stat.label}</div>
                <div className="stat-border"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeaturesStats;
