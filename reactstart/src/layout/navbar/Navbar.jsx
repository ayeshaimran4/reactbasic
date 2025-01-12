import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="head">POSTS</h3>
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;