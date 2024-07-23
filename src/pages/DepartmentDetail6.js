import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import './DepartmentDetail.css';

const DepartmentDetail6 = () => {
  const { name } = useParams();

  return (
    <div className="department-detail-container">
      <h1>Petrochemical Department</h1>
      <p>Explore the video lectures and enhance your learning experience.</p>
      <div className="years-container">
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Oil and Gas Well Drilling Technology </span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Petroleum Exploration </span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Petroleum Formation Evaluation </span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Oil and Gas Well Testing</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Offshore Drilling </span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Health Safety </span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Enhanced Oil Recovery Techniques</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Petroleum Production Operations</span>
            <p>12 Lectures</p>
          </div>
        </Link>
        <Link to={`/department/${name}/`} className="year-link">
          <div className="folder-icon">
            <FaFolderOpen className="folder-icon-image" />
            <span>Environment in Petroleum Industry</span>
            <p>12 Lectures</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentDetail6;

