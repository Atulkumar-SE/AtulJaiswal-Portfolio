import React from "react";
import "./Home.css";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { IoMdHand } from "react-icons/io";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import UserImage from "../../Images/atul imgage.png";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Development", "UI/UX", "Designing"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
    delaySpeed: 1270,
  });
  return (
    <div className="homeContainer">
      <div className="Hleft">
        <p>
          Hi,&nbsp;
          <IoMdHand className="Hand" />
          &nbsp;I'm &nbsp;<span className="Name">Atul Kumar</span>
        </p>

        {/* ----------Typewriter Effect ------------ */}
        <div className="changingText">
          <span className="normarFont">I am into</span>
          <span className="typewriterFont">
            {text}
            <Cursor />
          </span>
        </div>
        <div className="About_Para">
          <p>
            Crafting immersive web experiences through innovative design and
            cutting-edge coding, translating concepts into engaging online
            platforms that leave a lasting impact.
          </p>
          <a href="Atul kumar (resume).pdf" download="Atul Kumar Resume">
            <button>Download CV</button>
          </a>
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
      <div className="Hright">
        <div className="ImgContainer ">
          <div className="design1"> </div>

          <div className="design1"></div>

          <img src={UserImage} alt="UserImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
