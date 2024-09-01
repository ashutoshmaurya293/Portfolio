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
              checked={cheak}
              onClick={OnToggle}
            />
            <label className="toggle" htmlFor="checkbox" >
             
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
          </div>
          <div className="logo">
            Logo
          </div>
        </div>
        <div className="sideLogo">
          <ul>
            <a href="#profile">

            <li>Profile</li>
            </a>
            <a href="#aboutme">
              
            <li>About Me</li>
            </a>
            
            <a href="#projects">  <li>Projects</li></a>
          <a href="https://wa.me/8739003666" target="_blank">
            <li>Contect me</li>
          </a>
          </ul>
          {/* <DarkMode /> */}
          <a href="mailto:ashutoshmaurya079@gmail.com">
            <button>
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Email</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
