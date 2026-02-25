import React from 'react';
import { testimonials } from '../mockData';
import { Quote, Linkedin } from 'lucide-react';
import './StunningTestimonials.css';

const StunningTestimonials = () => {
  return (
    <section className="stunning-testimonials section section-alt">
      <div className="container">
        <div className="section-header-stunning">
          <h2 className="section-title-stunning">
            What Learners Say About <span className="text-gradient">MindMajix</span>
          </h2>
          <p className="section-subtitle-stunning">
            Real success stories from professionals who transformed their careers
          </p>
        </div>

        <div className="testimonials-grid-stunning">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card-stunning glass-card hover-lift-premium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="quote-icon-stunning">
                <Quote size={40} />
              </div>

              <p className="testimonial-text-stunning">{testimonial.text}</p>

              <div className="testimonial-author-stunning">
                <div className="author-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="avatar-ring"></div>
                </div>
                <div className="author-details">
                  <div className="author-name-stunning">{testimonial.name}</div>
                  <div className="author-role-stunning">{testimonial.role}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
                <a href={testimonial.linkedin} className="linkedin-link">
                  <Linkedin size={20} />
                </a>
              </div>

              <div className="testimonial-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StunningTestimonials;
