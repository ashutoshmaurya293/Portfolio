import React from "react";
import "./Main.css";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="full">
      <motion.div
        className="main"
        initial={{x: "-100%",  opacity: 0, }}
        animate={{x: 0,opacity: 1,}}
        transition={{duration: 1,ease: "easeInOut",}}>
          <div className="content">
            <p className="hii">Hi, I Am</p>
          <h2>
            Ashutosh Maurya
          </h2>
          <p className="buttom">A Front End Developer</p>
          </div>
        </motion.div>
      <motion.div
        className="second"
        initial={{
          x: "100%",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  );
};

export default Main;
