import React, { Component } from "react";
import M from "materialize-css";
import "./pageStyle.css";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import ResumeIcon from "../images/resumeIcon.png";
import Resume from "../images/web_development.pdf";


class Contact extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <div id="name-container">
          <h4>CONTACT</h4>
          <h6>I'M ALWAYS INTERESTED IN COLLABORATING AND TALKING ABOUT TECH</h6>
        </div>
        <br/>
        <br/>

        <div class="row">
          <div class="col s12 m12 l6">
            <h7>FILL OUT THE FORM TO SEND ME AN EMAIL</h7>
            <div class="card body" id="contactCard">
              <form class="mail">
                <div class="form-group">
                  <label for="nameInput">Name:</label>
                  <input type="text" class="form-control" id="nameInput" placeholder="First & Last Name"/>
                </div>
                <br/>
                <div class="form-group">
                  <label for="msgInput">Message:</label>
                  <textarea type="text" class="form-control" id="msgInput" rows="5"></textarea>
                </div>
                <br/>
                <input class="btn btn-primary" id="emailSubmit" type="submit" value="Compose"/>
              </form>
            </div>
          </div>

          <div class="col s12 m12 l6">
            <div class="pagesContainer">
              <div class="col s12 m4 l4">
                <h7 class="contactIconTitles">GITHUB</h7>
                <br/>
                <a href="https://github.com/thusted">
                  <img id="github" src={Github} alt="githubImg"/>
                </a>
              </div>

              <div class="col s12 m4 l4">
                <h7 class="contactIconTitles">LINKEDIN</h7>
                <br/>
                <a href="https://www.linkedin.com/in/tiana-husted-395057163/">
                  <img id="linkedin" src={Linkedin} alt="linkedImg"/>
                </a>
              </div>

              <div class="col s12 m4 l4">
                <h7 class="contactIconTitles">RESUME</h7>
                <br/>
                <a href={Resume}>
                  <img id="resume" src={ResumeIcon} alt="resumeImg"/>
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
