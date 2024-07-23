import React from 'react';
import logo from '../assets/images/logo.png'; // Ensure this path is correct
import './Header.css';
import SearchBar from './SearchBar'; // Import the SearchBar component

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="DBATU Logo" className="header-logo" />
        <div className="header-content">
          <h1>Dr. Babasaheb Ambedkar Technological University</h1>
          <h3>डॉ. बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ</h3>
          <h4>Lonere-402103 Tal- Mangaon, Dist- Raigad (M.S.) India.</h4>
        </div>
      </div>
      <div className="header-right">
        <SearchBar /> {/* Use the SearchBar component here */}
      </div>
    </header>
  );
}

export default Header;
