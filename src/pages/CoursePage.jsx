import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { courses } from '../data/courses';
import './CoursePage.css';

function CoursePage() {
  const { courseId } = useParams();
  const [currentTopic, setCurrentTopic] = useState('1.1');
  const [course, setCourse] = useState(null);
  const [categoryColor, setCategoryColor] = useState('#000');

  useEffect(() => {
    // Find the course and its category
    for (const [key, category] of Object.entries(courses)) {
      const foundCourse = category.courses.find(c => c.id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        setCategoryColor(category.color);
        // Set initial topic to the first topic of the first unit
        if (foundCourse.units.length > 0 && foundCourse.units[0].topics.length > 0) {
          setCurrentTopic(foundCourse.units[0].topics[0].id);
        }
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

  // Find the current topic data
  let currentTopicData = null;
  for (const unit of course.units) {
    const topic = unit.topics.find(t => t.id === currentTopic);
    if (topic) {
      currentTopicData = topic;
      break;
    }
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
              <div key={unit.id} className="nav-unit-group">
                <div className="nav-unit-title">{unit.title}</div>
                <div className="nav-topics-list">
                  {unit.topics.map((topic) => (
                    <button
                      key={topic.id}
                      className={`topic-nav-item ${currentTopic === topic.id ? 'active' : ''}`}
                      onClick={() => setCurrentTopic(topic.id)}
                      style={
                        currentTopic === topic.id
                          ? { borderLeftColor: categoryColor }
                          : {}
                      }
                    >
                      {topic.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="content-area">
          <header className="content-header">
            <h1 className="content-title" style={{ color: categoryColor }}>
              {currentTopicData?.title || 'Select a topic'}
            </h1>
          </header>

          <article className="content-body">
            <div className="placeholder-content">
              <p className="placeholder-marker">PLACEHOLDER-{course.id.toUpperCase()}-{currentTopic}</p>
              <p>Content for {course.name} - {currentTopicData?.title} will go here.</p>

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
                  <p>Worked examples and problem sets for {course.name} - {currentTopicData?.title}.</p>
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
