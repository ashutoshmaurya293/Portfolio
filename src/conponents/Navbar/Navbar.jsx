import React from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
    <div id="full">
    <div className="Hamburger">
      <input id="checkbox" type="checkbox"/>
    <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
    </label>
      </div>
        <div className="logo">Logo</div>
    </div>
        <div className="sideLogo">
          <ul>
            <li>Projects</li>
            <li>Contect me</li>
            <li>About Me</li>
            <li>something</li>
          </ul>
        </div>
          <DarkMode/>
      </div>
    </nav>
  );
};

export default Navbar;
