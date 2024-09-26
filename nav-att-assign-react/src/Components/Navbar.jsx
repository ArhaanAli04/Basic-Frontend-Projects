// src/Components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar"> {/* Apply CSS to the navbar */}
      <ul className="navbar-links"> {/* CSS targets ul elements */}
        <li>
          <Link to="/home">Home</Link> {/* Link component for navigation */}
        </li>
        <li>
          <Link to="/attendance">Attendance</Link>
        </li>
        <li>
          <Link to="/assignment">Assignment</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
