import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';

const ComputerOrganization = () => {
  const lessons = [
    { title: "Introduction To Computing", videoId: "leWKvuZVUE8" },
    { title: "Introduction To System : Software", videoId: "VG9VopzV_T0" },
    { title: "Introduction To System : Hardware", videoId: "FOyuMclwymw" },
    { title: "Memory Organization", videoId: "Zm1saVDpS7g" },
    { title: "I/O Systems", videoId: "piuWSMLNeco" },
    { title: "Data Representation", videoId: "ceuXLsuZhLE" },
    { title: "Data Path Controller : Micro Programmed", videoId: "fo-yfZyrW4c" },
    { title: " State Machine Design", videoId: "hg2QxXeI_-8" },
    { title: "Controller Design: Microprogrammed and Hardwired", videoId: "6CCwWCstDGc" },
    { title: "Controller Design (Contd)", videoId: "QmVX73K_hyo" },
    { title: "Addressing Modes", videoId: "p9wxyIx-j-c" },
    { title: " Problem Exercise", videoId: "F5pU5LbmLVg" },
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
        <h1 className="course-title">Database</h1>
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
