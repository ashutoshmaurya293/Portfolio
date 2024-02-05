import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Drower from "../Drower/Drower";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [cheak, setcheak] = useState(true);
  const OnToggle = () => {
    setToggle(!toggle);
    setcheak(!cheak);
  };
  return (
    <div>
     <Drower toggle={toggle} OnToggle={OnToggle} />
      <Navbar OnToggle={OnToggle} cheak={cheak} setcheak={setcheak} />
    </div>
  );
};

export default Header;
