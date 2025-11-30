import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { courses } from '../data/courses';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTitleClick = () => {
    navigate('/courses-list');
  };

  return (
    <div className="homepage">
      {/* Hamburger menu button */}
      <button 
        className="hamburger-menu" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button 
          className="sidebar-close" 
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <div className="sidebar-content">
          {Object.entries(courses).map(([key, category]) => (
            <div key={key} className="sidebar-category">
              <h3 className="sidebar-category-title" style={{ color: category.color }}>
                {category.title}
              </h3>
              <div className="sidebar-courses">
                {category.courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/course/${course.id}`}
                    className="sidebar-course-link"
                    onClick={() => setSidebarOpen(false)}
                    style={{
                      background: key === 'math'
                        ? 'linear-gradient(135deg, rgba(255,107,107,0.15), rgba(142,68,255,0.15))'
                        : key === 'physics'
                        ? 'linear-gradient(135deg, rgba(58,124,165,0.15), rgba(142,68,255,0.15))'
                        : 'linear-gradient(135deg, rgba(67,185,127,0.15), rgba(142,68,255,0.15))',
                      borderBottom: `2px solid ${category.color}`
                    }}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <header className="hero">
        {/* Top ticker - conveyor style vertical stack moving right */}
        <Ticker />
        
        
        <div className="logo-container">
          <img src="/image-removebg-preview.png" alt="STEM Logo" className="stem-logo" />
        </div>
        <h1 className="main-title" onClick={handleTitleClick}>STEMfolio</h1>
        <div className="subtitle-container">
          <img src="/pngtree-creative-arrows-png-image_2951081-removebg-preview.png" alt="" className="arrow-decoration" />
          <p className="subtitle">Advanced Mathematics, Physics & Chemistry Notes</p>
        </div>
        <p className="author-name">by Krishna Patel</p>
      </header>

      <div className="courses-container">
        {Object.entries(courses).map(([key, category]) => (
          <section
            key={key}
            className="category-section"
            style={{
              ['--accent']: category.color,
              ['--border']: key === 'math'
                ? 'linear-gradient(135deg, rgba(255,107,107,0.55), rgba(142,68,255,0.55))'
                : key === 'physics'
                ? 'linear-gradient(135deg, rgba(58,124,165,0.55), rgba(142,68,255,0.55))'
                : 'linear-gradient(135deg, rgba(67,185,127,0.55), rgba(142,68,255,0.55))'
            }}>
            <h2 className="category-title">
              {category.title}
            </h2>

            <div className="courses-grid">
              {category.courses.map((course) => (
                <div key={course.id} className="course-card">
                  <Link
                    to={`/course/${course.id}`}
                    className="course-link"
                    style={{ color: category.color }}
                  >
                    <h3 className="course-name">{course.name}</h3>
                    {course.subtitle && (
                      <p className="course-subtitle">{course.subtitle}</p>
                    )}
                  </Link>

                  <div className="units-preview">
                    {course.units.map((unit) => (
                      <div key={unit.id} className="unit-section">
                        <div className="unit-item">{unit.title}</div>
                        {unit.topics && unit.topics.length > 0 && (
                          <div className="topics-list">
                            {unit.topics.map((topic) => (
                              <Link
                                key={topic.id}
                                to={`/course/${course.id}/${topic.id}`}
                                className="topic-item"
                              >
                                {topic.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      

      <footer className="homepage-footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 Krishna Patel - STEMfolio</p>
          <div className="footer-contact">
            <a href="mailto:createcuz@gmail.com" className="footer-link">createcuz@gmail.com</a>
            <span className="footer-separator">•</span>
            <a href="tel:+14015720055" className="footer-link">401-572-0055</a>
            <span className="footer-separator">•</span>
            <span className="footer-id">CommonApp ID: 48387645</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;

function Ticker() {
  const items = [
    'Classical Mechanics',
    'Partial Differential Equations',
    'Complex Analysis',
    'Thermodynamics & StatMech',
    'Atomic & Molecular Physics',
    'Physical Chemistry',
    'Solid State Chemistry',
    'Organic Chemistry',
    'Material Science'
  ];

  // Pure CSS animation handles the motion — render two copies so we can slide continuously without gaps.
  return (
    <div className="top-ticker" role="region" aria-label="site topics ticker">
      <div className="ticker-accent" aria-hidden="true" />
      <div className="ticker-bar">
        <div className="ticker-track">
          <div className="ticker-column">
            {items.map((t, i) => (
              <div className="ticker-row" key={i}>{t}</div>
            ))}
          </div>
          <div className="ticker-column" aria-hidden="true">
            {items.map((t, i) => (
              <div className="ticker-row" key={'dup-' + i}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
