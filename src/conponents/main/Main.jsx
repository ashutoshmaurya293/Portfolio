import React from "react";
import "./Main.css";
import { motion } from "framer-motion";
import img1 from "../../Images/img4.jpg";
import img2 from "../../Images/develpoer.jpg";
import HireMe from "../HireMe/HireMe";
import { FaArrowRight } from "react-icons/fa";
import ProjectObj from "../halper/ProjectObj";
import ProjectCart from "../../projectCart/ProjectCart";

const Main = () => {
  // console.log(ProjectObj);
  ProjectObj.map((e)=>{
    console.log(e)
  })
  return (
    <>
      <div className="full">
        <motion.div
          className="main"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="content">
            <p className="hii">Hi, I Am</p>
            <h2>Ashutosh Maurya</h2>
            <p className="buttom">A Front End Developer</p>
            <HireMe />
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
        >
          <img src={img1} alt="" />
        </motion.div>
      </div>
      <motion.div
        className="abouth"
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 10,
        }}
      >
        <h2>About Me</h2>
        <FaArrowRight className="icona" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="animated-div"
      >
        <div className="aboutImg">
          <img src={img2} alt="" />
        </div>
        <div className="aboutContent">
          <p>
            I'm a front-end developer skilled in HTML, CSS, JavaScript, Git,
            GitHub, React.js, Redux Toolkit, and Tailwind CSS. I love making
            websites that work well on all devices. Check out my projects on
            GitHub to see what I've done. Let's work together to make your
            website awesome!
          </p>
        </div>
      </motion.div>
      <motion.div
        className="abouth"
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 10,
        }}
      >
        <h2>Project</h2>
        <FaArrowRight className="icona" />
      </motion.div>
      <div className="project">
        {
          ProjectObj.map((e)=>(
            <ProjectCart name={e.name} key={e.name} github = {e.github} live = {e.live} dogs = {e.dogs}/>
          ))
        }
      </div>
    </>
  );
};

export default Main;
