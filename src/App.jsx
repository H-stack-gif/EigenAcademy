import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CoursePage from './pages/CoursePage';
import AdminImport from './pages/AdminImport';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/admin/import" element={<AdminImport />} />
          <Route path="/course/:courseId/:topicId" element={<CoursePage />} />
        </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
