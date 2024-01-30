import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <div className="container">
      <div className="logo">Logo</div>
      <div className="sideLogo">
        <ul>
          <li>Projects</li>
          <li>Contect me</li>
          <li>About Me</li>
          <li>something</li>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
