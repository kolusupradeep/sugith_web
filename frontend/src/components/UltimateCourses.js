import React, { useState } from 'react';
import { courses } from '../data';
import { Star, Users, Clock, Play, CheckCircle, TrendingUp, Award, Calendar, MessageCircle } from 'lucide-react';
import { getCourseLogo } from './CourseLogo';
import './UltimateCourses.css';

const UltimateCourses = () => {
  return (
    <section className="ultimate-courses section" id="courses">
      <div className="container">
        <div className="section-header-ultimate">
          <h2 className="section-title-ultimate">
            Explore Innovative Careers of <span className="text-gradient">Future Tech</span>
          </h2>
          <p className="section-subtitle-ultimate">
            Master cutting-edge technologies with comprehensive, industry-leading courses
          </p>
        </div>

        <div className="courses-grid-ultimate">
          {courses.map((course, index) => (
            <UltimateCourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const UltimateCourseCard = ({ course, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const LogoComponent = getCourseLogo(course.title);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return '#76B900';
      case 'Intermediate': return '#FF9900';
      case 'Advanced': return '#E50914';
      default: return course.brandColor;
    }
  };

  return (
    <div 
      className="ultimate-course-card glass"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Tags Row */}
      <div className="card-tags">
        {course.trending && (
          <span className="tag-trending">
            <TrendingUp size={12} />
            Trending
          </span>
        )}
        {course.bestseller && (
          <span className="tag-bestseller">
            <Award size={12} />
            Bestseller
          </span>
        )}
        <span className="tag-level" style={{ background: `${getLevelColor(course.level)}20`, color: getLevelColor(course.level) }}>
          {course.level}
        </span>
      </div>

      {/* Logo & Rating */}
      <div className="card-header-ultimate">
        <div className="logo-wrapper-ultimate" style={{ background: course.brandColorLight }}>
          <LogoComponent size={56} color={course.brandColor} />
        </div>
        
        <div className="rating-section">
          <div className="rating-stars">
            <Star size={16} fill={course.brandColor} color={course.brandColor} />
            <span className="rating-value">{course.rating}</span>
          </div>
          <div className="rating-count">({course.reviews.toLocaleString()} reviews)</div>
        </div>
      </div>

      {/* Category & Title */}
      <div className="card-content-ultimate">
        <div className="course-category-ultimate" style={{ color: course.brandColor }}>
          {course.category}
        </div>
        <h3 className="course-title-ultimate">{course.title}</h3>
        <p className="course-desc-ultimate">{course.description}</p>

        {/* What You'll Learn */}
        <div className="what-learn-section">
          <div className="what-learn-header">What you'll learn:</div>
          <div className="what-learn-list">
            {course.whatYouLearn.slice(0, 2).map((item, idx) => (
              <div key={idx} className="learn-item">
                <CheckCircle size={14} style={{ color: course.brandColor }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          {!isExpanded && course.whatYouLearn.length > 2 && (
            <button 
              className="show-more-btn"
              onClick={() => setIsExpanded(true)}
              style={{ color: course.brandColor }}
            >
              +{course.whatYouLearn.length - 2} more
            </button>
          )}
          {isExpanded && (
            <div className="what-learn-list">
              {course.whatYouLearn.slice(2).map((item, idx) => (
                <div key={idx} className="learn-item">
                  <CheckCircle size={14} style={{ color: course.brandColor }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Course Meta */}
        <div className="course-meta-ultimate">
          <div className="meta-item-ultimate">
            <Play size={14} />
            <span>{course.lectures} lectures</span>
          </div>
          <div className="meta-divider-ultimate"></div>
          <div className="meta-item-ultimate">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="meta-divider-ultimate"></div>
          <div className="meta-item-ultimate">
            <Users size={14} />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="instructor-section">
          <img src={course.instructor.avatar} alt={course.instructor.name} className="instructor-avatar" />
          <div className="instructor-info">
            <div className="instructor-name">{course.instructor.name}</div>
            <div className="instructor-title">{course.instructor.title}</div>
          </div>
          <div className="verified-badge" style={{ background: `${course.brandColor}15`, color: course.brandColor }}>
            <Award size={12} />
          </div>
        </div>

        {/* Next Batch & Certificate */}
        <div className="course-extras">
          <div className="extra-item">
            <Calendar size={14} style={{ color: course.brandColor }} />
            <span>Next batch: <strong>{course.nextBatch}</strong></span>
          </div>
          {course.certificate && (
            <div className="extra-item">
              <Award size={14} style={{ color: course.brandColor }} />
              <span>Certificate included</span>
            </div>
          )}
        </div>

        {/* Enrollment Stats */}
        <div className="enrollment-stats">
          <div className="stat-badge" style={{ background: `${course.brandColor}10`, color: course.brandColor }}>
            <TrendingUp size={12} />
            <span>{course.enrolledThisWeek} enrolled this week</span>
          </div>
          <div className="stat-badge" style={{ background: `${course.brandColor}10`, color: course.brandColor }}>
            <CheckCircle size={12} />
            <span>{course.completionRate}% completion rate</span>
          </div>
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="card-footer-ultimate">
        <div className="pricing-section">
          <div className="price-current" style={{ color: course.brandColor }}>
            ${course.price}
          </div>
          <div className="price-original">${course.originalPrice}</div>
          <div className="price-discount">
            {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
          </div>
        </div>

        <div className="action-buttons-ultimate">
          <button 
            className="btn-demo-ultimate"
            style={{ 
              borderColor: course.brandColor,
              color: course.brandColor
            }}
          >
            <MessageCircle size={16} />
            Get Demo
          </button>
          <button 
            className="btn-enroll-ultimate"
            style={{ 
              background: `linear-gradient(135deg, ${course.brandColor}, ${course.brandColor}dd)`,
              boxShadow: `0 4px 20px ${course.brandColor}40`
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Partner Badge */}
      {course.partner && (
        <div className="partner-badge" style={{ borderTop: `2px solid ${course.brandColor}30` }}>
          <Award size={14} style={{ color: course.brandColor }} />
          <span>{course.partner}</span>
        </div>
      )}

      <div className="card-glow-ultimate" style={{ background: `radial-gradient(circle at center, ${course.brandColor}10, transparent)` }}></div>
    </div>
  );
};

export default UltimateCourses;
