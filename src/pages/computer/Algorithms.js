import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';

const ComputerOrganization = () => {
  const lessons = [
    { title: "Overview of the course", videoId: "5Y8Lfsreeck" },
    { title: "Framework for Algorithms Analysis", videoId: "7KQf7f8ti1U" },
    { title: " Algorithms Analysis Framework - II", videoId: "PVrbRrI0jG4" },
    { title: "Asymptotic Notation", videoId: "EL9T1ngiCqA" },
    { title: "Algorithm Design Techniques : Basics", videoId: "Ou29NNWTSaw" },
    { title: "Divide And Conquer-I", videoId: "i2xhlKLJ5FI" },
    { title: "Divide And Conquer -II Median Finding", videoId: "OcAT3kP7LQw" },
    { title: "Divide And Conquer -III Surfing Lower Bounds", videoId: "frir6Sf7ft4" },
    { title: "Divide And Conquer -IV Closest Pair", videoId: "6CCwWCstDGc" },
    { title: "Greedy Algorithms -I", videoId: "EcT-Jt5WStw" },
    { title: "Greedy Algorithms - II", videoId: "L1PvJO_1f84" },
    { title: " Greedy Algorithms - III", videoId: "srOghUgUZAQ" },
  ];

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handleLessonClick = (index) => {
    setCurrentLessonIndex(index);
  };

  const currentLesson = lessons[currentLessonIndex];

  return (
    <div className="course-container">
      <header className="course-header">
        <h1 className="course-title">Algorithm</h1>
      </header>
      <div className="video-container">
        <div className="navigation-buttons">
          <Link to="/" className="nav-button home-button">
            <span className="icon">🏠</span> Home
          </Link>
          <Link to="/department/Computer Engineering" className="nav-button courses-button">
            Courses
          </Link>
        </div>
        <div className="video-content">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={currentLesson.title}
          ></iframe>
          <h2 className="video-title">{currentLesson.title}</h2>
          <button className="next-lesson-button" onClick={handleNextLesson}>
            Next Lesson »
          </button>
        </div>
      </div>
      <div className="lessons-list">
        <h3>Lessons List | 12 Lessons</h3>
        <div className="lessons-grid">
          {lessons.map((lesson, index) => (
            <div 
              className={`lesson-item ${index === currentLessonIndex ? 'selected' : ''}`} 
              key={index} 
              onClick={() => handleLessonClick(index)}
            >
              <iframe
                width="200"
                height="150"
                src={`https://www.youtube.com/embed/${lesson.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={lesson.title}
              ></iframe>
              <p>{lesson.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerOrganization;
