import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import katex from 'katex';
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
        console.debug('Loaded course', foundCourse.id, 'category', key);
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
  // Diagnostic logging to help trace blank-screen issues
  console.debug('topicId param:', topicId, 'topicIndex:', currentTopicIndex, 'currentTopicData:', currentTopicData);

  // Small helper: use a one-sentence summary if available (first sentence of description)
  const topicSummary = (() => {
    const src = currentTopicData?.description;
    if (!src) return null;
    // split into sentences (simple heuristic) and take the first
    const parts = src.split(/(?<=[.!?])\s+/);
    return parts[0] || src;
  })();

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
            <div className="topic-article">
              {currentTopicData?.contentPath ? (
                // Render markdown content fetched from public/articles via fetch
                (function () {
                  // local state within component is outside, so keep as simpler pattern — we load content below
                })()
              ) : (
                <div className="placeholder-content">
                  <div className="article-placeholder">
                    <p className="article-placeholder-text">{topicSummary ?? `This is a placeholder sentence — the full article content for "${currentTopicData?.title || 'this topic'}" will appear here in plain, readable text.`}</p>
                  </div>
                </div>
              )}
              {currentTopicData?.contentPath && (
                <TopicMarkdownRenderer contentPath={currentTopicData.contentPath} />
              )}
            </div>

            <div className={`topic-navigation ${previousTopic && nextTopic ? 'two' : 'single'}`}>
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

function TopicMarkdownRenderer({ contentPath }) {
  const [content, setContent] = useState(null);
  // Keep html state declared unconditionally so hooks order is stable across renders
  const [html, setHtml] = useState(null);

  useEffect(() => {
    let mounted = true;
    console.debug('Fetching article', contentPath);
    fetch(contentPath)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load ' + res.status);
        console.debug('Fetched', contentPath, 'status', res.status);
        return res.text();
      })
      .then(txt => { if (mounted) setContent(txt); })
      .catch(err => { if (mounted) setContent(`# Error loading content\n\n${err.message}`); });

    return () => { mounted = false; };
  }, [contentPath]);

  // We'll asynchronously prepare an HTML version of the article.
  // This effect must be declared before any early returns so hooks remain
  // consistent across renders (avoids "rendered more hooks" errors).
  useEffect(() => {
    let cancelled = false;

    async function convert() {
      try {
        // 1) Replace block math $$...$$ with KaTeX
        const withBlockMath = content.replace(/\$\$([\s\S]+?)\$\$/g, (m, expr) => {
          try { return katex.renderToString(expr, { displayMode: true, throwOnError: false }); }
          catch (e) { console.warn('KaTeX block render failed', e); return m; }
        });

        // 2) Replace inline math $...$ (avoid $$)
        const withAllMath = withBlockMath.replace(/(?<!\$)\$([^\n$]+?)\$(?!\$)/g, (m, expr) => {
          try { return katex.renderToString(expr, { displayMode: false, throwOnError: false }); }
          catch (e) { console.warn('KaTeX inline render failed', e); return m; }
        });

        // 3) Try to dynamically import 'marked' to convert Markdown -> HTML. If it's not available,
        // fall back to showing the raw markdown inside a <pre> so the app still works.
        try {
          const mod = await import(/* @vite-ignore */ 'marked');
          const parse = mod.marked?.parse ?? mod.default?.parse ?? mod.default ?? mod.marked;
          if (!parse) throw new Error('marked parse function not found');
          const htmlout = parse(withAllMath);
          // Diagnostic: log fetched content and output sizes so we can verify nothing is being truncated
          console.debug('Article conversion lengths', { contentLength: withAllMath.length, htmlLength: htmlout.length, contentPath });
          if (!cancelled) setHtml(htmlout);
        } catch (err) {
          console.warn('marked not available or failed to parse — falling back to raw markdown preview', err);
          if (!cancelled) setHtml(null); // leave null to indicate fallback
        }
      } catch (err) {
        console.error('convert markdown with katex failed', err);
        if (!cancelled) setHtml(null);
      }
    }

    // only run conversion when we have content
    if (!content) return;
    convert();

    return () => { cancelled = true; };
  }, [content]);

  if (!content) return <div className="article-loading">Loading article…</div>;

  // Local error boundary for the markdown renderer — if ReactMarkdown or plugins throw,
  // catch them and show the raw markdown so the page doesn't go blank.
  class MDRenderBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, info) {
      console.error('Markdown render boundary caught error', error, info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="article-error">
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Error rendering article</div>
            <div style={{ marginBottom: 8 }}>Falling back to raw markdown preview.</div>
            <pre style={{ whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.04)', padding: 12, borderRadius: 8 }}>{this.props.content}</pre>
            <p style={{ marginTop: 8 }}>If this persists, paste the article text here and I'll fix the parser.</p>
          </div>
        );
      }
      return this.props.children;
    }
  }

  

  if (html === null) {
    // Either parsing failed or marked is not installed — show raw markdown fallback
    return (
      <div className="article-error">
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Error rendering article</div>
        <div style={{ marginBottom: 8 }}>Falling back to raw markdown preview.</div>
        <pre style={{ whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.04)', padding: 12, borderRadius: 8 }}>{content}</pre>
      </div>
    );
  }

  return (
    <div className="article-content markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default CoursePage;
