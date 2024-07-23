import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';

const ComputerOrganization = () => {
  const lessons = [
    { title: "Introduction to Operating Systems", videoId: "MaA0vFKt-ew" },
    { title: "Process Management - 1", videoId: "tfvOSqmg0vk" },
    { title: "Process Management - 2", videoId: "7JejsVrrv8M" },
    { title: "Process Management - 2", videoId: "CN9_YXGdQV8" },
    { title: "Concurrent Management - 2", videoId: "FdmT4300-is" },
    { title: "Concurrent Management - 3", videoId: "SxYUKKml-FE" },
    { title: "Critical Section Problem - 1", videoId: "A9CCDS3Jizc" },
    { title: "Critical Section Problem - 2", videoId: "g5FlP--PPqY" },
    { title: "Critical Section Problem - 3", videoId: "4eNf4R6Jf3g" },
    { title: "Dead Lock - 1", videoId: "y9C4EAqHxvI" },
    { title: "Dead Lock - 2", videoId: "LueFZs5su6o" },
    { title: "Dead Lock - 3", videoId: "5WMxEnWNmho" },
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
        <h1 className="course-title">Operating System</h1>
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
