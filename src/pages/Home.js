import React, {Component} from "react";
import M from "materialize-css";

//Import css
import "./pageStyle.css";

//Import images
import Dollhouse1 from "../images/dollhouse1.jpg";
import Me from "../images/me.png";
import Dollhouse2 from "../images/dollhouse2.jpg";
import Alertify from "../images/alertify.png";
import DollhouseBack from "../images/dollhouseBack.jpeg";
import Dollhouse3 from "../images/dollhouse3.jpg";

//Import components
import Header from "../components/Header";
import Project from "../components/Project";

class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <Header title="TIANA HUSTED" subtitle="FULL STACK WEB DEVELOPER • TECH-BASED ARTIST"/>
        <br/>

        <div id="index-banner" class="parallax-container">
          <div class="parallax"><img src={Dollhouse1} alt="Unsplashed background img 1"/></div>
        </div>

        <div class="container">
          <div class="section">
            <div class="row">
              <div class="col s12 center">
                <h3><i class="mdi-content-send brown-text"></i></h3>
                <h4>ABOUT</h4>
                <div class="row">
                  <div class="col s12 m8 l8">
                    <p class="left-align light">Web developer with a background in tech-based art and a passion for learning new technologies. Certificate from University of Oregon Coding Bootcamp in full stack web development with newly acquired skills in JavaScript, CSS, HTML, Node.js, and databases. Extensive experience with custom interface design for interactive art installations, utilizing microprocessors and sensors. Through the creation of immersive art environments, I have developed a keen sense for anticipating different ways a user might interact with various interfaces. I am committed to approaching any project with innovation and creativity.</p>
                  </div>
                  <div class="col s12 m4 l4">
                    <img id="me" src={Me} alt="me"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-container valign-wrapper">
          <div class="parallax"><img src={Dollhouse2} alt="Unsplashed background img 2"/></div>
        </div>

        <div class="container">
          <div class="section">
            <Header title="FEATURED PROJECTS"/>
            <br/>
            
            <div class="row">
              <div class="col s12 m6 l6">
                <div class="card">
                  <div class="card-image">
                    <img src={Alertify} alt="cardImage"/>
                  </div>
                  <div class="card-content">
                    <p><b>Alertify</b> is an application that can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker.</p>
                  </div>
                  <div class="card-action">
                    <a href="../projects/alertify.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
              <div class="col s12 m6 l6">
                <div class="card">
                  <div class="card-image">
                    <img src={DollhouseBack} alt="cardImage"/>
                  </div>
                  <div class="card-content">
                    <p>Modeled after a turn of the century Victorian home, <b>"The Dollhouse"</b> was a piece comissioned for and featured at Burning Man 2019.</p>
                  </div>
                  <div class="card-action">
                    <a href="./assets/projects/dollhouse.html">VIEW PROJECT</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-container valign-wrapper">
          <div class="parallax"><img src={Dollhouse3} alt="Unsplashed background img 3"/></div>
        </div>
      </div>
    );
  };
}

export default Home;
