import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { courses } from '../data/courses';
import './CoursePage.css';

function CoursePage() {
  const { courseId } = useParams();
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
              <div key={unit.id} className="unit-section">
                <div className="unit-header">{unit.name}</div>
                <div className="topics-nav">
                  {unit.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      to={`/course/${courseId}/${topic.id}`}
                      className="topic-link"
                    >
                      {topic.id} {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="content-area">
          <header className="content-header">
            <h1 className="content-title" style={{ color: categoryColor }}>
              {course.name}
            </h1>
            {course.subtitle && (
              <p className="content-subtitle">{course.subtitle}</p>
            )}
          </header>

          <article className="content-body">
            <div className="course-welcome">
              <p>Select a topic from the sidebar to view notes.</p>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default CoursePage;
