import React from 'react';
import { testimonials } from '../mock';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <div className="section-badge">Success Stories</div>
          <h2 className="section-title">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="section-subtitle">
            Real stories from professionals who transformed their careers with us
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <Quote size={32} />
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} size={18} fill="var(--brand-primary)" color="var(--brand-primary)" />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-course">
                Course: <span>{testimonial.course}</span>
              </div>

              <div className="testimonial-author">
                <div className="author-image-wrapper">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="author-image"
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
