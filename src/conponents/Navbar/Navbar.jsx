import React from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = ({ OnToggle, cheak, setcheak }) => {
  const toggle = () => {
    setcheak(!cheak);
    OnToggle();
  };
  return (
    <nav>
      <div className="container">
        <div id="full">
          <div className="Hamburger">
            <input
              id="checkbox"
              type="checkbox"
              onChange={toggle}
              value={cheak}
            />
            <label className="toggle" htmlFor="checkbox">
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
          </div>
          <div className="logo" onClick={OnToggle}>
            Logo
          </div>
        </div>
        <div className="sideLogo">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contect me</li>
            <li>About Me</li>
          </ul>
        {/* <DarkMode /> */}
        
<button>
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Submit</span>
</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
