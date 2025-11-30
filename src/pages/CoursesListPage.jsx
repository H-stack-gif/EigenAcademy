import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './CoursesListPage.css';

function CoursesListPage() {
  return (
    <div className="courses-list-page">
      <div className="courses-list-container">
        {/* Math Courses */}
        <div className="course-list-section">
          {courses.math.courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}/1.1`}
              className="course-list-title math-gradient"
            >
              {course.name}
            </Link>
          ))}
        </div>

        {/* Physics Courses */}
        <div className="course-list-section">
          {courses.physics.courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}/1.1`}
              className="course-list-title physics-gradient"
            >
              {course.name}
            </Link>
          ))}
        </div>

        {/* Chemistry Courses */}
        <div className="course-list-section">
          {courses.chemistry.courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}/1.1`}
              className="course-list-title chemistry-gradient"
            >
              {course.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesListPage;
