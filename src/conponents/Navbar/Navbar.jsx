import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
      <input id="checkbox" type="checkbox"/>
    <label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
    </label>
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
