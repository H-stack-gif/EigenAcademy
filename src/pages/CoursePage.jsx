import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { courses } from '../data/courses';
import './CoursePage.css';

function CoursePage() {
  const { courseId, topicId } = useParams();
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

  // If no topicId, redirect to first topic
  if (!topicId && course.units.length > 0 && course.units[0].topics.length > 0) {
    return <Navigate to={`/course/${courseId}/${course.units[0].topics[0].id}`} replace />;
  }

  // Build a flat list of all topics for navigation
  const allTopics = [];
  course.units.forEach(unit => {
    unit.topics.forEach(topic => {
      allTopics.push(topic);
    });
  });

  // Find the current topic data and index
  const currentTopicIndex = allTopics.findIndex(t => t.id === topicId);
  const currentTopicData = allTopics[currentTopicIndex];

  // Find previous and next topics
  const previousTopic = currentTopicIndex > 0 ? allTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < allTopics.length - 1 ? allTopics[currentTopicIndex + 1] : null;

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
                    <Link
                      key={topic.id}
                      to={`/course/${courseId}/${topic.id}`}
                      className={`topic-nav-item ${topicId === topic.id ? 'active' : ''}`}
                      style={
                        topicId === topic.id
                          ? { borderLeftColor: categoryColor }
                          : {}
                      }
                    >
                      {topic.title}
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
              {currentTopicData?.title || 'Select a topic'}
            </h1>
          </header>

          <article className="content-body">
            <div className="placeholder-content">
              <p className="placeholder-marker">
                PLACEHOLDER: {currentTopicData?.description || `Content for ${course.name} - ${currentTopicData?.title}`}
              </p>
              <p>Detailed notes and explanations for {currentTopicData?.title} will go here.</p>

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

            <div className="topic-navigation">
              {previousTopic && (
                <Link
                  to={`/course/${courseId}/${previousTopic.id}`}
                  className="nav-button nav-previous"
                  style={{ borderColor: categoryColor }}
                >
                  <span className="nav-arrow">←</span>
                  <span className="nav-label">
                    <span className="nav-label-text">Previous</span>
                    <span className="nav-topic-title">{previousTopic.title}</span>
                  </span>
                </Link>
              )}
              {nextTopic && (
                <Link
                  to={`/course/${courseId}/${nextTopic.id}`}
                  className="nav-button nav-next"
                  style={{ borderColor: categoryColor }}
                >
                  <span className="nav-label">
                    <span className="nav-label-text">Next</span>
                    <span className="nav-topic-title">{nextTopic.title}</span>
                  </span>
                  <span className="nav-arrow">→</span>
                </Link>
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default CoursePage;
