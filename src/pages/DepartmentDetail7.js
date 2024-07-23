import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import './DepartmentDetail.css';

const DepartmentDetail7 = () => {
  const { name } = useParams();

  return (
    <div className="department-detail-container">
      <h1>Chemical Department</h1>
      <p>Explore the video lectures and enhance your learning experience.</p>
      <div className="years-container">
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Process Calculations and Thermodynamics</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Engineering Mathematics</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Heat Transfer</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Mass Transfer</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Mechanical Operations and Fluid Mechanics</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Chemical Reaction Engineering</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Plant Design and Economics</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span> Instrumentation and Process Control</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Chemical Technology</span>
            <p>12 Lectures</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentDetail7;

