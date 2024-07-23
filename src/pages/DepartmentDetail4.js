import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import './DepartmentDetail.css';

const DepartmentDetail4 = () => {
  const { name } = useParams();

  return (
    <div className="department-detail-container">
      <h1>Information Technology Department</h1>
      <p>Explore the video lectures and enhance your learning experience.</p>
      <div className="years-container">
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Digital Logic</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Computer Organization and Architecture</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Programming and Data Structures</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Algorithms</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Theory of Computation</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Compiler Design</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Operating System</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span> Databases</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Computer Networks</span>
            <p>12 Lectures</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentDetail4;

