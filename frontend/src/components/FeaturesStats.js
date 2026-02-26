import React, { useState, useEffect, useRef } from 'react';
import { features, stats } from '../data';
import { BookOpen, Briefcase, Clock, Award } from 'lucide-react';
import './FeaturesStats.css';

const iconMap = { BookOpen, Briefcase, Clock, Award };

const FeaturesStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
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

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 50;
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
      <section className="features-section section section-alt">
        <div className="container">
          <div className="section-header-pro">
            <h2 className="section-title-pro">
              <span className="text-gradient">Key Features</span>
            </h2>
            <p className="section-subtitle-pro">
              Essential features delivering outstanding learning experience
            </p>
          </div>

          <div className="features-grid-minimal">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div 
                  key={feature.id} 
                  className="feature-card-minimal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon-minimal">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h3 className="feature-title-minimal">{feature.title}</h3>
                  <p className="feature-desc-minimal">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stats-section section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid-minimal">
            {stats.map((stat, index) => (
              <div key={stat.id} className="stat-card-minimal">
                <div className="stat-number-minimal">
                  {counts[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="stat-label-minimal">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesStats;
