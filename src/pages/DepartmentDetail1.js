import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import './DepartmentDetail.css';

const DepartmentDetail1 = () => {
  const { name } = useParams();

  return (
    <div className="department-detail-container">
      <h1>Electrical Department</h1>
      <p>Explore the video lectures and enhance your learning experience.</p>
      <div className="years-container">
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Electric Circuits</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Electromagnetic Fields</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Signals and Systems</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Electrical Machines</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Control Systems</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Electrical and Electronic Measurements</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Analog and Digital Electronics</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Power Electronics</span>
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
      </div>
    </div>
  );
};

export default DepartmentDetail1;
