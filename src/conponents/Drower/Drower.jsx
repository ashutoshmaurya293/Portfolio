import React from "react";
import styled from "styled-components";
const Drawer = ({ toggle, OnToggle }) => {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
  return (
    <>
      {toggle && <Backdrop onClick={OnToggle}/>}
      <SDrawer toggle={toggle} >
        <List>
          <ul onClick={OnToggle}>
            <li>
              Home
              {svg}
            </li>
            <hr />
            <li>
              Projects
              {svg}
            </li>
            <hr />
            <li>
              Contect me
              {svg}
            </li>
            <hr />
            <li>
              About Me
              {svg}
            </li>
            <hr />
          </ul>
        </List>
      </SDrawer>
    </>
  );
};

export default Drawer;

const List = styled.div`
  position: absolute;
  top: 90px;
  left: 35px;

  ul {
    width: 160px;
    /* background-color: red; */
  }
  li svg {
    height: 19px;
  }
  ul > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 2rem;
    font-size: 2.2rem;
    width: 100%;
    background-color: #6f07f6;
    color: #fff;
    &:hover {
      background-color: #00000036;
      color: #fff;
    }
  }
`;
const Backdrop = styled.div`
  height: 100vh;
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
  transition: 0.3s ease;
  background-color: #6f07f6;
  color: #fff;

  transform: translateX(${(props) => (props.toggle ? "0" : "-100%")});
`;
