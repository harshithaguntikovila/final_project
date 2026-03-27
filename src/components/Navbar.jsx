import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="TaskFlow Logo" className="logo" />
        <h2>TaskFlow Portal</h2>
      </div>
      

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/workflow/Todo">Todo</Link>
        <Link to="/workflow/In Progress">In Progress</Link>
        <Link to="/workflow/Done">Done</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;