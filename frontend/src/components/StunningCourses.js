import React, { useRef } from 'react';
import { courses } from '../data';
import { Star, Users, Clock } from 'lucide-react';
import './StunningCourses.css';

const StunningCourses = () => {
  return (
    <section className="stunning-courses section" id="courses">
      <div className="container">
        <div className="section-header-stunning">
          <h2 className="section-title-stunning">
            Explore Innovative Careers of <span className="text-gradient">Future Tech</span>
          </h2>
          <p className="section-subtitle-stunning">
            Master cutting-edge technologies with industry-leading courses designed by experts
          </p>
        </div>

        <div className="courses-grid-stunning">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ course, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
  };

  return (
    <div 
      ref={cardRef}
      className="course-card-stunning glass"
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-glow-effect" style={{ background: `radial-gradient(circle at center, ${course.brandColor}15, transparent)` }}></div>
      
      <div className="course-header-stunning">
        <div className="course-logo-stunning" style={{ 
          background: `linear-gradient(135deg, ${course.brandColor}20, ${course.brandColor}05)`,
          border: `2px solid ${course.brandColor}40`
        }}>
          <span className="logo-text-stunning" style={{ color: course.brandColor }}>
            {course.icon.substring(0, 2).toUpperCase()}
          </span>
        </div>
        
        <div className="course-rating-stunning">
          <Star size={14} fill={course.brandColor} color={course.brandColor} />
          <span>{course.rating}</span>
        </div>
      </div>

      <div className="course-category-stunning" style={{ color: course.brandColor }}>
        {course.category}
      </div>

      <h3 className="course-title-stunning">{course.title}</h3>
      <p className="course-desc-stunning">{course.description}</p>

      <div className="course-meta-stunning">
        <div className="meta-item-stunning">
          <Users size={14} />
          <span>{course.students.toLocaleString()}</span>
        </div>
        <div className="meta-divider"></div>
        <div className="meta-item-stunning">
          <Clock size={14} />
          <span>{course.duration}</span>
        </div>
      </div>

      <div className="course-actions-stunning">
        <button 
          className="btn-demo-stunning"
          style={{ 
            borderColor: course.brandColor,
            color: course.brandColor
          }}
        >
          Get Demo
        </button>
        <button 
          className="btn-enroll-stunning"
          style={{ 
            background: `linear-gradient(135deg, ${course.brandColor}, ${course.brandColor}dd)`,
            boxShadow: `0 4px 20px ${course.brandColor}40`
          }}
        >
          Enroll Now
        </button>
      </div>

      <div className="card-shine"></div>
    </div>
  );
};

export default StunningCourses;
