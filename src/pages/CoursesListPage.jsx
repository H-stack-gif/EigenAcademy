import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './CoursesListPage.css';

function CoursesListPage() {
  return (
    <div className="courses-list-page">
      <div className="courses-list-container">
        {/* Analytic Math Courses */}
        <div className="course-list-section">
          {courses.analyticMath.courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}/1.1`}
              className="course-list-title math-gradient"
            >
              {course.name}
            </Link>
          ))}
        </div>

        {/* Algebraic Math Courses */}
        <div className="course-list-section">
          {courses.algebraicMath.courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}/1.1`}
              className="course-list-title algebraic-math-gradient"
            >
              {course.name}
            </Link>
          ))}
        </div>

        {/* Classical Physics Courses */}
        <div className="course-list-section">
          {courses.classicalPhysics.courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}/1.1`}
              className="course-list-title physics-gradient"
            >
              {course.name}
            </Link>
          ))}
        </div>

        {/* Modern Physics Courses */}
        <div className="course-list-section">
          {courses.modernPhysics.courses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}/1.1`}
              className="course-list-title modern-physics-gradient"
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
