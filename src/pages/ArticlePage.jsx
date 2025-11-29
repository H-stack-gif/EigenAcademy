import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { courses } from '../data/courses';
import './ArticlePage.css';

function ArticlePage() {
  const { courseId, topicId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [categoryColor, setCategoryColor] = useState('#000');
  const [currentTopic, setCurrentTopic] = useState(null);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    // Find the course and its category
    for (const [key, category] of Object.entries(courses)) {
      const foundCourse = category.courses.find(c => c.id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        setCategoryColor(category.color);

        // Flatten all topics for navigation
        const topics = [];
        foundCourse.units.forEach(unit => {
          unit.topics.forEach(topic => {
            topics.push({ ...topic, unitName: unit.name });
          });
        });
        setAllTopics(topics);

        // Find current topic
        const topic = topics.find(t => t.id === topicId);
        setCurrentTopic(topic);
        break;
      }
    }
  }, [courseId, topicId]);

  if (!course || !currentTopic) {
    return (
      <div className="article-page">
        <div className="error-message">Topic not found</div>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  // Get previous and next topics
  const currentIndex = allTopics.findIndex(t => t.id === topicId);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Generate placeholder content
  const getPlaceholderContent = () => {
    // For Linear Algebra and ODEs, we can add real content later
    // For now, show placeholders with course name
    const placeholders = [
      `This section covers ${currentTopic.title.toLowerCase()} in ${course.name}.`,
      `Learn about ${currentTopic.title.toLowerCase()} as part of ${course.name}.`,
      `Explore ${currentTopic.title.toLowerCase()} in the context of ${course.name}.`,
      `Understanding ${currentTopic.title.toLowerCase()} is essential for ${course.name}.`,
      `This topic discusses ${currentTopic.title.toLowerCase()} within ${course.name}.`
    ];

    const randomIndex = Math.floor(Math.random() * placeholders.length);
    return placeholders[randomIndex];
  };

  return (
    <div className="article-page">
      <Link to={`/course/${courseId}`} className="back-link">
        ← Back to {course.name}
      </Link>

      <div className="article-layout">
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
                      className={`topic-link ${topic.id === topicId ? 'active' : ''}`}
                      style={
                        topic.id === topicId
                          ? { borderLeftColor: categoryColor }
                          : {}
                      }
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
              {currentTopic.id} {currentTopic.title}
            </h1>
          </header>

          <article className="content-body">
            <div className="article-content">
              <p className="placeholder-intro">{getPlaceholderContent()}</p>

              <section className="article-section">
                <h2>Introduction</h2>
                <p>Content for this section will be added soon. This is a placeholder for {course.name} notes.</p>
              </section>

              <section className="article-section">
                <h2>Key Concepts</h2>
                <p>Important concepts and definitions related to {currentTopic.title} in {course.name} will be covered here.</p>
              </section>

              <section className="article-section">
                <h2>Examples</h2>
                <p>Practical examples demonstrating {currentTopic.title} from {course.name} will be provided in this section.</p>
              </section>
            </div>

            <nav className="article-nav">
              <div className="nav-button-container">
                {prevTopic ? (
                  <Link
                    to={`/course/${courseId}/${prevTopic.id}`}
                    className="nav-button prev-button"
                  >
                    <span className="nav-arrow">←</span>
                    <div className="nav-info">
                      <span className="nav-label">Previous</span>
                      <span className="nav-topic">{prevTopic.id} {prevTopic.title}</span>
                    </div>
                  </Link>
                ) : (
                  <div className="nav-button-placeholder"></div>
                )}
              </div>

              <div className="nav-button-container">
                {nextTopic ? (
                  <Link
                    to={`/course/${courseId}/${nextTopic.id}`}
                    className="nav-button next-button"
                  >
                    <div className="nav-info">
                      <span className="nav-label">Next</span>
                      <span className="nav-topic">{nextTopic.id} {nextTopic.title}</span>
                    </div>
                    <span className="nav-arrow">→</span>
                  </Link>
                ) : (
                  <div className="nav-button-placeholder"></div>
                )}
              </div>
            </nav>
          </article>
        </main>
      </div>
    </div>
  );
}

export default ArticlePage;
