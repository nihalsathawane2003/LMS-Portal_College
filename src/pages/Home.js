import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';
import wordcloud1 from '../assets/images/wordcloud1.png';
import wordcloud2 from '../assets/images/wordcloud2.png';
import wordcloud3 from '../assets/images/wordcloud3.png';
import departments from '../departmentsData';

const slides = [
  {
    title: 'Learning Made Easy',
    description: 'Virtual Learning Center...',
    image: wordcloud1
  },
  {
    title: 'Expand Your Knowledge',
    description: 'Access a wealth of resources...',
    image: wordcloud3
  },
  {
    title: 'Join the Community',
    description: 'Connect with learners worldwide...',
    image: wordcloud2
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const departmentRefs = useRef([]);

  useEffect(() => {
    const currentRefs = departmentRefs.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <div className="carousel-content">
          <button className="arrow-button" onClick={handlePrevClick}>
            <FaArrowLeft size={32} color="#327a82" />
          </button>
          <div className="slide" style={{ transform: `translateX(-${currentSlide * 101.5}%)` }}>
            {slides.map((slide, index) => (
              <div className="slide-item" key={index}>
                <div className="text-container">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
                <img src={slide.image} alt="carousel" className="carousel-image" />
              </div>
            ))}
          </div>
          <button className="arrow-button" onClick={handleNextClick}>
            <FaArrowRight size={32} color="#327a82" />
          </button>
        </div>
      </div>
      <div className="departments-section">
        <h2>Visit Video Lectures Department Wise</h2>
        <div className="departments-grid">
          {departments.map((department, index) => (
            <div
              className="department-card"
              key={department.name}
              ref={(el) => (departmentRefs.current[index] = el)}
            >
              <img src={department.icon} alt={`${department.name} icon`} className="department-icon" />
              <h3>{department.name}</h3>
              <p><a href={`http://${department.website}`} target="_blank" rel="noopener noreferrer">Department Detail</a></p>
              <Link to={`/department/${encodeURIComponent(department.name)}`} className="view-department-link">View Department</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
