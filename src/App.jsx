import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CoursePage from './pages/CoursePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
