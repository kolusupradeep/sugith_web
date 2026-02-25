import React from 'react';
import { categories } from '../mock';
import { Cloud, Brain, Shield, GitBranch, BarChart3, Code, ArrowRight } from 'lucide-react';
import './Categories.css';

const iconMap = {
  Cloud: Cloud,
  Brain: Brain,
  Shield: Shield,
  GitBranch: GitBranch,
  BarChart3: BarChart3,
  Code: Code
};

const Categories = () => {
  return (
    <section className="categories" id="categories">
      <div className="categories-background"></div>
      
      <div className="categories-container">
        <div className="section-header">
          <div className="section-badge">Course Categories</div>
          <h2 className="section-title">
            Explore <span className="text-gradient">Tech Domains</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive training programs across all major technology domains
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div key={category.id} className="category-card">
                <div className="category-image-wrapper">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="category-image"
                  />
                  <div className="category-image-overlay"></div>
                </div>

                <div className="category-content">
                  <div className="category-icon">
                    {IconComponent && <IconComponent size={32} />}
                  </div>

                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">{category.description}</p>

                  <div className="category-info">
                    <span className="category-courses">{category.courses} Courses</span>
                  </div>

                  <button className="category-explore">
                    Explore Courses
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
