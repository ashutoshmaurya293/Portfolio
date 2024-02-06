import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Drower from "../Drower/Drower";
import "./Header.css"

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [cheak, setcheak] = useState(true);
  const OnToggle = () => {
    setToggle(!toggle);
    setcheak(!cheak);
  };
  return (
    <div className="fullNav">
     <Drower toggle={toggle} OnToggle={OnToggle} />
      <Navbar OnToggle={OnToggle} cheak={cheak} setcheak={setcheak} />
    </div>
  );
};

export default Header;
