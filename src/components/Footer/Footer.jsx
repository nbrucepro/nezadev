import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter"
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>nezabruce@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/bruce.bin/">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://twitter.com/Bruce00250">
          <Twitter color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/NezaBruce">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
