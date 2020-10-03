import React, { Component } from "react";

//Import css
import M from "materialize-css";
import "./pageStyle.css";

//Import images
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import ResumeIcon from "../images/resumeIcon.png";
import Resume from "../images/web_development.pdf";

//Import components
import Header from "../components/Header";

class Contact extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  composeEmail(e) {
    e.preventDefault();
    let name = document.getElementById("nameInput").value;
    let subject = document.getElementById("subjectInput").value;
    let body = document.getElementById("msgInput").value;
    const msg = `${body}%0d%0a%0d%0aRegards, ${name}`;
    window.open(`mailto:tiana.husted@gmail.com?subject=${subject}&body=${msg}`);
    document.getElementById("mail").reset();
  }

  render() {
    return (
      <div>
        <Header title="CONTACT" subtitle="I'M ALWAYS INTERESTED IN COLLABORATING AND TALKING ABOUT TECH"/>
        <br/><br/>

        <div class="row">
          <div class="col s12 m12 l6">
            <h7>FILL OUT THE FORM TO SEND ME AN EMAIL</h7>
            <div class="card body" id="contactCard">
              <form id="mail">
                <div class="form-group">
                  <label for="nameInput">Name:</label>
                  <input type="text" class="form-control" id="nameInput" placeholder="First & Last Name"/>
                </div>
                <br/>
                <div class="form-group">
                  <label for="subjectInput">Subject:</label>
                  <input type="text" class="form-control" id="subjectInput" placeholder="Hello!"/>
                </div>
                <br/>
                <div class="form-group">
                  <label for="msgInput">Message:</label>
                  <textarea type="text" class="form-control" id="msgInput" rows="5"></textarea>
                </div>
                <br/>
                <button class="btn waves-effect" type="submit" name="action" onClick={this.composeEmail}>COMPOSE
                  <i class="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>

          <div class="col s12 m12 l6">
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

              <div class="col s12 m4 l4">
                <h7 class="contactIconTitles">RESUME</h7>
                <br/>
                <a href={Resume}>
                  <img className="hoverable" id="resume" src={ResumeIcon} alt="resumeImg"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
