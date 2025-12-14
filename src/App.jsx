import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Homepage from './pages/Homepage';
import CoursePage from './pages/CoursePage';
import AdminImport from './pages/AdminImport';
import CoursesListPage from './pages/CoursesListPage';
import ErrorBoundary from './components/ErrorBoundary';
import { courses } from './data/courses';
import './App.css';
// ColoredLetters usage removed — using plain titles

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
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
                <h3 className="sidebar-category-title">
                  {category.title}
                </h3>
                <div className="sidebar-courses">
                  {category.courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/course/${course.id}`}
                      className="sidebar-course-link"
                      data-category={key}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>

        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses-list" element={<CoursesListPage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/admin/import" element={<AdminImport />} />
          <Route path="/course/:courseId/:topicId" element={<CoursePage />} />
        </Routes>
        </ErrorBoundary>
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
