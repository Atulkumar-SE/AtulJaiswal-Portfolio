import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { RiDoubleQuotesL } from "react-icons/ri";
import emoji from "../../Images/emoji.png"
import menlaptop from "../../Images/manlaptop.png"

const Footer = () => {
  return (
    <div className="F_container">
      <div className="quote">
        <span>
          <RiDoubleQuotesL/>
        </span>
        <p>
          Develop a passion for learning. If you do, you will never cease to
          grow.
        </p>
      </div>
      <div className="form_container">
        <div className="F_image">
         <img src={emoji} className="Emoji" alt="emoji" />
         <img src={menlaptop} className="menlaptop" alt="menlaptop" />
        </div>
        <div className="Form">
          <h1>Get in Touch</h1>
          <form action="">
            <div>
              <input
                type="text"
                name="user"
                id="user"
                placeholder="your name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email address"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Type your message"
              ></textarea>
              
            </div>
            <button type="button">Send</button>
          </form>
        </div>
      </div>
      <div className="socialIcon">
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <FaInstagram />
        </span>

        <span>
          <FaFacebookF />
        </span>
        <span>
          <VscGithub />
        </span>
      </div>
    </div>
  );
};

export default Footer;
