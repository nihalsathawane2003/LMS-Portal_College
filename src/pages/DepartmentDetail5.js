import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import './DepartmentDetail.css';

const DepartmentDetail5 = () => {
  const { name } = useParams();

  return (
    <div className="department-detail-container">
      <h1>Mechanical Department</h1>
      <p>Explore the video lectures and enhance your learning experience.</p>
      <div className="years-container">
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Mechanics of Materials</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Theory of Machines</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Fluid Mechanics</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Thermodynamics</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Applications</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Machining and Machine Tool Operations</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Metrology and Inspection</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Machine Design</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Casting, Forming and Joining Processes</span>
            <p>12 Lectures</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentDetail5;

