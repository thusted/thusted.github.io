import React from "react";

//Import css
import "./style.css";

//Import images
import Logo from "../../images/logo512.png";

function Footer() {
  return(
    <footer className="page-footer">
      <div id="footerContainer">
        <img src={Logo} alt="reactLogo" id="reactLogo"/>
        <p className="footerText">Made With React</p>
      </div>
    </footer>
  );
};

export default Footer;

