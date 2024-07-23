import React, { useState } from 'react';
import './MainNavbar.css';
import homeIcon from '../assets/images/icon.png';

const MainNavbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="mainnavbar">
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`mainnavbar-menu ${menuActive ? 'active' : ''}`}>
        <li className="mainnavbar-item">
          <a href="/">
            <img src={homeIcon} alt="home" className="mainnavbar-icon" />
          </a>
        </li>
        <li className="mainnavbar-item"><a href="/">University</a></li>
        <li className="mainnavbar-item"><a href="/">Governance</a></li>
        <li className="mainnavbar-item"><a href="/">Examination</a></li>
        <li className="mainnavbar-item"><a href="/">Academics</a></li>
        <li className="mainnavbar-item"><a href="/">Affiliation</a></li>
        <li className="mainnavbar-item"><a href="/">Student Corner</a></li>
        <li className="mainnavbar-item"><a href="/">Research</a></li>
        <li className="mainnavbar-item"><a href="/">IQAC</a></li>
        <li className="mainnavbar-item"><a href="/">More</a></li>
        <li className="mainnavbar-item"><a href="/">Get In Touch</a></li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
