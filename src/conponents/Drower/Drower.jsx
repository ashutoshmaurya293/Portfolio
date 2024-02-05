import React from "react";
import styled from "styled-components";
const Drawer = ({ toggle, OnToggle }) => {
  return (
    <>
      {toggle && <Backdrop />}
      <SDrawer toggle={toggle}></SDrawer>
    </>
  );
};

export default Drawer;

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.toggle ? "0" : "-100%")});
`;
