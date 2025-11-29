import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="logo-container">
          <img src="/stem-logo.png" alt="STEM Logo" className="stem-logo" />
        </div>
        <h1 className="main-title">STEMfolio</h1>
        <p className="subtitle">Advanced Mathematics, Physics & Chemistry Notes</p>
        <p className="author-name">by Krishna Patel</p>
      </header>

      <div className="courses-container">
        {Object.entries(courses).map(([key, category]) => (
          <section key={key} className="category-section">
            <h2 className="category-title" style={{ color: category.color }}>
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
                    {course.units.slice(0, 4).map((unit) => (
                      <div key={unit.id} className="unit-item">
                        {unit.title}
                      </div>
                    ))}
                    {course.units.length > 4 && (
                      <div className="unit-item more-units">
                        +{course.units.length - 4} more units
                      </div>
                    )}
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
