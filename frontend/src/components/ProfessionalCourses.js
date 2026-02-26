import React from 'react';
import { courses } from '../data';
import { Star, Users, Clock } from 'lucide-react';
import './ProfessionalCourses.css';

const ProfessionalCourses = () => {
  return (
    <section className="professional-courses section" id="courses">
      <div className="container">
        <div className="section-header-pro">
          <h2 className="section-title-pro">
            Explore Innovative Careers of <span className="text-gradient">Future Tech</span>
          </h2>
          <p className="section-subtitle-pro">
            Choose an upskill program that suits your interest and career goals
          </p>
        </div>

        <div className="courses-grid-pro">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="course-card-pro"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="course-header-pro" style={{ '--brand-color': course.brandColor }}>
                <div className="course-icon-pro">
                  <div className="icon-bg" style={{ background: course.brandColor }}></div>
                  <span className="icon-text">{course.icon.substring(0, 2).toUpperCase()}</span>
                </div>
                <div className="course-rating-pro">
                  <Star size={14} fill={course.brandColor} color={course.brandColor} />
                  <span>{course.rating}</span>
                </div>
              </div>

              <div className="course-body-pro">
                <div className="course-category-pro" style={{ color: course.brandColor }}>
                  {course.category}
                </div>
                <h3 className="course-title-pro">{course.title}</h3>
                <p className="course-description-pro">{course.description}</p>

                <div className="course-meta-pro">
                  <div className="meta-item-pro">
                    <Users size={14} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="meta-item-pro">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              <div className="course-actions-pro">
                <button className="btn-demo-pro" style={{ 
                  '--brand-color': course.brandColor,
                  borderColor: course.brandColor,
                  color: course.brandColor
                }}>
                  Get Demo
                </button>
                <button className="btn-enroll-pro" style={{ 
                  background: course.brandColor,
                  borderColor: course.brandColor
                }}>
                  Enroll Now
                </button>
              </div>

              <div className="card-accent" style={{ background: course.brandColor }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCourses;
