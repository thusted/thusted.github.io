import React from "react";

//Import css
import "./style.css";

//Import Resume
import Resume from "../../images/web_development.pdf";

function Footer() {
  return(
    <footer className="page-footer">
      <div id="footerContainer" className="row">
        <a href="https://github.com/thusted">GitHub</a>
        <a href="https://www.linkedin.com/in/tiana-husted-395057163/">LinkedIn</a>
        <a href={Resume}>Resume</a>
      </div>
    </footer>
  );
};

export default Footer;

