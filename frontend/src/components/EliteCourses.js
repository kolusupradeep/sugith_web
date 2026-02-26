import React from 'react';
import { courses } from '../data';
import { Star, ArrowRight } from 'lucide-react';
import { getCourseLogo } from './CourseLogo';
import './EliteCourses.css';

const EliteCourses = () => {
  return (
    <section className="elite-courses section" id="courses">
      <div className="container">
        <div className="section-header-elite">
          <h2 className="section-title-elite">
            Popular <span className="text-gradient">Training Programs</span>
          </h2>
          <p className="section-subtitle-elite">
            Industry-leading courses designed to accelerate your tech career
          </p>
        </div>

        <div className="courses-grid-elite">
          {courses.map((course, index) => (
            <EliteCourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EliteCourseCard = ({ course, index }) => {
  const LogoComponent = getCourseLogo(course.title);

  return (
    <div 
      className="elite-course-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-glow-border" style={{ background: `linear-gradient(135deg, ${course.brandColor}40, transparent)` }}></div>
      
      {/* Minimal Header */}
      <div className="card-header-elite">
        <div className="logo-container-elite" style={{ background: course.brandColorLight }}>
          <LogoComponent size={48} color={course.brandColor} />
        </div>
        
        {course.trending && (
          <span className="trending-badge">Trending</span>
        )}
      </div>

      {/* Clean Content */}
      <div className="card-content-elite">
        <div className="category-badge" style={{ color: course.brandColor }}>
          {course.category}
        </div>
        
        <h3 className="course-title-elite">{course.title}</h3>
        <p className="course-desc-elite">{course.description}</p>

        {/* Simple Stats */}
        <div className="course-stats-elite">
          <div className="stat-item-elite">
            <Star size={16} fill={course.brandColor} color={course.brandColor} />
            <span>{course.rating}</span>
            <span className="stat-dim">({course.reviews.toLocaleString()})</span>
          </div>
          <div className="stat-divider-elite"></div>
          <div className="stat-item-elite">
            <span className="stat-value">{course.students.toLocaleString()}</span>
            <span className="stat-label">students</span>
          </div>
          <div className="stat-divider-elite"></div>
          <div className="stat-item-elite">
            <span className="stat-value">{course.duration}</span>
          </div>
        </div>
      </div>

      {/* Clean Footer */}
      <div className="card-footer-elite">
        <div className="price-section-elite">
          <div className="price-main" style={{ color: course.brandColor }}>${course.price}</div>
          <div className="price-sub">
            <span className="price-old">${course.originalPrice}</span>
            <span className="price-save">Save ${course.originalPrice - course.price}</span>
          </div>
        </div>

        <div className="card-actions-elite">
          <button 
            className="btn-demo-elite"
            style={{ 
              background: `linear-gradient(135deg, ${course.brandColor}15, ${course.brandColor}25)`,
              borderColor: course.brandColor,
              color: course.brandColor
            }}
          >
            Get Demo
          </button>
          <button 
            className="btn-enroll-elite"
            style={{ background: course.brandColor }}
          >
            Enroll Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EliteCourses;
