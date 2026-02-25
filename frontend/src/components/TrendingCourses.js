import React, { useState } from 'react';
import { trendingCourses } from '../mockData';
import { Star, Users, Clock, ArrowRight, Zap, Cloud, Server, Code, Brain, GitBranch, Shield, BarChart3, Boxes } from 'lucide-react';
import './TrendingCourses.css';

const iconMap = {
  Zap, Cloud, Server, Code, Brain, GitBranch, Shield, BarChart3, Boxes
};

const TrendingCourses = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const tabs = [
    { id: 'trending', label: 'Trending' },
    { id: 'popular', label: 'Popular' },
    { id: 'free', label: 'Free' }
  ];

  return (
    <section className="trending-courses section">
      <div className="container">
        <div className="section-header-stunning">
          <h2 className="section-title-stunning">
            Explore Innovative Careers of <span className="text-gradient">Future Tech</span>
          </h2>
          <p className="section-subtitle-stunning">
            Choose an upskill program that suits your interest
          </p>
        </div>

        <div className="course-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && <div className="tab-indicator"></div>}
            </button>
          ))}
        </div>

        <div className="courses-grid-stunning">
          {trendingCourses.map((course, index) => {
            const IconComponent = iconMap[course.icon];
            return (
              <div 
                key={course.id} 
                className="course-card-stunning hover-lift-premium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="course-rating-badge">
                  <Star size={14} fill="var(--brand-primary)" color="var(--brand-primary)" />
                  <span>{course.rating}</span>
                </div>

                <div className="course-icon-wrapper">
                  <div className="course-icon-bg"></div>
                  {IconComponent && <IconComponent size={48} className="course-icon" />}
                </div>

                <h3 className="course-title-stunning">{course.title}</h3>

                <div className="course-meta-stunning">
                  <div className="meta-item-stunning">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="meta-item-stunning">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <button className="course-enroll-btn">
                  Enroll Now
                  <ArrowRight size={16} />
                </button>

                <div className="card-glow"></div>
              </div>
            );
          })}
        </div>

        <div className="view-all-wrapper">
          <button className="btn-secondary">
            View All Courses
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
