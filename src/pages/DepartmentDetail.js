import React from 'react';
import { Link } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import './DepartmentDetail.css';

const DepartmentDetail = () => {
  

  return (
    <div className="department-detail-container">
      <h1>Computer Department</h1>
      <p>Explore the video lectures and enhance your learning experience.</p>
      <div className="years-container">
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Computer Organization and Architecture</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Programming and Data Structures</span>
            <p>30 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Algorithms</span>
            <p>28 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Theory of Computation</span>
            <p>32 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Operating System</span>
            <p>27 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Databases</span>
            <p>22 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Computer Networks</span>
            <p>26 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Digital Logic and Design</span>
            <p>24 Lectures</p>
          </div>
        </Link>
        <Link to="/login" className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Compiler Design</span>
            <p>20 Lectures</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentDetail;