import React from "react";
import "./Home.css";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaUserCircle,
} from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { IoMdHand } from "react-icons/io";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Development", "UI/UX", "Designing"],
    loop: {},
    typeSpeed:120,
    deleteSpeed:20,
    delaySpeed:1270,
  });
  return (
    <div className="homeContainer">
      <div className="hiText">
        <p>
          Hi <IoMdHand className="Hand"/>, I'm <b>Atul Kumar</b>
        </p>
      </div>
      <div className="userIcon">
        <FaUserCircle />
      </div>
      {/* ----------Typewriter Effect ------------ */}
      <div className="changingText">
    
        <span className="normarFont">
        I am into {''}
        </span>
        <span className="typewriterFont">
          { text }
          <Cursor />
        </span>
      </div>
      <div className="socialIcons">
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaTelegramPlane />
        </span>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaBehance />
        </span>
        <span>
          <VscGithub />
        </span>
      </div>
    </div>
  );
};

export default Home;
