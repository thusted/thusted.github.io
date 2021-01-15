import React, { useEffect } from "react";

//Import css
import M from "materialize-css";

//Import css
import "./style.css";

//Import images
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";

function Footer() {
  useEffect(() => {
    M.AutoInit();
  })

  const composeEmail = (e) => {
    e.preventDefault();
    let body = document.getElementById("msgInput").value;
    const msg = `${body}`;
    window.open(`mailto:tiana.husted@gmail.com?body=${msg}`);
    document.getElementById("mail").reset();
  };

  return(
    <footer className="page-footer">
      <div id="footerContainer" className="row">
        {/* <a href="https://github.com/thusted">GitHub</a>
        <a href="https://www.linkedin.com/in/tiana-husted-395057163/">LinkedIn</a>
        <a href={Resume}>Resume</a> */}
        <div class="col s12 m12 l8">
          <h7>FILL OUT THE FORM TO SEND ME AN EMAIL</h7>
          <div class="card body" id="contactCard">
            <form id="mail">
              <div class="form-group">
                <label for="msgInput">Don't Be Shy, Come Say Hi!</label>
                <textarea type="text" class="form-control" id="msgInput" rows="5"></textarea>
              </div>
              <br/>
              <button class="btn waves-effect" type="submit" name="action" onClick={composeEmail}>COMPOSE
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>

        <div class="col s12 m12 l4">
          <div class="pagesContainer">
            <div class="col s12 m4 l4">
              <h7 class="contactIconTitles">GITHUB</h7>
              <br/>
              <a href="https://github.com/thusted">
                <img className="hoverable" id="github" src={Github} alt="githubImg"/>
              </a>
            </div>

            <div class="col s12 m4 l4">
              <h7 class="contactIconTitles">LINKEDIN</h7>
              <br/>
              <a href="https://www.linkedin.com/in/tiana-husted-395057163/">
                <img className="hoverable" id="linkedin" src={Linkedin} alt="linkedImg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

