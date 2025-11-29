import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { courses } from '../data/courses';
import './CoursePage.css';

function CoursePage() {
  const { courseId } = useParams();
  const [currentUnit, setCurrentUnit] = useState('1.1');
  const [course, setCourse] = useState(null);
  const [categoryColor, setCategoryColor] = useState('#000');

  useEffect(() => {
    // Find the course and its category
    for (const [key, category] of Object.entries(courses)) {
      const foundCourse = category.courses.find(c => c.id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        setCategoryColor(category.color);
        break;
      }
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="course-page">
        <div className="error-message">Course not found</div>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  const currentUnitData = course.units.find(u => u.id === currentUnit);

  return (
    <div className="course-page">
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="course-layout">
        <aside className="sidebar">
          <h2 className="sidebar-title" style={{ color: categoryColor }}>
            {course.name}
          </h2>
          {course.subtitle && (
            <p className="sidebar-subtitle">{course.subtitle}</p>
          )}

          <nav className="units-nav">
            {course.units.map((unit) => (
              <button
                key={unit.id}
                className={`unit-nav-item ${currentUnit === unit.id ? 'active' : ''}`}
                onClick={() => setCurrentUnit(unit.id)}
                style={
                  currentUnit === unit.id
                    ? { borderLeftColor: categoryColor }
                    : {}
                }
              >
                {unit.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="content-area">
          <header className="content-header">
            <h1 className="content-title" style={{ color: categoryColor }}>
              {currentUnitData?.title || 'Select a unit'}
            </h1>
          </header>

          <article className="content-body">
            <div className="placeholder-content">
              <p className="placeholder-marker">PLACEHOLDER-{course.id.toUpperCase()}-{currentUnit}</p>
              <p>Content for {course.name} - {currentUnitData?.title} will go here.</p>

              <div className="sample-sections">
                <section>
                  <h3>Section 1: Introduction</h3>
                  <p>Placeholder content for {course.name}. This section will contain detailed notes and explanations.</p>
                </section>

                <section>
                  <h3>Section 2: Key Concepts</h3>
                  <p>Key concepts and theories for {course.name} will be documented here with examples and derivations.</p>
                </section>

                <section>
                  <h3>Section 3: Examples</h3>
                  <p>Worked examples and problem sets for {course.name} - {currentUnitData?.title}.</p>
                </section>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default CoursePage;
