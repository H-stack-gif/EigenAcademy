import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1 className="main-title">STEMfolio</h1>
        <p className="subtitle">Advanced Mathematics, Physics & Chemistry Notes</p>
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

                  <div className="units-tree">
                    {course.units.map((unit) => (
                      <div key={unit.id} className="unit-group">
                        <div className="unit-title">{unit.name}</div>
                        <div className="topics-list">
                          {unit.topics.map((topic) => (
                            <div key={topic.id} className="topic-item">
                              {topic.id} {topic.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
