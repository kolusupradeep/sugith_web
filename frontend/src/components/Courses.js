import React from 'react';
import { courses } from '../mock';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import './Courses.css';

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="courses-container">
        <div className="section-header">
          <div className="section-badge">Popular Courses</div>
          <h2 className="section-title">
            Master <span className="text-gradient">In-Demand</span> Technologies
          </h2>
          <p className="section-subtitle">
            Choose from our comprehensive range of industry-leading courses designed by experts
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image-wrapper">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="course-image"
                />
                <div className="course-overlay">
                  <span className="course-level">{course.level}</span>
                </div>
              </div>

              <div className="course-content">
                <div className="course-category">{course.category}</div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>

                <div className="course-highlights">
                  {course.highlights.map((highlight, index) => (
                    <span key={index} className="course-highlight">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="course-meta">
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="meta-item">
                    <Star size={16} fill="var(--brand-primary)" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="course-footer">
                  <div className="course-price">{course.price}</div>
                  <button className="course-cta">
                    Enroll Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-footer">
          <button className="btn-secondary">
            View All Courses
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
